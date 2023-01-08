import { Link, useLocation } from "react-router-dom";

const Navbar = ({ open, setOpen }) => {
  const path = useLocation().pathname;
  return (
    <div className="z-10 flex justify-between items-center px-6 bg-white shadow-md absolute top-0 left-0 right-0 h-14">
      {/* Logo */}
      <div className="hidden md:block w-10 h-10 mr-6">[Logo]</div>
      <div
        className="border-2 border-black cursor-pointer md:hidden block px-2"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
      >
        Sidebar Icon
      </div>

      <div className="hidden md:flex justify-between items-center w-full max-w-3xl text-gray-900 font-bold">
        <Link
          to={"/"}
          className={`flex items-center px-5 py-1 bg-slate-50 rounded-full border-2 ${
            path === "/" ? "border-blue-500" : "border-transparent shadow"
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
      <div className="block md:hidden w-10 h-10">[Logo]</div>
    </div>
  );
};

export default Navbar;
