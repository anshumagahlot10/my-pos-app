import { MdDeleteForever } from "react-icons/md";

export default function OrderDetailCard({
  title = "Order List",
  transactionId = "#65565",
  onDelete,
}: {
  title?: string;
  transactionId?: string;
  onDelete?: () => void;
}) {
  return (
    <div className="flex justify-between items-center p-2 px-2 bg-gray-50 rounded-md w-full">
      {/* Left Side - Title & Transaction ID */}
      <div>
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="text-gray-500 text-sm font-medium">
          Transaction ID: <span className="font-medium">{transactionId}</span>
        </p>
      </div>

      {/* Right Side - Delete Icon */}
      <button onClick={onDelete} className="text-red-500 hover:text-red-700 transition">
        <MdDeleteForever size={18} />
      </button>
    </div>
  );
}
