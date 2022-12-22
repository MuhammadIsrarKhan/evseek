const Pricing = () => {
  return (
    <div
      id="pricing"
      className="h-[1339px] md:h-[883px]  px-10 bg-[#FFFFFF] flex flex-col items-center"
    >
      <p
        data-aos="fade-down"
        data-aos-duration="1500"
        className="font-semibold md:text-5xl md:mt-10 text-[#000000] font-jost mt-5 leading-8"
      >
        Pricing & Plans
      </p>
      <p
        data-aos="fade-down"
        data-aos-duration="1500"
        className="font-normal text-xs md:text-lg text-[#52525B] mt-5 lg:mx-10 md:mx-28 font-inter text-center"
      >
        Both a free trial and a free set of features for anyone who wants to use
        them. Choose your favourite plan.
      </p>
      {/* pricing cards start  */}
      <div className="h-full md:flex md:flex-row md:gap-4 md:justify-center md:mt-14">
        {/* 1  */}
        <div
          // data-aos="fade-up"
          // data-aos-duration="1500"
          className="h-[25%] Grow-cards w-[75vw] md:w-[33%] md:h-[60vh]  lg:w-[350px] lg:h-[483px] xl:w-[350px] xl:h-[429px] bg-[#F4F5F4] mt-10 rounded-lg flex flex-col  items-center relative"
        >
          <p className="font-inter font-bold text-xs mt-[8%] md:mt-[36px]">
            BASIC
          </p>
          <p className="text-[#18181B] font-Space font-bold leading-[30px] md:text-2xl mt-[2%] md:mt-[27px] text-lg ">
            ${" "}
            <span className="text-xl leading-[61px] font-black text-[58px] inline-block -translate-x-1">
              29
            </span>
          </p>
          <p className="font-inter font-normal text-xs md:text-base leading-7 mx-[10%] text-center mt-[8%] md:mt-[50px] sm:mt-[6%] text-[#18181B] xl:leading-[35px]">
            Basic Main Features <br /> 250+ EV Charging Stations
          </p>
          <button className="text-[#12141D] w-[202.5px] h-[41.25px] md:hover:animate-wiggle font-bold text-xs md:text-base font-jost leading-5 bg-[#FFFFFF] sm:w-[60vw] md:w-[200px] lg:w-[280px] sm:h-[60px] rounded-[5px] absolute bottom-4 md:bottom-16">
            Start 14 Days Free Trial
          </button>
        </div>
        {/* 2 */}
        <div
          // data-aos="fade-up"
          // data-aos-duration="1500"
          className="h-[25%] w-[75vw] Grow-cards  md:w-[33%] md:h-[65vh]  lg:w-[350px] lg:h-[520px] xl:w-[350px] xl:h-[483px] md:shadow bg-[#0F2A0F] mt-[8%] xl:-translate-y-[15px] md:mt-0 rounded-lg flex flex-col items-center relative"
        >
          <p className="font-inter font-bold text-xs mt-[8%] text-[#FFFFFF] md:mt-[36px]">
            STANDARD
          </p>
          <p className="text-[#FFFFFF] font-Space font-bold leading-[30px] text-lg  md:text-2xl  mt-[2%] md:mt-[27px]">
            ${" "}
            <span className="text-xl leading-[61px] font-black text-[43px] md:text-[58px] inline-block -translate-x-1">
              29
            </span>
          </p>
          <p className="font-inter font-normal text-xs md:text-base leading-7 mx-[10%] text-center mt-[6%] text-[#FFFFFF] md:mt-[50px] xl:leading-[35px]">
            Standard Main Features <br /> 500+ EV Charging Stations <br /> Late
            Customer Support <br /> No Ads
          </p>
          <button className="md:hover:animate-wiggle w-[202.5px] h-[41.25px] font-bold text-xs md:text-base font-jost leading-5 bg-[#21D57C] text-[#FFFFFF] sm:w-[60vw] rounded-[5px] absolute bottom-4 lg:w-[280px] sm:h-[60px] md:bottom-16 md:w-[200px]">
            Start 14 Days Free Trial
          </button>
        </div>
        {/* 3 */}
        <div
          // data-aos="fade-up"
          // data-aos-duration="1500"
          className="h-[25%] Grow w-[75vw] Grow-cards  md:w-[33%] md:h-[60vh]  lg:w-[350px] lg:h-[483px] xl:w-[350px] xl:h-[429px] bg-[#F4F5F4] mt-10 rounded-lg flex flex-col items-center relative"
        >
          <p className="font-inter font-bold text-xs mt-[8%] md:mt-[36px]">
            PREMIUM
          </p>
          <p className="text-[#18181B] font-Space font-bold leading-[30px] text-lg md:text-2xl mt-[2%]  md:mt-[27px]">
            ${" "}
            <span className="text-xl leading-[61px] font-black text-[43px] md:text-[58px] inline-block -translate-x-1">
              99
            </span>
          </p>
          <p className="font-inter font-normal text-xs md:text-base leading-7 mx-[10%] text-center mt-[8%] md:mt-[50px] text-[#18181B] xl:leading-[35px]">
            All Modules <br /> 24/7 Live Support
          </p>
          <button className="text-[#12141D] w-[202.5px] h-[41.25px] md:hover:animate-wiggle font-bold text-xs font-jost leading-5 bg-[#FFFFFF] sm:w-[60vw] rounded-[5px] absolute bottom-4 lg:w-[280px] sm:h-[60px] md:text-base md:bottom-16 md:w-[200px]">
            Start 14 Days Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
