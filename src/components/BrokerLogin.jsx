import { useState } from "react";

const brokers = ["Zerodha", "Upstox", "Angel", "Groww"];

export default function BrokerLogin({ onLoginSuccess }) {
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(null);

  const handleLogin = () => {
    const mockResponse = [200, 400, 500][Math.floor(Math.random() * 3)];
    if (mockResponse === 200) {
      onLoginSuccess();
    } else if (mockResponse === 400) {
      setError("Invalid credentials. Please try again.");
    } else {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Select Broker</h1>
      <div className="flex gap-4 mb-4">
        {brokers.map((broker) => (
          <button
            key={broker}
            onClick={() => setSelected(broker)}
            className={`px-4 py-2 border rounded ${
              selected === broker ? "bg-blue-500 text-white" : "bg-white"
            }`}
          >
            {broker}
          </button>
        ))}
      </div>
      {selected && (
        <button
          onClick={handleLogin}
          className="bg-green-600 text-white px-6 py-2 rounded"
        >
          Login with {selected}
        </button>
      )}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}