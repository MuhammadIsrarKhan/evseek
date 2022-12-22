import mainLogo from "../assets/navbar/mainLogo.png";
import hamburgerBtn from "../assets/navbar/hamburger.svg";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "tw-elements";
const Navbar = () => {
  const [drawerStatus, setDrawerStatus] = useState(false);
  // adding aos for animation
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  function crossBtnHandler() {
    setDrawerStatus((prev) => setDrawerStatus(!prev));
  }
  return (
    // navbar start
    <div className="flex flex-row justify-between p-5 md:relative">
      <img
        data-aos="fade-right"
        className="md:absolute w-[105px] h-[20px] lg:w-[158px] lg:h-[30px] md:left-[10%] md:top-[90%] z-20"
        src={mainLogo}
        alt="mainLogo"
      />
      <div className="bg-[#FFFFFF] md:w-[330px] md:h-[200px] lg:w-[374px] lg:h-[295px] absolute z-10 rounded-full md:rotate-[-40deg] lg:rotate-[-30deg] lg:-top-[210px] lg:left-6 xl:left-[4%] 2xl:left-[6%] md:-top-[150px] md:left-6"></div>
      {/* for medium and large screen nav-items */}
      <ul
        data-aos="fade-right"
        className="hidden md:flex md:flex-row z-50 md:absolute md:left-[30%] md:top-[90%] md:gap-8"
      >
        <li className="font-inter md:cursor-pointer  font-medium text-base text-[#161616]">
          <a href="#demo"> Demos</a>
        </li>
        <li className="font-inter md:cursor-pointer font-medium text-base text-[#161616]">
          <a href="#about">About</a>
        </li>
        <li className="font-inter md:cursor-pointer font-medium text-base text-[#161616]">
          <a href="#pricing">Pricing</a>
        </li>
        <li className="font-inter md:cursor-pointer font-medium text-base text-[#161616]">
          <a href="#testimonials">Testimonials</a>
        </li>
        <li className="font-inter md:cursor-pointer font-medium text-base text-[#161616]">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <button
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        type="button"
        className="hover:bg-[#15a85e] bg-[#21D57C] animate-bounce hidden z-[-1] md:z-50 md:inline-block md:absolute lg:right-[5%] md:right-[3%] lg:top-[60%] md:top-[70%] lg:w-[152px] lg:h-[50px] md:w-[130px] md:h-[35px] rounded-lg"
      >
        <p className="font-semibold text-xs md:text-base text-[#FFFFFF] font-inter">
          Download App
        </p>
      </button>

      <button
        onClick={crossBtnHandler}
        class="md:hidden inline-block px-6 py-2.5  text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg  focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
        type="button"
      >
        <img className="md:hidden" src={hamburgerBtn} alt="hamburger btn" />
      </button>
      {/* sidebar for small screens start  */}
      <div
        class={`${
          drawerStatus
            ? "translate-x-0 transition duration-300 ease-in-out"
            : "-translate-x-96 transition duration-300 ease-in-out"
        } space-x-2 flex md:hidden fixed top-0 left-0 z-[60]`}
      >
        <div className="">
          <div className="bg-white w-96 h-[100vh] absolute left-0 top-0 z-[60]">
            <div class="offcanvas-header flex items-center justify-between p-4">
              <img
                data-aos="fade-right"
                className="md:absolute w-[105px] h-[20px] lg:w-[158px] lg:h-[30px] md:left-[10%] md:top-[90%]"
                src={mainLogo}
                alt="mainLogo"
              />
              <button
                onClick={crossBtnHandler}
                type="button"
                className="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              ></button>
            </div>
            <div class="offcanvas-body flex-grow p-4 overflow-y-auto">
              <ul data-aos="fade-right" className=" flex flex-col z-50 gap-8">
                <li className="font-inter md:cursor-pointer  font-medium text-base text-[#161616]">
                  <a href="#demo"> Demos</a>
                </li>
                <li className="font-inter md:cursor-pointer font-medium text-base text-[#161616]">
                  <a href="#about">About</a>
                </li>
                <li className="font-inter md:cursor-pointer font-medium text-base text-[#161616]">
                  <a href="#pricing">Pricing</a>
                </li>
                <li className="font-inter md:cursor-pointer font-medium text-base text-[#161616]">
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li className="font-inter md:cursor-pointer font-medium text-base text-[#161616]">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* sidebar end  */}
    </div>
  );
};

export default Navbar;
