import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";
import "./home.css";
import { useState } from "react";
import me1 from "../constants/images/me1.jpg";
import me2 from "../constants/images/me2.jpg";
import me3 from "../constants/images/me3.jpg";
import me4 from "../constants/images/me4.jpg";
import { HOME_TEXT } from "../constants/data";


const Home = () => {

  const [ autoPlayState, setAutoPlayState ] = useState( true );
  const [ slideToIndex, setSlideToIndex ] = useState( 0 );
  const images = [
    {
      original: me1,
      thumbnail: me1,
    },
    {
      original: me2,
      thumbnail: me2,
    },
    {
      original: me3,
      thumbnail: me3,
    },
    {
      original: me4,
      thumbnail: me4,
    },
  ];
  // console.log()
  return (
    <div className="pt-16">
      <h1 className="mt-10 font-semibold text-2xl sm:text-3xl text-center">
        Hi, I am Ashutosh Shukla
      </h1>
      <h2 className="mt-2 mb-8 text-lg sm:text-xl text-center whitespace-pre-line">
        { HOME_TEXT }
      </h2>
      <div className="py-2 shadow-md reimga" style={ { marginBottom: "24px" } }>
        <ReactImageGallery items={ images } autoPlay slideInterval={ 5000 } slideDuration={ 1000 } />
      </div>
    </div>
  );
};

export default Home;
