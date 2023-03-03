/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from "../../images/Bullean.png";
import { Link } from "react-router-dom";
function Header({ toggle, setToggle }) {
  const [raiscap, setRaiscap] = useState(false);
  return (
    <div className="w-full">
      <div className="absolute w-[95vw] z-20 rounded-lg mx-4 p-4 sm:px-4 bg-[#10194D] text-[10px] sm:text-[16px] flex justify-between items-center">
        <img className="w-[90px] sm:w-fit pl-8" src={logo} />
        <Link to="/">
          <p className="cursor-pointer">Curated for you</p>
        </Link>
        <Link to="/service">
          <p className=" cursor-pointer">Services</p>
        </Link>
        <p onClick={() => setRaiscap(true)} className="cursor-pointer">
          Raise Capital / Sell Business
        </p>
        <Link to="/investor">
          <p className="cursor-pointer">Interested in investing</p>
        </Link>
        <p className="pr-8 cursor-pointer">Contact Us</p>
      </div>

      {toggle ? (
        <div className="absolute top-0 backdrop-blur-sm z-20 w-full h-[100vh] mb-12 flex justify-center items-center">
          <div className="flex flex-col items-center p-6 bg-slate-800 rounded-xl">
            <p className="text-[26px] ranade mb-8">Subscription</p>
            <div className="flex justify-evenly items-center">
              <div>
                <p className="mx-6 text-[13px]">Company name</p>
                <input
                  className="text-black px-3 py-[6px] w-[472px] mx-6 mb-3 rounded-md"
                  type="text"
                />
                <p className="mx-6 text-[13px]">Concerned Person</p>
                <input
                  className="text-black px-3 py-[6px] w-[472px] mx-6 mb-3 rounded-md"
                  type="text"
                />
                <p className="mx-6 text-[13px]">Designation</p>
                <input
                  className="text-black px-3 py-[6px] w-[472px] mx-6 mb-3 rounded-md"
                  type="text"
                />
                <p className="mx-6 text-[13px]">Phone</p>
                <input
                  className="text-black px-3 py-[6px] w-[472px] mx-6 mb-3 rounded-md"
                  type="text"
                />
                <p className="mx-6 text-[13px]">Email</p>
                <input
                  className="text-black px-3 py-[6px] w-[472px] mx-6 mb-3 rounded-md"
                  type="text"
                />
              </div>
              <div>
                <p className="mx-6 text-[13px]">Industry</p>
                <input
                  className="text-black px-3 py-[6px] w-[472px] mx-6 mb-3 rounded-md"
                  type="text"
                />
                <p className="mx-6 text-[13px]">Sub Industry</p>
                <input
                  className="text-black px-3 py-[6px] w-[472px] mx-6 mb-3 rounded-md"
                  type="text"
                />
                <p className="mx-6 text-[13px]">Sub Sub Industry</p>
                <input
                  className="text-black px-3 py-[6px] w-[472px] mx-6 mb-3 rounded-md"
                  type="text"
                />
                <p className="mx-6 text-[13px]">Description</p>
                <input
                  className="text-black px-3 py-[6px] w-[472px] mx-6 mb-3 rounded-md"
                  type="text"
                />
                <p className="mx-6 text-[13px]">Revenue Range / Arr</p>
                <input
                  className="text-black px-3 py-[6px] w-[472px] mx-6 mb-3 rounded-md"
                  type="text"
                />
              </div>
            </div>
            <button
              onClick={() => setToggle(false)}
              className="my-3 text-[13px] border rounded-2xl px-10 py-2 bg-gradient-to-r from-green-400 to-blue-700"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      ) : null}

      {raiscap ? (
        <div className="absolute top-0 backdrop-blur-sm z-20 w-full h-[100vh] mb-12 flex justify-center items-center">
          <div className="flex flex-col items-center p-6 bg-slate-800 rounded-xl">
            <p className="text-[26px] ranade mb-8">
              Raise Capital / Sell Business
            </p>
            <div className="text-[16px]">
              <div className="flex justify-between items-center">
                <div className="mx-6">
                  <p className="">First Name</p>
                  <input
                    className="px-3 text-black py-[6px] rounded-lg"
                    type="text"
                  />
                </div>
                <div className="mx-6">
                  <p className="">Last Name</p>
                  <input
                    className="px-3 text-black py-[6px] rounded-lg"
                    type="text"
                  />
                </div>
              </div>
              <p className="mt-6 mx-6">Company Name</p>
              <input
                className="px-3 text-black py-[6px] w-[550px] mx-6   rounded-lg"
                type={"text"}
              />
              <br />
              <p className="mt-6 mx-6">Email Address</p>
              <input
                className="px-3 text-black py-[6px] w-[550px] mx-6 rounded-lg"
                type={"text"}
              />
              <br />
              <p className="mt-6 mx-6">Password</p>
              <input
                className="px-3 text-black py-[6px] w-[550px] mx-6 rounded-lg"
                type={"text"}
              />
              <br />
            </div>
            <button
              onClick={() => setRaiscap(false)}
              className="my-3 mt-6 text-[13px] border rounded-2xl px-10 py-2 bg-gradient-to-r from-green-400 to-blue-700"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
