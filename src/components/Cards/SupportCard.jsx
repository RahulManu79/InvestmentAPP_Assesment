import React from "react";

const SupportCard = () => {
  return (
    <div>
      <section>
        <div className="bg-white dark:bg-slate-900 ranade w-[273px] p-4 border border-slate-600 rounded-md">
          <p className="mb-2 text-[25px] bespoke dark:text-white text-black">
            Premium
          </p>
          <p className="mb-2 text-[16px] dark:text-white text-black">
            Our most advanced tools, unlimated contact,and priority
            support,built for teams.
          </p>
          <hr className="mb-2" />
          <p className="mb-2 text-[13px] dark:text-white text-black">
            Start At
          </p>
          <p className="mb-2 text-[25px] dark:text-white text-black">$23,000</p>
          <p className="mb-6 text-[13px] dark:text-white text-black">/month</p>
          <button className="mx-3 px-12 py-2 text-[13px] rounded-xl bg-gradient-to-r from-green-300 to to-blue-700">
            Buy Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default SupportCard;
