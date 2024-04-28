import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ open, setOpen }) => {
  const path = useLocation().pathname;

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="block md:hidden"
    >
      {open && (
        <div className="z-20 h-screen absolute top-0 left-0 pt-16 px-4 w-48 bg-gray-100">
          <div className="flex flex-col pt-2 gap-3 items-start text-gray-900 font-bold">
            <Link
              to={"/"}
              className={`flex rounded items-center w-full pl-2 pr-5 py-2 hover:bg-slate-50 border-l-4 ${
                path === "/"
                  ? "border-blue-500 bg-gray-50"
                  : "border-transparent hover:border-gray-200"
              }`}
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className={`flex rounded items-center w-full pl-2 pr-5 py-2 hover:bg-slate-50 border-l-4 ${
                path === "/about"
                  ? "border-blue-500 bg-gray-50"
                  : "border-transparent hover:border-gray-200"
              }`}
            >
              About
            </Link>
            <Link
              to="/research"
              className={`flex rounded items-center w-full pl-2 pr-5 py-2 hover:bg-slate-50 border-l-4 ${
                path === "/research"
                  ? "border-blue-500 bg-gray-50"
                  : "border-transparent hover:border-gray-200"
              }`}
            >
              Research
            </Link>
            <Link
              to="/teaching"
              className={`flex rounded items-center w-full pl-2 pr-5 py-2 hover:bg-slate-50 border-l-4 ${
                path === "/teaching"
                  ? "border-blue-500 bg-gray-50"
                  : "border-transparent hover:border-gray-200"
              }`}
            >
              Teaching
            </Link>
            <Link
              to="/blog"
              className={`flex rounded items-center w-full pl-2 pr-5 py-2 hover:bg-slate-50 border-l-4 ${
                path === "/blog"
                  ? "border-blue-500 bg-gray-50"
                  : "border-transparent hover:border-gray-200"
              }`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`flex rounded items-center w-full pl-2 pr-5 py-2 hover:bg-slate-50 border-l-4 ${
                path === "/contact"
                  ? "border-blue-500 bg-gray-50"
                  : "border-transparent hover:border-gray-200"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
