import React from "react";
import { Search } from "lucide-react";

interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  placeholder: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  searchTerm,
  setSearchTerm,
 placeholder
}) => {
  return (
    <div className="relative flex items-center">
      <Search className="absolute left-2 w-4 h-4 text-gray-400" />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-white pl-8 pr-2 py-1 border border-gray-300 rounded-md text-sm text-primary 
                   placeholder:text-xs focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
