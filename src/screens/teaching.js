import { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TEACHINGS } from "../constants/data";

const Teaching = () => {
  return (
    <div className="">
      <h1 className="text-center text-4xl pt-6 mb-3">
        What Where When I taught
      </h1>
      <p className="text-right mb-10 italic">~ Teaching is an art.</p>
      <div
        className="flex flex-col mx-auto max-w-5xl border border-[3px] px-4 py-2 rounded bg-slate-50 mb-8">
        <h1 className="text-2xl text-gray-700">Teaching Assistantship</h1>
        {
          TEACHINGS.filter(x => x.title === "Teaching Assistantship").map((elem)=>{
            return (
              <div className="flex gap-10 justify-between pl-4 pr-2 py-3 mt-4">
                <div className="text-xl text-zinc-500">
                  {elem.description}
                </div>
                <div className="text-xl text-zinc-400 italic lg:whitespace-nowrap">
                  {elem.interval}
                </div>
              </div>
            )
          })
        }
      </div>
      <div
        className="flex flex-col mx-auto max-w-5xl border border-[3px] px-4 py-2 rounded-md bg-slate-50">
        <h1 className="text-2xl text-gray-700">Teachings</h1>
        {
          TEACHINGS.filter(x => x.title === "Teaching").map((elem)=>{
            return (
              <>
                <div className="flex gap-10 justify-between pl-4 pr-2 py-3 mt-4">
                  <div className="text-xl text-zinc-500">
                    {elem.description}
                  </div>
                  <div className="text-xl italic text-zinc-400 lg:whitespace-nowrap">
                  {elem.interval}
                  </div>
                </div>
                {
                  elem.extraText && 
                  <div className="text-lg text-zinc-500 font-medium px-4 -mt-4 mb-2">
                    {elem.extraText}{' '}
                    <span onClick={() => window.open(elem.extraLink, "_blank")} className="text-blue-500 cursor-pointer">here</span>
                  </div>
                }
              </>
            )
          })
        }
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
