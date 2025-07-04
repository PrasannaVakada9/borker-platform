export default function OrderPad({ type, stock, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div
        className={`w-80 p-6 rounded-lg shadow-xl ${
          type === "buy" ? "bg-green-100" : "bg-red-100"
        }`}
      >
        <h2 className="text-xl font-bold mb-2">
          {type.toUpperCase()} {stock}
        </h2>
        <input
          type="number"
          placeholder="Quantity"
          className="w-full border p-2 rounded mb-4"
        />
        <button
          onClick={onClose}
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
