import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="relative z-10 bg-transparent">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-16 p-4">
          <a href="/" className="font-black text-white">
            GPT-3
          </a>
          <div className="flex md:order-2">
          <button
              type="button"
              className="text-white px-8 py-2.5 text-center mx-3 md:mx-0"
            >
              Sign in
            </button>
            <button
              type="button"
              className="text-white bg-[#FF4820] hover:bg-[#fc7354] px-8 py-2.5 text-center mx-3 md:mx-0"
            >
              Sign up
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex items-center flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white rounded md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent"
                >
                  What is GPT?
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent"
                >
                  Open AI
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent"
                >
                  Library
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
