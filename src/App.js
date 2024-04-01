import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Shopcatagorie from "./Pages/Shopcatagorie";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Asserts/banner_mens.png";
import women_banner from "./Components/Asserts/banner_women.png";
import kids_banner from "./Components/Asserts/banner_kids.png";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<Shopcatagorie banner={men_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<Shopcatagorie banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<Shopcatagorie banner={kids_banner} category="kid" />}
          />
          <Route path="/products" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
