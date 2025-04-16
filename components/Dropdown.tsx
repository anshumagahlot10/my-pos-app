import { useState } from "react";

interface DropdownProps {
  options: string[];
  className?: string; // Allows custom styling (e.g., full width)
}

export default function Dropdown({ options, className = "w-64" }: DropdownProps) {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className={`relative ${className}`}>
      <select
        className={`w-full p-2 border rounded-md appearance-none pr-8 bg-white transition-colors 
          ${selectedOption ? "border-gray-200" : "border-gray-200"} focus:outline-none text-[13.5px] pl-3.5 text-gray-800 py-2 `}
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="" disabled hidden>
          Select
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {/* Custom Dropdown Arrow */}
      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
        ⌄
      </div>
    </div>
  );
}
