import { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TEACHINGS } from "../constants/writings";

const Teaching = () => {
	return (
		<div className="pt-12">
			
			<div className="flex flex-col mx-auto max-w-5xl border border-[3px] px-4 py-2 rounded bg-slate-50 mb-8">
				<h1 className="text-2xl text-gray-700 sm:text-left text-center">First Blog: What is Lorem Ipsum?</h1>
				{ TEACHINGS.filter( ( x ) => x.title === "What is Lorem Ipsum?" ).map(
					( elem, idx ) => {
						let id = TEACHINGS.filter( x => x.title === "What is Lorem Ipsum?" ).length - 1;
						return (
							<div className={ `flex ${ idx != id && "sm:border-0 border-b-2" } sm:flex-row flex-col gap-2 sm:gap-10 justify-between pl-4 pr-2 py-3 mt-4` }>
								<div className="text-xl text-zinc-600">{ elem.description }</div>
								<div className="text-xl text-zinc-400 italic lg:whitespace-nowrap">
									{ elem.interval }
								</div>
							</div>
						);
					}
				) }
			</div>
			
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
