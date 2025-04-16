import { useState } from "react";
import { IoWalletOutline } from "react-icons/io5";

export default function ButtonCard() {
  const [selected, setSelected] = useState(false);

  return (
    <button
      onClick={() => setSelected(!selected)}
      className={`group flex flex-col items-center justify-center w-40 h-24 border rounded-lg shadow-sm bg-white 
        transition-all duration-200 ease-in-out
        ${selected ? "border-[#D35400] text-[#D35400]" : "border-gray-300 text-gray-700"}
        hover:border-[#EB984E] hover:text-[#EB984E]`}
    >
      {/* Icon transitions: color + size increase */}
      <IoWalletOutline 
        className={`text-3xl mb-2 transition-all duration-200 ease-in-out transform
        ${selected ? "text-[#D35400]" : "text-gray-700"}
        group-hover:text-[#EB984E] group-hover:scale-110`}
      />
      <span className="text-sm font-medium">Cash</span>
    </button>
  );
}
