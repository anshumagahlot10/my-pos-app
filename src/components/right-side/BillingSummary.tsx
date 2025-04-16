export default function BillingSummary() {
    return (
      <div className="bg-gray-50 p-4 rounded-lg shadow-md w-full mx-auto max-w-4xl">
        {/* Subtotal */}
        <div className="flex justify-between text-gray-700 text-sm sm:text-base mb-3">
          <span>Sub Total</span>
          <span>$60,454</span>
        </div>
  
        {/* Tax */}
        <div className="flex justify-between text-gray-700 text-sm sm:text-base mb-3">
          <span>Tax (GST 5%)</span>
          <span>$40.21</span>
        </div>
  
        {/* Shipping */}
        <div className="flex justify-between text-gray-700 text-sm sm:text-base mb-3">
          <span>Shipping</span>
          <span>$40.21</span>
        </div>
  
        {/* Subtotal Again */}
        <div className="flex justify-between text-gray-700 text-sm sm:text-base mb-3">
          <span>Sub Total</span>
          <span>$60,454</span>
        </div>
  
        {/* Discount */}
        <div className="flex justify-between text-red-500 text-sm sm:text-base mb-4">
          <span>Discount (10%)</span>
          <span>$15.21</span>
        </div>
  
        {/* Divider */}
        <hr className="my-4 border-gray-300" />
  
        {/* Total */}
        <div className="flex justify-between font-bold text-lg sm:text-xl text-gray-900">
          <span>Total</span>
          <span>$64,024.5</span>
        </div>
      </div>
    );
  }
  