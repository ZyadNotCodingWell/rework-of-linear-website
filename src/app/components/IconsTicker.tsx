'use client'
import { motion } from "framer-motion";
import { AddIcon, CrossTeamsIcon, FilterIcon, InitiativesIcon, MilestonesIcon, ProgressIcon, SLAIcon, ViewIcon, WorkflowIcon } from "./Icons";
import Image from "next/image";


export default function IconTicker() {
	return (
		<div className="w-[1024px] h-[392px] [mask-image:linear-gradient(to_right,transparent,black_25%,black_75%,transparent)] pointer-events-none">
			
			<div className="flex flex-col items-center h-[386px] justify-between overflow-hidden [mask-image:linear-gradient(to_bottom,black_50%,transparent)]">
				<div className="flex flex-1 items-center">
					<motion.div className="flex flex-none" initial={{translateX: '-25%'}} animate={{translateX: '0%'}} transition={{repeat: Infinity, duration: 15, ease: 'linear'}}>

						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/documentManager.png"} alt="docs" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/chatBubble.png"} alt="chat" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/doubleEdgedArrow.png"} alt="reciprocate" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/keyboard.png"} alt="keyboard" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lightbolt.png"} alt="speed" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lockpad.png"} alt="security" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/notepad.png"} alt="notes" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/oscillation.png"} alt="tracking" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/plus.png"} alt="add" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/sherrif.png"} alt="exclusive" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/documentManager.png"} alt="docs" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/chatBubble.png"} alt="chat" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/doubleEdgedArrow.png"} alt="reciprocate" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/keyboard.png"} alt="keyboard" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lightbolt.png"} alt="speed" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lockpad.png"} alt="security" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/notepad.png"} alt="notes" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/oscillation.png"} alt="tracking" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/plus.png"} alt="add" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/sherrif.png"} alt="exclusive" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/documentManager.png"} alt="docs" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/chatBubble.png"} alt="chat" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/doubleEdgedArrow.png"} alt="reciprocate" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/keyboard.png"} alt="keyboard" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lightbolt.png"} alt="speed" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lockpad.png"} alt="security" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/notepad.png"} alt="notes" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/oscillation.png"} alt="tracking" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/plus.png"} alt="add" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/sherrif.png"} alt="exclusive" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/documentManager.png"} alt="docs" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/chatBubble.png"} alt="chat" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/doubleEdgedArrow.png"} alt="reciprocate" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/keyboard.png"} alt="keyboard" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lightbolt.png"} alt="speed" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lockpad.png"} alt="security" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/notepad.png"} alt="notes" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/oscillation.png"} alt="tracking" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/plus.png"} alt="add" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/sherrif.png"} alt="exclusive" width={32} height={32} />
							</div>
						</div>



					</motion.div>
				</div>
				<div className="flex flex-1 items-center -translate-x-20">
					<motion.div className="flex flex-none" initial={{translateX: '-25%'}} animate={{translateX: '0%'}} transition={{repeat: Infinity, duration: 10, ease: 'linear'}}>

						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/documentManager.png"} alt="docs" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/cube.png"} alt="cube" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/key.png"} alt="key" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/keyboard.png"} alt="keyboard" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lockpad.png"} alt="security" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/play.png"} alt="notes" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lightbolt.png"} alt="speed" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/graph.png"} alt="tracking" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/plus.png"} alt="add" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/susSymbol.png"} alt="exclusive" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/documentManager.png"} alt="docs" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/cube.png"} alt="cube" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/key.png"} alt="key" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/keyboard.png"} alt="keyboard" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lockpad.png"} alt="security" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/play.png"} alt="notes" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lightbolt.png"} alt="speed" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/graph.png"} alt="tracking" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/plus.png"} alt="add" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/susSymbol.png"} alt="exclusive" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/documentManager.png"} alt="docs" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/cube.png"} alt="cube" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/key.png"} alt="key" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/keyboard.png"} alt="keyboard" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lockpad.png"} alt="security" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/play.png"} alt="notes" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lightbolt.png"} alt="speed" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/graph.png"} alt="tracking" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/plus.png"} alt="add" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/susSymbol.png"} alt="exclusive" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/documentManager.png"} alt="docs" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/cube.png"} alt="cube" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/key.png"} alt="key" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/keyboard.png"} alt="keyboard" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lockpad.png"} alt="security" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/play.png"} alt="notes" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lightbolt.png"} alt="speed" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/graph.png"} alt="tracking" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/plus.png"} alt="add" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/susSymbol.png"} alt="exclusive" width={32} height={32} />
							</div>
						</div>

						



					</motion.div>
				</div>
				<div className="flex flex-1 items-center translate-x-44">
					<motion.div className="flex flex-none" initial={{translateX: '-25%'}} animate={{translateX: '0%'}} transition={{repeat: Infinity, duration: 15, ease: 'linear'}}>

						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/documentManager.png"} alt="docs" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/chatBubble.png"} alt="chat" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/doubleEdgedArrow.png"} alt="reciprocate" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/keyboard.png"} alt="keyboard" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lightbolt.png"} alt="speed" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lockpad.png"} alt="security" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/notepad.png"} alt="notes" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/oscillation.png"} alt="tracking" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/plus.png"} alt="add" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/sherrif.png"} alt="exclusive" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/documentManager.png"} alt="docs" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/chatBubble.png"} alt="chat" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/doubleEdgedArrow.png"} alt="reciprocate" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/keyboard.png"} alt="keyboard" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lightbolt.png"} alt="speed" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lockpad.png"} alt="security" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/notepad.png"} alt="notes" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/oscillation.png"} alt="tracking" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/plus.png"} alt="add" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/sherrif.png"} alt="exclusive" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/documentManager.png"} alt="docs" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/chatBubble.png"} alt="chat" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/doubleEdgedArrow.png"} alt="reciprocate" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/keyboard.png"} alt="keyboard" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lightbolt.png"} alt="speed" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lockpad.png"} alt="security" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/notepad.png"} alt="notes" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/oscillation.png"} alt="tracking" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/plus.png"} alt="add" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/sherrif.png"} alt="exclusive" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/documentManager.png"} alt="docs" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/chatBubble.png"} alt="chat" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/doubleEdgedArrow.png"} alt="reciprocate" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/keyboard.png"} alt="keyboard" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lightbolt.png"} alt="speed" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lockpad.png"} alt="security" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/notepad.png"} alt="notes" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/oscillation.png"} alt="tracking" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/plus.png"} alt="add" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/sherrif.png"} alt="exclusive" width={32} height={32} />
							</div>
						</div>



					</motion.div>
				</div>
				<div className="flex flex-1 items-center translate-x-36">
					<motion.div className="flex flex-none" initial={{translateX: '-25%'}} animate={{translateX: '0%'}} transition={{repeat: Infinity, duration: 10, ease: 'linear'}}>

						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/documentManager.png"} alt="docs" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/cube.png"} alt="cube" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/key.png"} alt="key" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/keyboard.png"} alt="keyboard" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lockpad.png"} alt="security" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/play.png"} alt="notes" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lightbolt.png"} alt="speed" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/graph.png"} alt="tracking" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/plus.png"} alt="add" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/susSymbol.png"} alt="exclusive" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/documentManager.png"} alt="docs" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/cube.png"} alt="cube" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/key.png"} alt="key" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/keyboard.png"} alt="keyboard" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lockpad.png"} alt="security" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/play.png"} alt="notes" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lightbolt.png"} alt="speed" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/graph.png"} alt="tracking" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/plus.png"} alt="add" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/susSymbol.png"} alt="exclusive" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/documentManager.png"} alt="docs" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/cube.png"} alt="cube" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/key.png"} alt="key" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/keyboard.png"} alt="keyboard" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lockpad.png"} alt="security" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/play.png"} alt="notes" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lightbolt.png"} alt="speed" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/graph.png"} alt="tracking" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/plus.png"} alt="add" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/susSymbol.png"} alt="exclusive" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/documentManager.png"} alt="docs" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/cube.png"} alt="cube" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/key.png"} alt="key" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/keyboard.png"} alt="keyboard" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lockpad.png"} alt="security" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/play.png"} alt="notes" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/lightbolt.png"} alt="speed" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/graph.png"} alt="tracking" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/plus.png"} alt="add" width={32} height={32} />
							</div>
						</div>
						<div className="min-w-[74px] min-h-[74px] mx-5 bg-neutral-800 border border-t-white/35 items-center justify-center border-x-0 border-b-black/35 rounded-2xl">
							<div className="w-10 h-10 fill-white self-center mt-5 ml-5">
								<Image src={"/pngIcons/susSymbol.png"} alt="exclusive" width={32} height={32} />
							</div>
						</div>

						



					</motion.div>
				</div>
			</div>

			<div className="absolute -inset-0 backdrop-blur-[2px] z-5"></div>
			<div className="absolute inset-28 mt-24 md:-mt-4 md:inset-64 flex items-start justify-center">
				<Image src="/LinearIcon.png" alt="The Logo" width={196} height={196} />
			</div>
		</div>
	)
};