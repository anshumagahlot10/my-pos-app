import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface ProductCardProps {
  name: string;
  category: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, category, price, image }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="bg-white shadow-md p-3 rounded-lg border border-gray-200 
                    flex flex-col items-center justify-between w-full min-h-[250px] 
                    sm:min-h-[280px] md:min-h-[300px] lg:min-h-[320px]">
      {/* Image */}
      <div className="bg-gray-100 p-2 rounded-lg w-full flex justify-center">
        <img
          src={image}
          alt={name}
          className="w-full max-h-28 object-contain"
          onError={(e) => (e.currentTarget.src = "src/assets/react.svg")}
        />
      </div>

      {/* Category */}
      <p className="text-gray-500 mt-2 text-sm">{category}</p>

      {/* Product Name */}
      <h3 className="text-md font-semibold text-gray-800 text-center">{name}</h3>

      {/* Price */}
      <p className="text-black font-bold text-lg mt-1">${price}</p>

      {/* Quantity Selector */}
      <div className="flex items-center justify-center mt-2 border-t border-gray-300 pt-2 w-full">
        <button
          onClick={() => setQuantity((prev) => Math.max(prev - 1, 0))}
          className="border rounded-md p-1 px-2 text-gray-700"
        >
          <FaMinus size={12} />
        </button>
        <span className="mx-3 text-gray-900">{quantity}</span>
        <button
          onClick={() => setQuantity((prev) => prev + 1)}
          className="border rounded-md p-1 px-2 text-gray-700"
        >
          <FaPlus size={12} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
