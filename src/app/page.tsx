"use client";

import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import { InsightPicture } from "../../public/insights";
import Dashboard from "@/../public/dashboard.png";
import Insights from "@/../public/Insights.png";
import Card1 from "@/../public/BlCard1.png";
import Card2 from "@/../public/BlCard2.png";
import Card3 from "@/../public/BlCard3.png";
import GreenSectionImage from "@/../public/product_section.png";
import ProductFeatures from "@/../public/Features_Image1.png";
import YellowSectionImage from "@/../public/task_tracking.png";
import SelectedImage1 from "@/../public/selected1Image.png";
import SelectedImage2 from "@/../public/selected2Image.png";
import SelectedImage3 from "@/../public/selected3Image.png";
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
          <div className="flex flex-row gap-5 pt-14 [mask-image:linear-gradient(to_right,black,transparent_70%,transparent)]">
            <ButtonPrimary>Start Building</ButtonPrimary>
            <ButtonSecondary className="hidden md:flex">Introducing initiatives</ButtonSecondary>
          </div>
        </div>
      </div>
      
      <div id="hero-image-div" className="mx-8 md:mx-24 mt-12 md:mt-0 [mask-image:linear-gradient(to_right,transparent,black_30%,black_60%,transparent)]" >
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
        <div className="flex flex-col lg:flex-row justify-between lg:justify-start w-full lg:gap-20
        3 max-w-5xl lg:max-w-full items-center self-center lg:self-start">
          <div className="text-xl md:text-4xl lg:text-5xl text-center lg:text-left min-w-xl md:w-sm lg:max-w-[390px] font-bold tracking-wide">Made for modern product teams  </div> 
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
      
      <div id="Product_Direction" className="flex flex-col bg-sectionProduct w-full px-11 md:px-24 justify-left items-center">
        <div className="flex flex-col w-full ">
          <div className="flex flex-row items-center w-fit gap-2 py-2">
            <div className="flex w-4 h-2 text-xs md:text-md lg:text-lg bg-sucess-green rounded-full"></div>
            <div className="flex ">Project and long-term planning</div>
            <div className="flex "> › </div>
          </div>
          <div className="flex flex-row items-center w-fit gap-2 py-2 text-xl md:text-4xl lg:text-5xl font-bold">See the product direction</div>
          <div  className="flex flex-col items-start w-fit py-2 leading-11 text-xs md:text-xl lg:text-2xl font-normal">
            <div>Align your team around a unified product timeline.</div>
            <div className="text-white/70">Plan, manage, and track all product initiatives with Linear&apos;s visual planning tools.</div>
          </div>
        </div>
        <div className="">
          <div id="Product_Section_Image" className="min-h-[600px] min-w-[1500px] [mask-image:linear-gradient(to_right,transparent,black_25%,black_75%,transparent)]" style={{ backgroundImage: `url(${GreenSectionImage.src})`, backgroundSize: "contain"}}></div>
        </div>
      </div>
      
      <div id="Features_Section" className="flex flex-col relative justify-between px-11 md:px-24 w-full items-center overflow-x-hidden">
        <div className="flex flex-col lg:flex-row gap-auto justify-between w-full border-plus-left">
          <div className="flex flex-col border-header-glass w-full items-center px-5 py-8">
            <div className="w-full items-start">
              <div className="text-md md:text-lg lg:text-xl font-bold w-full text-center mx-4">Manage projects end-to-end</div>
              <div className="text-md md:text-lg lg:text-xl mt-1 w-full text-center text-white/70 mx-4">Consolidate specs, milestones, tasks,<br/>and other documentation in one centralized location.</div>
            </div>
            <div className="flex p-0 [mask-image:linear-gradient(to_bottom,black,black_60%,transparent_95%)]">
              <div className="w-[380px] h-[300px] my-8 md:my-16 lg:my-28 [mask-image:linear-gradient(to_right,black,black_60%,transparent_95%)] " style={{
                backgroundImage: `url(${ProductFeatures.src})`,
                backgroundSize: 'contain',
              }}>
              <Image 
              src = "/Features_Image1.JPG"
              alt = "Interesting stuff"
              width={400}
              height={300} 
              className="mx-auto self-center pt-5 opacity-0"/> </div>
              </div>
          </div>
          <div className="flex relative flex-col border-header-glass w-full items-start py-8 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,trasparent)]">
            <div className="text-md md:text-lg lg:text-xl font-bold w-full text-center">Project updates</div>
            <div className="text-md md:text-lg lg:text-xl mt-1 w-full text-center text-white/70">Communicate progress and project <br/> health with built-in project updates.</div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,black,transparent_60%,transparent_60%,black)] z-20 pointer-events-none overflow-hidden"></div>
            <div className=" relative my-16 w-full py-24 md:py-40 items-center overflow-hidden">
              <div className="relative flex justify-center text-[10px] md:text-[16px] -translate-y-12">
                <div className="bg-carrousel-card justify-center backdrop-blur-xl min-h-28 md:min-h-36 w-72 md:w-96 border border-white/10 rounded-2xl px-10 py-4 absolute flex-col saturate-0 ease-in-out duration-300 hover:saturate-100 flex md:-skew-y-6 -translate-y-8 -translate-x-8 md:-translate-x-10 hover:-translate-y-12 md:hover:-translate-y-16">
                  <div className="text-error-red font-bold">✘ Off track</div>
                  <div className="mt-2">Unexpected roadblocks forced us to take a different...</div>
                  <div className="font-normal mt-3 text-white/70">Oct 3</div>
                </div>
                <div className="bg-carrousel-card justify-center backdrop-blur-xl min-h-28 md:min-h-36 w-72 md:w-96 border border-white/10 rounded-2xl px-10 py-4 absolute flex-col saturate-0 ease-in-out duration-300 hover:saturate-100 flex md:-skew-y-6 hover:-translate-y-4 md:hover:-translate-y-8">
                  <div className="text-warning-yellow font-bold">!  At risk</div>
                  <div className="mt-2">Progress slowed down last week because</div>
                  <div className="font-normal mt-3 text-white/70">Oct 8</div>
                </div>
                <div className="bg-carrousel-card justify-center backdrop-blur-xl min-h-28 md:min-h-36 w-72 md:w-96 border border-white/10 rounded-2xl px-10 py-4 absolute flex-col flex md:-skew-y-6 translate-x-8 md:translate-x-10 translate-y-8 hover:translate-y-2 md:hover:-translate-y-2 ease-in-out duration-300">
                  <div className="text-success-green font-bold">✔ On track</div>
                  <div className="mt-2">We are ready to launch next thursday</div>
                  <div className="font-normal mt-3 text-white/70">Sep 8</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-0 py-14 border-plus-bot items-center gap-20 lg:gap-48 justify-between w-fit">
          <div className="flex flex-col h-474">
            <div className="text-sm md:text-lg lg:text-2xl text-center items-center lg:max-w-48 font-semibold">Ideate and specify what to build next</div>
            <div className="flex flex-row lg:flex-col gap-12 lg:gap-4 mt-4 lg:mt-8">
              <div className="flex flex-col-reverse lg:flex-row text-xs md:text-md lg:text-xl gap-3 font-normal items-center" onClick={() => {setSelected1(true); setSelected2(false); setSelected3(false)}}>
                  <div className={ selected1 ? "h-1 w-full lg:w-1 lg:h-6 rounded-full -translate-y-2 lg:translate-y-0 bg-sucess-green" : "h-1 w-full lg:w-1 -translate-y-2 lg:translate-y-0 lg:h-6 rounded-full bg-gray"}></div>
                  <div className={ selected1 ? "text-white" : "text-white/30 hover:text-white/50"}>Collaborative documents</div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row text-xs md:text-md lg:text-xl gap-3 font-normal items-center" onClick={() => {setSelected1(false); setSelected2(true); setSelected3(false)}}>
                  <div className={ selected2 ? "h-1 w-full lg:w-1 lg:h-6 rounded-full -translate-y-2 lg:translate-y-0 bg-sucess-green" : "h-1 w-full lg:w-1 -translate-y-2 lg:translate-y-0 lg:h-6 rounded-full bg-gray"}></div>
                  <div className={ selected2 ? "text-white" : "text-white/30 hover:text-white/50"}>Inline comments</div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row text-xs md:text-md lg:text-xl gap-3 font-normal items-center" onClick={() => {setSelected2(false); setSelected3(true); setSelected1(false)}}>
                  <div className={ selected3 ? "h-1 w-full lg:w-1 lg:h-6 rounded-full -translate-y-2 lg:translate-y-0 bg-sucess-green" : "h-1 w-full lg:w-1 -translate-y-2 lg:translate-y-0 lg:h-6 rounded-full bg-gray"}></div>
                  <div className={ selected3 ? "text-white" : "text-white/30 hover:text-white/50"}>Text-to-issue commands </div>
              </div>
            </div>
          </div>
          <div className="items-center justify-center border border-white/5 p-1 rounded-xl [mask-image:linear-gradient(to_bottom,black_60%,transparent)] ">
            <div className={selected1 ? "flex items-center min-w-[360px] min-h-[360px] md:min-w-[460px] md:min-h-[460px]" : "hidden"} style={{
              backgroundImage: `url(${SelectedImage1.src})`,
              backgroundSize: "contain"
            }}>
            </div>
            <div className={selected2 ? "flex items-center min-w-[360px] min-h-[360px] md:min-w-[460px] md:min-h-[460px]" : "hidden"} style={{
              backgroundImage: `url(${SelectedImage2.src})`,
              backgroundSize: "contain"
            }}>
            </div>
            <div className={selected3 ? "flex items-center min-w-[360px] min-h-[360px] md:min-w-[460px] md:min-h-[460px]" : "hidden"} style={{
              backgroundImage: `url(${SelectedImage3.src})`,
              backgroundSize: "contain"
            }}>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-xs md:text-md lg:text-xl lg:flex-row mt-14 gap-8 lg:gap-10 w-full justify-between lg:justify-center items-center"> 
          <div className="flex flex-row justify-between md:justify-center w-full">
            <div className="flex flex-col w-48 lg:w-full gap-2 px-5">
              <div className=" flex flex-row items-center gap-2 w-full font-bold">
                <InitiativesIcon
                  className=""
                  width={16}
                  height={16}
                  fill="#FFFFFC"/>
                Initiatives
              </div>
              <div className="font-normal text-white/70">Coordinate strategic product efforts.</div>
            </div>
            <div className="flex flex-col w-48 lg:w-full gap-2 px-5">
              <div className=" flex flex-row items-center w-full gap-2 font-bold">
                <CrossTeamsIcon
                  className=""
                  width={16}
                  height={16}
                  fill="#FFFFFC"/>
                Cross-team projects
              </div>
              <div className="font-normal text-white/70">Collaborate across teams and departments.</div>
            </div>
          </div>
          <div className="flex flex-row justify-between md:justify-center w-full">
            <div className="flex flex-col w-48 lg:w-full gap-2 px-5">
              <div className=" flex flex-row items-center w-full gap-2 font-bold">
                <MilestonesIcon
                  className=""
                  width={16}
                  height={16}
                  fill="#FFFFFC"/>
                Milestones
              </div>
              <div className="font-normal text-white/70">Break projects down into concrete phases.</div>
            </div>
            <div className="flex flex-col w-48 lg:w-full gap-2 px-5">
              <div className=" flex flex-row items-center w-full gap-2 font-bold">
                <ProgressIcon
                  className=""
                  width={16}
                  height={16}
                  fill="#FFFFFC"/>
                Progress insights
              </div>
              <div className="font-normal text-white/70">Track scope, velocity, and progress over time.</div>
            </div>
          </div>
        </div>
      </div>
      
      <div id="Issue_Tracking" className="flex flex-col bg-sectionProduct pt-24 px-11 md:px-24 w-full justify-left items-center">
        <div className="flex flex-col w-full">
          <div className="flex flex-row items-center w-fit gap-2 py-2">
            <div className="flex w-4 h-2 text-xs md:text-md lg:text-lg bg-warning-yellow rounded-full"></div>
            <div className="flex">Task tracking and sprint planning</div>
            <div className="flex"> › </div>
          </div>
          <div className="flex flex-row items-center w-fit gap-2 py-2 text-xl md:text-4xl lg:text-5xl font-bold">Issue tracking you&apos;ll enjoy using</div>
          <div  className="flex flex-col items-start w-fit py-2 text-xs md:text-xl lg:text-2xl font-normal">
            <div>Optimized for speed and efficiency.</div>
            <div className="text-white/70">Create tasks in seconds, discuss issues in context, and breeze through your work in views tailored to you and your team.</div>
          </div>
        </div>
        
        <div className="flex overflow-hidden p-0 flex-none [mask-image:linear-gradient(to_bottom,transparent,black_50%,transparent)]">
          <div id="Task_Section_Image" className="min-h-[800px] min-w-[1500px] [mask-image:linear-gradient(to_right,transparent,black_25%,black_75%,transparent)]" style={{ backgroundImage: `url(${YellowSectionImage.src})`, backgroundSize: "contain"}}></div>
        </div>
      </div>
      
      <div id="Features_Section_2" className="flex flex-col relative px-11 md:px-24 justify-between overflow-hidden w-full items-center">
        <div className="flex flex-col border-plus-left lg:flex-row gap-auto justify-between w-full">
          <div className="flex flex-col border-header-glass w-full items-center px-5 py-8">
            <div className="text-md md:text-lg lg:text-xl font-bold w-fit mx-4">Build momentum with Cycles</div>
            <div className="text-md md:text-lg lg:text-xl mt-1 w-fit text-white/70 mx-4">Create healthy routines and focus your team on what work should happen next.</div>
            <div className="my-8 md:my-16 lg:my-28 [mask-image:linear-gradient(to_right,black,black_70%,transparent_95%)]">
              <Image 
              src = "/Tracking_image1.JPG"
              alt = "Interesting stuff"
              width={374}
              height={600} 
              /></div>
          </div>
          <div className="flex flex-col border-header-glass w-full items-center px-5 py-8">
            <div className="text-md md:text-lg lg:text-xl font-bold w-fit mx-4">Manage incoming work with Triage</div>
            <div className="text-md md:text-lg lg:text-xl mt-1 w-fit text-white/70 mx-4">Review and assign incoming bug reports,<br/> feature requests, and other unplanned work.</div>
            <div className="my-8 md:my-16 lg:my-28 [mask-image:linear-gradient(to_right,black,black_70%,transparent_95%)]">
              <Image 
              src = "/Tracking_image2.JPG"
              alt = "Interesting stuff"
              width={400}
              height={600} 
              /></div>
          </div>

        </div>

        <div id="Insights" className="flex flex-col pt-14 max-w-sm md:max-w-md lg:max-w-full">
          
            <div className="flex flex-col items-center lg:items-start lg:mx-0 text-center lg:text-start">
              <div className="text-xs md:text-md lg:text-2xl font-semibold">Linear Insights</div>
              <div className="text-xs md:text-md lg:text-xl my-3 text-white/70 max-w-56 md:max-w-60 lg:max-w-sm">Take the guesswork out of product planning with realtime, actionable data analytics.</div>
              <div className="text-xs md:text-md lg:text-lg border border-white/30 rounded-lg px-3 py-1">Learn more  ›</div>
            </div>
          
          <div className="min-w-[1500px] h-[450px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_40%,transparent)]" style={{
            backgroundImage: `url(${Insights.src})`, backgroundSize: "cover", 
          }} ></div>
        </div>
        
        <div className="flex flex-col text-xs md:text-md lg:text-xl lg:flex-row mt-14 gap-8 lg:gap-10 w-full justify-between lg:justify-center items-center"> 
          <div className="flex flex-row justify-between md:justify-center w-full">
            <div className="flex flex-col w-48 lg:w-full gap-2 px-5">
              <div className=" flex flex-row items-center gap-2 w-full font-bold">
                <WorkflowIcon
                  className=""
                  width={16}
                  height={16}
                  fill="#FFFFFC"/>
                Tailored workflows
              </div>
              <div className="font-normal text-white/70">Track progress across custom issue flows for your team.</div>
            </div>
            <div className="flex flex-col w-48 lg:w-full gap-2 px-5">
              <div className=" flex flex-row items-center w-full gap-2 font-bold">
                <ViewIcon
                  className=""
                  width={16}
                  height={16}
                  fill="#FFFFFC"/>
                Custom views
              </div>
              <div className="font-normal text-white/70">Switch between list and board. Group issues with swimlanes.</div>
            </div>
          </div>
          <div className="flex flex-row justify-between md:justify-center w-full">
            <div className="flex flex-col w-48 lg:w-full gap-2 px-5">
              <div className=" flex flex-row items-center w-full gap-2 font-bold">
                <FilterIcon
                  className=""
                  width={16}
                  height={16}
                  fill="#FFFFFC"/>
                Filters
              </div>
              <div className="font-normal text-white/70">Refine issue lists down to what&apos;s most relevant to you.</div>
            </div>
            <div className="flex flex-col w-48 lg:w-full gap-2 px-5">
              <div className=" flex flex-row items-center w-full gap-2 font-bold">
                <SLAIcon
                  className=""
                  width={16}
                  height={16}
                  fill="#FFFFFC"/>
                SLAs
              </div>
              <div className="font-normal text-white/70">Automatically apply deadlines to time-sensitive tasks.</div>
            </div>
          </div>
        </div>
      </div>
      
      <div id="Collaborations" className="flex flex-col bg-sectionProduct pt-24 px-11 md:px-24 w-full justify-left items-center">
        <div className="flex flex-col w-full">
          
          <div className="flex flex-row items-center w-fit gap-2 py-2">
            <div className="flex w-4 h-2 text-xs md:text-md lg:text-lg bg-violet rounded-full"></div>
            <div className="flex">Workflow and integrations</div>
            <div className="flex"> › </div>
          </div>
          <div className="flex flex-row items-center w-fit gap-2 py-2 text-xl md:text-4xl lg:text-5xl font-bold">Collaborate acrosstools and teams</div>
          
          <div  className="flex flex-col items-start w-fit py-2 text-xs md:text-xl lg:text-2xl font-normal">
            <div className="text-white/70">Expand the capabilities of the Linear system with a wide variety of integrations that keep everyone in your organization aligned and focused.</div>
          </div>
        </div>
        <div id="Collaboration-scroller" className="flex relative w-[100vw] py-28 overscroll-x-hidden overflow-x-auto overflow-y-hidden [mask-image:linear-gradient(to_right,transparent_10%,black_35%,black_75%,transparent_90%)]">
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
