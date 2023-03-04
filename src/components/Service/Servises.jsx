import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import bucket from "../../images/Vector.png";
import txt1 from "../../images/Advising.png";
import txt2 from "../../images/Consulting.png";
import txt3 from "../../images/Investment Banking.png";
import txt4 from "../../images/Investments.png";
import img1 from "../../images/Ellipse 22.png";

const Services = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <Header toggle={toggle} setToggle={setToggle} />
      <div className="relative mx-20 py-32 h-[720px]">
        <img className="absolute -left-20 -top-24" src={img1} />
        <div className=" absolute w-[35vw]">
          <p className="text-[40px] bespoke  dark:text-white text-black">
            Our Servises
          </p>
          <p className="text-[16px] mt-6 ranade  dark:text-white text-black">
            We are 100% funded from our own platform with a team of over 300
            professional FinTech investors who all believe the future of finance
            looks very different from today. Their experience and background
            covers most areas in finance, technology and startups.66,246
            professional investors are waiting to invest.
          </p>

          <p className="text-[16px] my-6 ranade  dark:text-white text-black">
            We have built the largest global community of professional FinTech
            investors all investing online in the future of finance in over 50
            currencies.
          </p>

          <div className="flex text-[16px]">
            <button
              onClick={() => setToggle(true)}
              className=" px-14 py-2 border border-white rounded-lg bg-gradient-to-r from-green-300 to-blue-800"
            >
              Know More
            </button>
            <button className="ml-4 px-8 py-2 border border-white rounded-lg  dark:text-white text-black  ">
              Find the Package
            </button>
          </div>
        </div>
        <div></div>
      </div>

      {/* business planning */}
      <section className="ml-8 mb-28 flex rounded-l-lg  bg-[#BFBFBF] dark:bg-[#1B2037]">
        <div className="w-full p-6">
          <div className="p-3 rounded-full bg-gradient-to-l from-green-300 to-blue-600 w-fit">
            <img src={bucket} />
          </div>
          <p className="my-3 text-[26px] bespoke font-semibold  dark:text-white text-black">
            Business planning
          </p>
          <p className="w-[650px] my-4 text-[16px]  dark:text-white text-black">
            We are 100% funded from our own platform with a team of over 300
            professional FinTech investors who all believe the future of finance
            looks very different from today. Their experience and background
            covers most areas in finance, technology and startups.66,246
            professional investors are waiting to invest. We have built the
            largest global community of professional FinTech investors all
            investing online in the future of finance in over 50 currencies.
          </p>
        </div>
        <div className="px-2 border-l rounded-md">
          <img className="mt-8" src={txt1} />
        </div>
        <div className="px-2 border-l rounded-md">
          <img className="mt-8" src={txt2} />
        </div>
        <div className="px-2 border-l rounded-md">
          <img className="mt-8" src={txt3} />
        </div>
        <div className="px-2 border-l rounded-md">
          <img className="mt-8" src={txt4} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
