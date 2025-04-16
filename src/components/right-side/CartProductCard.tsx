import { Minus, Plus, Trash2, Pencil } from "lucide-react";
import { FaRegEdit } from "react-icons/fa";

export default function CartProductCard() {
  return (
    <div className="flex items-center gap-2 p-2 border border-gray-300 rounded-lg shadow-sm bg-white w-full mx-auto">
      {/* Product Image */}
      <img
        src="src/assets/react.svg" // Replace with actual image URL
        alt="Product"
        className="w-14 h-14 sm:w-18 sm:h-20 rounded object-cover p-0.75 py-2.5 bg-gray-50"
      />

      {/* Product Info */}
      <div className="flex flex-col flex-grow min-w-0">
        <span className="bg-orange-400 text-white px-1 py-0.5 pt-0.75 text-xs rounded-sm w-fit font-semibold mb-1">
          PT0005
        </span>
        <h2 className="text-sm font-semibold truncate mb-1">SWAGME</h2>
        <span className="text-green-600 text-sm font-bold">$6587</span>
      </div>

      {/* Quantity & Actions (Fixed Issues) */}
      <div className="flex items-center gap-8">
        {/* Quantity Buttons (Minus & Plus) */}
        <div className="flex items-center gap-1">
          <button className="p-0 border border-gray-500 rounded-full hover:bg-gray-300 text-gray-800">
            <Minus size={11} />
          </button>
          <span className="text-sm text-gray-800 font-medium">1</span>
          <button className="p-0 border border-gray-500 rounded-full hover:bg-gray-300 text-gray-800">
            <Plus size={11} />
          </button>
        </div>

        {/* Action Buttons (Edit & Delete) */}
        <div className="flex items-center gap-1 mr-0.5">
          <button className="p-1.5 border border-gray-300 rounded-lg hover:bg-gray-300 text-gray-800 ">
            <FaRegEdit size={14} />
          </button>
          <button className="p-1.5 border border-gray-300 rounded-lg hover:bg-red-700 hover:text-white text-gray-800">
            <Trash2 size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
