import iphone from "../assets/Content1/iphone.png";
const Content1 = () => {
  return (
    <div
      id="about"
      className=" h-[598px] md:h-[600px] lg:h-[600px] bg-[#dda15e] text-center flex flex-col items-center relative overflow-hidden"
    >
      <div
        data-aos="fade-down"
        data-aos-duration="2000"
        className="md:absolute  md:right-16 lg:top-[20%] xl:w-[40%] lg:w-[45%] md:top-[10%] md:w-[53%] lg"
      >
        <p className="font-semibold text-[22px] text-[#FFFFFF] lg:text-[42px] lg:w-[447px] text-left lg:leading-[48px] pt-10 mx-10 font-jost md:text-[36px] md:w-[450px]">
          Helping you find stations with best per/unit cost.
        </p>
        <p className="font-normal text-xs w-[350px] md:text-lg text-left text-[#EDF3F0] md:w-[430px] mt-5 md:mt-1 lg:mt-5 mx-10 font-inter">
          The Map includes all charging stations in Finland met minim{" "}
          <br className="block md:hidden" /> mollit non deserunt ullamco est sit
          aliqua dolor do amet <br className="block md:hidden" /> sint. Velit
          officia consequat duis enim velit mollit.
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="absolute -bottom-[45%]  md:-bottom-[50%] lg:-bottom-[50%] md:-left-10 xl:left-10 lg:left-5"
      >
        <div className="w-[500px] h-[500px] md:w-[550px] md:h-[550px] lg:w-[600px] lg:h-[600px] xl:w-[667px] xl:h-[667px] bg-[#F0F0F0] rounded-full"></div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2500"
        className="absolute -bottom-0 translate-x-10  mx-auto md:left-24 lg:left-40"
      >
        <img
          className="w-full h-[350px] md:w-[310px] md:h-[360px] lg:w-[340px] lg:h-[400px] xl:w-[420px] xl:h-[480px]  object-cover"
          src={iphone}
          alt="Iphoneimg"
        />
      </div>
    </div>
  );
};

export default Content1;
