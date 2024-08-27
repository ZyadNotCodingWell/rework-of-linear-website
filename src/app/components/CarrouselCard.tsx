import Image from "next/image";
import React from "react";

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
			<div className="flex absolute bottom-10 inset-x-8 flex-row items-center justify-between whitspace-nowrap">
				<div className="flex flex-col w-full">
					<div className="text-xs font-normal text-grey">{subtext}</div>
					<div className="text-sm w-full font-normal">{mainText}<br/>{mainText2}</div>
				</div>
				<div className="border-plus rounded-full px-1 mt-5 items-center justify-center text-grey text-md font-bold"> + </div>
			</div>
		</div>
	);

};