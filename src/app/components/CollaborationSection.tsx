
import { CardComp } from "@/app/components/CarrouselCard";

export default function Collaborations() {
	return (
		<div className="bg-sectionProduct">

		<div className="container self-center mx-auto w-full">

		<div id="Collaborations" className="flex flex-col pt-24 px-11 md:px-24 w-full justify-left items-center">
		<div className="flex flex-col w-full">
			
			<div className="flex flex-row items-center w-fit gap-2 py-2">
				<div className="flex w-4 h-2 text-xs md:text-md lg:text-lg bg-violet rounded-full"></div>
				<div className="flex">Workflow and integrations</div>
				<div className="flex"> › </div>
			</div>
			<div className="flex flex-row items-center w-fit gap-2 py-2 text-xl md:text-4xl lg:text-5xl font-semibold">Collaborate across tools and teams</div>
			
			<div  className="flex flex-col items-start w-fit py-2 text-xs md:text-xl lg:text-2xl font-normal">
				<div className="text-white/70">Expand the capabilities of the Linear system with a wide variety of integrations that keep everyone in your organization aligned and focused.</div>
			</div>
		</div>
		<div id="Collaboration-scroller" className="flex relative w-[100vw] py-28 overscroll-x-hidden  overflow-x-auto overflow-y-hidden [mask-image:linear-gradient(to_right,transparent_10%,black_35%,black_75%,transparent_90%)]">
			<div className="flex min-w-max self-center mx-auto gap-16 px-48">
				<CardComp 
				image = "/card1.jfif"
				subtext = "Powerful git workflows"
				mainText = "Automate pull requests"  
				mainText2= "and commit workflows"
				/>  
				<CardComp 
				image = "/card2.jfif"
				subtext = "Linear for IOS & Android"
				mainText = "Fill and track"  
				mainText2= "issues on the go"
				/>  
				<CardComp 
				image = "/card3.jfif"
				subtext = "Linear Asks"
				mainText = "Turn workplace requests"  
				mainText2= "into actionnable issues"
				/>  
				<CardComp 
				image = "/card4.jfif"
				subtext = "Customer support"
				mainText = "Keep a tight feedback"  
				mainText2= "loop with your customers"
				/>  
				<CardComp 
				image = "/card5.jfif"
				subtext = "Linear integrations"
				mainText = "100+ ways to enhance"  
				mainText2= "your Linear experience"
				/>  
				<CardComp 
				image = "/card6.jfif"
				subtext = "Figma integration"
				mainText = "Bridge the gap between"  
				mainText2= "engineering and design"
				/>  
				<CardComp 
				image = "/card7.jfif"
				subtext = "Built for developers"
				mainText = "Build your own add-"  
				mainText2= "ons with the Linear API"
				/>  
			</div>
		</div>
	</div>
</div>
</div>
	)
}