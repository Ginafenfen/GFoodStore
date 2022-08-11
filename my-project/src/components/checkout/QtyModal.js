import React, { useState } from "react";
import { useContext } from "react";
import ReactContext from "../../context/react-context";
import { useNavigate } from "react-router-dom";

const QtyModal = (props) => {
  const reactCtx = useContext(ReactContext);
  let navigate = useNavigate();
  const [newQty, setNewQty] = useState("");

  const handleQtyChange = (id) => {
    console.log(id);

    const raw = JSON.stringify({
      _id: props.id,
      qty: newQty,
    });

    const requestOptions = {
      method: "PATCH",
      body: raw,
      redirect: "follow",
    };

    fetch(`http://localhost:5001/products/quantity/${props.id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => reactCtx.setNewQty(result))
      .catch((error) => console.log("error", error));
    alert(`You have changed the quantity to ${reactCtx.newQty}`);
    navigate("/checkout");
  };

  return (
    <div>
      <h1>
        {" "}
        <input
          onChange={(e) => setNewQty(e.target.value)}
          placeholder="type your qty here"
        ></input>
        <button onClick={handleQtyChange}>ok</button>
      </h1>
    </div>
  );
};

export default QtyModal;
