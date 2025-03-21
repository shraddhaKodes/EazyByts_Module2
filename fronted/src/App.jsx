import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login" ;
import SignUp from "./pages/SignUp";
import UserDashboard from "./pages/UserDashboard";
import Dashboard from "./components/Dashboard";
import StockContext from "./context/StockContext";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("MSFT");

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stocks" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/UserDashboard" element={<UserDashboard />} />
          </Routes>
        </Router>
      </StockContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
