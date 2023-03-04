import React from "react";

import img2 from "../../images/peter-england-logo 2.png";
const Card1 = () => {
  return (
    <div>
      <div className="bg-white  dark:bg-[#2B2D37] border border-slate-600 w-[340px] rounded-lg p-3">
        <img className="" src={img2}></img>
        <p className="font-semibold dark:text-white text-black">
          Peter England (ABFRL), Established in 1997, 1000 Franchisees, Mumbai
          Headquartered
        </p>
        <p className="text-[14px]  text-black dark:text-[#929292] py-3 ">
          Peter England was founded more than a century ago in Londonderry,
          Ireland to provide British soldiers with fine Khaki trousers...
        </p>
        <hr />
        <div className="flex justify-between my-1 text-[#FFFFFF]">
          <p className="dark:text-white text-black">
            Expanding in
            <i className=" dark:text-white text-black bi bi-geo-alt"></i> india
          </p>
          <p className="dark:text-white text-black">
            <i className="text-yellow-400 bi bi-star-fill"></i> 8.5
          </p>
        </div>
        <hr />
        <div className="text-[14px] mt-2 flex justify-between items-center dark:text-white text-black">
          <div>
            <p className="dark:text-white text-black">Investment require</p>
            <p className="dark:text-white text-black">
              <span className="text-[10px] dark:text-white text-black ">
                INR
              </span>{" "}
              10 - 15 Lac
            </p>
          </div>
          <button className="text-[16px] border font-semibold border-blue-600 px-5 py-1 rounded-full ">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card1;
