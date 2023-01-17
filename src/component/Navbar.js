import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../constants/images/logo.jpg";
import sidebar_img from "../constants/images/sidebar_icon.png";
const Navbar = ({ open, setOpen }) => {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  return (
    <div className="z-30 flex justify-between items-center px-6 bg-white shadow-md absolute top-0 left-0 right-0 h-14">
      {/* Logo */}
      <div
        className="hidden md:block w-8 h-8 mr-6"
        onClick={() => navigate("/")}
      >
        <img
          src={logo}
          className="rounded-full shadow-md outline outline-gray-500 outline-offset-1 outline-2"
        ></img>
      </div>
      <div
        className="cursor-pointer md:hidden block px-2"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
      >
        <img src={sidebar_img} className="w-8 h-8"></img>
      </div>

      <div className="hidden md:flex justify-between items-center w-full max-w-3xl text-gray-900 font-bold">
        <Link
          to={"/about"}
          className={`flex items-center px-5 py-1 bg-slate-50 rounded-full border-2 ${
            path === "/about" ? "border-blue-500" : "border-transparent shadow"
          }`}
        >
          About
        </Link>
        <Link
          to="/research"
          className={`flex items-center px-5 py-1 bg-slate-50 rounded-full border-2 ${
            path === "/research"
              ? "border-blue-500"
              : "border-transparent shadow"
          }`}
        >
          Research
        </Link>
        <Link
          to="/teaching"
          className={`flex items-center px-5 py-1 bg-slate-50 rounded-full border-2 ${
            path === "/teaching"
              ? "border-blue-500"
              : "border-transparent shadow"
          }`}
        >
          Teaching
        </Link>
        <Link
          to="/contact"
          className={`flex items-center px-5 py-1 bg-slate-50 rounded-full border-2 ${
            path === "/contact"
              ? "border-blue-500"
              : "border-transparent shadow"
          }`}
        >
          Contact
        </Link>
      </div>
      <div className="md:block hidden w-10 h-10"></div>
      <div className="block md:hidden w-8 h-8" onClick={() => navigate("/")}>
        <img
          src={logo}
          className="rounded-full shadow-md outline outline-gray-500 outline-offset-1 outline-2"
        ></img>
      </div>
    </div>
  );
};

export default Navbar;
