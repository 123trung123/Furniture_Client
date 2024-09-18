import React from "react";
import Header from "./components/header/Header";
import { HashRouter, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage/CartPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Home from "./pages/Home/Home";


export default function App() {
  return (
    <div>
      
      <HashRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
