import { 
  BadgeDollarSign, 
  BarChart, 
  Calculator, 
  Maximize, 
  Printer, 
  Settings 
} from "lucide-react";

const ActionIcons = () => {
  return (
    <div className="flex items-center gap-2">
      {[
        { icon: Calculator, label: "Calculator" },
        { icon: Maximize, label: "Full Screen" },
        { icon: Printer, label: "Print" },
        { icon: BarChart, label: "Analytics" },
        { icon: BadgeDollarSign, label: "Transactions" },
      ].map(({ icon: Icon, label }) => (
        <button
          key={label}
          className="group relative w-9 h-9 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 cursor-pointer"
        >
         <Icon className="w-4 h-4 text-black group-hover:text-[var(--color-primary)]" />

          <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 hidden group-hover:flex px-2 py-1 text-xs text-white bg-gray-800 rounded-md shadow-md z-10 whitespace-nowrap">
            {label}
          </span>
        </button>
      ))}

      {/* Last icon (Settings) - tooltip appears below */}
      <button className="group relative w-9 h-9 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 cursor-pointer">
        <Settings className="w-4 h-4 text-black group-hover:text-primary" />
        <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:flex px-2 py-1 text-xs text-white bg-gray-800 rounded-md shadow-md z-10">
          Settings
        </span>
      </button>

      {/* User Avatar */}
      <img src="/user.jpeg" alt="User" className="w-8 h-8 rounded-full" />
    </div>
  );
};

export default ActionIcons;
