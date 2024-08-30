import Link from "next/link"
import { useState } from "react";
import { motion } from "framer-motion";


export default function CustomerSection() {

	const[blurredDiv, setBlurredDiv] =  useState(false);
	
	return (
	<div className="container self-center mx-auto w-full justify-center">
	<div id="Customers-Section" className=" max-w-96 md:max-w-2xl flex flex-col lg:min-w-96 flex-none md:px-20 self-center mx-auto py-4">
        
		<div id="customers-text" className="text-md md:text-2xl text-white text-center mx-auto">Powering the world&apos;s best product teams.</div>
		<div className="text-xs md:text-lg text-white/70 text-center mx-auto">From next-gen startups to established entreprises.</div>
		
		{/*Tablet and desktop version of logo section*/}
		<div className="relative mt-12 hidden md:flex md:flex-col w-full text-2xl font-semibold gap-4 px-4" onMouseEnter={() => setBlurredDiv(true)} onMouseLeave={() => setBlurredDiv(false)}>	
			<div className="flex flex-row items-center justify-between"> 
				<div className="flex justify-center items-center min-w-40 text-center mx-auto">Brand A</div>
				<div className="flex justify-center items-center min-w-40 text-center mx-auto">Brand B</div>
				<div className="flex justify-center items-center min-w-40 text-center mx-auto">Brand C</div>
			</div>		
			<div className="flex flex-row items-center justify-between"> 
				<div className="flex justify-center items-center min-w-40 text-center mx-auto">Brand D</div>
				<div className="flex justify-center items-center min-w-40 text-center mx-auto">Brand E</div>
				<div className="flex justify-center items-center min-w-40 text-center mx-auto">Brand F</div>
			</div>	
			<div className={blurredDiv ? "absolute flex inset-0 w-full items-center backdrop-blur-xl z-40 transition duration-300" : "hidden"} >
					<Link href="#">
						<div className="text-xl font-normal min-w-2xl self-center mx-auto"> Meet our customers</div>
					</Link>
			</div>
		</div>
		{/* End of tablet and desktop version of logo section */}
		{/* Phone version, a logo autoscroller */}
		<div className="md:hidden flex flex-1 my-8 [mask-image:linear-gradient(to_right,transparent,black_30%,black_70%,transparent)]">
			<motion.div className="flex flex-none -translate-x-0" initial={{
				translateX: '-50%'
			}} animate={{translateX: "0%"}} transition={{
				repeat: Infinity, duration: 15, ease: "linear",
			}}>
				<div className="flex justify-center items-center min-w-40 text-center mx-auto">Brand A</div>
				<div className="flex justify-center items-center min-w-40 text-center mx-auto">Brand B</div>
				<div className="flex justify-center items-center min-w-40 text-center mx-auto">Brand C</div>
				<div className="flex justify-center items-center min-w-40 text-center mx-auto">Brand D</div>
				<div className="flex justify-center items-center min-w-40 text-center mx-auto">Brand E</div>
				<div className="flex justify-center items-center min-w-40 text-center mx-auto">Brand F</div>
				<div className="flex justify-center items-center min-w-40 text-center mx-auto">Brand A</div>
				<div className="flex justify-center items-center min-w-40 text-center mx-auto">Brand B</div>
				<div className="flex justify-center items-center min-w-40 text-center mx-auto">Brand C</div>
				<div className="flex justify-center items-center min-w-40 text-center mx-auto">Brand D</div>
				<div className="flex justify-center items-center min-w-40 text-center mx-auto">Brand E</div>
				<div className="flex justify-center items-center min-w-40 text-center mx-auto">Brand F</div>
			</motion.div>
		</div>


	</div>

</div>
	)
}