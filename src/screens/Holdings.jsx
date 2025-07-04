import { useEffect, useState } from "react";

export default function Holdings({ setStock, setScreenStocks }) {
  const [data, setData] = useState([]);
  const API_KEY = "NTyzg4KF2t4lUK24kVt7UKA4jzuGkMzO";

  useEffect(() => {
    fetch(`https://financialmodelingprep.com/api/v3/quote/AAPL,MSFT,GOOG?apikey=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setScreenStocks(data);
      });
  }, [setScreenStocks]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Holdings</h2>
      {data.map((stock) => (
        <div
          key={stock.symbol}
          className="border p-2 rounded mb-2 bg-white cursor-pointer hover:bg-gray-100"
          onClick={() => setStock(stock.symbol)}
        >
          {stock.name} ({stock.symbol}) — ₹{stock.price}
        </div>
      ))}
    </div>
  );
}
