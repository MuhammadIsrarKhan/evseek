import mainLogo from "../assets/navbar/mainLogo.png";
import twitterIcon from "../assets/footer/twitter.svg";
import facebookIcon from "../assets/footer/facebook.svg";
import instaIcon from "../assets/footer/insta.svg";
import githubIcon from "../assets/footer/github.svg";
import copyWrite from "../assets/footer/copyWrite.svg";
const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-stretch bg-[#FFFFFF]">
        <div className="h-[700px] sm:h-[600px] md:h-[465px] md:p-32  flex flex-col md:flex-row md:gap-16 md:justify-center">
          <div
            data-aos="zoom-out-down"
            data-aos-duration="1500"
            className="p-10 pb-0 sm:pl-[17%] sm:pb-0 md:p-0"
          >
            <img
              className="w-[105px] h-[20px] lg:w-[158px] lg:h-[30px]"
              src={mainLogo}
              alt="mainLogo"
            />
            <ul className="font-inter font-normal text-xs md:text-base text-[#525B52] mt-8">
              <li className="mt-3">About</li>
              <li className="mt-3">Features</li>
              <li className="mt-3">Works</li>
              <li className="mt-3">Career</li>
            </ul>
          </div>
          <div
            data-aos="zoom-out-down"
            data-aos-duration="1500"
            className="flex flex-row  justify-between p-10 md:p-0 sm:justify-center gap-[40%] md:gap-16"
          >
            <div>
              <p className="font-semibold text-sm md:text-lg text-[#181B18] font-inter">
                Help
              </p>
              <ul className="font-inter font-normal text-xs md:text-base text-[#525B52] mt-3 xl:mt-8">
                <li className="mt-3">Customer Support</li>
                <li className="mt-3">Booking Details</li>
                <li className="mt-3">Terms & Conditions</li>
                <li className="mt-3">Privacy Policy</li>
              </ul>
            </div>
            <div data-aos="zoom-out-down" data-aos-duration="1500">
              <p className="font-semibold text-sm text-[#181B18] font-inter md:text-lg">
                Resources
              </p>
              <ul className="xl:mt-8 font-inter font-normal text-xs md:text-base text-[#525B52] mt-3">
                <li className="mt-3">Free eBooks</li>
                <li className="mt-3">Standard Safety Guide</li>
                <li className="mt-3">How to - Blog</li>
                <li className="mt-3">Youtube Playlist</li>
              </ul>
            </div>
          </div>
          <div
            data-aos="zoom-out-down"
            data-aos-duration="1500"
            className="flex flex-row justify-between sm:justify-center gap-[40%] md:gap-16 p-10 pt-0"
          >
            <div>
              <p className="font-semibold text-sm text-[#181B18] font-inter md:text-lg">
                Extra Links
              </p>
              <ul className="xl:mt-8 font-inter font-normal text-xs md:text-base text-[#525B52] mt-3">
                <li className="mt-3">Customer Support</li>
                <li className="mt-3">Booking Details</li>
                <li className="mt-3">Terms & Conditions</li>
                <li className="mt-3">Privacy Policy</li>
              </ul>
            </div>
            <div data-aos="zoom-out-down" data-aos-duration="1500">
              <p className="font-semibold text-sm text-[#181B18] font-inter md:text-lg">
                Policies
              </p>
              <ul className="xl:mt-8 font-inter font-normal text-xs md:text-base text-[#525B52] mt-3">
                <li className="mt-3">Free eBooks</li>
                <li className="mt-3">Standard Safety Guide</li>
                <li className="mt-3">How to - Blog</li>
                <li className="mt-3">Youtube Playlist</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center md:p-32   md:pt-0 md:justify-start md:flex-nowrap gap-10 my-20 md:mb-0 pb-0 md:pb-10 mt-0  flex-wrap relative ">
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
          <div className="hidden md:flex md:flex-row md:gap-5 font-inter text-sm text-[#525B52] md:w-[100%] ">
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <p>Support</p>
          </div>
          <img
            className="w-[65vw] h-[8vh] sm:w-[75%] sm:h-[75%] md:w-[30%] md:h-[30%] absolute md:relative md:mt-0 sm:mt-18 top-[20px] md:top-0"
            src={copyWrite}
            alt="copyWrite"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
