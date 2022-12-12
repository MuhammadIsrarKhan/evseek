import mainLogo from "../assets/navbar/mainLogo.svg";
import hamburgerBtn from "../assets/navbar/hamburger.svg";
const Navbar = () => {
  return (
    // navbar start
    <div className="flex flex-row justify-between p-5">
      <img src={mainLogo} alt="mainLogo" />
      <img src={hamburgerBtn} alt="hamburger btn" />
    </div>
  );
};

export default Navbar;
