/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from "../Header/Header";
import img1 from "../../images/Ellipse 22.png";
import SupportCard from "../Cards/SupportCard";
import Footer from "../Footer/Footer";

const Support = () => {
  return (
    <div>
      <Header />
      <div className="relative mx-20 py-20 h-[720px]">
        <img className="absolute -left-20 -top-24" src={img1} />
        <div className=" absolute w-[35vw]">
          <p className="text-[40px] bespoke dark:text-white text-black">
            Raise Support
          </p>
          <p className="text-[16px] mt-6 ranade dark:text-white text-black">
            We are 100% funded from our own platform with a team of over 300
            professional FinTech investors who all believe the future of finance
            looks very different from today. Their experience and background
            covers most areas in finance, technology and startups.66,246
            professional investors are waiting to invest.
          </p>

          <p className="text-[16px] my-6 ranade dark:text-white text-black">
            We have built the largest global community of professional FinTech
            investors all investing online in the future of finance in over 50
            currencies.
          </p>

          <div className="flex text-[16px]">
            <button className=" px-6 py-2 border border-white rounded-lg bg-gradient-to-r from-green-300 to-blue-800">
              List your Business for Free
            </button>
          </div>
        </div>
        <div></div>
      </div>

      <div className="flex border border-slate-700 text-[25px] mx-20 mb-12 rounded-lg p-6 bg-[#FFFFFF] dark:bg-slate-900 justify-between items-center">
        <div className="mx-16  dark:text-white text-[#606060]">
          Capital Raise Support
        </div>
        <div className="mx-16 dark:text-white text-[#606060]">
          Deal making/Capital raise
        </div>
      </div>

      <section className="flex justify-evenly pb-36">
        <SupportCard />
        <SupportCard />
        <SupportCard />
        <SupportCard />
      </section>

      <Footer />
    </div>
  );
};

export default Support;
