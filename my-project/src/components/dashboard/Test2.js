import React, { useContext, useEffect } from "react";
import ReactContext from "../../context/react-context";

const Text2 = () => {
  const reactCtx = useContext(ReactContext);

  const handlePrintcart = () => {
    var requestOptions = {
      method: "GET",
      // body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:5001/products/cart", requestOptions)
      .then((response) => response.text())
      .then((result) => reactCtx.setCarts(result))
      .catch((error) => console.log("error", error));
    console.log(reactCtx.carts);
  };
  // useEffect(() => {
  //   const newCarts2 = JSON.parse(reactCtx.carts);
  //   console.log(newCarts2);
  // }, []);

  // useEffect(() => {
  //   const newCarts2 = JSON.parse(reactCtx.carts);
  //   const things = newCarts2.map((cart) => {
  //     return;
  //     <li>{cart.title}</li>;
  //   });
  // });
  // let things = reactCtx.carts.map((d) => {
  //   return <div>{d.title}</div>;
  // });
  // console.log(things);

  // const arr = JSON.parse(reactCtx.addCards);
  // let things = arr.map((d) => {
  //   return <div>{d.title}</div>;
  // });

  return (
    <div>
      {/* {reactCtx.carts} */}
      {/* {things} */}
      <button onClick={handlePrintcart}>Click me to open</button>
      {/* {newCarts2.length > 0 && (
        <ul>
          {newCarts2 &&
            newCarts2.map((cart) => (
              <li>
                food in cart:{cart.title}
                <img src={cart.img} alt=""></img>
              </li>
            ))}
        </ul>
      )} */}
    </div>
  );
};

export default Text2;
