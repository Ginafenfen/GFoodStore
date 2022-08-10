import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import ReactContext from "../../context/react-context";

const ViewTotal = () => {
  const reactCtx = useContext(ReactContext);
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState([]);
  const [printSubtotal, setPrintSubtotal] = useState("");
  const [newQty, setNewQty] = useState(11);
  let navigate = useNavigate();

  const fetchData = async () => {
    const response = await fetch("http://localhost:5001/products/cart");
    const data = await response.json();
    setCart(data);
  };

  useEffect(() => {
    fetchData();
  }, [cart]);

  //==close==//
  const handleClosebtn = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const fetchData2 = async () => {
    const response = await fetch("http://localhost:5001/products/allcart");
    const data2 = await response.json();
    setSubtotal(data2);
  };

  useEffect(() => {
    fetchData2();
    let total = 0;
    for (let i = 0; i < subtotal.length; i++) {
      total += subtotal[i].price;
      console.log(subtotal[i].price);
      setPrintSubtotal(total);
      console.log(total);
    }
  }, [subtotal]);

  //==remove from cart==//
  const handleRemoveCart = (id) => {
    var requestOptions = {
      method: "PATCH",
      redirect: "follow",
    };

    fetch(`http://localhost:5001/products/removecart/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))

      .catch((error) => console.log("error", error));

    alert("You have removed this item from cart");
  };

  const handleCheckout = () => {
    var requestOptions = {
      method: "PATCH",
      redirect: "follow",
    };

    fetch(`http://localhost:5001/products/completed/`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <div
        className="relative z-10"
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2
                        className="text-lg font-medium text-gray-900"
                        id="slide-over-title"
                      >
                        Your order
                      </h2>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={handleClosebtn}
                        >
                          <span className="sr-only">Close panel</span>

                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="mt-8">
                      <div className="flow-root">
                        {cart.length > 0 && (
                          <ul>
                            {cart &&
                              cart.map((carts) => (
                                <li key={carts._id}>
                                  <ul className="-my-6 divide-y divide-gray-200">
                                    <li className="flex py-6">
                                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                          src={carts.img}
                                          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                          className="h-full w-full object-cover object-center"
                                        />
                                      </div>

                                      <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                          <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3> {carts.title}</h3>
                                            <p className="ml-4">
                                              $ {carts.price}
                                            </p>
                                          </div>
                                          {/* <p className="mt-1 text-sm text-gray-500">
                                            desc
                                          </p> */}
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                          <p
                                            className="text-gray-500"
                                            onChange={() => setNewQty(carts.id)}
                                          >
                                            Qty: {newQty}
                                          </p>

                                          <div className="flex">
                                            <button
                                              type="button"
                                              className="font-medium text-indigo-600 hover:text-indigo-500"
                                              onClick={() =>
                                                handleRemoveCart(carts._id)
                                              }
                                            >
                                              Remove
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                              ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>$ {printSubtotal}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className="mt-6">
                      <button
                        className=" animate-pulse flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        data-bs-toggle="modal"
                        data-bs-target="#CCmodal"
                        type="button"
                        onClick={handleCheckout}
                      >
                        Checkout
                      </button>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                          onClick={handleClosebtn}
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default ViewTotal;
