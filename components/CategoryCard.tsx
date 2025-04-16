interface CategoryCardProps {
  id: number | null;
  name: string;
  icon?: string;
  isSelected: boolean;
  onSelect: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, name, icon, isSelected, onSelect }) => {
  return (
    <button
      className={`flex flex-col items-center justify-center p-3 border rounded-lg transition 
        min-w-[77px] md:min-w-[92px] aspect-square 
        ${isSelected ? "border-orange-500 bg-orange-100" : "border-gray-300 bg-white"} 
        hover:shadow-md`}
      onClick={onSelect}
    >
      {/* Consistent Icon Size */}
      <div className="w-12 h-12 flex items-center justify-center">
        {icon ? (
          <img src={"src/assets/react.svg"} alt={name} className="w-full h-full object-contain" />
        ) : (
          <span className="text-2xl">🔲</span>
        )}
      </div>

      {/* Category Name */}
      <span className="text-xs font-semibold mt-1 text-center">{name}</span>
    </button>
  );
};

export default CategoryCard;
