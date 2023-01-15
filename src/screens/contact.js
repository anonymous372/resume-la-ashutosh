import { CONTACT_TEXT, GMAIL, LINKEDIN_LINK } from "../constants/data";
import mail_img from "../constants/images/mail.webp"
import linkedin_img from "../constants/images/linkedin.png"
import image from "../constants/images/will_smith.jpg"

const Contact = () => {
  return (
    <div style={{height: "calc(100vh - 56px)"}} className="pt-6 overflow-hidden">
      {/* Profile Container */}
      <div className="mb-20">
        <div className="flex items-center justify-center flex-col gap-6">
          {/* Image */}
          <img src={image} className="shadow-md rounded-full h-32 w-32 sm:h-40 sm:w-40"></img>
          {/* Text */}
          <div className="text-xl max-w-lg text-center text-gray-700">{CONTACT_TEXT}</div>
        </div>
      </div>

      {/* Shadow */}
      <div className="relative">
        <div className="opacity-40 bg-white rounded-full absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-gray-100"></div>
      </div>

      {/* Links Container */}
      <div className="relative mx-auto border-4 border w-72 sm:w-96 sm:p-3 p-2 shadow-md rounded-md">
          {/* Header */}
          <h1 className="mb-2 border-b-2 border-gray-200 text-xl text-center md:text-3xl font-medium text-gray-700">Contacts</h1>
          <div className="px-4">
            {/* Gmail */}
            <div className="flex items-center gap-4 py-2 border-b-2 border-gray-100">
              <span className="p-1 bg-gray-100 rounded">
                <img src={mail_img} className="w-6 h-6"></img>
              </span>
              <a className="text-base decoration-2 hover:underline hover:underline-offset-3 text-blue-500 cursor-pointer" href={`mailto:${GMAIL}`} target="_blank">{GMAIL}</a>
            </div>
            {/* Linkedin */}
            <div className="flex items-center gap-4 py-2 border-gray-100">
              <span className="p-1 bg-gray-100 rounded">
                <img src={linkedin_img} className="w-6 h-6"></img>
              </span>
              <a className="text-base decoration-2 hover:underline hover:underline-offset-3 text-blue-500 cursor-pointer" href={LINKEDIN_LINK} target="_blank">linkedin</a>
            </div>
            {/* Something */}
            <div className="hidden flex gap-4 py-2 border-b-2 border-gray-100">
              <span className="p-1 bg-gray-100 rounded">
                <img src={mail_img} className="w-5 h-5"></img>
              </span>
              <a className="text-base decoration-2 hover:underline hover:underline-offset-3 text-blue-500 cursor-pointer" href={"#"}>{GMAIL}</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
