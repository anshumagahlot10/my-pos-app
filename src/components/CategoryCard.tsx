interface CategoryCardProps {
  name: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-3 border rounded-lg transition min-w-[77px] md:min-w-[92px] aspect-square ${
        isSelected ? "bg-blue-500 text-white" : "bg-white"
      }`}
    >
      <div className="w-12 h-12 flex items-center justify-center">
        <img src={"src/assets/react.svg"} alt={name} className="w-full h-full object-contain" />
      </div>
      <span className="text-xs font-semibold mt-1 text-center">{name}</span>
    </button>
  );
};

export default CategoryCard;
