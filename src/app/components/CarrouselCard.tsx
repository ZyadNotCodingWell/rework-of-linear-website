import Image from "next/image";
import React from "react";

import { AddIcon } from "./Icons";

export const CardComp = ({ image, subtext, mainText, mainText2}: any) => {
	return (
		<div className="bg-black inline-block min-w-72 rounded-xl relative py-2 px-2 items-center object-none">
			<div className="">
				<Image 
				src={image}
				alt = {"cardImage"}
				width={280}
				height={5}
				className="rounded-lg"
				/>
			</div>
			<div className="flex absolute bottom-4 inset-x-8 flex-row items-center min-w-60 max-w-60 justify-between whitspace-nowrap">
				<div className="flex flex-col max-w-40">
					<div className="text-xs md:text-sm font-normal text-white/60">{subtext}</div>
					<div className="text-xs md:text-sm w-full min-h-14 max-h-14 font-normal">{mainText} <br/>{mainText2}</div>
				</div>
				<div className="max-w-16 max-h-16 items-center justify-center">
					<AddIcon />
				</div>
			</div>
		</div>
	);

};