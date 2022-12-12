import Navbar from "./Navbar";
import iphone from "../assets/hero/iphone.svg";

const Hero = () => {
  return (
    <div className="bg-[#F3FCF3]">
      <Navbar />
      {/* hero section  */}
      <div>
        <h1 className="font-semibold text-4xl text-[#121D17] text-center mt-[5vh]">
          Finding suitable charging stations!
        </h1>
        <p className="text-center font-normal text-sm mt-[3vh]">
          Our goal is to make it easy for new EV owners to charge with low
          electricity cost/unit.
        </p>
        <div className="text-center mt-3">
          <button className="bg-[#21D57C] w-[144px] h-[41px] p-3 rounded-lg">
            <p className="font-semibold text-xs text-[#FFFFFF]">
              Check our features
            </p>
          </button>
        </div>
        <div className="flex flex-col mt-5 text-center">
          {/* circle  */}
          <div className="w-[331px] h-[331px] z-10 bg-[#FFC947] rounded-[50%] absolute"></div>
          <img
            className="w-[186px] h-[385px] z-20"
            src={iphone}
            alt="iphoneimage absolute"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
