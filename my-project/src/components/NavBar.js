import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav
        className="
  relative
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-4
  bg-gray-600
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  shadow-lg
  navbar navbar-expand-lg navbar-light
  "
      >
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6 bg-amber-100">
          <div className="bg-white-700 relative h-32 w-32">
            <a
              className="bg-pink-500 hover:brown-700 text-white font-bold py-2 px-4 rounded-full absolute inset-x-0 right-60 top-10 h-16 "
              href="/login"
            >
              _
            </a>

            <a
              className="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full absolute top-10 right-100 h-16 w-16 "
              href="/signup"
            >
              Gfood Store
            </a>
          </div>
          <button
            className="
      navbar-toggler
      text-gray-500
      border-0
      hover:shadow-none hover:no-underline
      py-2
      px-2.5
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              className="w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
          <div
            className="collapse navbar-collapse flex-grow items-center "
            id="navbarSupportedContent"
          >
            <a
              className="
        flex
        items-center
        text-gray-900
        hover:text-gray-900
        focus:text-gray-900
        mt-2
        lg:mt-0
        mr-1
      "
              href="#"
            ></a>

            <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
              <li className="nav-item p-2">
                <a
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 text-2xl"
                  href="/dashboard"
                >
                  Dashboard
                </a>
              </li>
              <li className="nav-item p-2">
                <a
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 text-2xl"
                  href="/menu"
                >
                  Menu
                </a>
              </li>
              <li className="nav-item p-2">
                <a
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 text-2xl"
                  href="/checkout"
                >
                  Checkout
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-white-700 relative h-32 w-32">
            <a
              className="bg-pink-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full absolute right-50 top-10 h-16 w-20 "
              href="/login"
            >
              Login
            </a>

            <a
              className="bg-pink-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full absolute top-10 right-40 h-16 w-20 "
              href="/signup"
            >
              SignUp
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
