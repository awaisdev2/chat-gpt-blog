import React from "react";
import Navbar from "../../components/navbar/Navbar";
import BlurSvg from "../../components/navbar/BlurSvg";
import HeaderImage from "./Header.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="absolute -mt-20 -ml-5">
        <BlurSvg />
      </div>
      <div className="flex items-center">
        <div className="mx-20 z-10 relative my-5">
          <h1 className="heading text-6xl font-semibold max-w-xl">
            Let's Build something amazing with GPT-3 OpenAI
          </h1>
          <p className="text-[#81AFDD] my-3 max-w-xl">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <div className="flex items-center my-3">
            <input
              type="text"
              className="w-96 border-0 bg-[#052D56] text-white py-3"
              placeholder="Your email address"
            />
            <button
              type="button"
              className="text-white bg-[#FF4820] hover:bg-[#fc7354] px-6 py-3 text-center mx-3 md:mx-0"
            >
              Get Started
            </button>
          </div>
        <div className="flex items-center">
        <div className="flex -space-x-4">
              <img
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt=""
              />
              <img
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                alt=""
              />
              <img
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt=""
              />
              <img
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                alt=""
              />
              <img
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                alt=""
              />
              <img
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt=""
              />
              <a
                className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                href="/"
              >
                +99
              </a>
            </div>
            <p className="text-white text-sm ml-2">1,600 people requested access a visit in last 24 hours</p>
        </div>
        </div>
        <div>
          <img className="h-[550px]" src={HeaderImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
