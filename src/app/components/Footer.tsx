import Link from "next/link"
import { LinearIcon } from "./Icons"


export default function Footer(){
	return(
<div className="flex text-xs lg:text-lg overflow-hidden flex-col py-10 px-4 z-50 border bg-black/50 border-t-white/10 border-x-0">
		<div className="">
			<div className="flex flex-col lg:flex-row w-full lg:px-40 justify-between gap-4 lg:gap-16 lg:justify-start">
				<div className="flex flex-col h-full align-left justify-between pb-5 w-full gap-1">
					<div className="flex gap-1 w-fit">
						<div>Linear</div>
						<div> - </div>
						<div>Designed</div>
						<div> Worldwide</div>
					</div>
					<div className="hidden lg:block text-white/30">@Copyright 2024</div>
				</div>
				<div className="flex flex-col lg:flex-row lg:w-full gap-5 lg:gap-12">
					<div className="flex flex-row w-full lg:flex-col gap-4 lg:gap-2 lg:min-w-[198px]">
						<Link href="#" className="lg:mb-5">
							<div>Product</div>
						</Link>
						<Link className="text-white/60 hover:text-white hover:underline transition hidden lg:block" href="#">
							<div>Features</div>
						</Link>
						<Link className="text-white/60 hover:text-white hover:underline transition hidden lg:block" href="#">
							<div>Integrations</div>
						</Link>
						<Link className="text-white/60 hover:text-white hover:underline transition hidden lg:block" href="#">
							<div>Pricing</div>
						</Link>
						<Link className="text-white/60 hover:text-white hover:underline transition hidden lg:block" href="#">
							<div>Changelog</div>
						</Link>
						<Link className="text-white/60 hover:text-white hover:underline transition" href="#">
							<div>Docs</div>
						</Link>
						<Link className="text-white/60 hover:text-white hover:underline transition min-w-fit" href="#">
							<div>Linear Methods</div>
						</Link>
						<Link className="text-white/60 hover:text-white hover:underline transition" href="#">
							<div className="text-white/60 hover:text-white hover:underline transition">Downloads</div>
						</Link>
					</div>
					<div className="hidden lg:flex flex-col gap-2 lg:min-w-[198px]">
						<Link href="#" className="lg:mb-5">
							<div>Company</div>
						</Link>
						<Link className="text-white/60 hover:text-white hover:underline transition hidden" href="#">
							<div>About Us</div>
						</Link>
						<Link className="text-white/60 hover:text-white hover:underline transition" href="#">
							<div>Blog</div>
						</Link>
						<Link className="text-white/60 hover:text-white hover:underline transition" href="#">
							<div>Carreers</div>
						</Link>
						<Link className="text-white/60 hover:text-white hover:underline transition" href="#">
							<div>Customers</div>
						</Link>
						<Link className="text-white/60 hover:text-white hover:underline transition" href="#">
							<div>Brands</div>
						</Link>

					</div>
					<div className="flex flex-row w-full lg:flex-col gap-2 lg:min-w-[198px]">
						<Link href="#" className="lg:mb-5">
							<div>Resources</div>
						</Link>
						<Link className="text-white/60 hover:text-white hover:underline transition min-w-fit" href="#">
							<div>Startup Program</div>
						</Link>
						<Link className="text-white/60 hover:text-white hover:underline transition hidden lg:block" href="#">
							<div>Community</div>
						</Link>
						<Link className="text-white/60 hover:text-white hover:underline transition hidden lg:block" href="#">
							<div>Contact</div>
						</Link>
						<Link className="text-white/60 hover:text-white hover:underline transition" href="#">
							<div>DPA</div>
						</Link>
						<Link className="text-white/60 hover:text-white hover:underline transition min-w-fit" href="#">
							<div>Privacy Policy</div>
						</Link>
						<Link className="text-white/60 hover:text-white hover:underline transition min-w-fit" href="#">
							<div>Terms of Service</div>
						</Link>
						<Link className="text-white/60 hover:text-white hover:underline transition min-w-fit hidden lg:block" href="#">
							<div>Report a vulnerability</div>
						</Link>
					</div>
					<div className="flex flex-row w-full lg:flex-col gap-2 lg:min-w-[198px]">
						<Link href="#" className="lg:mb-5">
							<div>Developers</div>
						</Link>
						<Link className="text-white/60 hover:text-white hover:underline transition" href="#">
							<div>API</div>
						</Link>
						<Link className="text-white/60 hover:text-white hover:underline transition" href="#">
							<div>Status</div>
						</Link>
						<Link className="text-white/60 hover:text-white hover:underline transition" href="#">
							<div>GitHub</div>
						</Link>
						<Link className="text-white/60 hover:text-white hover:underline transition" href="#">
							<div>README</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
</div>
	)
}