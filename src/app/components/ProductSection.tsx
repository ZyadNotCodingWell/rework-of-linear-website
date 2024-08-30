import { AddIcon } from "./Icons"
import Card1 from "@/../public/BlCard1.png";
import Card2 from "@/../public/BlCard2.png";
import Card3 from "@/../public/BlCard3.png";


export default function ProductSection() {
	return (
		<div className="bg-[radial-gradient(80%_150%_at_center_bottom,rgb(97,106,115,0.2)_20%,transparent_87%)]">

		<div className="container self-center mx-auto w-full">

		<div id="Modern_Product_Teams" className="flex flex-col py-24 px-11 md:px-24 gap-10">
		<div className="flex flex-col lg:flex-row justify-between lg:justify-start w-full lg:gap-20
		3 max-w-5xl lg:max-w-full items-center self-center lg:self-start">
			<div className="text-xl md:text-4xl lg:text-5xl text-center lg:text-left min-w-xl md:w-sm lg:max-w-[390px] font-semibold tracking-wide">Made for modern product teams  </div> 
			<div className="text-xs md:text-xl lg:text-2xl text-center mt-5 lg:mt-0 lg:text-left min-w-60 max-w-3xl text-white/70">Linear is shaped by the practices and principles that distinguish world-class product teams from the rest: relentless focus, fast execution, and a commitment to the quality of craft.</div>
		</div>
		<div className="flex flex-col lg:flex-row h-fit w-full items-center justify-center my-10 py-18 gap-8">
			<div id="BlCard" className="px-6 py-2">
			<div style={{
				backgroundImage: `url(${Card1.src})`,
				backgroundSize: 'contain'
			}} className="min-w-[300px] min-h-[300px] z-35"></div>
					<div className="flex flex-row w-full justify-between items-center">
						<div className="text-md max-w-40">Purpose-built for project development</div>
						<AddIcon />
					</div>
			</div>
			<div id="BlCard" className="px-6 py-4">
				<div style={{
					backgroundImage: `url(${Card2.src})`,
					backgroundSize: 'contain'
				}} className="min-w-[300px] min-h-[300px] z-35"></div>
					<div className="flex flex-row w-full justify-between items-center">
						<div className="text-md max-w-40">Designed to move fast</div>
						<AddIcon />
					</div>
			</div>
			<div id="BlCard" className="px-6 py-4">
				<div style={{
					backgroundImage: `url(${Card3.src})`,
					backgroundSize: 'contain'
				}} className="min-w-[300px] min-h-[300px] z-35"></div>
					<div className="flex flex-row w-full justify-between items-center">
						<div className="text-md max-w-40">Crafted to perfection</div>
						<AddIcon />
					</div>
			</div>


		</div>
	</div>
	
</div>
</div>
	)
}