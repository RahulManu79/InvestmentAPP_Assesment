import React from "react";
import Header from "../Header/Header";
import img1 from "../../images/Ellipse 22.png";
import p1 from "../../images/p1.png";
import p2 from "../../images/p2.png";
import p3 from "../../images/p3.png";
import p4 from "../../images/p4.png";
import p5 from "../../images/p5.png";
import HomeCard from "../Cards/Card1";
import img2 from "../../images/Vector 18.png";

const Investor = () => {
  return (
    <div className="">
      <Header />
      <div className="relative mx-20 py-32 h-[720px]">
        <img className="absolute -left-20 -top-24" src={img1} />
        <div className=" absolute w-[35vw]">
          <p className="text-[40px] bespoke dark:text-white text-black">
            If You Are Investor
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
              Get In Touch
            </button>
          </div>
        </div>
        <div></div>
      </div>

      <div className="p-6 px-[200px] mx-48 mb-20 text-center  bg-[#BFBFBF] dark:bg-[#1B2037] border border-slate-700 text-[16px] rounded-lg">
        <p className="text-[25px] my-6 dark:text-white text-black">Benefits</p>
        <p className="dark:text-white text-black">
          * We are 100% funded from our own platform with a team of over 300
          professional FinTech investors who all believe the future of finance
          looks very different from today.{" "}
        </p>

        <p className="mt-6 dark:text-white text-black">* Business Planning</p>

        <p className="my-6 dark:text-white text-black">
          * We are 100% funded from our own platform with a team of over 300
          professional FinTech investors who all believe the future of finance
          looks very different from today.{" "}
        </p>

        <p className="dark:text-white text-black">
          * We have built the largest global community of professional FinTech
          investors all investing online in the future of finance in over 50
          currencies.
        </p>
      </div>

      {/* partners */}
      <section className="text-center  bg-[#BFBFBF]  dark:bg-[#03050e] py-12">
        <p className="text-[40px] bespoke font-bold dark:text-white text-black">
          Our partners
        </p>
        <div className="flex justify-evenly">
          <img src={p1} />
          <img src={p2} />
          <img src={p3} />
          <img src={p4} />
          <img src={p5} />
        </div>
      </section>

      {/* business listing */}
      <section className=" relative w-[100vw] mt-24 mb-48 text-[16px]  flex flex-col justify-center items-center">
        <p className="mt-12 my-4 text-[36px] bespoke font-bold dark:text-white text-black">
          Business Listing
        </p>
        <p className="mb-16 dark:text-white text-black">
          We are the industry leader in establishing an innovation-friendly
          organization, developing new <br /> business models and new
          products.The company is on the cutting edge of new technologies.
        </p>

        {/* Carosoul1 */}

        <div
          id="carouselExampleControls"
          className="relative w-full"
          data-te-carousel-init
          data-te-carousel-slide
        >
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            <div
              className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
              data-te-carousel-active
            >
              {/* Custom code */}
              {/* corousel content */}
              <div className="flex flex-col items-center">
                <div className="w-full flex justify-evenly">
                  <HomeCard />
                  <HomeCard />
                  <HomeCard />
                </div>
              </div>
            </div>
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              {/* Custom code */}
              {/* corousel content */}
              <div className="flex flex-col items-center">
                <div className="w-full flex justify-evenly">
                  <HomeCard />
                  <HomeCard />
                  <HomeCard />
                </div>
              </div>
            </div>
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              {/* Custom code */}
              {/* corousel content */}
              <div className="flex flex-col items-center">
                <div className="w-full flex justify-evenly">
                  <HomeCard />
                  <HomeCard />
                  <HomeCard />
                </div>
              </div>
            </div>
          </div>
          <button
            className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleControls"
            data-te-slide="prev"
          >
            <span className="inline-block h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Previous
            </span>
          </button>
          <button
            className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleControls"
            data-te-slide="next"
          >
            <span className="inline-block h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Next
            </span>
          </button>
          <img className="absolute -bottom-[260px]" src={img2} />
        </div>
      </section>
    </div>
  );
};

export default Investor;
