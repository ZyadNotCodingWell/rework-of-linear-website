import Dashboard from "@/../public/dashboard.png";
import { ButtonPrimary, ButtonSecondary } from "@/app/components/Buttons";
import Image from "next/image";

export default function Hero() {
	return (<div className="bg-sectionProduct">

	<div className="container self-center mx-auto w-full">
		<div id="Hero-Section" className="flex flex-col px-11 md:px-24">
		<div id='root' className="flex flex-col align-left gap-3 mt-14">
			<div className="text-2xl md:text-5xl lg:text-6xl font-semibold max-w-3xl lg:max-w-5xl">Linear is a purpose - built tool for planning and building projects</div>
			<div className="text-md md:text-2xl lg:text-3xl text-white/70 max-w-xl lg:max-w-3xl mt-2 translate-y-2 font-normal">Meet the system for modern software development. Streamline issues, projects and product roadmaps.</div>
			<div className="flex flex-row gap-5 pt-14">
				<ButtonPrimary className="">Start Building</ButtonPrimary>
				<div 
				className="px-3 py-1 flex text-white min-w-24 [mask-image:linear-gradient(to_bottom_right,black_20%,transparent)] flex-none justify-center bg-transparent border border-white/20 font-normal tracking-wide text-md md:text-lg rounded-lg">
					Introducing initiatives
				</div>
			</div>
		</div>
	</div>
	
	<div id="hero-image-div" className="mx-8 md:mx-24 mt-12 md:mt-0 [mask-image:linear-gradient(to_right,transparent,black_30%,black_60%,transparent)]" >
		<div style={{
			backgroundImage: `url(${Dashboard.src})`,
			backgroundSize:  "contain",
		}}
		className="md:-rotate-6 md:skew-x-12 md:translate-x-20 md:translate-y-24 overflow-hidden overscroll-none">
			<div className="border-plus overflow-x-hidden opacity-0">
				<Image 
					src="/dashboard.png"
					alt="Dashboard"
					width={90000}
					height={40000}
					/>
			</div>
		</div>
	</div>
</div>
</div>
	);
};