import { useEffect, useState } from "react";

export default function Positions({ setStock, setScreenStocks }) {
  const [positions, setPositions] = useState([]);
  const API_KEY = "NTyzg4KF2t4lUK24kVt7UKA4jzuGkMzO";

  useEffect(() => {
    fetch(`https://financialmodelingprep.com/api/v3/quote/ITC,SBI,ICICIBANK?apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        const enriched = data.map((stock) => ({
          ...stock,
          qty: Math.floor(Math.random() * 100 + 1),
          pnl: (Math.random() * 1000 - 500).toFixed(2),
        }));
        setPositions(enriched);
        setScreenStocks(enriched);
      });
  }, [setScreenStocks]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Positions</h2>
      {positions.map((pos) => (
        <div
          key={pos.symbol}
          className="border p-2 rounded mb-2 bg-white cursor-pointer hover:bg-gray-100"
          onClick={() => setStock(pos.symbol)}
        >
          {pos.name} ({pos.symbol}) — Qty: {pos.qty}, PNL: ₹{pos.pnl}
        </div>
      ))}
    </div>
  );
}
