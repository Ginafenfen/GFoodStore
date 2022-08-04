import React, { useEffect, useState } from "react";
import { useContext } from "react";
import ReactContext from "../../context/react-context";

const Test = () => {
  const reactCtx = useContext(ReactContext);
  // const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5001/products/displayAll");
    const data = await response.json();

    reactCtx.setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id) => {
    console.log("delete btn clicked in parent: Test.js");
    alert(reactCtx.products);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = "";

    var requestOptions = {
      method: "DELETE",
      body: raw,
      redirect: "follow",
    };

    fetch(`http://localhost:5001/products/delete/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  //==Edit==//
  // const handleEdit = (id) => {
  //   console.log("Edit btn clicked in parent: Test.js");

  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     title: reactCtx.newTitle,
  //     desc: reactCtx.newDesc,
  //     price: reactCtx.newPrice,
  //     img: reactCtx.newImg,
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
  const handleAddtoCart = (title) => {};
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     title: title,
  //     status: "cart",
  //   });

  //   var requestOptions = {
  //     method: "PATCH",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   fetch("http://localhost:5001/products/cart", requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));
  // };

  return (
    <div>
      {reactCtx.products.length > 0 && (
        <ul>
          {reactCtx.products &&
            reactCtx.products.map((product) => (
              <li key={product._id}>
                Title: {product.title}
                <br></br>
                Desc: {product.desc}
                <br></br>
                Image: <img src={product.img} alt="" />
                Price: {product.price}
                <button
                  className="block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#editMenuModal"
                  // onClick={() => handleEdit(product._id)}
                >
                  Edit button
                </button>
                <button
                  className="block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => handleDelete(product._id)}
                >
                  delete
                </button>
                <button
                  className="block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={handleAddtoCart}
                >
                  addToCart
                </button>
              </li>
            ))}
        </ul>
      )}
      {/* <Text2 /> */}
    </div>
  );
};

export default Test;
