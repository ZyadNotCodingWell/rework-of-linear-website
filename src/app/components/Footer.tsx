import Link from "next/link"


export default function Footer(){
	return(
<div className="flex mb-0 mx-0 w-full flex-col gap-0 px-0 py-0 z-50">
		<div className="min-h-1 bg-header-glass w-full"></div>
		<div className="flex mb-0 mx-0 bg-black w-full justify-center align-end h-fit px-36 pt-5">
			<div className="flex flex-row w-full align-center justify-between gap-48">
				<div className="hidden lg:flex flex-col h-full align-left justify-between mx-5 pb-5 w-fit">
					<div className="flex  gap-1 w-fit">
						<div>:\ </div>
						<div>Linear</div>
						<div> - </div>
						<div>Designed</div>
						<div> Worldwide</div>
					</div>
					<div id="card-text">@Copyright 2024</div>
				</div>
				<div className="flex flex-col w-full justify-between lg:flex-row w-full gap-5 px-2 pb-5">
					<div className="flex flex-row lg:flex-col gap-2 align-left">
						<Link href="#" className="mb-2">
							<div>Product</div>
						</Link>
						<Link className="text-card hidden lg:block" href="#">
							<div id="card-text">Features</div>
						</Link>
						<Link className="text-card hidden lg:block" href="#">
							<div id="card-text">Integrations</div>
						</Link>
						<Link className="text-card hidden lg:block" href="#">
							<div id="card-text">Pricing</div>
						</Link>
						<Link className="text-card hidden lg:block" href="#">
							<div id="card-text">Changelog</div>
						</Link>
						<Link className="text-card" href="#">
							<div id="card-text">Docs</div>
						</Link>
						<Link className="text-card min-w-fit" href="#">
							<div id="card-text">Linear Methods</div>
						</Link>
						<Link className="text-card" href="#">
							<div id="card-text" className="text-card">Downloads</div>
						</Link>
					</div>
					<div className="hidden lg:flex flex-col gap-2 align-center">
						<Link href="#" className="mb-2">
							<div>Company</div>
						</Link>
						<Link className="text-card hidden" href="#">
							<div id="card-text">About Us</div>
						</Link>
						<Link className="text-card" href="#">
							<div id="card-text">Blog</div>
						</Link>
						<Link className="text-card" href="#">
							<div id="card-text">Carreers</div>
						</Link>
						<Link className="text-card" href="#">
							<div id="card-text">Customers</div>
						</Link>
						<Link className="text-card" href="#">
							<div id="card-text">Brands</div>
						</Link>

					</div>
					<div className="flex flex-row lg:flex-col gap-2 align-left">
						<Link href="#" className="mb-2">
							<div>Resources</div>
						</Link>
						<Link className="text-card min-w-fit" href="#">
							<div id="card-text">Startup Program</div>
						</Link>
						<Link className="text-card hidden lg:block" href="#">
							<div id="card-text">Community</div>
						</Link>
						<Link className="text-card hidden lg:block" href="#">
							<div id="card-text">Contact</div>
						</Link>
						<Link className="text-card" href="#">
							<div id="card-text">DPA</div>
						</Link>
						<Link className="text-card min-w-fit" href="#">
							<div id="card-text">Privacy Policy</div>
						</Link>
						<Link className="text-card min-w-fit" href="#">
							<div id="card-text">Terms of Service</div>
						</Link>
						<Link className="text-card min-w-fit hidden lg:block" href="#">
							<div id="card-text">Report a vulnerability</div>
						</Link>
					</div>
					<div className="flex flex-row lg:flex-col gap-2 align-left">
						<Link href="#" className="mb-2">
							<div>Developers</div>
						</Link>
						<Link className="text-card" href="#">
							<div id="card-text">API</div>
						</Link>
						<Link className="text-card" href="#">
							<div id="card-text">Status</div>
						</Link>
						<Link className="text-card" href="#">
							<div id="card-text">GitHub</div>
						</Link>
						<Link className="text-card" href="#">
							<div id="card-text">README</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
</div>
	)
}