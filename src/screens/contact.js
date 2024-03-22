import {
  CONTACT_TEXT,
  GMAIL,
  LINKEDIN_LINK,
  LINKEDIN_TEXT,
  YOUTUBE_LINK,
  YOUTUBE_TEXT,
  GOOGLESCHOLAR_LINK,
  GOOGLESCHOLAR_TEXT,
  RESEARCHGATE_LINK,
  RESEARCHGATE_TEXT,
} from "../constants/data";

import mail_img from "../constants/images/mail.webp";
import linkedin_img from "../constants/images/linkedin.png";
import youtube_img from "../constants/images/youtube.png";
import image from "../constants/images/me11.jpg";
import scholar_img from "../constants/images/Scholar.png";
import researchgate_img from "../constants/images/ResearchGate.png";

const Contact = () => {
  return (
    <div
      style={ { height: "calc(100vh - 56px)" } }
      className="pt-6 overflow-scroll"
    >
      {/* Profile Container */ }
      <div className="mb-20">
        <div className="flex items-center justify-center flex-col gap-6">
          {/* Image */ }
          <div className="shadow-md rounded-full h-40 w-40 sm:h-48 sm:w-48 overflow-hidden">
            <img
              src={ image }
              className="object-cover h-full w-full"
            ></img>
          </div>
          {/* Text */ }
          <div className="text-[24px] max-w-lg text-center text-gray-700 whitespace-pre-line">
            { CONTACT_TEXT }
          </div>
        </div>
      </div>

      {/* Shadow */ }
      <div className="relative">
        <div className="opacity-40 bg-white rounded-full absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-gray-100"></div>
      </div>

      {/* Links Container */ }
      <div className="relative mx-auto border-4 border w-80 sm:w-96 sm:p-3 p-2 shadow-md rounded-md">
        {/* Header */ }
        <h1 className="mb-2 border-b-2 border-gray-200 text-xl text-center md:text-3xl font-medium text-gray-700">
          Contacts
        </h1>
        <div className="px-4">
          {/* Gmail */ }
          <div className="flex items-center gap-4 py-2 border-b-2 border-gray-100">
            <span className="p-1 bg-gray-100 rounded">
              <img src={ mail_img } className="w-6 h-6"></img>
            </span>
            <a
              className="text-base decoration-2 hover:underline hover:underline-offset-3 text-blue-500 cursor-pointer"
              href={ `mailto:${ GMAIL }` }
              target="_blank"
            >
              { GMAIL }
            </a>
          </div>
          {/* Linkedin */ }
          <div className="flex items-center gap-4 py-2  border-b-2 border-gray-100">
            <span className="p-1 bg-gray-100 rounded">
              <img src={ linkedin_img } className="w-6 h-6"></img>
            </span>
            <a
              className="text-base decoration-2 hover:underline hover:underline-offset-3 text-blue-500 cursor-pointer"
              href={ LINKEDIN_LINK }
              target="_blank"
            >
              { LINKEDIN_TEXT }
            </a>
          </div>
          {/* Google Scholar */ }
          <div className="flex items-center gap-4 py-2  border-b-2 border-gray-100">
            <span className="p-1 bg-gray-100 rounded">
              <img src={ scholar_img } className="w-6 h-6"></img>
            </span>
            <a
              className="text-base decoration-2 hover:underline hover:underline-offset-3 text-blue-500 cursor-pointer"
              href={ GOOGLESCHOLAR_LINK }
              target="_blank"
            >
              { GOOGLESCHOLAR_TEXT }
            </a>
          </div>
          {/* ResearchGate */ }
          <div className="flex items-center gap-4 py-2  border-b-2 border-gray-100">
            <span className="p-1 bg-gray-100 rounded">
              <img src={ researchgate_img } className="w-6 h-6"></img>
            </span>
            <a
              className="text-base decoration-2 hover:underline hover:underline-offset-3 text-blue-500 cursor-pointer"
              href={ RESEARCHGATE_LINK }
              target="_blank"
            >
              { RESEARCHGATE_TEXT }
            </a>
          </div>
          {/* Youtube Channel */ }
          <div className="flex items-center gap-4 py-2">
            <span className="p-1 bg-gray-100 rounded">
              <img src={ youtube_img } className="w-6 h-6"></img>
            </span>
            <a
              className="text-base decoration-2 hover:underline hover:underline-offset-3 text-blue-500 cursor-pointer"
              href={ YOUTUBE_LINK }
              target="_blank"
            >
              { YOUTUBE_TEXT }
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
