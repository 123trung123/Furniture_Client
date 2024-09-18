import React from "react";
import Header from "./components/header/Header";
import { HashRouter, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage/CartPage";
import Home from "./pages/Home/Home";
import Login from "./components/Login/Login";

export default function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
