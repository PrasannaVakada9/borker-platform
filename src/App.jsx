import { useState } from "react";
import BrokerLogin from "./components/BrokerLogin";
import BottomNav from "./components/BottomNav";
import Holdings from "./screens/Holdings";
import Orderbook from "./screens/Orderbook";
import Positions from "./screens/Positions";
import OrderPad from "./components/OrderPad";
import FAB from "./components/FAB";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [screen, setScreen] = useState("Holdings");
  const [orderType, setOrderType] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);
  const [screenStocks, setScreenStocks] = useState([]);

  const handleLogin = () => setIsLoggedIn(true);

  const handleFABClick = (type, stock) => {
    setOrderType(type);
    setSelectedStock(stock);
  };

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {!isLoggedIn ? (
        <BrokerLogin onLoginSuccess={handleLogin} />
      ) : (
        <>
          {screen === "Holdings" && (
            <Holdings setStock={setSelectedStock} setScreenStocks={setScreenStocks} />
          )}
          {screen === "Orderbook" && (
            <Orderbook setStock={setSelectedStock} setScreenStocks={setScreenStocks} />
          )}
          {screen === "Positions" && (
            <Positions setStock={setSelectedStock} setScreenStocks={setScreenStocks} />
          )}

          <BottomNav active={screen} setActive={setScreen} />
          <FAB onAction={handleFABClick} currentScreen={screen} stocks={screenStocks} />

          {orderType && (
            <OrderPad
              type={orderType}
              stock={selectedStock}
              onClose={() => {
                setOrderType(null);
                setSelectedStock(null);
              }}
            />
          )}
        </>
      )}
    </div>
  );
}