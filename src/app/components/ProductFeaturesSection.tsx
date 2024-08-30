
import Image from "next/image";
import { useState } from "react";
import SelectedImage1 from "@/../public/selected1Image.png";
import SelectedImage2 from "@/../public/selected2Image.png";
import SelectedImage3 from "@/../public/selected3Image.png";
import {InitiativesIcon, CrossTeamsIcon, MilestonesIcon, ProgressIcon} from "@/app/components/Icons"
import ProductFeatures from "@/../public/Features_Image1.png";


export default function ProductFeaturesSection() {
	const[selected1, setSelected1] = useState(true);
  const[selected2, setSelected2] = useState(false);
  const[selected3, setSelected3] = useState(false);

	return (
		
		<div className="container self-center mx-auto w-full">

		<div id="Features_Section" className="flex flex-col relative justify-between px-11 md:px-24 w-full items-center overflow-x-hidden">
		<div className="flex flex-col lg:flex-row gap-auto justify-between w-full border-plus-left">
			<div className="flex flex-col border-header-glass w-full items-center px-5 py-8">
				<div className="w-full items-start">
					<div className="text-md md:text-lg lg:text-xl font-semibold w-full text-center mx-4">Manage projects end-to-end</div>
					<div className="text-md md:text-lg lg:text-xl mt-1 w-full text-center text-white/70 mx-4">Consolidate specs, milestones, tasks,<br/>and other documentation in one centralized location.</div>
				</div>
				<div className="flex p-0 [mask-image:linear-gradient(to_bottom,black,black_60%,transparent_95%)]">
					<div className="w-[380px] h-[300px] my-8 md:my-16 lg:my-28 [mask-image:linear-gradient(to_right,black,black_60%,transparent_95%)] " style={{
						backgroundImage: `url(${ProductFeatures.src})`,
						backgroundSize: 'contain',
					}}></div>
					</div>
			</div>
			<div className="flex relative flex-col border-header-glass w-full items-start py-8 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,trasparent)]">
				<div className="text-md md:text-lg lg:text-xl font-semibold w-full text-center">Project updates</div>
				<div className="text-md md:text-lg lg:text-xl mt-1 w-full text-center text-white/70">Communicate progress and project <br/> health with built-in project updates.</div>
				<div className="absolute inset-0 bg-[linear-gradient(to_right,black,transparent_60%,transparent_60%,black)] z-20 pointer-events-none overflow-hidden"></div>
				<div className=" relative my-16 w-full py-24 md:py-40 items-center overflow-hidden">
					<div className="relative flex justify-center text-[10px] md:text-[16px] -translate-y-12">
						<div className="bg-carrousel-card justify-center backdrop-blur-xl min-h-28 md:min-h-36 w-72 md:w-96 border border-white/10 rounded-2xl px-10 py-4 absolute flex-col saturate-0 ease-in-out duration-300 hover:saturate-100 flex md:-skew-y-6 -translate-y-8 -translate-x-8 md:-translate-x-10 hover:-translate-y-12 md:hover:-translate-y-16">
							<div className="text-error-red font-semibold">✘ Off track</div>
							<div className="mt-2">Unexpected roadblocks forced us to take a different...</div>
							<div className="font-normal mt-3 text-white/70">Oct 3</div>
						</div>
						<div className="bg-carrousel-card justify-center backdrop-blur-xl min-h-28 md:min-h-36 w-72 md:w-96 border border-white/10 rounded-2xl px-10 py-4 absolute flex-col saturate-0 ease-in-out duration-300 hover:saturate-100 flex md:-skew-y-6 hover:-translate-y-4 md:hover:-translate-y-8">
							<div className="text-warning-yellow font-semibold">!  At risk</div>
							<div className="mt-2">Progress slowed down last week because</div>
							<div className="font-normal mt-3 text-white/70">Oct 8</div>
						</div>
						<div className="bg-carrousel-card justify-center backdrop-blur-xl min-h-28 md:min-h-36 w-72 md:w-96 border border-white/10 rounded-2xl px-10 py-4 absolute flex-col flex md:-skew-y-6 translate-x-8 md:translate-x-10 translate-y-8 hover:translate-y-2 md:hover:-translate-y-2 ease-in-out duration-300">
							<div className="text-success-green font-semibold">✔ On track</div>
							<div className="mt-2">We are ready to launch next thursday</div>
							<div className="font-normal mt-3 text-white/70">Sep 8</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="flex flex-col lg:flex-row mt-0 py-14 border-plus-bot items-center gap-20 lg:gap-48 justify-between w-fit">
			<div className="flex flex-col h-474">
				<div className="text-sm md:text-lg lg:text-2xl text-center items-center lg:max-w-48 font-semibold">Ideate and specify what to build next</div>
				<div className="flex flex-row lg:flex-col gap-12 lg:gap-4 mt-4 lg:mt-8">
					<div className="flex flex-col-reverse lg:flex-row text-xs md:text-md lg:text-xl gap-3 font-normal items-center" onClick={() => {setSelected1(true); setSelected2(false); setSelected3(false)}}>
							<div className={ selected1 ? "h-1 w-full lg:w-1 lg:h-6 rounded-full -translate-y-2 lg:translate-y-0 bg-sucess-green" : "h-1 w-full lg:w-1 -translate-y-2 lg:translate-y-0 lg:h-6 rounded-full bg-gray"}></div>
							<div className={ selected1 ? "text-white" : "text-white/30 hover:text-white/50"}>Collaborative documents</div>
					</div>
					<div className="flex flex-col-reverse lg:flex-row text-xs md:text-md lg:text-xl gap-3 font-normal items-center" onClick={() => {setSelected1(false); setSelected2(true); setSelected3(false)}}>
							<div className={ selected2 ? "h-1 w-full lg:w-1 lg:h-6 rounded-full -translate-y-2 lg:translate-y-0 bg-sucess-green" : "h-1 w-full lg:w-1 -translate-y-2 lg:translate-y-0 lg:h-6 rounded-full bg-gray"}></div>
							<div className={ selected2 ? "text-white" : "text-white/30 hover:text-white/50"}>Inline comments</div>
					</div>
					<div className="flex flex-col-reverse lg:flex-row text-xs md:text-md lg:text-xl gap-3 font-normal items-center" onClick={() => {setSelected2(false); setSelected3(true); setSelected1(false)}}>
							<div className={ selected3 ? "h-1 w-full lg:w-1 lg:h-6 rounded-full -translate-y-2 lg:translate-y-0 bg-sucess-green" : "h-1 w-full lg:w-1 -translate-y-2 lg:translate-y-0 lg:h-6 rounded-full bg-gray"}></div>
							<div className={ selected3 ? "text-white" : "text-white/30 hover:text-white/50"}>Text-to-issue commands </div>
					</div>
				</div>
			</div>
			<div className="items-center justify-center border border-white/5 p-1 rounded-xl [mask-image:linear-gradient(to_bottom,black_60%,transparent)] ">
				<div className={selected1 ? "flex items-center min-w-[360px] min-h-[360px] md:min-w-[460px] md:min-h-[460px]" : "hidden"} style={{
					backgroundImage: `url(${SelectedImage1.src})`,
					backgroundSize: "contain"
				}}>
				</div>
				<div className={selected2 ? "flex items-center min-w-[360px] min-h-[360px] md:min-w-[460px] md:min-h-[460px]" : "hidden"} style={{
					backgroundImage: `url(${SelectedImage2.src})`,
					backgroundSize: "contain"
				}}>
				</div>
				<div className={selected3 ? "flex items-center min-w-[360px] min-h-[360px] md:min-w-[460px] md:min-h-[460px]" : "hidden"} style={{
					backgroundImage: `url(${SelectedImage3.src})`,
					backgroundSize: "contain"
				}}>
				</div>
			</div>
		</div>
		<div className="flex flex-col text-xs md:text-md lg:text-xl lg:flex-row mt-14 gap-8 lg:gap-10 w-full justify-between lg:justify-center items-center"> 
			<div className="flex flex-row justify-between md:justify-center w-full">
				<div className="flex flex-col w-48 lg:w-full gap-2 px-5">
					<div className=" flex flex-row items-center gap-2 w-full font-semibold">
						<InitiativesIcon
							className=""
							width={16}
							height={16}
							fill="#FFFFFC"/>
						Initiatives
					</div>
					<div className="font-normal text-white/70">Coordinate strategic product efforts.</div>
				</div>
				<div className="flex flex-col w-48 lg:w-full gap-2 px-5">
					<div className=" flex flex-row items-center w-full gap-2 font-semibold">
						<CrossTeamsIcon
							className=""
							width={16}
							height={16}
							fill="#FFFFFC"/>
						Cross-team projects
					</div>
					<div className="font-normal text-white/70">Collaborate across teams and departments.</div>
				</div>
			</div>
			<div className="flex flex-row justify-between md:justify-center w-full">
				<div className="flex flex-col w-48 lg:w-full gap-2 px-5">
					<div className=" flex flex-row items-center w-full gap-2 font-semibold">
						<MilestonesIcon
							className=""
							width={16}
							height={16}
							fill="#FFFFFC"/>
						Milestones
					</div>
					<div className="font-normal text-white/70">Break projects down into concrete phases.</div>
				</div>
				<div className="flex flex-col w-48 lg:w-full gap-2 px-5">
					<div className=" flex flex-row items-center w-full gap-2 font-semibold">
						<ProgressIcon
							className=""
							width={16}
							height={16}
							fill="#FFFFFC"/>
						Progress insights
					</div>
					<div className="font-normal text-white/70">Track scope, velocity, and progress over time.</div>
				</div>
			</div>
		</div>
	</div>
</div>
	)
}