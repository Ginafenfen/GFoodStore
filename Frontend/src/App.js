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
import QtyModal from "./components/checkout/QtyModal";
import EditProductModal from "./components/menu/EditProductModal";
import CCmodal from "./components/checkout/CCmodal";
import Test2 from "./components/dashboard/MagicBtn";

function App() {
  //==Products==//
  const [newTitle, setNewTitle] = useState("");
  const [newImg, setNewImg] = useState("");
  // const [newDesc, setNewDesc] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newQty, setNewQty] = useState("");

  const [products, setProducts] = useState([]);

  const [carts, setCarts] = useState([]);

  const storedLogin = JSON.parse(localStorage.getItem("loginAccess"));
  const [accessToken, setAccessToken] = useState(storedLogin);

  return (
    <div>
      <ReactContext.Provider
        value={{
          newTitle,
          setNewTitle,
          newImg,
          setNewImg,
          newPrice,
          setNewPrice,
          products,
          setProducts,
          carts,
          setCarts,
          newQty,
          setNewQty,
          accessToken,
          setAccessToken,
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/menu" />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/random" element={<Test2 />} />
        </Routes>
        <Modal />
        <Modal2 />
        <EditProductModal />
        <CCmodal />
        {/* <QtyModal /> */}
      </ReactContext.Provider>
    </div>
  );
}

export default App;
