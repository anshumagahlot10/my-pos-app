import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

interface ProductGridProps {
  products: Product[];
  selectedCategory: string | null;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, selectedCategory }) => {
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 
                 gap-3 p-4 max-h-[calc(100vh-120px)] overflow-y-auto  pb-33"
    >
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          category={product.category}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
