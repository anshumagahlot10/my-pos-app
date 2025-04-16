import CartProductCard from "./CartProductCard"; // Import the CartProductCard component
import "./CartProductList.css"; // Import custom scrollbar styles

export default function CartProductList() {
  return (
    <div className="w-full max-h-[250px] overflow-y-auto border border-gray-200 rounded-lg bg-gray-100 p-1 custom-scrollbar">
      {/* List of CartProductCard components with spacing */}
      {[1, 2, 3, 4, 5].map((_, index) => (
        <div key={index} className="mb-3 last:mb-0">
          <CartProductCard />
        </div>
      ))}
    </div>
  );
}
