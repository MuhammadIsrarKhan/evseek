import IphoneThirdPage from "../assets/Content1/iphone.svg";
const Content1 = () => {
  return (
    <div className="h-[598px] md:h-[60vh] lg:h-[600px] bg-[#0F2A0F] text-center flex flex-col items-center relative overflow-hidden">
      <div className="md:absolute md:right-0 md:top-[20%] md:w-[50%]">
        <p className="font-semibold text-[22px] text-[#FFFFFF] md:text-[42px] md:w-[447px] md:text-left md:leading-[48px] pt-10 mx-10 font-jost">
          EVSeek is available all over Finland.
        </p>
        <p className="font-normal text-xs md:text-lg md:text-left text-[#EDF3F0] mt-5 mx-10 font-inter">
          The Map includes all charging stations in Finland met minim mollit non
          deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis.
        </p>
      </div>
      <div className="absolute -bottom-48 lg:-bottom-56 md:left-2 lg:left-20">
        <div className="w-[477px] h-[477px] bg-[#7FC37E] rounded-full"></div>
      </div>
      <div className="absolute -bottom-0 md:left-20 lg:left-40">
        <img src={IphoneThirdPage} alt="IphoneThirdage" />
      </div>
    </div>
  );
};

export default Content1;
