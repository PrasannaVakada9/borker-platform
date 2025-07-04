import { useEffect, useState } from "react";

export default function Orderbook({ setStock, setScreenStocks }) {
  const [orders, setOrders] = useState([]);
  const API_KEY = "NTyzg4KF2t4lUK24kVt7UKA4jzuGkMzO";

  useEffect(() => {
    fetch(`https://financialmodelingprep.com/api/v3/quote/INFY,RELIANCE,TCS?apikey=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        const enriched = data.map(stock => ({
          ...stock,
          side: Math.random() > 0.5 ? "Buy" : "Sell",
          qty: Math.floor(Math.random() * 100 + 1),
        }));
        setOrders(enriched);
        setScreenStocks(enriched);
      });
  }, [setScreenStocks]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Orderbook</h2>
      {orders.map((order) => (
        <div
          key={order.symbol}
          className={`border p-2 rounded mb-2 ${
            order.side === "Buy" ? "bg-green-100" : "bg-red-100"
          }`}
          onClick={() => setStock(order.symbol)}
        >
          {order.side} {order.name} ({order.symbol}) — Qty: {order.qty}
        </div>
      ))}
    </div>
  );
}
