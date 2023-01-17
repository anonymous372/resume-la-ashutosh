import { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { TEACHING } from "../constants/data";

const Teaching = () => {
  const [a1, setA1] = useState(false);
  const [a2, setA2] = useState(false);
  const [a3, setA3] = useState(false);
  const setState = (id) => {
    console.log("Came", id);
    if (id === 1) {
      setA1(!a1);
      setA2(false);
      setA3(false);
    } else if (id === 2) {
      setA2(!a2);
      setA1(false);
      setA3(false);
    } else if (id === 3) {
      setA3(!a3);
      setA1(false);
      setA2(false);
    }
  };

  console.log(a1, a2, a3);
  return (
    <div className="">
      <h1 className="text-center text-4xl pt-6 mb-3">
        What Where When I taught
      </h1>
      <p className="text-right mb-10 italic">~ Teaching is an art.</p>
      <div
        className="flex flex-col text-2xl border border-4 px-8 py-2"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* Heading */}
        <div className="pt-4 py-2 pl-4 rounded flex items-center">
          {!a1 ? (
            <FaAngleRight
              className="mr-3 cursor-pointer"
              onClick={() => setState(1)}
            />
          ) : (
            <FaAngleDown
              className="mr-3 cursor-pointer"
              onClick={() => setState(1)}
            />
          )}
          Teaching Assistant for optics, PH3114, IISER Pune
        </div>
        {/* SubText */}
        {a1 && (
          <div className="pb-2 pl-12 text-lg">
            <p className="px-5 pb-2 box-border box shadow border-b-2 border-l-2">
              {TEACHING}
            </p>
          </div>
        )}
        <div className="py-4 pl-4 rounded flex items-center">
          {!a2 ? (
            <FaAngleRight
              className="mr-3 cursor-pointer"
              onClick={() => setState(2)}
            />
          ) : (
            <FaAngleDown
              className="mr-3 cursor-pointer"
              onClick={() => setState(2)}
            />
          )}
          Teaching Assistant for Physics Lab IISER Pune
        </div>
        {a2 && (
          <div className="pb-2 pl-12 text-lg">
            <p className="px-5 pb-2 box-border box shadow border-b-2 border-l-2">
              {TEACHING}
            </p>
          </div>
        )}
        <div className="py-4 pl-4 rounded flex items-center">
          {!a3 ? (
            <FaAngleRight
              className="mr-3 cursor-pointer"
              onClick={() => setState(3)}
            />
          ) : (
            <FaAngleDown
              className="mr-3 cursor-pointer"
              onClick={() => setState(3)}
            />
          )}
          Fergusson College, Physics faculty 2023 February
        </div>
        {a3 && (
          <div className="pb-2 pl-12 text-lg">
            <p className="px-5 pb-2 box-border box shadow border-b-2 border-l-2">
              {TEACHING}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Teaching;

// Teaching Assistant for optics, PH3114, IISER Pune
// Teaching Assistant for Physics Lab II IISER Pune
// FC, Physics faculty 2023 February

// Contact
// Name & email & address
// External Links
