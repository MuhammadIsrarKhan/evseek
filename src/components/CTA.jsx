import downloadApp from "../assets/fifth/downloadApp.svg";
import FirstBtn from "../assets/fifth/firstBtn.svg";
import SecBTn from "../assets/fifth/secBtn.svg";
const CTX = () => {
  return (
    <>
      <div
        id="contact"
        className="h-[429px] xl:h-[695px] bg-[#7FC37E] flex flex-col items-center"
      >
        <p className="text-[#FAFAFA] font-jost font-semibold text-[22px] md:text-[42px] tracking-wider mt-10 xl:mt-[100px]">
          Get latest news & updates
        </p>
        <p className="text-[#FFFFFF] font-normal text-xs md:text-lg md:w-[463px] leading-4 tracking-wider font-inter text-center mx-8 mt-5 md:leading-[30px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia duis.
        </p>
        <form className="relative w-[90vw] md:w-[578px] xl:w-[578px] xl:h-[70px] mt-8 xl:mt-20">
          <input
            type="search"
            className="block w-[90vw] md:w-[578px] xl:w-[578px] xl:h-[70px] focus:outline-none p-3  font-bold text-xs   rounded-lg xl:rounded-2xl bg-[#F4F4F4] caret-[#7FC37E] xl:text-base"
            placeholder="Enter your email address"
            required
          />
          <span className="absolute cursor-pointer top-1 xl:top-[10px] xl:right-4 right-3 text-center  bg-[#FFC947] text-base shadow text-[#383120] focus:outline-none font-semibold rounded-lg xl:rounded-[10px] translate-x-2  px-3  py-1 xl:w-[163px] xl:h-[52px]">
            <span className="xl:mt-3 xl:inline-block">Subscribe Now</span>
          </span>
        </form>
        <p className="text-[#FFFFFF] font-normal text-xs md:text-sm leading-4 tracking-wider font-inter text-center mx-8 mt-2 xl:mt-5">
          No ads. No trails. No commitments
        </p>
        <div className="flex flex-row mt-20 md:mt-5 xl:mt-[60px] gap-16 xl:gap-48">
          <div className="flex flex-col items-center gap-3 md:gap-1">
            <p className="font-jost font-semibold text-xl md:text-4xl text-[#FFFFFF] leading-3">
              6+
            </p>
            <p className="font-jost font-medium text-xs md:text-xl text-[#FFFFFF] leading-3">
              Years in Business
            </p>
            <p className="font-jost font-normal text-center text-xs md:text-base text-[#FFFFFF] leading-3">
              Creating the successful path
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 md:gap-1">
            <p className="font-jost font-semibold text-xl md:text-4xl text-[#FFFFFF] leading-3">
              482K+
            </p>
            <p className="font-jost font-medium text-xs text-[#FFFFFF] md:text-xl leading-3">
              Years in Business
            </p>
            <p className="font-jost font-normal text-center text-xs md:text-base text-[#FFFFFF] leading-3">
              Creating the successful path
            </p>
          </div>
        </div>
      </div>
      <div className="h-[295px] bg-[#F3FDF3] flex flex-col md:flex-row md:gap-5 md:justify-between md:p-10 items-center">
        <div
          data-aos="zoom-in-right"
          data-aos-duration="2000"
          className="md:w-[470px]"
        >
          <img
            className="w-[80vw] h-[15vh] mt-5 mx-auto"
            src={downloadApp}
            alt="download app"
          />
          <p className="font-inter -translate-y-2 mx-5 md:mx-0 md:text-left font-normal text-xs md:text-lg text-[#525B52] leading-5 text-center">
            Our goal is to make it easy for new EV owners to charge with low
            electricity cost/unit.
          </p>
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-duration="2000"
          className="flex flex-row justify-between gap-5 mt-9"
        >
          <button>
            <img src={FirstBtn} alt="FirstBtn" />
          </button>
          <button>
            <img src={SecBTn} alt="FirstBtn" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CTX;
