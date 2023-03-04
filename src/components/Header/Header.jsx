/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import logo from "../../images/Bullean.png";
import { Link } from "react-router-dom";
import { darkThemeContext } from "../../context/darkTheme";
function Header({ toggle, setToggle }) {
  const [raiscap, setRaiscap] = useState(false);
  // const [theme, setTheme] = useState("light");
  const { theme, setTheme } = useContext(darkThemeContext);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="w-full fixed z-50">
      <div className="absolute w-[95vw] z-20 rounded-lg mx-4 p-4 sm:px-4 bg-[#efefef] dark:bg-[#10194D] text-[10px] sm:text-[16px] flex justify-between items-center">
        <img
          className="w-[90px] sm:w-fit pl-8"
          src={logo}
          onClick={handleTheme}
        />
        <Link to="/">
          <p className="cursor-pointer dark:text-white text-black">
            Curated for you
          </p>
        </Link>
        <Link to="/service">
          <p className=" dark:text-white text-black cursor-pointer">Services</p>
        </Link>
        <p
          onClick={() => setRaiscap(true)}
          className="cursor-pointer dark:text-white text-black"
        >
          Raise Capital / Sell Business
        </p>
        <Link to="/investor">
          <p className="cursor-pointer dark:text-white text-black ">
            Interested in investing
          </p>
        </Link>
        <Link to="/support">
          <p className="pr-8 cursor-pointer dark:text-white text-black ">
            Contact Us
          </p>
        </Link>
      </div>

      {toggle ? (
        <div className="absolute top-0 backdrop-blur-sm z-20 w-full h-[100vh] mb-12 flex justify-center items-center">
          <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl">
            <p className="text-[26px] ranade mb-8  dark:text-white text-black">
              Subscription
            </p>
            <div className="flex justify-evenly items-center">
              <div>
                <p className="mx-6 text-[13px]  dark:text-white text-black">
                  Company name
                </p>
                <input
                  className="bg-[#c1bfbf] dark:bg-white text-black px-3 py-[6px] w-[472px] mx-6 mb-3 rounded-md"
                  type="text"
                />
                <p className="mx-6 text-[13px]  dark:text-white text-black">
                  Concerned Person
                </p>
                <input
                  className="bg-[#c1bfbf] dark:bg-white text-black px-3 py-[6px] w-[472px] mx-6 mb-3 rounded-md"
                  type="text"
                />
                <p className="mx-6 text-[13px]  dark:text-white text-black">
                  Designation
                </p>
                <input
                  className="bg-[#c1bfbf] dark:bg-white text-black px-3 py-[6px] w-[472px] mx-6 mb-3 rounded-md"
                  type="text"
                />
                <p className="mx-6 text-[13px]  dark:text-white text-black">
                  Phone
                </p>
                <input
                  className="bg-[#c1bfbf] dark:bg-white text-black px-3 py-[6px] w-[472px] mx-6 mb-3 rounded-md"
                  type="text"
                />
                <p className="mx-6 text-[13px]  dark:text-white text-black">
                  Email
                </p>
                <input
                  className="bg-[#c1bfbf] dark:bg-white text-black px-3 py-[6px] w-[472px] mx-6 mb-3 rounded-md"
                  type="text"
                />
              </div>
              <div>
                <p className="mx-6 text-[13px]  dark:text-white text-black">
                  Industry
                </p>
                <input
                  className="bg-[#c1bfbf] dark:bg-white text-black px-3 py-[6px] w-[472px] mx-6 mb-3 rounded-md"
                  type="text"
                />
                <p className="mx-6 text-[13px]  dark:text-white text-black">
                  Sub Industry
                </p>
                <input
                  className="bg-[#c1bfbf] dark:bg-white text-black px-3 py-[6px] w-[472px] mx-6 mb-3 rounded-md"
                  type="text"
                />
                <p className="mx-6 text-[13px]  dark:text-white text-black">
                  Sub Sub Industry
                </p>
                <input
                  className="bg-[#c1bfbf] dark:bg-white text-black px-3 py-[6px] w-[472px] mx-6 mb-3 rounded-md"
                  type="text"
                />
                <p className="mx-6 text-[13px]  dark:text-white text-black">
                  Description
                </p>
                <input
                  className="bg-[#c1bfbf] dark:bg-white text-black px-3 py-[6px] w-[472px] mx-6 mb-3 rounded-md"
                  type="text"
                />
                <p className="mx-6 text-[13px]  dark:text-white text-black">
                  Revenue Range / Arr
                </p>
                <input
                  className="bg-[#c1bfbf] dark:bg-white text-black px-3 py-[6px] w-[472px] mx-6 mb-3 rounded-md"
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
          <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl">
            <p className="text-[26px] ranade mb-8 text-black dark:text-white">
              Raise Capital / Sell Business
            </p>
            <div className="text-[16px]">
              <div className="flex justify-between items-center">
                <div className="mx-6">
                  <p className="text-black dark:text-white">First Name</p>
                  <input
                    className="px-3  bg-[#c1bfbf] dark:bg-white text-black py-[6px] rounded-lg"
                    type="text"
                  />
                </div>
                <div className="mx-6">
                  <p className="text-black dark:text-white">Last Name</p>
                  <input
                    className="px-3 text-black py-[6px] rounded-lg bg-[#c1bfbf] dark:bg-white"
                    type="text"
                  />
                </div>
              </div>
              <p className="mt-6 mx-6 text-black dark:text-white">
                Company Name
              </p>
              <input
                className="px-3 text-black py-[6px] w-[550px] mx-6   rounded-lg bg-[#c1bfbf] dark:bg-white"
                type={"text"}
              />
              <br />
              <p className="mt-6 mx-6 text-black dark:text-white">
                Email Address
              </p>
              <input
                className="px-3 text-black py-[6px] w-[550px] mx-6 rounded-lg bg-[#c1bfbf] dark:bg-white"
                type={"text"}
              />
              <br />
              <p className="mt-6 mx-6 text-black dark:text-white">Password</p>
              <input
                className="bg-[#c1bfbf] dark:bg-white px-3 text-black py-[6px] w-[550px] mx-6 rounded-lg"
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
