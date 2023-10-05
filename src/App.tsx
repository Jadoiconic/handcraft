import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Accessories from "./pages/accessories/Accessories";
import About from "./pages/about/About";
import ShoppingCart from "./pages/cart/ShoppingCart";
import SignIn from "./pages/auth/SignIn";
import Dashboard from "./pages/admin/dashboard/Dashboard";
function App() {
  // document.getElementById("root")?.classList.add("")
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/about" element={<About />} />
        <Route path="/carts" element={<ShoppingCart />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
