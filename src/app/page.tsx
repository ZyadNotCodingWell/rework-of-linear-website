"use client";

import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import { InsightPicture } from "../../public/insights";
import Dashboard from "@/../public/dashboard.png";
import Card1 from "@/../public/BlCard1.png";
import Card2 from "@/../public/BlCard2.png";
import Card3 from "@/../public/BlCard3.png";
import { InitiativesIcon, CrossTeamsIcon, MilestonesIcon, ProgressIcon, WorkflowIcon, ViewIcon, FilterIcon, SLAIcon, AddIcon } from "./components/Icons";
import { CardComp } from "./components/CarrouselCard";
import { ButtonPrimary, ButtonSecondary } from "./components/Buttons";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400', '400'], 
})


export default function Home() {

  const[blurredDiv, setBlurredDiv] =  useState(false);

  const[selected1, setSelected1] = useState(true);
  const[selected2, setSelected2] = useState(false);
  const[selected3, setSelected3] = useState(false);


  return (
    <main className={`${roboto.className} flex min-h-screen overflow-hidden max-w-screen flex-col py-36 mb-100 h-500 gap-4`}>
      
      <div id="Hero-Section" className="flex flex-col px-11 md:px-24">
        <div id='root' className="flex flex-col align-left gap-3 mt-14">
          <div className="text-2xl md:text-5xl font-semibold max-w-3xl">Linear is a purpose - built tool for planning and building projects</div>
          <div className="text-md md:text-2xl text-white/70 max-w-xl mt-2 translate-y-2 font-normal">Meet the system for modern software development. Streamline issues, projects and product roadmaps.</div>
          <div className="flex flex-row gap-5 pt-14">
            <ButtonPrimary>Start Building</ButtonPrimary>
            <ButtonSecondary>Introducing initiatives</ButtonSecondary>
          </div>
        </div>
      </div>
      
      <div id="hero-image-div" className="mx-8 md:mx-24 [mask-image:linear-gradient(to_right,transparent,black_30%,black_60%,transparent)]" >
        <div style={{
          backgroundImage: `url(${Dashboard.src})`,
          backgroundSize:  "contain",
        }}
        className="md:-rotate-6 md:skew-x-12 md:translate-x-20 md:translate-y-24 overflow-hidden overscroll-none">
          <div className="border-plus overflow-x-hidden opacity-0">
            <Image 
              src="/dashboard.png"
              alt="Dashboard"
              width={90000}
              height={40000}
              />
          </div>
        </div>
      </div>
      
      <div id="Customers-Section" className=" max-w-96 md:max-w-2xl flex flex-col lg:min-w-full flex-none mx-auto px-11 md:px-24 py-28 relative">
        
        <div id="customers-text" className="text-md md:text-2xl text-white w-fit text-center mx-auto">Powering the world&apos;s best product teams.</div>
        <div className="text-xs md:text-lg text-white/70 text-center mx-auto">From next-gen startups to established entreprises.</div>
        
        <div className="relative flex flex-col pt-14 w-full justify-between items-center text-md md:text-2xl lg:text-3xl font-bold gap-10" onMouseEnter={() => setBlurredDiv(true)} onMouseLeave={() => setBlurredDiv(false)}>
          <div className="flex flex-row gap-16 lg:gap-24 mt-5 items-center justify-between"> 
            <div className="flex justify-center items-center">Brand A</div>
            <div className="flex justify-center items-center">Brand B</div>
            <div className="flex justify-center items-center">Brand C</div>
          </div>
          <div className="flex flex-row gap-16 lg:gap-24 mb-5 items-center justify-between"> 
            <div className="flex justify-center items-center">Brand D</div>
            <div className="flex justify-center items-center">Brand E</div>
            <div className="flex justify-center items-center">Brand F</div>
          </div>
          <div className={blurredDiv ? "absolute flex inset-0 w-full align-center justify-center items-center backdrop-blur-header-glass z-40 transition duration-300" : "hidden"} >
              <Link href="#">
                <div className="text-md md:text-xl px-6 py-2 rounded-full bg-neutral-900/80 border border-neutral-700/50 font-normal hover:bg-neutral-950 transition duration-500"> Meet our customers</div>
              </Link>
          </div>
        </div>
      </div>
      
      <div id="Modern_Product_Teams" className="flex flex-col py-24 px-11 md:px-24 gap-10 bg-section">
        <div className="flex flex-col lg:flex-row justify-between w-full lg:gap-8 max-w-5xl items-center self-center">
          <div className="text-xl md:text-4xl lg:text-5xl text-center lg:text-left min-w-xl md:w-sm lg:min-w-[400px] font-bold tracking-wide">Made for modern product teams  </div> 
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
      
      <div id="Product_Direction" className="flex flex-col bg-sectionProduct w-full justify-left items-center overflow-x-hidden">
        <div className="flex flex-col w-full px-52 translate-y-44">
          <div className="flex flex-row items-center w-fit gap-2 py-2">
            <div className="flex w-4 h-2 text-xs bg-sucess-green rounded-full"></div>
            <div className="flex text-sm">Project and long-term planning</div>
            <div className="flex text-sm "> › </div>
          </div>
          <div className="flex flex-row items-center w-fit gap-2 py-2 text-x3l font-bold">See the product direction</div>
          <div  className="flex flex-col items-start w-fit py-2 text-smd leading-11">
            <div>Align your team around a unified product timeline.</div>
            <div className="text-grey">Plan, manage, and track all product initiatives with <br/>Linear’s visual planning tools.</div>
          </div>
        </div>
        <div id="Product_Section_Image" className="flex">
          <Image 
          src = "/product_section.png"
          alt = "Interesting Picture"
          width={1500}
          height={600} />
        </div>
      </div>
      
      <div id="Features_Section" className="flex flex-col relative justify-between px-64 w-full items-center overflow-x-hidden">
        <div id="gradient-into-black" className="absolute -inset-x-36 inset-y-0 pointer-events-none bg-toBlack px-auto py-auto z-40"> </div>
        <div className="flex flex-row gap-auto justify-between w-full">
          <div className="flex flex-col border-header-glass w-full items-center px-5 py-8 border-plus-left">
            <div className="w-full items-start">
              <div className="text-md font-bold w-fit mx-4">Manage projects end-to-end</div>
              <div className="text-smd mt-1 w-fit text-grey mx-4">Consolidate specs, milestones, tasks,<br/>and other documentation in one centralized location.</div>
            </div>
            <Image 
            src = "/Features_Image1.JPG"
            alt = "Interesting stuff"
            width={400}
            height={600} 
            className="translate-x--14 pt-5"/>
          </div>
          <div className="flex relative flex-col border-header-glass w-full items-start pl-14 py-8 border-plus-right">
            <div className="text-md font-bold w-fit">Project updates</div>
            <div className="text-smd mt-1 w-fit text-grey">Communicate progress and project <br/> health with built-in project updates.</div>
            <div className="pt-20 h-full w-full items-start">
              <div className="bg-carrousel-card backdrop-blur-xl w-full border-plus rounded-2xl px-10 py-4 absolute flex-col saturate-0 ease-in-out duration-300 hover:saturate-100 flex -skew-y-6 -translate-y-16 translate-x-0 hover:-translate-y-24">
                <div className="text-error-red font-bold">✘ Off track</div>
                <div className="mt-2">Unexpected roadblocks forced us to take a different...</div>
                <div className="font-normal mt-3 text-grey">Oct 8</div>
              </div>
              <div className="bg-carrousel-card backdrop-blur-xl w-full border-plus rounded-2xl px-10 py-4 absolute flex-col saturate-0 ease-in-out duration-300 hover:saturate-100 flex -skew-y-6 -translate-y-8 translate-x-10 hover:-translate-y-16">
                <div className="text-warning-yellow font-bold">!  At risk</div>
                <div className="mt-2">Progress slowed down last week because</div>
                <div className="font-normal mt-3 text-grey">Oct 8</div>
              </div>
              <div className="bg-carrousel-card backdrop-blur-xl w-full border-plus  rounded-2xl px-10 py-4 absolute flex-col flex -skew-y-6 translate-x-20 ease-in-out duration-300 hover:-translate-y-4">
                <div className="text-success-green font-bold">✔ On track</div>
                <div className="mt-2">We are ready to launch next thursday</div>
                <div className="font-normal mt-3 text-grey">Sep 8</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-0 py-14 border-plus-left items-center gap-64 justify-between w-fit">
          <div className="flex flex-col ml-5 h-474">
            <div className="text-md font-bold">Ideate and specify <br/> what to build next</div>
            <div className="flex flex-row text-smd gap-3 font-normal mt-6 items-center" onClick={() => {setSelected1(true); setSelected2(false); setSelected3(false)}}>
                <div className={ selected1 ? "w-1 h-6 rounded-full bg-sucess-green" : "w-1 h-6 rounded-full bg-gray"}></div>
                <div className={ selected1 ? "text-white" : "text-grey hover:text-card"}>Collaborative documents</div>
            </div>
            <div className="flex flex-row text-smd gap-3 font-normal mt-2 items-center" onClick={() => {setSelected1(false); setSelected2(true); setSelected3(false)}}>
                <div className={ selected2 ? "w-1 h-6 rounded-full bg-sucess-green" : "w-1 h-6 rounded-full bg-gray"}></div>
                <div className={ selected2 ? "text-white" : "text-grey hover:text-card"}>Inline comments</div>
            </div>
            <div className="flex flex-row text-smd gap-3 font-normal mt-2 items-center" onClick={() => {setSelected2(false); setSelected3(true); setSelected1(false)}}>
                <div className={ selected3 ? "w-1 h-6 rounded-full bg-sucess-green" : "w-1 h-6 rounded-full bg-gray"}></div>
                <div className={ selected3 ? "text-white" : "text-grey hover:text-card"}>Text-to-issue commands </div>
            </div>
          </div>
          <div className="w-fit items-center justify-center border-xl bg-sucess-green py-18">
            <div className={selected1 ? "flex items-center" : "hidden"}>
              <Image 
              src = "/selected1Image.JPG"
              alt = "Ideate and Specify"
              width={500}
              height={600}/>
            </div>
            <div className={selected2 ? "flex items-center" : "hidden"}>
              <Image 
              src = "/selected2Image.JPG"
              alt = "Ideate and Specify"
              width={500}
              height={500}/>
            </div>
            <div className={selected3 ? "flex items-center" : "hidden"}>
              <Image 
              src = "/selected3Image.JPG"
              alt = "Ideate and Specify"
              width={500}
              height={600}/>
            </div>
          </div>
        </div>
        <div className="flex flex-row px-36 mt-14 w-full justify-between items-center"> 
          <div className="flex flex-col gap-2">
            <div className=" flex flex-row items-center gap-2 text-xs font-bold">
              <InitiativesIcon
                className=""
                width={16}
                height={16}
                fill="#FFFFFC"/>
              Initiatives
            </div>
            <div className="text-xs font-normal text-grey">Coordinate strategic product <br/> efforts.</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className=" flex flex-row items-center gap-2 text-xs font-bold">
              <CrossTeamsIcon
                className=""
                width={16}
                height={16}
                fill="#FFFFFC"/>
              Cross-team projects
            </div>
            <div className="text-xs font-normal text-grey">Collaborate across teams and <br/> departments.</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className=" flex flex-row items-center gap-2 text-xs font-bold">
              <MilestonesIcon
                className=""
                width={16}
                height={16}
                fill="#FFFFFC"/>
              Milestones
            </div>
            <div className="text-xs font-normal text-grey">Break projects down into concrete <br/> phases.</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className=" flex flex-row items-center gap-2 text-xs font-bold">
              <ProgressIcon
                className=""
                width={16}
                height={16}
                fill="#FFFFFC"/>
              Progress insights
            </div>
            <div className="text-xs font-normal text-grey">Track scope, velocity, and <br/> progress over time.</div>
          </div>
        </div>
      </div>
      
      <div id="Issue_Tracking" className="flex flex-col bg-sectionProduct w-full justify-left items-center">
        <div className="flex flex-col w-full px-52 translate-y-44">
          <div className="flex flex-row items-center w-fit gap-2 py-2">
            <div className="flex w-4 h-2 text-xs bg-warning-yellow rounded-full"></div>
            <div className="flex text-sm">Task tracking and sprint planning</div>
            <div className="flex text-sm "> › </div>
          </div>
          <div className="flex flex-row items-center w-fit gap-2 py-2 text-x3l font-bold">Issue tracking <br/>you’ll enjoy using</div>
          <div  className="flex flex-col items-start w-fit py-2 text-smd leading-11">
            <div>Optimized for speed and efficiency.</div>
            <div className="text-grey">Create tasks in seconds, discuss issues <br/> in context, and breeze through your work<br/>in views tailored to you and your team.</div>
          </div>
        </div>
        <div id="Product_Section_Image" className="flex translate-y-20 pb-20">
          <Image 
          src = "/task_tracking.png"
          alt = "Interesting Picture"
          width={1600}
          height={600} />
        </div>
      </div>
      
      <div id="Features_Section_2" className="flex flex-col relative justify-between overflow-hidden px-445 w-full items-center">
        <div id="gradient-into-black" className="absolute -inset-x-36 inset-y-0 pointer-events-none bg-toBlack px-auto py-auto z-40"> </div>
        <div className="flex flex-row gap-auto justify-between w-full">
          <div className="flex flex-col border-header-glass w-full items-center px-5 py-8 border-plus-left">
            <div className="text-md font-bold w-fit mx-4">Build momentum with Cycles</div>
            <div className="text-smd mt-1 w-fit text-grey mx-4">Create healthy routines and focus your <br/>team on what work should happen next.</div>
            <Image 
            src = "/Tracking_image1.JPG"
            alt = "Interesting stuff"
            width={374}
            height={600} 
            className="translate-x--14 pl-2 pt-5"/>
          </div>
          <div className="flex flex-col border-header-glass w-full items-center px-5 py-8 border-plus-right">
            <div className="text-md font-bold w-fit mx-4">Manage incoming work with Triage</div>
            <div className="text-smd mt-1 w-fit text-grey mx-4">Review and assign incoming bug reports,<br/> feature requests, and other unplanned work.</div>
            <Image 
            src = "/Tracking_image2.JPG"
            alt = "Interesting stuff"
            width={400}
            height={600} 
            className="translate-x--14 pl-4 pt-5"/>
          </div>

        </div>

        <div className="flex flex-col mt-0 pt-14 items-center justify-left w-full">
          <div className="flex flex-col w-full items-start">
            <div className="text-md font-bold w-fit mx-44">Linear Insights</div>
            <div className="text-smd mt-1 w-fit text-grey mx-44">Take the guesswork out of product planning<br/> with realtime, actionable data analytics.</div>
            <div id="button_secondary" className="px-5 py-1 mt-6 ml-44 rounded-lg bg-grayvy">Learn more  ›</div>
          </div>  
          <div className="w-full border-plus-bot items-center -translate-y-24">
            <InsightPicture 
              className="translate-x-0"/>
          </div>
        </div>

        <div className="flex flex-row -translate-y-10 w-full px-36 justify-between items-center"> 
          <div className="flex flex-col gap-2">
            <div className=" flex flex-row items-center gap-2 text-xs font-bold">
              <WorkflowIcon
                className=""
                width={16}
                height={16}
                fill="#FFFFFC"/>
              Tailored workflows
            </div>
            <div className="text-xs font-normal text-grey">Track progress across custom <br/>issue flows for your team.</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className=" flex flex-row items-center gap-2 text-xs font-bold">
              <ViewIcon
                className=""
                width={16}
                height={16}
                fill="#FFFFFC"/>
              Custom views
            </div>
            <div className="text-xs font-normal text-grey">Switch between list and board.<br/>Group issues with swimlanes.</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className=" flex flex-row items-center gap-2 text-xs font-bold">
              <FilterIcon
                className=""
                width={16}
                height={16}
                fill="#FFFFFC"/>
              Filters
            </div>
            <div className="text-xs font-normal text-grey">Refine issue lists down to what’s<br/>most relevant to you.</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className=" flex flex-row items-center gap-2 text-xs font-bold">
              <SLAIcon
                className=""
                width={16}
                height={16}
                fill="#FFFFFC"/>
              SLAs
            </div>
            <div className="text-xs font-normal text-grey">Automatically apply deadlines to<br/>time-sensitive tasks.</div>
          </div>
        </div>
      </div>
      
      <div id="Collaborations" className="flex flex-col bg-sectionProduct w-full justify-left items-center">
        <div className="flex flex-row items-center w-full justify-between">
          <div className="flex flex-col w-full px-52">
            <div className="flex flex-row items-center w-fit gap-2 py-2">
              <div className="flex w-4 h-2 text-xs bg-violet rounded-full"></div>
              <div className="flex text-sm">Workflow and integrations</div>
              <div className="flex text-sm "> › </div>
            </div>
            <div className="flex flex-row items-center w-fit gap-2 py-2 text-x3l font-bold">Collaborate across<br/>tools and teams</div>
          </div>
          <div  className="flex flex-col items-start w-full py-2 text-smd leading-11">
            <div className="text-grey w-full">Expand the capabilities of the Linear system<br/>with a wide variety of integrations that keep<br/>everyone in your organization aligned and focused.</div>
          </div>
        </div>
        <div id="Collaboration-scroller" className="flex relative w-[100vw] translate-y-20 pb-20 overscroll-x-hidden overflow-x-auto overflow-y-hidden">
          <div className="flex min-w-max space-x-14 mx-48">
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

    </main>
  );
}
