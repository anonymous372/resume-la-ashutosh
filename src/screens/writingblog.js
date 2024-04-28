import { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BLOGS, TEACHINGS } from "../constants/writings";

const Teaching = () => {
	return (
		<div className="pt-12 h-auto">
			{ BLOGS.map(( blog, idx ) => {
				return (
					<div className="flex flex-col mx-auto max-w-5xl border border-[3px] px-4 py-2 rounded bg-slate-50 mb-8 text-2xl text-gray-700 sm:text-left text-center">
						<h1>{blog.title}</h1>
						<div className={ `sm:border-0 border-b-2 justify-between pl-4 pr-2 py-3 mt-4` }>
							<div className="text-xl text-zinc-600">{ blog.description }</div>
						</div>
							<div className="text-slate-400 text-sm flex gap-6">
								<span className="text-slate-600">References:</span>
								{
								blog.references.map((ref, idx)=>{
								return (
									<a href={ref.link} className="text-blue-400 relative" target="blank">
										<span className="text-slate-400 mr-1">[{idx}]</span>
										{ref.text}
									</a>
								)})
								}
						</div>
					</div>
					);
				}
			) }
		</div>
	);
};

export default Teaching;

// Teaching Assistant for optics, PH3114, IISER Pune
// Teaching Assistant for Physics Lab II IISER Pune
// FC, Physics faculty 2023 February
//<h1 className="text-center text-4xl pt-6 mb-3">
				//What, Where, When
			//</h1>
			//<p className="text-right mb-10 italic">~ Teaching is an art.</p>

// Contact
// Name & email & address
// External Links
