import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

const Test = () => {
  const [products, setProducts] = useState([]);
  // const { id } = useParams();

  const fetchData = async () => {
    const response = await fetch("http://localhost:5001/products/displayAll");
    const data = await response.json();
    console.log(data[0]._id);
    // console.log(data[""]._id);
    setProducts(data);
  };

  console.log(products);

  // console.log(products[0].title);

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = () => {
    console.log("delete btn clicked in parent: Product.js");
    // alert(products._id);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // var raw = JSON.stringify({
    //   id: products._id, //need to ask
    // });

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      // body: raw,
      redirect: "follow",
    };

    fetch(
      `http://localhost:5001/products/delete/${products._id}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  //   const handleEdit = () => {};
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     id: "62e50929237f05bec8e21448",
  //     title: "new sushi",
  //     desc: "yes edited",
  //     price: "111",
  //     img: "yes",
  //     status: "cooking",
  //   });

  //   var requestOptions = {
  //     method: "PATCH",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   fetch("http://localhost:5001/products/edit", requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));

  const handleAddtoCart = (title) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      title: title,
      status: "cart",
    });

    var requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:5001/products/cart", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      {/* {products[1].title ? <h1>{products[1].title} </h1> : <h1>Nope</h1>} */}
      {products.length > 0 && (
        <ul>
          {products.map((product) => (
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
                // onClick={handleEdit}
              >
                Edit button
              </button>
              <button
                className="block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleDelete}
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
