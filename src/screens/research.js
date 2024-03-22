import { PUBLICATIONS } from "../constants/data";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";
import "./home.css";
import researchArea from "../constants/images/researchArea.png"
import thumbnail1 from "../constants/images/starrythumbnail.png"
import thumbnail2 from "../constants/images/visthumbnail.png"
import thumbnail3 from "../constants/images/vis4thumbnail.png"
import starry from "../constants/images/starry.gif"
import vis1 from "../constants/images/vis1.gif"
import vis2 from "../constants/images/vis4.gif"


const Research = () => {
  const images = [
    {
      original: researchArea,
      thumbnail: researchArea,
    },
    {
      original: starry,
      thumbnail: thumbnail1,
    },
    {
      original: vis1,
      thumbnail: thumbnail2,
    },
    {
      original: vis2,
      thumbnail: thumbnail3,
    },
    
  ];
  return (
    <div className="pt-4 sm:px-10">
      {/* Heading */ }
      <div className="py-8 mt-0 mb-6 mx-auto flex flex-col items-center">
        <h1 className="mt-2 sm:mt-8 mb-6 text-center text-xl sm:text-3xl text-blue-400 text-bold md:w-[60%]">
          We use light to drive our soft matter system out of equilibrium and use light to study the system as well.
        </h1>
        
      </div>
      {/* Slideshow */ }
      <div className="rounded-md border-t-4 border-gray-200 bg-blue-50">
        <div className=" py-10 reimga">
          <ReactImageGallery items={ images } autoPlay slideInterval={ 10000 } />
        </div>
      </div>
      <div className="flex flex-col items-center mb-10">
        {/* Heading */ }
        <h1 className="mt-12 text-center border-b-2 border-blue-400 text-3xl text-blue-400 text-bold">
          Exploring Light-Soft Matter Interactions
        </h1>
        {/* Publications */ }
        <div className="my-4 px-16 max-w-5xl bg-gray-100">
          <h2 className="my-2 text-2xl sm:text-3xl font-medium">Publications</h2>
          { PUBLICATIONS.map( ( paper ) => {
            return (
              <div className="mb-12 sm:px-4">
                {/* Paper Heading */ }
                <div className="flex items-center">
                  <li className="text-xl sm:text-2xl list-disc">{ paper.title }</li>
                </div>
                {/* Authors */ }
                <p className="mt-2 sm:text-lg">
                  <span className="font-semibold">Authors: </span>
                  { paper.authors.map( ( author ) => (
                    <span
                      className={
                        author === "Ashutosh Shukla" ? "font-semibold" : ""
                      }
                    >
                      { author },{ " " }
                    </span>
                                   
                  ) ) }
                </p>
                {/* Publication detail */ }
                <p className="text-gray-600 sm:text-lg">{ paper.subtitle }</p>

                {/* Description */ }
                <p className="text-gray-600 sm:text-lg">{ paper.description }</p>

                <a target="_blank" className="text-blue-600 sm:text-lg" href={ paper.link }>
                  <span className="hover:underline">Link</span>{ " " }
                  <span className="text-md text-wrap hover:text-blue-700">
                    [{ paper.link }]
                  </span>
                </a>
              </div>
            );
          } ) }
        </div>
      </div>
    </div>
  );
};

export default Research;
