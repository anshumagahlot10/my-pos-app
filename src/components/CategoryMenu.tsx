import { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import { ProductCategory } from "../types/productCategory";

interface CategoryMenuProps {
  categories: ProductCategory[];
  onCategorySelect: (categoryId: string | null) => void; // Pass selected category
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({ categories, onCategorySelect }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [selected, setSelected] = useState<string | null>("ALL");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCategoryClick = (categoryId: string | null) => {
    setSelected(categoryId);
    onCategorySelect(categoryId);
  };

  return (
    <div className={`p-4 ${isMobile ? "w-full overflow-x-auto flex gap-3" : "w-35 shadow-md h-[calc(100vh-4rem)] overflow-y-auto custom-scrollbar flex-shrink-0"}`}>
    
      {/* Dynamic Categories */}
      <div className={`${isMobile ? "flex gap-3" : "flex flex-col gap-3 mt-3"}`}>
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            name={category.name}
            isSelected={selected === category.id}
            onClick={() => handleCategoryClick(category.id ?? null)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
