import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState(
  sessionStorage.getItem("theme") || "light"
);

  return (<div > 
        <div className="bg-black">
          <Navbar theme={theme} setTheme={setTheme}/>
        </div>
        <Routes>
          <Route path="/" element={<Home theme={theme}/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/wishlist" element={<WishList/>}/>
        </Routes>


    </div>);
}

export default App;
