import Tesla from "../assets/Brands/tesla.png";
import Bramo from "../assets/Brands/brammo.png";
import Nio from "../assets/Brands/nio.png";
import Drako from "../assets/Brands/drako.png";
import bestPrice from "../assets/Brands/bestPrice.svg";
import quik from "../assets/Brands/quik.svg";
import ev from "../assets/Brands/ev.svg";
import support from "../assets/Brands/support.svg";
import CarouselBrands from "./CarouselBrands";
const Brands = () => {
  return (
    <>
      {/* Brands and feature section here  */}
      <div id="demo" className="bg-[#FFFFFF] h-auto">
        <p
          data-aos="zoom-in"
          className="font-bold text-base md:text-xl text-[#181B18] text-center pt-[10vh] font-inter mx-20"
        >
          Trusted by nearly all top EV car companies
        </p>
        <CarouselBrands />
        {/* brands images  */}
        <div
          data-aos="zoom-in"
          className="hidden md:flex md:flex-row md:justify-center lg:justify-center lg:gap-16 touch-pan-x overflow-x-auto gap-5 items-center mx-12 mt-10"
        >
          <img
            className="lg:w-[188px] lg:h-[46px] md:w-[150px] md:h-[30px]"
            src={Tesla}
            alt="Tesla icon"
          />
          <img
            className="lg:w-[264px] lg:h-[58px] md:w-[160px] md:h-[40px]"
            src={Bramo}
            alt="Tesla icon"
          />
          <img
            className="lg:w-[125px] lg:h-[47px] md:w-[120px] md:h-[30px]"
            src={Nio}
            alt="Tesla icon"
          />
          <img
            className="lg:w-[200px] lg:h-[38px]  md:w-[120px] md:h-[30px]"
            src={Drako}
            alt="Tesla icon"
          />
        </div>
        {/* brand images end  */}
        {/* feature section start  */}
        <div className="flex justify-center align-middle items-center mt-16">
          <hr className="w-[50vw] text-center" />
        </div>
        <div className="flex flex-col">
          <p
            data-aos="zoom-out"
            className="font-semibold text-2xl md:text-4xl lg:text-[42px] lg:leading-[46px] text-[#000000] text-center mx-[10vw] mt-10 font-jost tracking-wider"
          >
            What we offer?
          </p>
          <div className="md:flex md:flex-row p-[4%] md:p-[10%] md:pt-0 md:mt-[80px] ">
            <div data-aos="zoom-in-right">
              <div className="flex flex-row gap-5 mt-12 mx-5">
                <img
                  className=" w-[8vw] h-[8vh]"
                  src={bestPrice}
                  alt="bestprice icon"
                />
                <div className="flex flex-col gap-3">
                  <p className="font-bold text-sm md:text-[18px] text-[#000000] font-Plus">
                    Get Best Price
                  </p>
                  <p className="font-normal w-[284px] md:w-auto text-xs md:text-base md:leading-6 text-[#545954] font-Plus">
                    Amet minim mollit non deserunt ullamco est{" "}
                    <br className="hidden md:block" /> sit aliqua dolor do amet
                    sint. Velit officia <br className="hidden md:block" />{" "}
                    consequat duis enim velit mollit.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-5 mt-12 mx-5">
                <img
                  className=" w-[8vw] h-[8vh]"
                  src={ev}
                  alt="bestprice icon"
                />
                <div className="flex flex-col gap-3">
                  <p className="font-bold text-sm text-[#000000] font-Plus md:text-[18px]">
                    120+ EV Stations in Finland
                  </p>
                  <p className="font-normal w-[284px] md:w-auto text-xs md:text-base md:leading-6 text-[#545954] font-Plus">
                    Amet minim mollit non deserunt ullamco est{" "}
                    <br className="hidden md:block" /> sit aliqua dolor do amet
                    sint. Velit officia <br className="hidden md:block" />{" "}
                    consequat duis enim velit mollit.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in-left">
              <div className="flex flex-row gap-5 mt-12 mx-5">
                <img
                  className=" w-[8vw] h-[8vh]"
                  src={quik}
                  alt="bestprice icon"
                />
                <div className="flex flex-col gap-3">
                  <p className="font-bold text-sm text-[#000000] font-Plus md:text-[18px]">
                    Get Your Station Quickly
                  </p>
                  <p className="font-normal w-[284px] md:w-auto text-xs md:text-base md:leading-6 text-[#545954] font-Plus">
                    Amet minim mollit non deserunt ullamco est{" "}
                    <br className="hidden md:block" /> sit aliqua dolor do amet
                    sint. Velit officia <br className="hidden md:block" />{" "}
                    consequat duis enim velit mollit.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-5 mt-12 mx-5">
                <img
                  className=" w-[8vw] h-[8vh]"
                  src={support}
                  alt="bestprice icon"
                />
                <div className="flex flex-col gap-3">
                  <p className="font-bold text-sm text-[#000000] font-Plus md:text-[18px]">
                    Superior Customer Support
                  </p>
                  <p className="font-normal w-[284px] md:w-auto text-xs md:text-base md:leading-6 text-[#545954] font-Plus">
                    Amet minim mollit non deserunt ullamco est{" "}
                    <br className="hidden md:block" /> sit aliqua dolor do amet
                    sint. Velit officia <br className="hidden md:block" />{" "}
                    consequat duis enim velit mollit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
