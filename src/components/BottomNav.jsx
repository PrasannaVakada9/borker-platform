export default function BottomNav({ active, setActive }) {
  return (
    <div className="fixed bottom-0 w-full flex justify-around bg-white border-t p-2">
      {["Holdings", "Orderbook", "Positions"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`text-sm ${active === tab ? "text-blue-600" : "text-gray-600"}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
