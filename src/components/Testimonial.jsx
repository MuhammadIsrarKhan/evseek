import testimonial from "../assets/Testimonial/testi.svg";
import testimonial2 from "../assets/Testimonial/testi2.svg";
import testimonial3 from "../assets/Testimonial/testi3.svg";
import Carousel from "./Carousel";
const Testimonial = () => {
  return (
    <div
      id="testimonials"
      className="bg-[#F6FAF6] pb-5 h-[100vh] md:h-[1084px] flex flex-col items-center"
    >
      <p
        data-aos="zoom-in-down"
        data-aos-duration="2000"
        className="md:text-[42px] text-[22px] leading-[31px] md:leading-[48px] font-jost font-semibold text-[#181B18] p-16 pb-0 text-center md:w-[636px] w-[380px]"
      >
        Trusted by <span className="text-[#21D57C]">30k+</span> Customers &
        Companies
      </p>
      {/* carousel of testamonil for mobile devices  */}
      <Carousel />

      {/* testamonil section for desktops  */}
      <div className="hidden md:flex md:flex-row md:justify-center md:gap-10 md:w-[80%] lg:mt-[80px] md:mt-10">
        {/* 1  */}
        <div
          data-aos="zoom-in-right"
          data-aos-duration="2000"
          className="bg-[#FFFFFF] lg:w-[372px] lg:h-[443px] md:w-[372px] md:h-[520px] rounded-[10px] flex flex-col items-center"
        >
          <img className="mt-[47px]" src={testimonial} alt="img1" />
          <p className="font-normal font-inter md:text-base text-center text-[#121D12] md:mx-5 md:mt-[16px] xl:leading-[28px]">
            “I just simply love the app that <br /> make my life easier! I have{" "}
            <br />
            everything that I need while driving my EV, that allows save cost as
            well <br /> as plan my trip according the <br /> stations
            available.”
          </p>
          <div className="absolute bottom-[35px]">
            <p className="font-semibold font-inter md:text-base text-center text-[#121D12] md:mx-5 md:mt-[31px]">
              Jenny Wilson
            </p>
            <p className="font-normal font-inter md:text-base text-center text-[#525B52] md:mx-5 md:mt-3 xl:mt-[3px]">
              Project Manager at Microsoft
            </p>
          </div>
        </div>
        {/* 2 */}
        <div
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          className="bg-[#FFFFFF] lg:w-[372px] lg:h-[443px] md:w-[372px] md:h-[520px] rounded-[10px] flex flex-col items-center shadow-[0px_34px_104px_rgba(18,22,28,0.1)]"
        >
          <img className="mt-[47px]" src={testimonial2} alt="img1" />
          <p className="font-normal font-inter md:text-base text-center text-[#121D12] md:mx-5 md:mt-[16px] xl:leading-[28px]">
            “I really like that I can have all in one <br /> place: I can send
            find nearest <br /> stations and Plan my trip, I can have live chat,
            get push notifications on <br /> my screen so i don’t miss the{" "}
            <br />
            charging stations.”
          </p>
          <div className="absolute bottom-[35px]">
            <p className="font-semibold font-inter md:text-base text-center text-[#121D12] md:mx-5 md:mt-[31px]">
              Robert Fox
            </p>
            <p className="font-normal font-inter md:text-base text-center text-[#525B52] md:mx-5 md:mt-3 xl:mt-[3px]">
              Founder at Brain.co
            </p>
          </div>
        </div>
        {/* 3 */}
        <div
          data-aos="zoom-in-left"
          data-aos-duration="2000"
          className="bg-[#FFFFFF] lg:w-[372px] lg:h-[443px] md:w-[372px] md:h-[520px] rounded-[10px] flex flex-col items-center"
        >
          <img className="mt-[47px]" src={testimonial3} alt="img1" />
          <p className="font-normal font-inter md:text-base text-center text-[#121D12] md:mx-5 md:mt-[16px] xl:leading-[28px]">
            “Very easy to use and set up <br /> is simple. I can easily search{" "}
            <br />
            nearest EV charging stations <br /> in real-time. It also provides{" "}
            <br />
            many integrations.”
          </p>
          <div className="absolute bottom-[35px]">
            <p className="font-semibold font-inter md:text-base text-center text-[#121D12] md:mx-5 md:mt-[31px]">
              Kristin Watson
            </p>
            <p className="font-normal font-inter md:text-base text-center text-[#525B52] md:mx-5 md:mt-3 xl:mt-[3px]">
              User from Finland
            </p>
          </div>
        </div>
      </div>
      <p
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        className="font-semibold text-xl w-[280px] h-[60px] font-jost md:text-[36px] md:leading-[46px] mt-0 text-center md:w-[578px] md:mt-16 text-[#181B18]"
      >
        Get started with EVSeek. Find nearest charging stations.
      </p>
      <button
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        className="bg-[#21D57C] hover:bg-[#15a85e] md:hover:animate-wiggle w-[147px] h-[41px] rounded-lg md:w-[196px] md:h-[55px] md:mt-[73px] mt-[40px]"
      >
        <p className="font-semibold text-xs md:text-base text-[#FFFFFF] font-inter">
          Download Our App
        </p>
      </button>
    </div>
  );
};

export default Testimonial;
