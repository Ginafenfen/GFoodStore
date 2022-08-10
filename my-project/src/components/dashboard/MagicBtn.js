import React, { useContext, useEffect } from "react";
import ReactContext from "../../context/react-context";

const Text2 = () => {
  const reactCtx = useContext(ReactContext);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5001/products/displayAll");
    const data = await response.json();
    reactCtx.setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, [reactCtx.products]);
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
      <div
        id="default-carousel"
        className="relative md:animate-pulse"
        data-carousel="static"
      >
        {/* <!-- Carousel wrapper --> */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* <!-- Item 1 --> */}
          {reactCtx.products.length > 0 && (
            // <div classNameName="grid gap-x-0 gap-y-4 grid-cols-4">

            <div
              className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
              data-carousel-item=""
            >
              {" "}
              {reactCtx.products &&
                reactCtx.products.map((product) => (
                  <div classNameName="bg-white-700" key={product.id}>
                    <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">
                      First Slide
                    </span>
                    <img
                      src={product.img}
                      className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                      alt="..."
                    />
                  </div>
                ))}
            </div>
          )}
          {/* <!-- Item 2 --> */}
          {/* <div
            className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10"
            data-carousel-item=""
          >
            <img
              src="/docs/images/carousel/carousel-2.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div> */}
          {/* <!-- Item 3 --> */}
          {/* <div
            className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10"
            data-carousel-item=""
          >
            <img
              src="/docs/images/carousel/carousel-3.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div> */}
        </div>
        {/* <!-- Slider indicators --> */}
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
        </div>
        {/* <!-- Slider controls --> */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev=""
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next=""
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      <button
        className="animate-bounce absolute top-50 right-40 left-20 border-2 border-pink-600 text-black px-32 py-3 rounded-md text-1xl font-medium hover:bg-pink-600 transition duration-300"
        type="button"
      >
        random choose from menu (work in progress)
      </button>
    </div>
  );
};

export default Text2;
