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
	<div className={`${roboto.className} text-md md:text-lg fixed w-full flex flex-none items-center justify-center py-3 z-50`}>
	<div className={`flex flex-col mx-8 lg:mx-18 my-2 px-3 pt-2 gap-3 pb-2 justify-between bg-header-glass shadow-header-glass backdrop-blur-header-glass rounded-header-glass z-50 group`}
			onMouseLeave={() => { setShowFeatures(false); setShowCompany(false)} }>
	<div className="flex px-0 py-0 gap-4 items-center justify-between w-full">
			<Link href="">
				<div className={`${roboto.className} items-center`}>
					<LinearIcon 
					className=""
					fill={'#FFFFFF'}/>
      	</div>
			</Link>
      <nav className="hidden md:flex w-fit justify-between px-0">
			<ul className="flex mx-5 justify-between w-fit gap-md px-0">
      <li className="mx-5">
        <Link href="#">
          <div className={`${roboto.className} text-navItems peer hover:underline hover:underline-offset-2 hover:decoration-white hover:decoration-1`}
					      onMouseEnter={() => { setShowFeatures(true); setShowCompany(false)}}>
            Features
          </div>
        </Link>
      </li>
      <li className="hidden lg:block mx-5">
        <Link href="#">
          <div className={`${roboto.className} text-navItems hover:underline hover:underline-offset-2 hover:decoration-white hover:decoration-1`}>
            Method
          </div>
        </Link>
      </li>
      <li className="hidden lg:block mx-5">
        <Link href="#">
          <div className={`${roboto.className} text-navItems hover:underline hover:underline-offset-2 hover:decoration-white hover:decoration-1`}>
            Customers
          </div>
        </Link>
      </li>
      <li className="hidden lg:block mx-5">
        <Link href="#">
          <div className={`${roboto.className} text-navItems hover:underline hover:underline-offset-2 hover:decoration-white hover:decoration-1`}>
            Changelog
          </div>
        </Link>
      </li>
      <li className="mx-5">
        <Link href="#">
          <div className={`${roboto.className} text-navItems hover:underline hover:underline-offset-2 hover:decoration-white hover:decoration-1`}>
            Pricing
          </div>
        </Link>
      </li>
      <li className="mx-5">
        <Link href="#">
          <div className={`${roboto.className} text-navItems mr_0 hover:underline hover:underline-offset-2 hover:decoration-white hover:decoration-1`}
					onMouseEnter={() => { setShowFeatures(false); setShowCompany(true)}}>
            Company
          </div>
        </Link>
      </li>
      <li>
        <Link href="#" className="hidden lg:block mx-5">
          <div className={`${roboto.className} text-navItems hover:underline hover:underline-offset-2 hover:decoration-white hover:decoration-1`}>
            Contacts
          </div>
        </Link>
      </li>
    </ul>
    </nav>
		<div className={`flex gap-5`}>
			<ButtonSecondary>Log in</ButtonSecondary>
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

	<div id="company-hover" className={showCompany ? 'flex flex-row w-full min-h-12 mb-3 justify-between items-center gap-1 transition duration-500 anmate-ease-in-out opacity-100 transform scale-100 will-change-transform will-change-opacity' : 'hidden transition duration-500 animate-ease-in-out opacity-0 transform scale-0 will-change-transform will-change-opacity'}>
		<div className="flex flex-col gap-1 w-full"> 
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
		<div id="card" className="flex flex-col w-full h-full ">
			<div className="text-md md:text-lg">Carreers</div>
			<div id="card-text" className="text-card text-sm md:text-md py-1  ">Help us bring magic back to software</div>
		</div>
		<div id="card" className="flex flex-col w-full h-full">
			<div className="text-md md:text-lg">About</div>
			<div id="card-text" className="text-card text-sm md:text-md py-1  ">Meet the team behind Linear</div>
		</div>

	</div>
</div>
</div>
  );
}

