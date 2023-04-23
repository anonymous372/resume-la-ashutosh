import { PUBLICATIONS } from "../constants/data";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";
import "./home.css";
import thumbnail1 from "../constants/images/starrythumbnail.png"
import thumbnail2 from "../constants/images/visthumbnail.png"
import starry from "../constants/images/starry.gif"
import vis from "../constants/images/vis1.gif"


const Research = () => {
  const images = [
    {
      original: starry,
      thumbnail: thumbnail1,
    },
    {
      original: vis,
      thumbnail: thumbnail2,
    }
  ];
  return (
    <div className="pt-4 sm:px-10">
      {/* Slideshow */}
      <div className="py-16 reimga">
        <ReactImageGallery items={images} autoPlay />
      </div>

      <div className="flex flex-col items-center mb-10">
        {/* Heading */}
        <h1 className="mt-8 text-center text-3xl text-blue-400 text-bold">
          Exploring Light-Soft Matter Interactions
        </h1>
        {/* Publications */}
        <div className="my-4 px-16 max-w-5xl bg-gray-100">
          <h2 className="my-2 text-2xl font-medium">Publications</h2>
          {PUBLICATIONS.map((paper) => {
            return (
              <div className="mb-6 sm:px-4">
                {/* Paper Heading */}
                <div className="flex items-center">
                  <li className="text-xl list-disc">{paper.title}</li>
                </div>
                {/* Description */}
                <p className="text-gray-600">{paper.description}</p>
                {/* Authors */}
                <p className="mt-2">
                  <span className="font-semibold">Authors: </span>
                  {paper.authors.map((author) => (
                    <span
                      className={
                        author === "Ashutosh Shukla" ? "font-semibold" : ""
                      }
                    >
                      {author},{" "}
                    </span>
                  ))}
                </p>
                <a target="_blank" className="text-blue-600" href={paper.link}>
                  <span className="hover:underline">Link</span>{" "}
                  <span className="text-md text-wrap hover:text-blue-700">
                    [{paper.link}]
                  </span>
                </a>
              </div>
            );
          })}
        </div>
        {/* Projects */}
        {/* <div className="px-16 mx-w-2xl">
        <h2 className="text-2xl font-medium">Project</h2>
      </div> */}
      </div>
    </div>
  );
};

export default Research;
