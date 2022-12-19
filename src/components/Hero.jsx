import Navbar from "./Navbar";
// import iphone from "../assets/hero/iphone.svg";
import iphone from "../assets/hero/lgIphone.png";
import star from "../assets/hero/star.svg";
import smallImg from "../assets/hero/smallImg.png";
import Avatar from "../assets/hero/avatar.svg";
const Hero = () => {
  return (
    <>
      <div className="bg-[#F3FCF3] pb-[5%] md:h-[800px]">
        <Navbar />
        {/* hero section  */}
        <div className="md:flex md:flex-row relative md:ml-[10%]">
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            className="md:mt-[5%]"
          >
            {" "}
            <h1 className="font-semibold lg:w-[90%] md:w-[100%]  text-4xl md:text-[50px] md:leading-[60px] font-jost text-[#121D17] text-center mt-[10vh] mx-4 md:mx-0 md:text-left">
              Finding suitable charging stations!
            </h1>
            <p className="text-center font-normal text-sm md:text-xl mt-[5vh] md:mt-5 mx-4 font-inter lg:w-[60%] md:w-[80%] md:mx-0 md:text-left text-[#121D17]">
              Our goal is to make it easy for new EV owners to charge with low
              electricity cost/unit.
            </p>
            <div className="text-center  md:absolute lg:mt-4 md:mt-3 mt-5">
              <button className="bg-[#21D57C] hover:bg-[#15a85e] hover:animate-wiggle w-[144px] h-[41px] md:w-[193px] md:h-[55px] p-3 rounded-lg">
                <p className="font-semibold text-xs md:text-base text-[#FFFFFF] font-inter">
                  Start Free Now
                </p>
              </button>
            </div>
            <div className="md:flex md:flex-row hidden md:mt-[20%] md:gap-1 ">
              <img className="Grow" src={star} alt="rating" />
              <img className="Grow" src={star} alt="rating" />
              <img className="Grow" src={star} alt="rating" />
              <img className="Grow" src={star} alt="rating" />
              <img className="Grow" src={star} alt="rating" />
            </div>
            <p className="hidden md:mt-2 md:inline-block md:w-[60%] font-inter font-normal leading-7 text-[#3F4643] md:text-base">
              “You made it so simple. The App is so much faster and easier to
              navigate through. It is also very helpful in saving the money.”
            </p>
            <div className="hidden md:mt-3 md:flex md:flex-row text-base font-medium leading-5 ">
              <img src={Avatar} alt="avatar" className="rounded-full w-10 " />
              <div className=" ml-3 flex flex-col">
                <p className="font-semibold font-jost tracking-wider text-base text-[#181B1A]">
                  Israr Khan
                </p>
                <p className="text-[#525B57] -translate-y-1 font-jost font-normal text-[14px]">
                  From Gullimam Tank
                </p>
              </div>
            </div>
          </div>
          {/* right side mobile image with cicle  */}
          <div
            className="flex flex-col mt-[70px] content-center justify-center items-center relative md:right-[5%] md:w-[618px] md:h-[710px] "
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <div className="w-[331.87px] h-[331.87px] lg:w-[552px] lg:h-[552px] bg-[#dda15e] rounded-full"></div>
            <img
              className="w-[206.72px] h-[368.22px] md:w-[200px] md:h-[370px] lg:w-[360.2px] lg:h-[600.17px] absolute -top-[33px] md:top-[155px] lg:top-[31.5px] -rotate-2 lg:rotate-[1deg] translate-x-1 lg:translate-x-[8px] "
              src={iphone}
              alt="iphoneimage absolute"
            />
            <img
              className="w-[175.07px] h-[130.07px] lg:w-[295px] lg:h-[210px]  absolute lg:-translate-x-40 -translate-y-2 lg:-translate-y-5 -translate-x-24"
              src={smallImg}
              alt="iphoneimage absolute"
            />
          </div>
        </div>
      </div>
      {/* end of hero section  */}
    </>
  );
};

export default Hero;
