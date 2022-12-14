import mainLogo from "../assets/navbar/mainLogo.svg";
import hamburgerBtn from "../assets/navbar/hamburger.svg";
const Navbar = () => {
  return (
    // navbar start
    <div className="flex flex-row justify-between p-5 md:relative">
      <img
        className="md:absolute md:left-[10%] md:top-[90%]"
        src={mainLogo}
        alt="mainLogo"
      />
      <ul className="hidden md:flex md:flex-row md:absolute md:left-[30%] md:top-[90%] md:gap-8">
        <button>
          {" "}
          <li className="font-inter font-medium text-base text-[#161616]">
            Demos
          </li>
        </button>
        <li className="font-inter font-medium text-base text-[#161616]">
          About
        </li>
        <li className="font-inter font-medium text-base text-[#161616]">
          Blog
        </li>
        <li className="font-inter font-medium text-base text-[#161616]">
          Pages
        </li>
        <li className="font-inter font-medium text-base text-[#161616]">
          Contact
        </li>
      </ul>
      <button
        type="button"
        className="bg-[#21D57C] hidden md:z-50 md:inline-block md:absolute md:right-[5%] md:top-[60%] w-[152px] h-[50px] rounded-lg"
      >
        <p className="font-semibold text-xs md:text-base text-[#FFFFFF] font-inter">
          Download App
        </p>
      </button>
      <img className="md:hidden" src={hamburgerBtn} alt="hamburger btn" />
    </div>
  );
};

export default Navbar;
