'use client'

import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from "react";

import { ButtonPrimary, ButtonSecondary } from "./Buttons";
import { LinearIcon } from "./Icons";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400'],
});

export default function Header() {

	const [showFeatures, setShowFeatures] = useState(false);
	const [showCompany, setShowCompany] = useState(false);


  return (
	<div className={`${roboto.className} text-sm md:text-md fixed w-full flex items-center justify-center md:pt-5 z-50`}>
	<div className={`flex flex-col w-full md:w-fit py-3 md:py-2 lg:mx-18 px-3 gap-5 justify-between bg-white/10 md:bg-white/5 shadow-header-glass backdrop-blur-3xl md:backdrop-blur-lg md:rounded-lg z-50 group`}
			onMouseLeave={() => { setShowFeatures(false); setShowCompany(false)} }>
	<div className="flex gap-4 items-center justify-between w-full">
			<Link href="">
				<div className={`${roboto.className} items-center`}>
					<LinearIcon 
					className=""
					fill={'#FFFFFF'}/>
      	</div>
			</Link>
      <nav className="hidden md:flex w-fit lg:-translate-x-6">
			<ul className="flex justify-center gap-10 lg:text-md">
      	<li className="">
      	  <Link href="/features">
      	    <div className={`${roboto.className} text-white/60 transition hover:text-white/90 hover:underline`}
						      onMouseEnter={() => { setShowFeatures(true); setShowCompany(false)}}>
      	      Features
      	    </div>
      	  </Link>
      	</li>
      	<li className="hidden lg:block">
      	  <Link href="#">
      	    <div className={`${roboto.className} text-white/60 transition hover:text-white/90 hover:underline`}>
      	      Method
      	    </div>
      	  </Link>
      	</li>
      	<li className="hidden lg:block">
      	  <Link href="#">
      	    <div className={`${roboto.className} text-white/60 transition hover:text-white/90 hover:underline`}>
      	      Customers
      	    </div>
      	  </Link>
      	</li>
      	<li className="hidden lg:block">
      	  <Link href="#">
      	    <div className={`${roboto.className} text-white/60 transition hover:text-white/90 hover:underline`}>
      	      Changelog
      	    </div>
      	  </Link>
      	</li>
      	<li className="">
      	  <Link href="#">
      	    <div className={`${roboto.className} text-white/60 transition hover:text-white/90 hover:underline`}>
      	      Pricing
      	    </div>
      	  </Link>
      	</li>
      	<li className="">
      	  <Link href="#">
      	    <div className={`${roboto.className} text-white/60 transition hover:text-white/90 hover:underline`}
						onMouseEnter={() => { setShowFeatures(false); setShowCompany(true)}}>
      	      Company
      	    </div>
      	  </Link>
      	</li>
      	<li>
      	  <Link href="#" className="hidden lg:block">
      	    <div className={`${roboto.className} text-white/60 transition hover:text-white/90 hover:underline`}>
      	      Contacts
      	    </div>
      	  </Link>
      	</li>
    </ul>
    </nav>
		<div className={`flex gap-5`}>
			<ButtonSecondary>Log in
				<div className="bg-neutral-600 font-bold rounded-md ml-2 px-2.5">L</div>
			</ButtonSecondary>
			<ButtonPrimary>Sign up</ButtonPrimary>
		</div>

  


	</div>	
	<div id="features-hover" className={showFeatures ? 'hidden w-full min-h-12 my-3 justify-between items-center gap-1 group-hover:transition group-hover:duration-1000 group-hover:flex group-hover:flex-none': "hidden"}>
		<div id="card" className="flex flex-col w-full h-full py-5">
			<div className="text-md md:text-lg">Plan</div>
			<div id="card-text" className="text-card text-sm md:text-md py-1  ">See the product direction <br/> with projects and initiatives</div>
		</div>
		<div id="card" className="flex flex-col w-full h-full py-2">
			<div className="text-md md:text-lg">Build</div>
			<div id="card-text" className="text-card text-sm md:text-md py-1  ">Make progress with issue <br/> tracking and cycle planning</div>
		</div>
		<div className="flex flex-col gap-1 w-full h-full"> 
			<div id="card" className="w-full h-full items-center">
				<div className="text-md md:text-lg">Insights</div>
				<div id="card-text" className="text-card text-sm md:text-md">Instant analytics for any stream of work</div>
			</div>
			<div id="card" className="w-full h-full items-center">
				<div className="text-md md:text-lg">Asks</div>
				<div id="card-text" className="text-card text-sm md:text-md">Turn requests in Slack into actionnable issues</div>
			</div>
			<div id="card" className=" text-md md:text-lg w-full h-full items-center">Security</div>
			<div id="card" className=" text-md md:text-lg w-full h-full items-center">Integrations</div>
		</div>

	</div>

	<div id="company-hover" className={showCompany ? 'flex flex-row flex-none w-full min-h-16 mb-3 justify-between items-center gap-1 transition duration-500 anmate-ease-in-out opacity-100 transform scale-100 will-change-transform will-change-opacity' : 'hidden transition duration-500 animate-ease-in-out opacity-0 transform scale-0 will-change-transform will-change-opacity'}>
		<div className="flex flex-col gap-1 w-full min-h-full"> 
			<div id="card" className="w-full flex gap-3 h-full">
				<div className="text-md md:text-lg">Blog</div>
				<div id="card-text" className="text-card text-sm md:text-md py-1  ">Read reccent news</div>
			</div>
			<div id="card" className="w-full flex gap-3 h-full">
				<div className="text-md md:text-lg">README</div>
				<div id="card-text" className="text-card text-sm md:text-md py-1  ">A story about magic</div>
			</div>
			<div id="card" className="w-full flex gap-3 h-full">
				<div className="text-md md:text-lg">Brand</div>
				<div id="card-text" className="text-card text-sm md:text-md py-1  ">Assets and guidelines</div>
			</div>
			
		</div>
		<div id="card" className="flex flex-col w-full min-h-full ">
			<div className="text-md md:text-lg">Carreers</div>
			<div id="card-text" className="text-card text-sm md:text-md py-1  ">Help us bring magic back to software</div>
		</div>
		<div id="card" className="flex flex-col w-full min-h-full">
			<div className="text-md md:text-lg">About</div>
			<div id="card-text" className="text-card text-sm md:text-md py-1  ">Meet the team behind Linear</div>
		</div>

	</div>
</div>
</div>
  );
}

