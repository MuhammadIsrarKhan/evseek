import Navbar from "./Navbar";
import iphone from "../assets/hero/iphone.svg";
import star from "../assets/hero/star.svg";
import smallImg from "../assets/hero/smallImg.png";
import Tesla from "../assets/advertice/tesla.svg";
import Bramo from "../assets/advertice/brammo.svg";
import Nio from "../assets/advertice/nio.svg";
import Drako from "../assets/advertice/drako.svg";
import bestPrice from "../assets/advertice/bestPrice.svg";
import quik from "../assets/advertice/quik.svg";
import ev from "../assets/advertice/ev.svg";
import support from "../assets/advertice/support.svg";
import IphoneThirdPage from "../assets/third/iphone.svg";
import IphoneFourthPage from "../assets/third/fourth.svg";
import downloadApp from "../assets/fifth/downloadApp.svg";
import FirstBtn from "../assets/fifth/firstBtn.svg";
import SecBTn from "../assets/fifth/secBtn.svg";
import mainLogo from "../assets/navbar/mainLogo.svg";
import twitterIcon from "../assets/footer/twitter.svg";
import facebookIcon from "../assets/footer/facebook.svg";
import instaIcon from "../assets/footer/insta.svg";
import githubIcon from "../assets/footer/github.svg";
import copyWrite from "../assets/footer/copyWrite.svg";
import myImage from "../assets/my.jpg";
import testimonial from "../assets/testi.svg";

const AllScreens = () => {
  return (
    <>
      <div className="bg-[#F3FCF3] pb-[5%]">
        <Navbar />
        {/* hero section  */}
        <div className="md:flex md:flex-row relative md:ml-[10%]">
          <div className="md:mt-[5%]">
            {" "}
            <h1 className="font-semibold md:w-[90%]  text-4xl md:text-[50px] md:leading-[60px] font-jost text-[#121D17] text-center mt-[10vh] mx-4 md:mx-0 md:text-left">
              Finding suitable charging stations!
            </h1>
            <p className="text-center font-normal text-sm md:text-xl mt-[5vh] md:mt-5 mx-4 font-inter md:w-[60%] md:mx-0 md:text-left">
              Our goal is to make it easy for new EV owners to charge with low
              electricity cost/unit.
            </p>
            <div className="text-center  md:absolute md:mt-9 mt-5">
              <button className="bg-[#21D57C] w-[144px] h-[41px] md:w-[193px] md:h-[55px] p-3 rounded-lg">
                <p className="font-semibold text-xs md:text-base text-[#FFFFFF] font-inter">
                  Check our features
                </p>
              </button>
            </div>
            <div className="md:flex md:flex-row hidden md:mt-[20%] md:gap-1 md:w-[16px] md:h-[16px]">
              <img src={star} alt="rating" />
              <img src={star} alt="rating" />
              <img src={star} alt="rating" />
              <img src={star} alt="rating" />
              <img src={star} alt="rating" />
            </div>
            <p className="hidden md:mt-2 md:inline-block md:w-[60%] font-inter font-normal leading-7 text-[#3F4643] md:text-base">
              “You made it so simple. The App is so much faster and easier to
              navigate through. It is also very helpful in saving the money.”
            </p>
            <div className="hidden md:mt-3 md:flex md:flex-row text-base font-medium leading-5 ">
              <img src={myImage} alt="avatar" className="rounded-full w-10 " />
              <div className=" ml-3 flex flex-col">
                <p className="font-semibold font-jost tracking-wider text-base text-[#181B1A]">
                  Israr Khan
                </p>
                <p className="text-[#525B57] font-jost font-normal text-[14px]">
                  From Gullimam Tank
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-10 content-center justify-center items-center relative md:right-[5%] md:w-[618px] md:h-[710px]">
            <img
              className="w-[345px] h-[391px] md:w-[100%] md:h-[100%]"
              src={iphone}
              alt="iphoneimage absolute"
            />
            <img
              className="w-[175.07px] h-[130.07px] md:w-[285px] md:h-[200px]  absolute -translate-x-24 translate-y-7"
              src={smallImg}
              alt="iphoneimage absolute"
            />
          </div>
        </div>
      </div>
      {/* end of hero section  */}
      {/* starting of second page  */}
      <div className="bg-[#FFFFFF] h-auto mb-5">
        <p className="font-bold text-base md:text-xl text-[#181B18] text-center mt-[10vh] font-inter mx-20">
          Trusted by nearly all top EV car companies
        </p>
        <div className="flex flex-row justify-between lg:justify-center lg:gap-24 touch-pan-x overflow-x-auto gap-5 items-center mx-12 mt-10">
          <img
            className="md:w-[20%] md:h-[20%] lg:w-[13%] lg:h-[13%]"
            src={Tesla}
            alt="Tesla icon"
          />
          <img
            className="md:w-[25%] md:h-[25%] lg:w-[18%] lg:h-[18%]"
            src={Bramo}
            alt="Tesla icon"
          />
          <img
            className="md:w-[12%] md:h-[12%] lg:w-[8%] lg:h-[8%]"
            src={Nio}
            alt="Tesla icon"
          />
          <img
            className="md:w-[20%] md:h-[20%] lg:w-[13%] lg:h-[13%]"
            src={Drako}
            alt="Tesla icon"
          />
        </div>
        <div className="flex justify-center align-middle items-center mt-16">
          <hr className="w-[50vw] text-center" />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-2xl md:text-4xl text-center mx-[10vw] mt-10">
            350 thousands Customers are using EVSeek
          </p>
          <div className="md:flex md:flex-row md:p-[10%] md:pt-0">
            <div>
              <div className="flex flex-row gap-5 mt-8 mx-5">
                <img
                  className=" w-[8vw] h-[8vh]"
                  src={bestPrice}
                  alt="bestprice icon"
                />
                <div className="flex flex-col gap-3">
                  <p className="font-bold text-sm md:text-[18px] text-[#000000] font-Plus">
                    Get Best Price
                  </p>
                  <p className="font-normal text-xs md:text-base md:leading-6 text-[#545954] font-Plus">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-5 mt-12 mx-5">
                <img
                  className=" w-[8vw] h-[8vh]"
                  src={quik}
                  alt="bestprice icon"
                />
                <div className="flex flex-col gap-3">
                  <p className="font-bold text-sm text-[#000000] font-Plus md:text-[18px]">
                    Get Best Price
                  </p>
                  <p className="font-normal text-xs text-[#545954] font-Plus md:text-base md:leading-6">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row gap-5 mt-12 mx-5">
                <img
                  className=" w-[8vw] h-[8vh]"
                  src={ev}
                  alt="bestprice icon"
                />
                <div className="flex flex-col gap-3">
                  <p className="font-bold text-sm text-[#000000] font-Plus md:text-[18px]">
                    Get Best Price
                  </p>
                  <p className="font-normal text-xs text-[#545954] font-Plus md:text-base md:leading-6">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-5 mt-12 mx-5">
                <img
                  className=" w-[8vw] h-[8vh]"
                  src={support}
                  alt="bestprice icon"
                />
                <div className="flex flex-col gap-3">
                  <p className="font-bold text-sm text-[#000000] font-Plus md:text-[18px]">
                    Get Best Price
                  </p>
                  <p className="font-normal text-xs text-[#545954] font-Plus md:text-base md:leading-6">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of second page  */}
      {/* start of the third page  */}
      <div className="h-[598px] md:h-[60vh] bg-[#0F2A0F] text-center flex flex-col items-center relative overflow-hidden">
        <div className="md:absolute md:right-0 md:top-[20%] md:w-[50%]">
          <p className="font-semibold text-[22px] text-[#FFFFFF] md:text-[42px] md:w-[447px] md:text-left md:leading-[48px] pt-10 mx-10 font-jost">
            EVSeek is available all over Finland.
          </p>
          <p className="font-normal text-xs md:text-lg md:text-left text-[#EDF3F0] mt-5 mx-10 font-inter">
            The Map includes all charging stations in Finland met minim mollit
            non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis.
          </p>
        </div>
        <div className="absolute -bottom-48 md:left-2">
          <div className="w-[477px] h-[477px] bg-[#7FC37E] rounded-full"></div>
        </div>
        <div className="absolute -bottom-0 md:left-20">
          <img src={IphoneThirdPage} alt="IphoneThirdage" />
        </div>
      </div>
      {/* end of third page  */}
      {/* start of the fourth page  */}
      <div className="h-[598px] md:h-[60vh] bg-[#F5F5F5] text-center flex flex-col items-center relative overflow-hidden">
        <div className="md:absolute md:left-0 md:top-[20%] md:w-[50%]">
          <p className="font-semibold text-[22px]  text-[#000000] pt-10 mx-10 font-jost md:w-[416px] md:text-left md:leading-[42px] md:text-[42px]">
            Plan your trip using EVSeek.
          </p>
          <p className="font-normal text-xs md:text-lg md:text-left text-[#52525B] mt-5 mx-10 font-inter">
            Plan custom trips in order to recharge your electric car at the
            ideal stops. Amet minim mollit non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div className="absolute -bottom-48 md:right-0">
          <div className="w-[477px] h-[477px] bg-[#FFC947] rounded-full"></div>
        </div>
        <div className="absolute -bottom-0 md:right-16">
          <img src={IphoneFourthPage} alt="IphoneThirdage" />
        </div>
      </div>
      {/* end of fourth page */}
      {/* start pricing & plan page  */}
      <div className="h-[1339px] md:h-[883px] md:mx-10 bg-[#FFFFFF] flex flex-col items-center">
        <p className="font-semibold md:text-5xl md:mt-10 text-[#000000] font-jost mt-5 leading-8">
          Pricing & Plan
        </p>
        <p className="font-normal text-xs md:text-lg text-[#52525B] mt-5 mx-10 md:mx-28 font-inter text-center">
          Both a free trial and a free set of features for anyone who wants to
          use them. Choose your favourite plan.
        </p>
        <div className="h-full md:flex md:flex-row md:gap-4 md:justify-center md:mt-14">
          <div className="h-[25%]  w-[75vw] md:w-[350px] md:h-[483px] bg-[#F4F5F4] mt-10 rounded-lg flex flex-col  items-center relative">
            <p className="font-inter font-bold text-xs mt-[8%] md:mt-[36px]">
              BASIC
            </p>
            <p className="text-[#18181B] font-Space font-bold leading-[30px] md:text-2xl mt-[2%] md:mt-[27px] text-lg ">
              ${" "}
              <span className="text-xl leading-[61px] font-black text-[58px] inline-block -translate-x-1">
                29
              </span>
            </p>
            <p className="font-inter font-normal text-xs md:text-base leading-7 mx-[10%] text-center mt-[8%] md:mt-[50px] sm:mt-[6%]">
              Basic Main Features 250+ EV Charging Stations
            </p>
            <button className="text-[#12141D] font-bold text-xs md:text-base font-jost leading-5 bg-[#FFFFFF] w-[60vw] md:w-[280px] h-[60px] rounded absolute bottom-4 md:bottom-16">
              Start 14 Days Free Trial
            </button>
          </div>
          <div className="h-[25%] w-[75vw] md:w-[350px] md:h-[523px] md:shadow bg-[#0F2A0F] mt-[8%] md:mt-0 rounded-lg flex flex-col items-center relative">
            <p className="font-inter font-bold text-xs mt-[8%] text-[#FFFFFF] md:mt-[36px]">
              STANDARD
            </p>
            <p className="text-[#FFFFFF] font-Space font-bold leading-[30px] text-lg  md:text-2xl  mt-[2%] md:mt-[27px]">
              ${" "}
              <span className="text-xl leading-[61px] font-black text-[43px] md:text-[58px] inline-block -translate-x-1">
                29
              </span>
            </p>
            <p className="font-inter font-normal text-xs md:text-base leading-7 mx-[10%] text-center mt-[6%] text-[#FFFFFF] md:mt-[50px]">
              Standard Main Features 500+ EV Charging Stations Late Customer
              Support No Ads
            </p>
            <button className=" font-bold text-xs md:text-base font-jost leading-5 bg-[#21D57C] text-[#FFFFFF] w-[60vw] rounded absolute bottom-4 md:w-[280px] h-[60px] md:bottom-16">
              Start 14 Days Free Trial
            </button>
          </div>
          <div className="h-[25%]  w-[75vw] md:w-[350px] md:h-[483px] bg-[#F4F5F4] mt-10 rounded-lg flex flex-col items-center relative">
            <p className="font-inter font-bold text-xs mt-[8%] md:mt-[36px]">
              PREMIUM
            </p>
            <p className="text-[#18181B] font-Space font-bold leading-[30px] text-lg md:text-2xl mt-[2%]  md:mt-[27px]">
              ${" "}
              <span className="text-xl leading-[61px] font-black text-[43px] md:text-[58px] inline-block -translate-x-1">
                99
              </span>
            </p>
            <p className="font-inter font-normal text-xs md:text-base leading-7 mx-[10%] text-center mt-[8%] md:mt-[50px]">
              All Modules 24/7 Live Support
            </p>
            <button className="text-[#12141D] font-bold text-xs font-jost leading-5 bg-[#FFFFFF] w-[60vw] rounded absolute bottom-4 md:w-[280px] h-[60px] md:text-base md:bottom-16">
              Start 14 Days Free Trial
            </button>
          </div>
        </div>
      </div>
      {/* end pricing & plan page  */}
      {/* testimonial page start  */}
      <div className="bg-[#F6FAF6] h-[800px] md:h-[1084px] flex flex-col items-center">
        <p className="md:text-[42px] text-[22px] leading-[31px] md:leading-[48px] font-jost font-semibold text-[#181B18] p-16 text-center md:w-[636px] w-[380px]">
          Trusted by <span className="text-[#21D57C]">30k+</span> Customers &
          Companies
        </p>
        {/* carousel start  */}
        {/* carousel end  */}
        <div className="hidden md:flex md:flex-row md:gap-10 md:w-[80%]">
          <div className="bg-[#FFFFFF] md:w-[372px] md:h-[443px] rounded-[10px] flex flex-col items-center">
            <img className="mt-[47px]" src={testimonial} alt="img1" />
            <p className="font-normal font-inter md:text-base text-center text-[#121D12] md:mx-5 md:mt-[16px]">
              “I just simply love the app that make my life easier! I have
              everything that I need while driving my EV, that allows save cost
              as well as plan my trip according the stations available.”
            </p>
            <p className="font-semibold font-inter md:text-base text-center text-[#121D12] md:mx-5 md:mt-[31px]">
              Jenny Wilson
            </p>
            <p className="font-normal font-inter md:text-base text-center text-[#525B52] md:mx-5 md:mt-3">
              Project Manager at Microsoft
            </p>
          </div>
          <div className="bg-[#FFFFFF] md:w-[372px] md:h-[443px] rounded-[10px] flex flex-col items-center shadow-[0px_34px_104px_rgba(18,22,28,0.1)]">
            <img className="mt-[47px]" src={testimonial} alt="img1" />
            <p className="font-normal font-inter md:text-base text-center text-[#121D12] md:mx-5 md:mt-[16px]">
              “I just simply love the app that make my life easier! I have
              everything that I need while driving my EV, that allows save cost
              as well as plan my trip according the stations available.”
            </p>
            <p className="font-semibold font-inter md:text-base text-center text-[#121D12] md:mx-5 md:mt-[31px]">
              Jenny Wilson
            </p>
            <p className="font-normal font-inter md:text-base text-center text-[#525B52] md:mx-5 md:mt-3">
              Project Manager at Microsoft
            </p>
          </div>
          <div className="bg-[#FFFFFF] md:w-[372px] md:h-[443px] rounded-[10px] flex flex-col items-center">
            <img className="mt-[47px]" src={testimonial} alt="img1" />
            <p className="font-normal font-inter md:text-base text-center text-[#121D12] md:mx-5 md:mt-[16px]">
              “I just simply love the app that make my life easier! I have
              everything that I need while driving my EV, that allows save cost
              as well as plan my trip according the stations available.”
            </p>
            <p className="font-semibold font-inter md:text-base text-center text-[#121D12] md:mx-5 md:mt-[31px]">
              Jenny Wilson
            </p>
            <p className="font-normal font-inter md:text-base text-center text-[#525B52] md:mx-5 md:mt-3">
              Project Manager at Microsoft
            </p>
          </div>
        </div>
        <p className="font-semibold md:text-[36px] md:leading-[46px] text-center md:w-[578px] md:mt-16 text-[#181B18]">
          Get started with EVSeek. Find nearest charging stations.
        </p>
        <button className="bg-[#21D57C] rounded-lg md:w-[196px] md:h-[55px] md:mt-10">
          <p className="font-semibold text-xs md:text-base text-[#FFFFFF] font-inter">
            Download Our App
          </p>
        </button>
      </div>
      {/* testimonial page end  */}
      {/* start of 6th page  */}
      <div className="h-[429px] bg-[#7FC37E] flex flex-col items-center">
        <p className="text-[#FAFAFA] font-jost font-semibold text-[22px] md:text-[42px] tracking-wider mt-10">
          Get latest news & updates
        </p>
        <p className="text-[#FFFFFF] font-normal text-xs md:text-lg md:w-[463px] leading-4 tracking-wider font-inter text-center mx-8 mt-5">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia duis.
        </p>
        <form className="relative w-[90vw] md:w-[578px] mt-8">
          <input
            type="search"
            className="block w-[90vw] md:w-[578px] focus:outline-none p-3  font-bold text-xs   rounded-lg bg-[#F4F4F4] caret-[#7FC37E]"
            placeholder="Enter your email address"
            required
          />
          <span className="absolute top-1 right-3  bg-[#FFC947] text-base shadow text-[#1A1D1F] focus:outline-none font-semibold rounded-lg translate-x-2  px-3  py-1 ">
            Subscribe Now
          </span>
        </form>
        <p className="text-[#FFFFFF] font-normal text-xs md:text-sm leading-4 tracking-wider font-inter text-center mx-8 mt-2">
          No ads. No trails. No commitments
        </p>
        <div className="flex flex-row mt-20 md:mt-5 gap-16">
          <div className="flex flex-col items-center gap-3 md:gap-1">
            <p className="font-jost font-semibold text-xl md:text-4xl text-[#FFFFFF] leading-3">
              6+
            </p>
            <p className="font-jost font-medium text-xs md:text-xl text-[#FFFFFF] leading-3">
              Years in Business
            </p>
            <p className="font-jost font-normal text-center text-xs md:text-base text-[#FFFFFF] leading-3">
              Creating the successful path
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 md:gap-1">
            <p className="font-jost font-semibold text-xl md:text-4xl text-[#FFFFFF] leading-3">
              482K+
            </p>
            <p className="font-jost font-medium text-xs text-[#FFFFFF] md:text-xl leading-3">
              Years in Business
            </p>
            <p className="font-jost font-normal text-center text-xs md:text-base text-[#FFFFFF] leading-3">
              Creating the successful path
            </p>
          </div>
        </div>
      </div>
      {/* end of the sixth page  */}
      <div className="h-[295px] bg-[#F3FDF3] flex flex-col md:flex-row md:gap-5 md:justify-between md:p-10 items-center">
        <div className="md:w-[470px]">
          <img
            className="w-[80vw] h-[15vh] mt-5 mx-auto"
            src={downloadApp}
            alt="download app"
          />
          <p className="font-inter -translate-y-2 mx-5 md:mx-0 md:text-left font-normal text-xs md:text-lg text-[#525B52] leading-5 text-center">
            Our goal is to make it easy for new EV owners to charge with low
            electricity cost/unit.
          </p>
        </div>
        <div className="flex flex-row justify-between gap-5 mt-9">
          <button>
            <img src={FirstBtn} alt="FirstBtn" />
          </button>
          <button>
            <img src={SecBTn} alt="FirstBtn" />
          </button>
        </div>
      </div>
      {/* end of fifth page  */}
      {/* footer start  */}
      <div className="h-[729px] sm:h-[600px] md:h-[465px] md:p-32 bg-[#FFFFFF] flex flex-col md:flex-row md:gap-16 md:justify-center">
        <div className="p-10 pb-0 sm:pl-[17%] sm:pb-0 md:p-0">
          <img src={mainLogo} alt="mainLogo" />
          <ul className="font-inter font-normal text-xs md:text-base text-[#525B52] mt-8">
            <li className="mt-3">About</li>
            <li className="mt-3">Features</li>
            <li className="mt-3">Works</li>
            <li className="mt-3">Career</li>
          </ul>
        </div>
        <div className="flex flex-row  justify-between p-10 md:p-0 sm:justify-center gap-[40%] md:gap-16">
          <div>
            <p className="font-semibold text-sm md:text-lg text-[#181B18] font-inter">
              Help
            </p>
            <ul className="font-inter font-normal text-xs md:text-base text-[#525B52] mt-3">
              <li className="mt-3">Customer Support</li>
              <li className="mt-3">Booking Details</li>
              <li className="mt-3">Terms & Conditions</li>
              <li className="mt-3">Privacy Policy</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-sm text-[#181B18] font-inter md:text-lg">
              Resources
            </p>
            <ul className="font-inter font-normal text-xs md:text-base text-[#525B52] mt-3">
              <li className="mt-3">Free eBooks</li>
              <li className="mt-3">Standard Safety Guide</li>
              <li className="mt-3">How to - Blog</li>
              <li className="mt-3">Youtube Playlist</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row justify-between sm:justify-center gap-[40%] md:gap-16 p-10 pt-0">
          <div>
            <p className="font-semibold text-sm text-[#181B18] font-inter md:text-lg">
              Extra Links
            </p>
            <ul className="font-inter font-normal text-xs md:text-base text-[#525B52] mt-3">
              <li className="mt-3">Customer Support</li>
              <li className="mt-3">Booking Details</li>
              <li className="mt-3">Terms & Conditions</li>
              <li className="mt-3">Privacy Policy</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-sm text-[#181B18] font-inter md:text-lg">
              Policies
            </p>
            <ul className="font-inter font-normal text-xs md:text-base text-[#525B52] mt-3">
              <li className="mt-3">Free eBooks</li>
              <li className="mt-3">Standard Safety Guide</li>
              <li className="mt-3">How to - Blog</li>
              <li className="mt-3">Youtube Playlist</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center md:p-32 md:pt-0 md:justify-start md:flex-nowrap gap-10 my-20 mt-0  flex-wrap relative">
        <img
          className="sm:w-[3%] md:w-[2%] sm:h-[3%]"
          src={twitterIcon}
          alt="twitterIcon"
        />
        <img
          className="sm:w-[2%] md:w-[1.2%] sm:h-[2%]"
          src={facebookIcon}
          alt="twitterIcon"
        />
        <img
          className="sm:w-[3%] md:w-[2%] sm:h-[3%]"
          src={instaIcon}
          alt="twitterIcon"
        />
        <img
          className="sm:w-[3%] md:w-[2%] sm:h-[3%]"
          src={githubIcon}
          alt="twitterIcon"
        />
        <div className="hidden md:flex md:flex-row md:gap-5 font-inter text-sm text-[#525B52] md:w-[90%]">
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Support</p>
        </div>
        <img
          className="w-[65vw] h-[8vh] sm:w-[75%] sm:h-[75%] md:w-[30%] md:h-[30%] absolute md:relative md:mt-0 mt-[8%] sm:mt-18"
          src={copyWrite}
          alt="copyWrite"
        />
      </div>
    </>
  );
};

export default AllScreens;
