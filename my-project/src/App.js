import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ReactContext from "./context/react-context";
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
  //==Products==//
  const [newTitle, setNewTitle] = useState("");
  const [newImg, setNewImg] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const [products, setProducts] = useState([]);

  const [carts, setCarts] = useState([]);

  return (
    <div>
      <ReactContext.Provider
        value={{
          newTitle,
          setNewTitle,
          newImg,
          setNewImg,
          newDesc,
          setNewDesc,
          newPrice,
          setNewPrice,
          products,
          setProducts,
          carts,
          setCarts,
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path=":id" element={<EditProductModal />} /> */}
          {/* <Route path="/editProductModal/:id" element={<EditProductModal />} /> */}
        </Routes>
        <Modal />
        <Modal2 />
        <EditProductModal />
        <CCmodal />
      </ReactContext.Provider>
    </div>
  );
}

export default App;
