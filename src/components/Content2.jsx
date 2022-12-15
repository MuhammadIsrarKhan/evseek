import IphoneFourthPage from "../assets/Content1/fourth.svg";
const Content2 = () => {
  return (
    <div className="h-[598px] md:h-[600px] bg-[#F5F5F5] lg:h-[600px] text-center flex flex-col items-center relative overflow-hidden">
      <div className="md:absolute md:left-0 lg:top-[30%] md:top-[10%]  md:w-[50%]">
        <p className="font-semibold text-[22px]  text-[#000000] pt-10 mx-10 font-jost md:w-[416px] md:text-left md:leading-[42px] md:text-[42px]">
          Plan your trip using EVSeek.
        </p>
        <p className="font-normal text-xs md:text-lg md:text-left text-[#52525B] mt-5 mx-10 font-inter">
          Plan custom trips in order to recharge your electric car at the ideal
          stops. Amet minim mollit non deserunt ullamco est sit aliqua dolor do
          amet sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div className="absolute -bottom-48 md:right-12">
        <div className="w-[477px] h-[477px] bg-[#FFC947] rounded-full"></div>
      </div>
      <div className="absolute -bottom-0 md:right-32">
        <img src={IphoneFourthPage} alt="IphoneThirdage" />
      </div>
    </div>
  );
};

export default Content2;
