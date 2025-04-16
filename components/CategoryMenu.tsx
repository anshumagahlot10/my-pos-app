import { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";

interface Category {
  id: number;
  name: string;
  icon: string;
}

interface CategoryMenuProps {
  categories: Category[];
  onCategorySelect: (category: string | null) => void;
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({ categories, onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile if width < 768px
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCategoryClick = (categoryId: number | null, categoryName: string | null) => {
    setSelectedCategory(categoryId);
    onCategorySelect(categoryName);
  };

  return (
    <div className={`p-4 ${isMobile ? "w-full overflow-x-auto flex gap-3" : "w-35 bg-white shadow-md h-[calc(100vh-4rem)] overflow-y-auto custom-scrollbar flex-shrink-0"}`}>
      {/* "All" Category */}
      <CategoryCard
        id={null}
        name="All"
        isSelected={selectedCategory === null}
        onSelect={() => handleCategoryClick(null, null)}
      />

      {/* Dynamic Categories */}
      <div className={`${isMobile ? "flex gap-3" : "flex flex-col gap-3 mt-3 w-10 h-10"}`}>
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            name={category.name}
            icon={category.icon}
            isSelected={selectedCategory === category.id}
            onSelect={() => handleCategoryClick(category.id, category.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
