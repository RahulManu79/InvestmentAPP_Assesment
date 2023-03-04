import React from "react";
import img2 from "../../images/Vector 16.png";

const Footer = () => {
  return (
    <div className="relative h-[280px] w-full">
      <footer className="absolute z-10 bottom-0  w-full footerbg p-16 flex justify-center items-center">
        <div className="mx-12 dark:text-white text-black">
          <div>Home</div>
          <div className="my-2">Why us</div>
          <div>Services</div>
        </div>
        <div className="mx-12 dark:text-white text-black">
          <div>Constact us</div>
          <div className="my-2 dark:text-white text-black">
            Transaction Details
          </div>
          <div>Testimonials</div>
        </div>
        <div className="mx-12 dark:text-white text-black">
          <div>Business Listing</div>
          <div className="my-2 dark:text-white text-black">Our Team</div>
          <div>Our partners</div>
        </div>
        <div className="mx-12 dark:text-white text-black">
          <div>Contact Details</div>
          <div className="my-2 dark:text-white text-black">+805268296</div>
        </div>
      </footer>
      <img className="absolute z-0 bottom-0" src={img2} />
    </div>
  );
};

export default Footer;
