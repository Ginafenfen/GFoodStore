import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Menu from "./components/menu/Menu";
import Checkout from "./components/checkout/Checkout";
import NavBar from "./components/NavBar";
import Login from "./components/landingpage/Login";
import Signup from "./components/landingpage/Signup";
import Dashboard from "./components/dashboard/Dashboard";
import Modal from "./components/menu/Modal";
import Modal2 from "./components/menu/Modal2";
import EditProductModal from "./components/menu/EditProductModal";
import CCmodal from "./components/checkout/CCmodal";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path=":id" element={<EditProductModal />} /> */}
        <Route path="/editProductModal/:id" element={<EditProductModal />} />
      </Routes>
      <Modal />
      <Modal2 />
      <EditProductModal />
      <CCmodal />
    </div>
  );
}

export default App;
