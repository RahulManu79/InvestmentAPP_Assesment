/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from "../Header/Header";
import leftfade from "../../images/Ellipse 22.png";
import rightfade from "../../images/Vector 9.png";
import arrowimg from "../../images/freepik--Arrow--inject-14.png";
import manimg from "../../images/freepik--character-2--inject-14.png";
import rocket from "../../images/freepik--Rocket--inject-7.png";
import img1 from "../../images/Group 14.png";
import bucket from "../../images/Vector.png";
import txt1 from "../../images/Advising.png";
import txt2 from "../../images/Consulting.png";
import txt3 from "../../images/Investment Banking.png";
import txt4 from "../../images/Investments.png";
import img2 from "../../images/image 33.png";
import Card1 from "../Cards/Card1";
import p1 from "../../images/p1.png";
import p2 from "../../images/p2.png";
import p3 from "../../images/p3.png";
import p4 from "../../images/p4.png";
import p5 from "../../images/p5.png";
import t1 from "../../images/Mask group.png";
import t2 from "../../images/Mask group-1.png";
import t3 from "../../images/Mask group-2.png";
import t4 from "../../images/Mask group-3.png";
import img3 from "../../images/image 13.png";
import img4 from "../../images/Vector 16.png";
import img5 from "../../images/glow.png";
import logo from "../../images/Bullean.png";
import Card2 from "../Cards/Card2";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="w-full z-40">
      <Header />
      {/* Hero Section */}
      <div className="relative w-full h-[100vh]">
        <div className=" absolute top-32 left-12 z-10">
          <p className="text-[61px] font-[700] bespoke dark:text-white text-black">
            Build your Future <br /> With Investments
          </p>
          <p className="text-[16px] font-[400] my-4 dark:text-white text-black">
            We are world wide investment company who are <br />
            committed to the principle of revenue maximitization & <br />
            reduction of the financial risks at investing.
          </p>
          <button className=" px-16 py-2 border border-white rounded-lg bg-gradient-to-r from-green-300 to-blue-800">
            Find
          </button>
          <p className="my-4 text-[16px] dark:text-white text-black">
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
        <p className="text-[34px] mb-3 font-semibold bespoke dark:text-white text-black">
          Why us?
        </p>
        <p className="w-[600px] text-[16px] dark:text-white text-black">
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
          <p className="my-8 text-[40px] bespoke font-semibold dark:text-white text-black ">
            Our Servises
          </p>
          <div className="w-[700px] text-[16px] mb-3 dark:text-white text-black">
            Economic services provided by the finance industry, which
            encompasses a broadrange of businesses that manage money, including
            credit unions.
          </div>
        </div>
      </div>

      <section className="ml-8 flex rounded-l-lg bg-[#BFBFBF] dark:bg-[#1B2037]">
        <div className="w-full p-6">
          <div className="p-3 rounded-full bg-gradient-to-l from-green-300 to-blue-600 w-fit">
            <img src={bucket} />
          </div>
          <p className="my-3 text-[26px] bespoke font-semibold dark:text-white text-black">
            Business planning
          </p>
          <p className="w-[650px] my-4 text-[16px] dark:text-white text-black">
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

      <section className=" w-[100vw] mt-32 text-[16px]  bg-[#BFBFBF] dark:bg-[#232945] flex flex-col justify-center items-center">
        <p className="mt-12 my-4 text-[36px] bespoke font-bold dark:text-white text-black">
          Business Listing
        </p>
        <p className="mb-16 dark:text-white text-black">
          We are the industry leader in establishing an innovation-friendly
          organization, developing new <br /> business models and new
          products.The company is on the cutting edge of new technologies.
        </p>
        <img className="absolute -top-24 left-0" src={rightfade} />
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
                  <Card1 />
                  <Card1 />
                  <Card1 />
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
                  <Card1 />
                  <Card1 />
                  <Card1 />
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
                  <Card1 />
                  <Card1 />
                  <Card1 />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="mx-auto font-semibold px-8 py-2 my-12 bg-gradient-to-r from-green-300 to-blue-600 rounded-xl border">
              See all Business
            </button>
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
        </div>
      </section>

      <section className="py-32 flex justify-evenly bg-white dark:bg-[#080C23]">
        <div className="w-[30vw]">
          <p className="text-[40px] my-4 bespoke font-bold dark:text-white text-black">
            If you are an investor
          </p>
          <p className="text-[16px] dark:text-white text-black">
            Investors put money into something with the hope of getting more
            money back down the road. Investors can be individual people buying
            and selling stocks for their personal wealth-building plans.
            However, an investor can also be an organization, such as a Private
            equity firm or a mutual fund.
            <br />
            The goals of investors are as varied as their investments. For some
            personal investors, the goal may be to grow a retirement fund, while
            larger institutional investors may try to build wealth for future
            business ventures.
          </p>

          <button className="font-semibold mt-6 px-8 py-2 bg-gradient-to-r from-green-300 to-blue-600 rounded-xl my-4 border text-[16px]">
            Get in Touch
          </button>
        </div>
        <div>
          <img src={img2} />
        </div>
      </section>
      <section className="text-center  bg-[#BFBFBF] dark:bg-[#050715] py-12">
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
        <img className="absolute -top-24 left-0" src={rightfade} />
      </section>

      <section className=" pt-12 pb-32 text-center flex flex-col items-center">
        <p className="text-[40px] mt-12 bespoke font-bold dark:text-white text-black">
          Transaction details
        </p>
        <p className="text-[14px] mt-6 mb-12 w-[480px] dark:text-white text-black">
          The information about a transaction that is able to be reviewed from
          multiple reports like Transaction Summary or Reconciliation reports.
        </p>

        {/* Carosoul2 */}
        <div
          id="carouselExampleIndicators"
          className="relative w-full"
          data-te-carousel-init
          data-te-carousel-slide
        >
          <div
            className="invisible absolute right-0 bottom-0 left-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
            data-te-carousel-indicators
          >
            <button
              type="button"
              data-te-target="#carouselExampleIndicators"
              data-te-slide-to="0"
              data-te-carousel-active
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-te-target="#carouselExampleIndicators"
              data-te-slide-to="1"
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-te-target="#carouselExampleIndicators"
              data-te-slide-to="2"
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            <div
              className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
              data-te-carousel-active
            >
              {/* custome code */}
              {/* Carosoul2 element */}
              <div className="flex justify-evenly w-full">
                <Card2 />
                <Card2 />
                <Card2 />
              </div>
            </div>
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              {/* custome code */}
              {/* Carosoul2 element */}
              <div className="flex justify-evenly w-full">
                <Card2 />
                <Card2 />
                <Card2 />
              </div>
            </div>
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              {/* custome code */}
              {/* Carosoul2 element */}
              <div className="flex justify-evenly w-full">
                <Card2 />
                <Card2 />
                <Card2 />
              </div>
            </div>
          </div>
          <button
            className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleIndicators"
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
            data-te-target="#carouselExampleIndicators"
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
          <img className="absolute -top-24 left-0 -z-10" src={rightfade} />
        </div>
      </section>

      {/* Our Team */}
      <section className="text-center bg-white dark:bg-[#1D1F2A] py-[100px]">
        <p className="text-[40px] bespoke font-bold dark:text-white text-black">
          Our Team
        </p>
        <p className="my-[40px] dark:text-white text-black">
          We work to make your business start effectively working for <br />{" "}
          you.Meet the financial and marketing specialists.
        </p>
        <div className="flex justify-evenly">
          <div>
            <img src={t1} />
            <p className="text-[20px] my-1 dark:text-white text-black">
              Mathew N.Jonson
            </p>
            <p className="text-[13px] text-green-400  ">Business consultant</p>
          </div>

          <div>
            <img src={t2} />
            <p className="text-[20px] my-1 dark:text-white text-black">
              Mathew N.Jonson
            </p>
            <p className="text-[13px] text-green-400">Business consultant</p>
          </div>

          <div>
            <img src={t3} />
            <p className="text-[20px] my-1 dark:text-white text-black">
              Mathew N.Jonson
            </p>
            <p className="text-[13px] text-green-400">Business consultant</p>
          </div>

          <div>
            <img src={t4} />
            <p className="text-[20px] my-1 dark:text-white text-black">
              Mathew N.Jonson
            </p>
            <p className="text-[13px] text-green-400">Business consultant</p>
          </div>
        </div>
      </section>

      {/* testimonial */}
      <section className="relative w-full h-[1100px]">
        <img className="absolute bottom-0 pt-32" src={img4} />

        <div className="absolute w-full">
          <div className="text-center my-[120px]">
            <p className="text-[40px] bespoke font-bold dark:text-white text-black">
              Testimonials
            </p>
            <p className="text-[16px] my-6 dark:text-white text-black ">
              Testimonials from customers who are satisfied with services that
              have been <br />
              effectivelyused in marketing for as long as marketing exists.
            </p>
            <div className="flex justify-center items-center py-6">
              {/* card */}
              <div className="w-[285px] h-[358px] mx-2 border border-slate-500 rounded-xl flex flex-col justify-evenly items-center">
                <img className="rounded-full" src={img3} />
                <div className="bg-green-500 w-[100px] h-[1px]" />
                <p className="text-[16px] dark:text-white text-black ">
                  I would recommend this company to people who plan to start
                  their own business. Thanks to the manager’s business planning
                  and advising our start up become more profitable.
                </p>
                <p className="text-[12px] text-green-400">
                  John grinwild,new york,NY
                </p>
              </div>

              {/* card */}
              <div className="w-[285px] h-[358px] mx-2 border border-slate-500 rounded-xl flex flex-col justify-evenly items-center">
                <img className="rounded-full" src={img3} />
                <div className="bg-green-500 w-[100px] h-[1px]" />
                <p className="text-[16px] dark:text-white text-black">
                  I would recommend this company to people who plan to start
                  their own business. Thanks to the manager’s business planning
                  and advising our start up become more profitable.
                </p>
                <p className="text-[12px] text-green-400">
                  John grinwild,new york,NY
                </p>
              </div>

              {/* card */}
              <div className="w-[285px] h-[358px] mx-2 border border-slate-500 rounded-xl flex flex-col justify-evenly items-center">
                <img className="rounded-full" src={img3} />
                <div className="bg-green-500 w-[100px] h-[1px]" />
                <p className="text-[16px] dark:text-white text-black">
                  I would recommend this company to people who plan to start
                  their own business. Thanks to the manager’s business planning
                  and advising our start up become more profitable.
                </p>
                <p className="text-[12px] text-green-400">
                  John grinwild,new york,NY
                </p>
              </div>

              {/* card */}
              <div className="w-[285px] h-[358px] mx-2 border border-slate-500 rounded-xl flex flex-col justify-evenly items-center">
                <img className="rounded-full" src={img3} />
                <div className="bg-green-500 w-[100px] h-[1px]" />
                <p className="text-[16px] dark:text-white text-black">
                  I would recommend this company to people who plan to start
                  their own business. Thanks to the manager’s business planning
                  and advising our start up become more profitable.
                </p>
                <p className="text-[12px] text-green-400">
                  John grinwild,new york,NY
                </p>
              </div>
            </div>
          </div>

          <Footer />
          <img
            className="absolute w-[680px] h-[680px] -top-52 -left-56 "
            src={img5}
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
