import React, { useEffect } from "react";
import { useContext } from "react";
import ReactContext from "../../context/react-context";

const Test = () => {
  const reactCtx = useContext(ReactContext);
  // const [products, setProducts] = useState([]);

  //==displayAll==//
  const fetchData = async () => {
    const response = await fetch("http://localhost:5001/products/displayAll");
    const data = await response.json();
    reactCtx.setProducts(data);
  };
  useEffect(() => {
    fetchData();
  }, [reactCtx.products]);

  // const fetchData = async () => {
  //   var requestOptions = {
  //     method: "GET",
  //     redirect: "follow",
  //   };

  //   fetch("http://localhost:5001/products/displayAll", requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => reactCtx.setProducts(result))
  //     .catch((error) => console.log("error", error));
  // };
  // useEffect(() => {
  //   fetchData();
  // }, [reactCtx.products]);

  //==delete==//
  const handleDelete = (id) => {
    console.log("delete btn clicked in parent: Test.js");
    alert(reactCtx.products);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // var raw = "";

    var requestOptions = {
      method: "DELETE",
      // body: raw,
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
    alert("Add to cart , please checkout");
  };

  //==cart==//
  // var raw = "";
  const fetchData2 = async () => {
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

  useEffect(() => {
    fetchData2();
  }, []);

  // const things = reactCtx.carts.map((cart) => {
  //   <p key=>[{cart.title}]</p>;
  // });
  // const carts = [1, 2, 3, 4];
  // const lists = carts.map((cart) => <li>{cart}</li>);

  // const lists = carts.map((cart, i) => <li key={i}>{cart.title}</li>);

  // let things = reactCtx.carts.map((d, i) => {
  //   return <div></div>;
  // });

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
                  onClick={() => handleAddtoCart(product._id)}
                >
                  addToCart
                </button>
              </li>
            ))}
        </ul>
      )}
      {reactCtx.carts}

      {/* {reactCtx.carts.length > 0 && (
        <div>
          {reactCtx.carts &&
            reactCtx.carts.map((cart) => <li key={cart._id}>{cart.title}</li>)}
        </div>
      )} */}
    </div>
  );
};

export default Test;
