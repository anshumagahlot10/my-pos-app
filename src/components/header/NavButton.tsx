import { Globe } from "lucide-react";

const NavButton = () => {
  return (
    <button className="flex items-center gap-1 px-2 py-1 rounded bg-secondary text-white text-sm font-medium h-7">
      <Globe className="w-4 h-4 text-white" />
      <span className="hidden sm:inline text-xs font-medium text-white">Dashboard</span>
    </button>
  );
};

export default NavButton;
