import iphone from "../assets/Content3/iphone.png";

const Content3 = () => {
  return (
    <div className=" h-[598px] md:h-[600px] lg:h-[600px] bg-[#FAFAFA] text-center flex flex-col items-center relative overflow-hidden">
      <div
        data-aos="fade-down"
        data-aos-duration="2000"
        className="md:absolute  md:right-16 lg:top-[20%] xl:w-[40%] lg:w-[45%] md:top-[10%] md:w-[53%] lg"
      >
        <p className="font-semibold text-[22px] text-[#12141D] lg:text-[42px] lg:w-[447px] text-left lg:leading-[48px] pt-10 mx-10 font-public md:text-[36px] md:w-[450px]">
          In-app chat between you and Charging Stations
        </p>
        <p className="font-medium hidden text-xs md:text-lg text-left text-[#12141D] md:w-[430px] mt-5 md:mt-1 lg:mt-5 mx-10 font-inter">
          Our app allows users to easily communicate with electric vehicle (EV)
          charging stations.
        </p>
        <p className="font-medium text-xs md:text-lg text-left text-[#12141D] md:w-[430px] mt-5 md:mt-1 lg:mt-5 mx-10 font-inter">
          Whether you're on the go and need to charge your EV or simply want to
          check the availability of a charging station, our app makes it easy to
          connect with the station and get the information you need.
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="absolute -bottom-[45%]  md:-bottom-[50%] lg:-bottom-[50%] md:-left-10 xl:left-10 lg:left-5"
      >
        <div className="w-[500px] h-[500px] md:w-[550px] md:h-[550px] lg:w-[600px] lg:h-[600px] bg-[#dda15e] rounded-full"></div>
      </div>
      <div className="absolute -bottom-[25%] md:left-0 lg:-bottom-[38%] lg:left-12  border-solid w-[400px] h-[400px] lg:w-[550px] lg:h-[550px] rounded-full  border-[#fafafa] border-[1px]"></div>

      <div className="absolute -bottom-[35%] md:-bottom-[30%] lg:-bottom-[35%] left-2 lg:left-20 md:left-5  border-solid w-[450px] md:w-[500px] h-[450px] lg:w-[550px] lg:h-[550px] rounded-full  border-[#fafafa] border-[1px]"></div>

      <div className="absolute -bottom-[35%] lg:-bottom-[35%] -left-16 md:-left-8 lg:-left-4  border-solid w-[450px] md:w-[500px] h-[450px] lg:w-[550px] lg:h-[550px] rounded-full  border-[#fafafa] border-[1px]"></div>

      <div
        data-aos="fade-up"
        data-aos-duration="2500"
        className="absolute -bottom-12 translate-x-10  mx-auto md:left-24 lg:left-40"
      >
        <img
          className="w-full h-[350px] md:w-[250px] md:h-[380px] lg:w-[300px] lg:h-[450px] xl:w-[300px] xl:h-[450px] -rotate-12 object-cover"
          src={iphone}
          alt="Iphoneimg"
        />
      </div>
    </div>
  );
};

export default Content3;
