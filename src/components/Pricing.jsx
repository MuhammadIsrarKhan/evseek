const Pricing = () => {
  return (
    <div className="h-[1339px] md:h-[883px]  px-10 bg-[#FFFFFF] flex flex-col items-center">
      <p className="font-semibold md:text-5xl md:mt-10 text-[#000000] font-jost mt-5 leading-8">
        Pricing & Plan
      </p>
      <p className="font-normal text-xs md:text-lg text-[#52525B] mt-5 lg:mx-10 md:mx-28 font-inter text-center">
        Both a free trial and a free set of features for anyone who wants to use
        them. Choose your favourite plan.
      </p>
      <div className="h-full md:flex md:flex-row md:gap-4 md:justify-center md:mt-14">
        <div className="h-[25%]  w-[75vw] md:w-[33%] md:h-[60vh]  lg:w-[350px] lg:h-[483px] bg-[#F4F5F4] mt-10 rounded-lg flex flex-col  items-center relative">
          <p className="font-inter font-bold text-xs mt-[8%] md:mt-[36px]">
            BASIC
          </p>
          <p className="text-[#18181B] font-Space font-bold leading-[30px] md:text-2xl mt-[2%] md:mt-[27px] text-lg ">
            ${" "}
            <span className="text-xl leading-[61px] font-black text-[58px] inline-block -translate-x-1">
              29
            </span>
          </p>
          <p className="font-inter font-normal text-xs md:text-base leading-7 mx-[10%] text-center mt-[8%] md:mt-[50px] sm:mt-[6%] text-[#18181B]">
            Basic Main Features 250+ EV Charging Stations
          </p>
          <button className="text-[#12141D] font-bold text-xs md:text-base font-jost leading-5 bg-[#FFFFFF] w-[60vw] md:w-[200px] lg:w-[280px] h-[60px] rounded absolute bottom-4 md:bottom-16">
            Start 14 Days Free Trial
          </button>
        </div>
        <div className="h-[25%] w-[75vw]  md:w-[33%] md:h-[65vh]  lg:w-[350px] lg:h-[520px] md:shadow bg-[#0F2A0F] mt-[8%] md:mt-0 rounded-lg flex flex-col items-center relative">
          <p className="font-inter font-bold text-xs mt-[8%] text-[#FFFFFF] md:mt-[36px]">
            STANDARD
          </p>
          <p className="text-[#FFFFFF] font-Space font-bold leading-[30px] text-lg  md:text-2xl  mt-[2%] md:mt-[27px]">
            ${" "}
            <span className="text-xl leading-[61px] font-black text-[43px] md:text-[58px] inline-block -translate-x-1">
              29
            </span>
          </p>
          <p className="font-inter font-normal text-xs md:text-base leading-7 mx-[10%] text-center mt-[6%] text-[#FFFFFF] md:mt-[50px]">
            Standard Main Features 500+ EV Charging Stations Late Customer
            Support No Ads
          </p>
          <button className=" font-bold text-xs md:text-base font-jost leading-5 bg-[#21D57C] text-[#FFFFFF] w-[60vw] rounded absolute bottom-4 lg:w-[280px] h-[60px] md:bottom-16 md:w-[200px]">
            Start 14 Days Free Trial
          </button>
        </div>
        <div className="h-[25%]  w-[75vw]  md:w-[33%] md:h-[60vh]  lg:w-[350px] lg:h-[483px] bg-[#F4F5F4] mt-10 rounded-lg flex flex-col items-center relative">
          <p className="font-inter font-bold text-xs mt-[8%] md:mt-[36px]">
            PREMIUM
          </p>
          <p className="text-[#18181B] font-Space font-bold leading-[30px] text-lg md:text-2xl mt-[2%]  md:mt-[27px]">
            ${" "}
            <span className="text-xl leading-[61px] font-black text-[43px] md:text-[58px] inline-block -translate-x-1">
              99
            </span>
          </p>
          <p className="font-inter font-normal text-xs md:text-base leading-7 mx-[10%] text-center mt-[8%] md:mt-[50px] text-[#18181B]">
            All Modules 24/7 Live Support
          </p>
          <button className="text-[#12141D] font-bold text-xs font-jost leading-5 bg-[#FFFFFF] w-[60vw] rounded absolute bottom-4 lg:w-[280px] h-[60px] md:text-base md:bottom-16 md:w-[200px]">
            Start 14 Days Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
