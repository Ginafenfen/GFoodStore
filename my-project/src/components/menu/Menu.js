import React, { useEffect, useState } from "react";
import { useContext } from "react";
import ReactContext from "../../context/react-context";

import EditForm from "./EditForm";

const Menu = () => {
  const reactCtx = useContext(ReactContext);
  const [showModal, setShowModal] = useState(false);

  const [outOfService, setoutOfService] = useState(false);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5001/products/displayAll");
    const data = await response.json();
    reactCtx.setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, [reactCtx.products]);
  //==addtocart==//

  const handleAddtoCart = (id) => {
    var raw = "";

    var requestOptions = {
      method: "PATCH",
      body: raw,
      redirect: "follow",
    };

    fetch(`http://localhost:5001/products/addtocart/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))

      .catch((error) => console.log("error", error));

    alert("You have added this item to cart");
  };

  const handleDelete = (id) => {
    console.log("delete btn clicked in parent: Product.js");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      // id: id,
    });

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`http://localhost:5001/products/delete/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  //==edit==//
  const handleEdit = (id) => {
    console.log(`Edit btn clicked : editProduct.js ${id}`);
    setShowModal(true);
    setoutOfService(true);
  };
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     _id: id,
  //     title: newTitle,
  //     // qty: reactCtx.qty,
  //     // price: reactCtx.newPrice,
  //     // img: reactCtx.newImg,
  //   });

  //   var requestOptions = {
  //     method: "PATCH",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };
  //   fetch(`http://localhost:5001/products/edit/${id}`, requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));
  // };

  return (
    <>
      {outOfService ? (
        <>
          <h1 className="transition delay-200 animate-bounce absolute inset-x-80 text-red-700 text-6xl">
            ⚠️ Under maintenance
          </h1>
        </>
      ) : null}
      <button
        className="absolute top-30 right-10 border-2 border-pink-600 text-black px-32 py-3 rounded-md text-1xl font-medium hover:bg-pink-600 transition duration-300 hover:animate-bounce"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#AddMenuModal"
      >
        Add Menu
      </button>

      {reactCtx.products.length > 0 && (
        <div className="grid gap-x-0 gap-y-4 grid-cols-4">
          {reactCtx.products &&
            reactCtx.products.map((product) => (
              <div className="bg-white-700" key={product.id}>
                <div>
                  <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
                      {product.title}
                    </h2>
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                      <div className="group relative">
                        <div className="w-80 min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                          <img
                            src={product.img}
                            alt=""
                            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                          />
                        </div>
                        <div className="mt-4 flex justify-between">
                          <div>
                            <h3 className="text-sm text-gray-700">
                              <a href="/home">
                                <span
                                  aria-hidden="true"
                                  className="absolute"
                                ></span>
                                {/* {product.title} */}
                              </a>
                            </h3>
                            <p className="absolute right-28 left-28 text-sm text-gray-900"></p>
                          </div>
                          <h1 className="text-xl font-medium text-gray-900">
                            SGD {product.price}
                          </h1>
                        </div>
                      </div>{" "}
                    </div>
                    {/* <div className="flex-col min-h-screen h-full w-full bg-white p-1"> */}
                    <button
                      className="min-w-auto w-32 h-10 bg-pink-500 p-2 rounded-xl hover:bg-red-500 transition-colors duration-50  ease-out text-white font-semibold hover:animate-bounce"
                      onClick={() => handleAddtoCart(product._id)}
                    >
                      Add to cart
                    </button>
                    <button
                      className="min-w-auto w-14 h-14 bg-pink-500 p-2 rounded-full hover:bg-red-500 text-white font-semibold transition-rotation duration-300 hover:-rotate-45 ease-in-out hover:animate-bounce"
                      onClick={() => handleDelete(product._id)}
                    >
                      delete
                    </button>

                    <button
                      className="min-w-auto w-14 h-14 bg-pink-500 p-2 rounded-full hover:bg-red-500 text-white font-semibold transition-rotation duration-300 hover:-rotate-45 ease-in-out hover:animate-bounce"
                      // type="button"
                      // data-bs-toggle="modal"
                      // data-bs-target="#editMenuModal"
                      onClick={() => handleEdit(product._id)}
                    >
                      edit
                    </button>
                  </div>
                </div>
                {/* //==edit form==// */}
                {showModal ? (
                  <>
                    <EditForm
                      handleEdit={handleEdit}
                      id={product._id}
                      setShowModal={setShowModal}
                      setoutOfService={setoutOfService}
                    />
                  </>
                ) : null}
                {/* //==end form==// */}
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Menu;

// dish 1
//Soba noodle salah
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtCGJqLhM7nQM6ZqcFoOq6B2ySKatrZqM1Iw&usqp=CAU

// dish 2
// Tomato egg noodle
// https://redhousespice.com/wp-content/uploads/2021/06/Chinese-tomato-egg-noodle-soup-scaled.jpg

// dish 3

// fried noodle
// https://tiffycooks.com/wp-content/uploads/2021/09/Screen-Shot-2021-09-21-at-5.21.37-PM.png
