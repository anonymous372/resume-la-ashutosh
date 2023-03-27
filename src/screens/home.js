import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";
import "./home.css"

import me1 from "../constants/images/me1.jpg"
import me2 from "../constants/images/me2.jpg"
import me3 from "../constants/images/me3.jpg"
import me4 from "../constants/images/me4.jpg"
import me5 from "../constants/images/me5.jpg"
import me6 from "../constants/images/me6.jpg"
import me7 from "../constants/images/me7.jpg"
import me8 from "../constants/images/me8.jpg"
import me9 from "../constants/images/me9.jpg"
import me10 from "../constants/images/me10.jpg"

const Home = () => {
  // const images = [
  //   {
  //     original: 'https://picsum.photos/id/1018/1000/600/',
  //     thumbnail: 'https://picsum.photos/id/1018/250/150/',
  //   },
  //   {
  //     original: 'https://picsum.photos/id/1015/1000/600/',
  //     thumbnail: 'https://picsum.photos/id/1015/250/150/',
  //   },
  //   {
  //     original: 'https://picsum.photos/id/1019/1000/600/',
  //     thumbnail: 'https://picsum.photos/id/1019/250/150/',
  //   },
  // ];
  const images= [
    {
      original: me1,
      thumbnail: me1
    },
    {
      original: me2,
      thumbnail: me2
    },
    {
      original: me3,
      thumbnail: me3
    },
    {
      original: me4,
      thumbnail: me4
    },
  ]
  return (
    <div className="pt-16">
      <h1 className="font-semibold text-2xl text-center">
        Hi, I am Ashutosh Shukla
      </h1>
      <h2 className="mt-2 text-lg text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </h2>
      <div className="py-16 reimga"><ReactImageGallery items={images}/></div>
    </div>
  );
};

export default Home;
