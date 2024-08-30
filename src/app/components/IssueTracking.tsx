import YellowSectionImage from "@/../public/task_tracking.png";


export default function IssueTracking() {
	return (
		<div className="bg-sectionProduct">

		<div className="container self-center mx-auto w-full">

		<div id="Issue_Tracking" className="flex flex-col pt-24 px-11 md:px-24 w-full justify-left items-center">
		<div className="flex flex-col w-full">
			<div className="flex flex-row items-center w-fit gap-2 py-2">
				<div className="flex w-4 h-2 text-xs md:text-md lg:text-lg bg-warning-yellow rounded-full"></div>
				<div className="flex">Task tracking and sprint planning</div>
				<div className="flex"> › </div>
			</div>
			<div className="flex flex-row items-center w-fit gap-2 py-2 text-xl md:text-4xl lg:text-5xl font-semibold">Issue tracking you&apos;ll enjoy using</div>
			<div  className="flex flex-col items-start w-fit py-2 text-xs md:text-xl lg:text-2xl font-normal">
				<div>Optimized for speed and efficiency.</div>
				<div className="text-white/70">Create tasks in seconds, discuss issues in context, and breeze through your work in views tailored to you and your team.</div>
			</div>
		</div>
		
		<div className="flex overflow-hidden p-0 flex-none [mask-image:linear-gradient(to_bottom,transparent,black_50%,transparent)]">
			<div id="Task_Section_Image" className="min-h-[800px] min-w-[1500px] [mask-image:linear-gradient(to_right,transparent,black_25%,black_75%,transparent)]" style={{ backgroundImage: `url(${YellowSectionImage.src})`, backgroundSize: "contain"}}></div>
		</div>
	</div>
</div>
</div>
	)
}