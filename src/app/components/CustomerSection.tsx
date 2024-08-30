import Link from "next/link"
import { useState } from "react";


export default function CustomerSection() {

	const[blurredDiv, setBlurredDiv] =  useState(false);
	
	return (
		<div className="container self-center mx-auto w-full">
	<div id="Customers-Section" className=" max-w-96 md:max-w-2xl flex flex-col lg:min-w-full flex-none mx-auto px-11 md:px-24 py-28 relative">
        
		<div id="customers-text" className="text-md md:text-2xl text-white w-fit text-center mx-auto">Powering the world&apos;s best product teams.</div>
		<div className="text-xs md:text-lg text-white/70 text-center mx-auto">From next-gen startups to established entreprises.</div>
		
		<div className="relative flex flex-col pt-14 w-full justify-between items-center text-md md:text-2xl lg:text-3xl font-semibold gap-10" onMouseEnter={() => setBlurredDiv(true)} onMouseLeave={() => setBlurredDiv(false)}>
			
			<div className="flex flex-row gap-16 lg:gap-24 mt-5 items-center justify-between"> 
				<div className="flex justify-center items-center">Brand A</div>
				<div className="flex justify-center items-center">Brand B</div>
				<div className="flex justify-center items-center">Brand C</div>
			</div>
			
			<div className="flex flex-row gap-16 lg:gap-24 mb-5 items-center justify-between"> 
				<div className="flex justify-center items-center">Brand D</div>
				<div className="flex justify-center items-center">Brand E</div>
				<div className="flex justify-center items-center">Brand F</div>
			</div>
			
			<div className={blurredDiv ? "absolute flex inset-0 w-full align-center justify-center items-center backdrop-blur-header-glass z-40 transition duration-300" : "hidden"} >
					<Link href="#">
						<div className="text-md md:text-xl px-6 py-2 rounded-full bg-neutral-900/80 border border-neutral-700/50 font-normal hover:bg-neutral-950 transition duration-500"> Meet our customers</div>
					</Link>
			</div>
		
		</div>
	
	</div>

</div>
	)
}