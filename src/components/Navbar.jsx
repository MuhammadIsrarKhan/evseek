import mainLogo from "../assets/navbar/mainLogo.png";
import hamburgerBtn from "../assets/navbar/hamburger.svg";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Navbar = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    // navbar start
    <div className="flex flex-row justify-between p-5 md:relative">
      <img
        data-aos="fade-right"
        className="md:absolute w-[105px] h-[20px] lg:w-[158px] lg:h-[30px] md:left-[10%] md:top-[90%]"
        src={mainLogo}
        alt="mainLogo"
      />
      <ul
        data-aos="fade-right"
        className="hidden md:flex md:flex-row z-50 md:absolute md:left-[30%] md:top-[90%] md:gap-8"
      >
        <li className="font-inter md:cursor-pointer  font-medium text-base text-[#161616]">
          Demos
        </li>
        <li className="font-inter md:cursor-pointer font-medium text-base text-[#161616]">
          About
        </li>
        <li className="font-inter md:cursor-pointer font-medium text-base text-[#161616]">
          Blog
        </li>
        <li className="font-inter md:cursor-pointer font-medium text-base text-[#161616]">
          Pages
        </li>
        <li className="font-inter md:cursor-pointer font-medium text-base text-[#161616]">
          Contact
        </li>
      </ul>
      <button
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        type="button"
        className="bg-[#21D57C] hidden z-0 md:z-50 md:inline-block md:absolute lg:right-[5%] md:right-[3%] lg:top-[60%] md:top-[70%] lg:w-[152px] lg:h-[50px] md:w-[130px] md:h-[35px] rounded-lg"
      >
        <p className="font-semibold text-xs md:text-base text-[#FFFFFF] font-inter">
          Download App
        </p>
      </button>
      <button>
        <img className="md:hidden" src={hamburgerBtn} alt="hamburger btn" />
      </button>
    </div>
  );
};

export default Navbar;
