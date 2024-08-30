import Image from "next/image";

import { WorkflowIcon, ViewIcon, FilterIcon, SLAIcon} from "@/app/components/Icons";
import Insights from "@/../public/Insights.png";
import { ButtonSecondary } from "./Buttons";


export default function IssueTrackingFeatures() {
	return (
		<div className="container self-center py-24 mx-auto w-full">

		<div id="Features_Section_2" className="flex flex-col relative px-11 md:px-24 justify-between overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_20%,black_75%,transparent)] items-center">
		<div className="flex flex-col border-plus-left lg:flex-row gap-auto justify-between w-full">
			<div className="flex flex-col border-header-glass w-full items-center px-5 py-8">
				<div className="text-md md:text-lg lg:text-xl font-semibold w-fit text-center">Build momentum with Cycles</div>
				<div className="text-md md:text-lg lg:text-xl mt-1 max-w-48 md:max-w-80 lg:max-w-96 text-white/70 text-center">Create healthy routines and focus your team on what work should happen next.</div>
				<div className="my-8 md:my-16 lg:my-28 [mask-image:linear-gradient(to_right,black,black_70%,transparent_95%)]">
					<Image 
					src = "/Tracking_image1.JPG"
					alt = "Interesting stuff"
					width={374}
					height={600} 
					/></div>
			</div>
			<div className="flex flex-col border-header-glass w-full items-center px-5 py-8">
				<div className="text-md md:text-lg lg:text-xl font-semibold w-fit text-center">Manage incoming work with Triage</div>
				<div className="text-md md:text-lg lg:text-xl mt-1 w-fit text-white/70 text-center">Review and assign incoming bug reports,<br/> feature requests, and other unplanned work.</div>
				<div className="my-8 md:my-16 lg:my-28 [mask-image:linear-gradient(to_right,black,black_70%,transparent_95%)]">
					<Image 
					src = "/Tracking_image2.JPG"
					alt = "Interesting stuff"
					width={400}
					height={600} 
					/></div>
			</div>

		</div>

		<div id="Insights" className="flex flex-col pt-14 max-w-sm md:max-w-md lg:max-w-full">
			
				<div className="flex flex-col items-center lg:items-start lg:px-10 text-center lg:text-start">
					<div className="text-xs md:text-lg lg:text-2xl font-semibold">Linear Insights</div>
					<div className="text-xs md:text-lg lg:text-xl my-3 text-white/70 max-w-56 md:max-w-60 lg:max-w-sm">Take the guesswork out of product planning with realtime, actionable data analytics.</div>
					<ButtonSecondary>Learn more  ›</ButtonSecondary>
				</div>
			
			<div className="min-w-[1500px] h-[450px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_40%,transparent)]" style={{
				backgroundImage: `url(${Insights.src})`, backgroundSize: "cover", 
			}} ></div>
		</div>
		
		<div className="flex flex-col text-xs md:text-md lg:text-xl lg:flex-row mt-14 gap-8 lg:gap-10 w-full justify-between lg:justify-center items-center"> 
			<div className="flex flex-row justify-between md:justify-center w-full">
				<div className="flex flex-col w-48 lg:w-full gap-2 px-5">
					<div className=" flex flex-row items-center gap-2 w-full font-semibold">
						<WorkflowIcon
							className=""
							width={16}
							height={16}
							fill="#FFFFFC"/>
						Tailored workflows
					</div>
					<div className="font-normal text-white/70">Track progress across custom issue flows for your team.</div>
				</div>
				<div className="flex flex-col w-48 lg:w-full gap-2 px-5">
					<div className=" flex flex-row items-center w-full gap-2 font-semibold">
						<ViewIcon
							className=""
							width={16}
							height={16}
							fill="#FFFFFC"/>
						Custom views
					</div>
					<div className="font-normal text-white/70">Switch between list and board. Group issues with swimlanes.</div>
				</div>
			</div>
			<div className="flex flex-row justify-between md:justify-center w-full">
				<div className="flex flex-col w-48 lg:w-full gap-2 px-5">
					<div className=" flex flex-row items-center w-full gap-2 font-semibold">
						<FilterIcon
							className=""
							width={16}
							height={16}
							fill="#FFFFFC"/>
						Filters
					</div>
					<div className="font-normal text-white/70">Refine issue lists down to what&apos;s most relevant to you.</div>
				</div>
				<div className="flex flex-col w-48 lg:w-full gap-2 px-5">
					<div className=" flex flex-row items-center w-full gap-2 font-semibold">
						<SLAIcon
							className=""
							width={16}
							height={16}
							fill="#FFFFFC"/>
						SLAs
					</div>
					<div className="font-normal text-white/70">Automatically apply deadlines to time-sensitive tasks.</div>
				</div>
			</div>
		</div>
	</div>
</div>
	)
}