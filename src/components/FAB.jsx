import { useState } from "react";

export default function FAB({ onAction, stocks = [] }) {
  const [open, setOpen] = useState(false);
  const firstStock = stocks?.[0]?.symbol || "AAPL";

  return (
    <div className="fixed bottom-16 right-6">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg"
      >
        +
      </button>
      {open && (
        <div className="flex flex-col items-end space-y-2 mt-2">
          <button
            className="bg-green-500 text-white px-4 py-1 rounded"
            onClick={() => onAction("buy", firstStock)}
          >
            Buy
          </button>
          <button
            className="bg-red-500 text-white px-4 py-1 rounded"
            onClick={() => onAction("sell", firstStock)}
          >
            Sell
          </button>
        </div>
      )}
    </div>
  );
}
