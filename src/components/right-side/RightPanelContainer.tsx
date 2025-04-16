import "./RightPanelContainer.css"; // Import the custom scrollbar styles

import Dropdown from "../../../components/Dropdown";
import IconButton from "../../../components/IconButton";
import { Settings } from "lucide-react";
import { FaUserPlus } from "react-icons/fa";
import OrderDetailCard from "./OrderDetailCard";
import CartProductList from "./CartProductList";
import BillingSummary from "./BillingSummary";


const RightPanelContainer = () => {
  return (
    <div className="w-106 bg-white shadow-md p-4 pl-7 pt-8 h-screen flex flex-col gap-4 overflow-y-auto custom-scrollbar">
      {/* Order Details */}
      <OrderDetailCard />

      {/* Customer Information */}
      <h2 className="text-lg font-semibold">Customer Information</h2>

      {/* Customer Dropdown with Icon Button */}
      <div className="flex items-center space-x-2">
        <Dropdown options={["Walk in Customer", "Registered Customer"]} className="flex-1" />
        <IconButton icon={<FaUserPlus size={18} />} className="bg-orange-400 text-white p-2 rounded-full w-9.5" />
      </div>

      {/* Product Search Dropdown (Full Width) */}
      <Dropdown options={["Search Products"]} className="w-full mt-[-7px]" />

      {/* Cart Product List with proper width and height */}
      <div className="w-full">
        <CartProductList />
      </div>

       {/* Order Tax, Shipping, Discount Section */}
       <div className="flex justify-between gap-4 p-2 border-b border-gray-300 pt-4">
        {/* Order Tax */}
        <div className="flex flex-col">
          <span className="text-sm font-medium">Order Tax</span>
          <Dropdown options={["Select", "5%", "10%", "15%"]} className="w-24" />
        </div>

        {/* Shipping */}
        <div className="flex flex-col">
          <span className="text-sm font-medium">Shipping</span>
          <Dropdown options={["0", "5", "10", "15"]} className="w-24" />
        </div>

        {/* Discount */}
        <div className="flex flex-col">
          <span className="text-sm font-medium">Discount</span>
          <Dropdown options={["0%", "5%", "10%", "15%"]} className="w-24" />
        </div>
      </div>

      <div className="w-full">
        <BillingSummary />
      </div>


      <div className="bg-white h-60 w-full p-4 m-4 border border-gray-300 shadow-md rounded-lg"></div>

      {/* Floating Action Button (Fixed at Bottom) */}
      <div className="fixed bottom-10 right-6">
        <IconButton icon={<Settings size={20} />} />
      </div>
    </div>
  );
};

export default RightPanelContainer;
