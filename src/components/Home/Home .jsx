/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from "../Header/Header";
import leftfade from "../../images/Ellipse 22.png";
import rightfade from "../../images/Vector 9.png";
import arrowimg from "../../images/freepik--Arrow--inject-14.png";
import manimg from "../../images/freepik--character-2--inject-14.png";
import rocket from "../../images/freepik--Rocket--inject-7.png";
import img1 from "../../images/Group 14.png";

function Home() {
  return (
    <div className="w-full z-40">
      <Header />
      {/* Hero Section */}
      <div className="relative w-full h-[100vh]">
        <div className=" absolute top-32 left-12 z-10">
          <p className="text-[61px] font-[700] bespoke">
            Build your Future <br /> With Investments
          </p>
          <p className="text-[16px] font-[400] my-4">
            We are world wide investment company who are <br />
            committed to the principle of revenue maximitization & <br />
            reduction of the financial risks at investing.
          </p>
          <button className=" px-16 py-2 border border-white rounded-lg bg-gradient-to-r from-green-300 to-blue-800">
            Find
          </button>
          <p className="my-4 text-[16px]">
            Find the right buyers for your business
          </p>
        </div>
        <img className="absolute -top-24 left-0" src={leftfade} />
        <img
          className="relative z-10 top-56 -right-96  w-[90vh] ml-[16%] "
          src={arrowimg}
        />
        <img
          className="ml-[81%] z-30 w-[8vw] absolute bottom-[56%]"
          src={rocket}
        />
        <img
          className="ml-[60%] z-10 absolute bottom-[31%] w-[39vh]"
          src={manimg}
        />
        <img className="absolute -top-24 left-0" src={rightfade} />
      </div>

      <div className="text-center flex flex-col items-center ">
        <p className="text-[34px] mb-3 font-semibold bespoke">Why us?</p>
        <p className="w-[600px] text-[16px]">
          We are 100% funded from our own platform with a team of over 300
          professional FinTech investors who all believe the future of finance
          looks very different from today. Their experience and background
          covers most areas in finance, technology and startups.66,246
          professional investors are waiting to invest.
          <br />
          We have built the largest global community of professional FinTech
          investors all investing online in the future of finance in over 50
          currencies.
        </p>
        <img className="mt-12 w-[384px]" src={img1} />
        <div className="my-12">
          <p className="my-8 text-[40px] bespoke font-semibold">Our Servises</p>
          <div className="w-[700px] text-[16px] mb-3">
            Economic services provided by the finance industry, which
            encompasses a broadrange of businesses that manage money, including
            credit unions.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
