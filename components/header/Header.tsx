import LogoWithClock from "./LogoWithClock";
import ActionIcons from "./ActionsIcons";
import NavButton from "./NavButton";
import { MoreVertical } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white shadow-md py-2 px-4">
      <LogoWithClock />

      {/* Show the nav button and action icons on larger screens */}
      <div className="hidden sm:flex items-center gap-3">
        <NavButton />
        <div className="border-l border-gray-300 pl-3">
          <ActionIcons />
        </div>
      </div>

      {/* Show three-dot icon on small screens */}
      <div className="sm:hidden">
        <MoreVertical className="w-6 h-6 text-gray-700" />
      </div>
    </header>
  );
};

export default Header;
