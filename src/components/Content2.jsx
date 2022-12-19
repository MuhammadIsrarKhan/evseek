import rating from "../assets/Content2/rating.svg";
import status from "../assets/Content2/status.svg";
import iphone from "../assets/Content2/iphone.png";
import topOnIphone from "../assets/Content2/topofiphone.png";

const Content2 = () => {
  return (
    <div className="h-[709px] md:h-[600px] bg-[#FFFFFF] lg:h-[600px] text-center flex flex-col items-center relative overflow-hidden">
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className="md:absolute md:left-0 lg:top-[15%] lg:ml-[52px] md:top-[10%]  md:w-[50%]"
      >
        <p className="font-semibold text-[22px]  text-left  text-[#000000] pt-10 mx-6 font-jost md:w-[416px] md:text-left md:leading-[48px] md:text-[32px] lg:text-[42px]">
          EVSeek has never been more reliable;
        </p>

        <div className="flex flex-row gap-5 mt-5 mx-5 text-left lg:w-[480px]">
          <img className=" w-[8vw] h-[8vh]" src={rating} alt="bestprice icon" />
          <div className="flex flex-col gap-3">
            <p className="font-bold text-sm md:text-[18px] text-[#000000] font-Plus">
              Ratings from other users
            </p>
            <p className="font-normal sm:w-[300px] text-xs md:text-base md:leading-6 text-[#545954] font-Plus">
              Our app allows users to rate and leave reviews about electric
              vehicle (EV) charging stations.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-5 mt-5 mx-5 text-left lg:w-[480px]">
          <img className=" w-[8vw] h-[8vh]" src={status} alt="bestprice icon" />
          <div className="flex flex-col gap-3">
            <p className="font-bold text-sm md:text-[18px] text-[#000000] font-Plus">
              Availability Status
            </p>
            <p className="font-normal text-xs md:text-base md:leading-6 text-[#545954] font-Plus sm:w-[300px]">
              Our app allows users to See the availability status of electric
              vehicle (EV) charging stations.
            </p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="absolute -bottom-52 lg:-bottom-[50%] md:right-5"
      >
        <div className="w-[477px] h-[477px] md:w-[430px] md:h-[430px] lg:w-[580px] lg:h-[580px] xl:w-[667px] xl:h-[667px] bg-[#7FC37E] rounded-full"></div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="absolute -bottom-0 md:right-36"
      >
        <img
          className="w-full h-[350px] md:w-[220px] md:h-[310px] lg:w-[280px] lg:h-[380px] xl:w-[340px] xl:h-[460px]  object-cover"
          src={iphone}
          alt="IphoneThirdage"
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="absolute bottom-24 right-[30%] sm:right-[40%] md:right-[22%] md:bottom-16 lg:bottom-24"
      >
        <img
          className="w-[225px] h-[159px] md:w-[205px] md:h-[139px] lg:w-[255px] lg:h-[189px] xl:w-[300px] xl:h-[220px] object-cover"
          src={topOnIphone}
          alt="IphoneThirdage"
        />
      </div>
    </div>
  );
};

export default Content2;
