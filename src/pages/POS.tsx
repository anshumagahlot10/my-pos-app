import { useState, useEffect } from "react";
import CategoryMenu from "../components/CategoryMenu";
import ProductGrid from "../components/InventoryGrid";
import { getProductCategoriesByCompanyId } from "../services/ProductService";
import { useAuth } from "../context/AuthContext";
import { ProductCategory } from "../types/productCategory";
import RightPanelContainer from "../components/right-side/RightPanelContainer";
import { Inventory } from "../types/inventory";
import { getInventoriesByCategory } from "../services/PosService";


const POS = () => {
  const { user } = useAuth();
  const companyId = user?.companyId;
  const locationId = localStorage.getItem("locationId");

  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [inventories, setInventories] = useState<Inventory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (companyId) {
      fetchCategories();
    }
  }, [companyId]);

  useEffect(() => {
    if (selectedCategory && companyId && locationId) {
      fetchInventories(selectedCategory, companyId, locationId);
    }
  }, [selectedCategory]);

  const fetchCategories = async () => {
    try {
      const response = await getProductCategoriesByCompanyId(companyId);
      setCategories(response.data || []);
    } catch (err) {
      console.error("Failed to load categories", err);
    }
  };

  const fetchInventories = async (
    categoryId: string,
    companyId: string,
    locationId: string
  ) => {
    setLoading(true);
  
    try {
      const response = await getInventoriesByCategory(categoryId, locationId, companyId);
      setInventories(response.data || []);

    } catch (err) {
      console.error("Error fetching inventories:", err);
  
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-grow bg-gray-50 w-full flex-col md:flex-row">
      {/* Sidebar (Category Menu) */}
      <aside className="w-full md:w-40 shadow-md flex-shrink-0 overflow-y-auto md:h-[calc(100vh-4rem)] custom-scrollbar">
        <CategoryMenu 
          categories={categories} 
          onCategorySelect={setSelectedCategory} 
        />
      </aside>

      {/* Main Content (Inventory Grid) */}
      <main className="flex-1 bg-gray-50 p-6 overflow-auto">
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {Array(10).fill(0).map((_, index) => (
              <div key={index} className="h-40 bg-gray-200 animate-pulse rounded-md"></div>
            ))}
          </div>
        ) : inventories.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64">
            <p className="text-gray-500">No inventories available for this category.</p>
          </div>
        ) : (
          <ProductGrid inventories={inventories} /> 
        )}
      </main>

      {/* Right Panel (Cart, Order, Customer Info) */}
      <aside className="w-106 shadow-md flex-shrink-0 bg-white md:h-[calc(100vh-4rem)] overflow-y-auto custom-scrollbar">
        <RightPanelContainer />
      </aside>
    </div>
  );
};

export default POS;
