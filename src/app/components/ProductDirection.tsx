import GreenSectionImage from "@/../public/product_section.png";


export default function ProductDirection() {
	return (
		<div className="bg-sectionProduct py-24">

		<div className="container self-center mx-auto w-full">

		<div id="Product_Direction" className="flex flex-col w-full px-11 md:px-24 justify-left items-center">
		<div className="flex flex-col w-full ">
			<div className="flex flex-row items-center w-fit gap-2 py-2">
				<div className="flex w-4 h-2 text-xs md:text-md lg:text-lg bg-sucess-green rounded-full"></div>
				<div className="flex ">Project and long-term planning</div>
				<div className="flex "> › </div>
			</div>
			<div className="flex flex-row items-center w-fit gap-2 py-2 text-xl md:text-4xl lg:text-5xl font-semibold">See the product direction</div>
			<div  className="flex flex-col items-start w-fit py-2 leading-11 text-xs md:text-xl lg:text-2xl font-normal">
				<div>Align your team around a unified product timeline.</div>
				<div className="text-white/70">Plan, manage, and track all product initiatives with Linear&apos;s visual planning tools.</div>
			</div>
		</div>
		<div className="">
			<div id="Product_Section_Image" className="min-h-[600px] min-w-[1500px] [mask-image:linear-gradient(to_right,transparent,black_25%,black_75%,transparent)]" style={{ backgroundImage: `url(${GreenSectionImage.src})`, backgroundSize: "contain"}}></div>
		</div>
	</div>
</div>
</div>
	)
}