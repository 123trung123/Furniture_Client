import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage/CartPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Home from "./pages/Home/Home";
import AboutUsPage from "./pages/AboutUsPages/AboutUsPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import ProductPage from "./pages/productpage/ProductPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SettingPage from "./pages/SettingPage/SettingPage";
export default function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          {/* <Route path="/detail/:id" element={<DetailPage />} /> */}
          <Route path="/products/detail/:id" element={<DetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<SettingPage />} />
          <Route path="/reviews" element={<Home/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}
