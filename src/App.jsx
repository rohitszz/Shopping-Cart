import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import RatingAndReviews from "./pages/RatingAndReviews";

const App = () => {
  return (<div > 
        <div className="bg-black">
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/wishlist" element={<WishList/>}/>
          <Route path="/ratingandreviews" element={<RatingAndReviews/>}/>
        </Routes>


    </div>);
}

export default App;
