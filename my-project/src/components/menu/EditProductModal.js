import React from "react";
import { useContext } from "react";
import ReactContext from "../../context/react-context";

const EditProductModal = () => {
  const reactCtx = useContext(ReactContext);

  const handleEdit = (id) => {
    console.log("Edit btn clicked : editProduct.js");

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      _id: id,
      title: reactCtx.newTitle,
      // qty: reactCtx.qty,
      price: reactCtx.newPrice,
      img: reactCtx.newImg,
    });
    var requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`http://localhost:5001/products/edit/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  //   fetch(`http://localhost:5001/products/edit`, requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))

  //     .catch((error) => console.log("error", error));
  // };
  // useEffect(() => {
  //   editBtn(id);
  // }, []);

  return (
    <>
      {/* {reactCtx.products.length > 0 && ( */}
      <div className="grid gap-x-0 gap-y-4 grid-cols-4">
        {reactCtx.products &&
          reactCtx.products.map((product) => (
            <div
              key={product._id}
              className="modal fade   fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
              id="editMenuModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog relative w-auto pointer-events-none">
                <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                  <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <h5
                      className="text-xl font-medium leading-normal text-gray-800"
                      id="exampleModalLabel "
                    >
                      Edit
                    </h5>
                    <button
                      type="button"
                      className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>

                    <div
                      className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                      id="exampleModalScrollable"
                      tabIndex="-1"
                      aria-labelledby="exampleModalScrollableLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
                        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5
                              className="text-xl font-medium leading-normal text-gray-800"
                              id="exampleModalScrollableLabel"
                            >
                              Modal title
                            </h5>
                            <button
                              type="button"
                              className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className=" flex flex-wrap items-center justify-end p-4 border-t border-gray-200 ">
                    <div className=" w-full flex  mb-5 shadow-md ">
                      <form action="" className="w-full p-4">
                        <div className="mb-2">
                          <label
                            htmlFor="comment"
                            className="text-base text-gray-600 "
                          >
                            Title
                          </label>
                          <textarea
                            className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                            name="comment"
                            placeholder="New title here..."
                            onChange={(e) =>
                              reactCtx.setNewTitle(e.target.value)
                            }
                          ></textarea>
                        </div>
                      </form>
                    </div>

                    {/* <div className=" w-full flex  mb-5 shadow-md ">
                      <form action="" className="w-full p-4">
                        <div className="mb-2">
                          <label
                            htmlFor="comment"
                            className="text-base text-gray-600 "
                          >
                            Description
                          </label>
                          <textarea
                            className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                            name="comment"
                            placeholder="New title here..."
                            onChange={(e) =>
                              reactCtx.setNewDesc(e.target.value)
                            }
                          ></textarea>
                        </div>
                      </form>
                    </div> */}

                    <div className=" w-full flex  mb-5 shadow-md ">
                      <form action="" className="w-full p-4">
                        <div className="mb-2">
                          <label
                            htmlFor="comment"
                            className="text-base text-gray-600 "
                          >
                            Food's image
                          </label>
                          <textarea
                            className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                            name="comment"
                            placeholder="New title here..."
                            onChange={(e) => reactCtx.setNewImg(e.target.value)}
                          ></textarea>
                        </div>
                      </form>
                    </div>
                    <div className=" flex flex-wrap w-full items-center justify-end border-t border-gray-200 ">
                      <div className=" w-full flex  mb-5 shadow-md ">
                        <form action="" className="w-full p-4">
                          <div className="mb-2">
                            <label
                              htmlFor="comment"
                              className="text-base text-gray-600"
                            >
                              Price
                            </label>
                            <textarea
                              className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                              name="comment"
                              placeholder="New description here..."
                              onChange={(e) =>
                                reactCtx.setNewPrice(e.target.value)
                              }
                            ></textarea>
                          </div>
                        </form>
                        <br />
                      </div>
                    </div>
                    <button
                      className="px-3 py-2 mr-2 text-sm text-blue-100 bg-blue-600 rounded  font-medium"
                      onClick={() => handleEdit(product._id)}
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
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* )} */}
    </>
  );
};

export default EditProductModal;
