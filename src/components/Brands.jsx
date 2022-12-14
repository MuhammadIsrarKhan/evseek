import Tesla from "../assets/Brands/tesla.svg";
import Bramo from "../assets/Brands/brammo.svg";
import Nio from "../assets/Brands/nio.svg";
import Drako from "../assets/Brands/drako.svg";
import bestPrice from "../assets/Brands/bestPrice.svg";
import quik from "../assets/Brands/quik.svg";
import ev from "../assets/Brands/ev.svg";
import support from "../assets/Brands/support.svg";
const Brands = () => {
  return (
    <>
      {/* Brands and feature section here  */}
      <div className="bg-[#FFFFFF] h-auto ">
        <p className="font-bold text-base md:text-xl text-[#181B18] text-center pt-[10vh] font-inter mx-20">
          Trusted by nearly all top EV car companies
        </p>
        <div className="flex flex-row justify-between lg:justify-center lg:gap-16 touch-pan-x overflow-x-auto gap-5 items-center mx-12 mt-10">
          <img src={Tesla} alt="Tesla icon" />
          <img src={Bramo} alt="Tesla icon" />
          <img src={Nio} alt="Tesla icon" />
          <img src={Drako} alt="Tesla icon" />
        </div>
        <div className="flex justify-center align-middle items-center mt-16">
          <hr className="w-[50vw] text-center" />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-2xl md:text-4xl lg:text-[42px] lg:leading-[46px] text-[#000000] text-center mx-[10vw] mt-10 font-jost tracking-wider">
            350 thousands Customers are using EVSeek
          </p>
          <div className="md:flex md:flex-row p-[10%] md:pt-0 md:mt-[80px] ">
            <div>
              <div className="flex flex-row gap-5 mt-8 mx-5">
                <img
                  className=" w-[8vw] h-[8vh]"
                  src={bestPrice}
                  alt="bestprice icon"
                />
                <div className="flex flex-col gap-3">
                  <p className="font-bold text-sm md:text-[18px] text-[#000000] font-Plus">
                    Get Best Price
                  </p>
                  <p className="font-normal text-xs md:text-base md:leading-6 text-[#545954] font-Plus">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-5 mt-12 mx-5">
                <img
                  className=" w-[8vw] h-[8vh]"
                  src={quik}
                  alt="bestprice icon"
                />
                <div className="flex flex-col gap-3">
                  <p className="font-bold text-sm text-[#000000] font-Plus md:text-[18px]">
                    Get Best Price
                  </p>
                  <p className="font-normal text-xs text-[#545954] font-Plus md:text-base md:leading-6">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row gap-5 mt-12 mx-5">
                <img
                  className=" w-[8vw] h-[8vh]"
                  src={ev}
                  alt="bestprice icon"
                />
                <div className="flex flex-col gap-3">
                  <p className="font-bold text-sm text-[#000000] font-Plus md:text-[18px]">
                    Get Best Price
                  </p>
                  <p className="font-normal text-xs text-[#545954] font-Plus md:text-base md:leading-6">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
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
                    Get Best Price
                  </p>
                  <p className="font-normal text-xs text-[#545954] font-Plus md:text-base md:leading-6">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
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
