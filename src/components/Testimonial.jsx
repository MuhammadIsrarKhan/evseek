import testimonial from "../assets/Testimonial/testi.svg";
import testimonial2 from "../assets/Testimonial/testi2.svg";
import testimonial3 from "../assets/Testimonial/testi3.svg";
import Carousel from "./Carousel";
const Testimonial = () => {
  return (
    <div className="bg-[#F6FAF6] h-[800px] md:h-[1084px] flex flex-col items-center">
      <p className="md:text-[42px] text-[22px] leading-[31px] md:leading-[48px] font-jost font-semibold text-[#181B18] p-16 text-center md:w-[636px] w-[380px]">
        Trusted by <span className="text-[#21D57C]">30k+</span> Customers &
        Companies
      </p>

      <Carousel />

      <div className="hidden md:flex md:flex-row md:gap-10 md:w-[80%]">
        <div className="bg-[#FFFFFF] md:w-[372px] md:h-[443px] rounded-[10px] flex flex-col items-center">
          <img className="mt-[47px]" src={testimonial} alt="img1" />
          <p className="font-normal font-inter md:text-base text-center text-[#121D12] md:mx-5 md:mt-[16px]">
            “I just simply love the app that make my life easier! I have
            everything that I need while driving my EV, that allows save cost as
            well as plan my trip according the stations available.”
          </p>
          <p className="font-semibold font-inter md:text-base text-center text-[#121D12] md:mx-5 md:mt-[31px]">
            Jenny Wilson
          </p>
          <p className="font-normal font-inter md:text-base text-center text-[#525B52] md:mx-5 md:mt-3">
            Project Manager at Microsoft
          </p>
        </div>
        <div className="bg-[#FFFFFF] md:w-[372px] md:h-[443px] rounded-[10px] flex flex-col items-center shadow-[0px_34px_104px_rgba(18,22,28,0.1)]">
          <img className="mt-[47px]" src={testimonial2} alt="img1" />
          <p className="font-normal font-inter md:text-base text-center text-[#121D12] md:mx-5 md:mt-[16px]">
            “I just simply love the app that make my life easier! I have
            everything that I need while driving my EV, that allows save cost as
            well as plan my trip according the stations available.”
          </p>
          <p className="font-semibold font-inter md:text-base text-center text-[#121D12] md:mx-5 md:mt-[31px]">
            Jenny Wilson
          </p>
          <p className="font-normal font-inter md:text-base text-center text-[#525B52] md:mx-5 md:mt-3">
            Project Manager at Microsoft
          </p>
        </div>
        <div className="bg-[#FFFFFF] md:w-[372px] md:h-[443px] rounded-[10px] flex flex-col items-center">
          <img className="mt-[47px]" src={testimonial3} alt="img1" />
          <p className="font-normal font-inter md:text-base text-center text-[#121D12] md:mx-5 md:mt-[16px]">
            “I just simply love the app that make my life easier! I have
            everything that I need while driving my EV, that allows save cost as
            well as plan my trip according the stations available.”
          </p>
          <p className="font-semibold font-inter md:text-base text-center text-[#121D12] md:mx-5 md:mt-[31px]">
            Jenny Wilson
          </p>
          <p className="font-normal font-inter md:text-base text-center text-[#525B52] md:mx-5 md:mt-3">
            Project Manager at Microsoft
          </p>
        </div>
      </div>
      <p className="font-semibold text-xl w-[280px] h-[60px] font-jost md:text-[36px] md:leading-[46px] mt-0 text-center md:w-[578px] md:mt-16 text-[#181B18]">
        Get started with EVSeek. Find nearest charging stations.
      </p>
      <button className="bg-[#21D57C] w-[147px] h-[41px] rounded-lg md:w-[196px] md:h-[55px] md:mt-[73px] mt-[40px]">
        <p className="font-semibold text-xs md:text-base text-[#FFFFFF] font-inter">
          Download Our App
        </p>
      </button>
    </div>
  );
};

export default Testimonial;
