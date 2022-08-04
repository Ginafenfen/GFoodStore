import React, { useEffect, useState } from "react";

const Menu = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5001/products/displayAll");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const handleDelete = (id) => {
  //   console.log("delete btn clicked in parent: Product.js");
  //   alert(id);
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     id: id, //need to ask
  //   });

  //   var requestOptions = {
  //     method: "DELETE",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   fetch(`http://localhost:5001/products/delete/${id}`, requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));
  // };

  return (
    <>
      {" "}
      {products.length > 0 && (
        <div className="grid gap-x-0 gap-y-4 grid-cols-4">
          {products.map((product) => (
            <div className="bg-pink-700" key={product.id}>
              {" "}
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
                                className="absolute inset-0"
                              ></span>
                              {product.title}
                            </a>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">dry</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">
                          SGD {product.price}
                        </p>
                      </div>
                    </div>{" "}
                  </div>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Add to cart
                  </button>
                  {/* <h1 classNameName="text-red-700">waiting time...</h1>
          <h1>
            {minutes}:{seconds}
          </h1> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}{" "}
      <button
        className="block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#AddMenuModal"
      >
        Add Menu
      </button>
    </>
  );
};

export default Menu;
