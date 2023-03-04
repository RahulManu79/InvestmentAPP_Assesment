import React from "react";
import tatalogo from "../../images/Tata-Group-logo-3840x2160 3.png";
const Card2 = () => {
  return (
    <div className="w-[250px] p-2 rounded-xl  bg-[#BFBFBF] dark:bg-slate-700 text-start">
      <img src={tatalogo} />
      <p className="text-[18px] font-semibold dark:text-white text-black">
        Tata Capital Housing Finance Ltd
      </p>
      <p className="text-[14px] text-[#929292] dark:text-slate-400">
        Lead Arranger
      </p>
      <p className="text-[12px] text-black dark:text-slate-400">
        February 2022
      </p>
      <div className="flex justify-center">
        <button className=" border text-[14px] rounded-2xl text-center dark:text-white text-black border-black dark:border-white px-3 py-1 my-3">
          INR 500 mn
        </button>
      </div>
    </div>
  );
};

export default Card2;
