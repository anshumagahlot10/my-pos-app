import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Star, Store } from "lucide-react";
import SearchInput from "./SearchInput";
import { Inventory } from "../types/inventory";

interface InventoryGridProps {
  inventories: Inventory[];
}

const InventoryGrid: React.FC<InventoryGridProps> = ({ inventories = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div>
        {/* Header Section */}
        <div className="flex flex-wrap items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-primary">Welcome, Wesley Adrian</h2>
            <p className="text-sm text-secondary">{currentDate}</p>
          </div>

          {/* Search and Buttons */}
          <div className="flex gap-2">
            <SearchInput
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              placeholder="Search Product"
            />

            <button className="flex items-center gap-1 px-2 py-1 h-7 rounded bg-secondary text-white text-xs font-medium hover:bg-secondary-hover">
              <Store className="w-4 h-4 text-white" />
              <span className="hidden sm:inline text-xs font-medium text-white">View All Brands</span>
            </button>

            <button className="flex items-center gap-1 px-2 py-1 h-7 rounded bg-primary text-white text-xs font-medium hover:bg-primary-hover">
              <Star className="w-4 h-4 text-white" />
              <span className="hidden sm:inline text-xs font-medium text-white">Featured</span>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-2 max-h-[calc(100vh-120px)] overflow-y-auto pb-[33px]">
          {inventories.map((inventory) => (
            <ProductCard
            key={inventory.id}
            productName={inventory.productName}
            unitPrice={inventory.unitPrice}
            quantity={inventory.quantity}
          />
          
          ))}
        </div>
      </div>
    </>
  );
};

export default InventoryGrid;
