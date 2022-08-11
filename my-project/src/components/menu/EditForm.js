import React, { useState } from "react";

const Test = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newImg, setNewImg] = useState("");

  const handleEdit = (id) => {
    console.log(id);
    console.log("Edit btn clicked : editProduct.js");

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      _id: props.id,
      title: newTitle,
      price: newPrice,
      img: newImg,
    });

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`http://localhost:5001/products/edit/${props.id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const handleclosebtn = (e) => {
    e.preventDefault();
    props.setShowModal(false);
    props.setoutOfService(false);
  };

  return (
    <>
      <div className=" w-full flex shadow-md ">
        <form action="" className="w-full p-2">
          <div className="mb-2">
            <label htmlFor="comment" className="text-base text-gray-600 ">
              Title
            </label>
            <textarea
              className="w-full h-10 p-2 border rounded focus:outline-none focus:ring-red-300 focus:ring-1"
              name="comment"
              placeholder="New title here..."
              onChange={(e) => setNewTitle(e.target.value)}
            ></textarea>
          </div>
        </form>
      </div>
      {/* // */}
      <div className=" flex flex-wrap w-full items-center justify-end border-t border-gray-200 ">
        <div className=" w-full flex  shadow-md ">
          <form action="" className="w-full p-2">
            <div className="mb-2">
              <label htmlFor="comment" className="text-base text-gray-600">
                Price
              </label>
              <textarea
                className="w-full h-10 p-2 border rounded focus:outline-none focus:ring-red-300 focus:ring-1"
                name="comment"
                placeholder="New description here..."
                onChange={(e) => setNewPrice(e.target.value)}
              ></textarea>
            </div>
          </form>
          <br />
        </div>
      </div>

      <div className=" flex flex-wrap w-full items-center justify-end border-t border-gray-200 ">
        <div className=" w-full flex  mb-5 shadow-md ">
          <form action="" className="w-full p-2">
            <div className="mb-2">
              <label htmlFor="comment" className="text-base text-gray-600">
                Image
              </label>
              <textarea
                className="w-full h-10 p-2 border rounded focus:outline-none focus:ring-red-300 focus:ring-1"
                name="comment"
                placeholder="New description here..."
                onChange={(e) => setNewImg(e.target.value)}
              ></textarea>
            </div>
          </form>
          <br />
        </div>
      </div>
      <button
        className="px-3 py-2 mr-2 text-sm text-red-100 bg-blue-600 rounded  font-medium"
        onClick={handleEdit}
      >
        Save
      </button>
      <button
        type="button"
        className="px-6
          py-2.5
          bg-purple-600
          text-white
          font-medium
          text-sm
          leading-tight
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
        onClick={handleclosebtn}
      >
        Close
      </button>
    </>
  );
};

export default Test;
