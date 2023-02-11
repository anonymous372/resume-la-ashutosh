import image from "../constants/images/me.jpg";
import copy_img from "../constants/images/copy.png";
import link_img from "../constants/images/link.png";
import { useNavigate } from "react-router-dom";
import { CV_LINK } from "../constants/data";
const About = () => {
  const navigate = useNavigate();
  return (
    <div className="px-0 sm:px-10 lg:px-20 pt-8">
      <h1 className="md:mx-0 mx-auto text-3xl w-fit md:px-4 px-16 py-1 bg-blue-200 text-gray-700 shadow rounded text-gray-800 font-bold mb-4">
        About
      </h1>
      {/* Flex box */}
      <div className="flex flex-col md:flex-row md:items-start items-center gap-8 lg:gap-16">
        {/* Image & Subtext */}
        <div>
          {/* Image Container */}
          <div className="w-64 rounded flex items-start justify-between overflow-hidden">
            <img
              src={image}
              className="outline-offset-0 border-blue-400 border-r-[6px] border-b-[8px] transition-transform hover:scale-110"
              title="Ashutosh Shukla"
            ></img>
          </div>
          <p className="hidden">Photo by ---</p>
        </div>
        {/* About */}
        <div className="w-full">
          <div className="shadow bg-sky-100 max-w-2xl rounded-md p-2 p-4">
            <h1 className="text-xl text-gray-800 font-medium mb-2">About Me</h1>
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      {/*Personal Bio  */}
      <div className="mt-16 bg-gray-100 rounded">
        <div className="max-w-xl rounded-md p-2 p-4">
          <h1 className="text-2xl text-gray-800 font-medium mb-2">
            Professional Bio
          </h1>
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      {/* CV */}
      <div className="mt-8 mb-4 py-2 px-4 border-t-4 border-blue-300">
        <h1 className="text-xl font-medium underline mb-2">Curriculum vitae</h1>
        <div className="flex justify-between sm:ustify-start gap-10">
          <p
            className="underline items-center gap-1 flex text-lg text-blue-500 cursor-pointer"
            onClick={() => window.open(CV_LINK, "_blank")}
          >
            Latest CV <img src={link_img} className="w-5 h-5"></img>
          </p>
          <button
            className="bg-gray-100 rounded border p-1 active:scale-95"
            onClick={() => navigator.clipboard.writeText(CV_LINK)}
            title="Copy Link"
          >
            <img src={copy_img} className="w-6 h-6"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
