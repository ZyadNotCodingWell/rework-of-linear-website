import FeaturesMain from "../components/FeaturesMain";
import IconTicker from "../components/IconsTicker";
import FeaturesText from "../components/FeaturesTextSection";
import PlanCards from "../components/PlanCards";
import ProgressCards from "../components/ProgressCards";
import CollaborateCards from "../components/CollaborateCards";
import AnalyzeCards from "../components/AnalyzeCards";
import LevelUpCards from "../components/LevelUpCards";
import SecureCards from "../components/SecureCards";

const Features = () => {
	return(
		<main className="container overflow-hidden flex flex-col min-w-screen self-center mx-auto min-h-screen py-24 md:py-28 items-center">
			<IconTicker />
			<FeaturesMain />
			<FeaturesText 
			title="Plan"
			text="Linear is a tool to remove barriers. Powerful yet simple to use, it helps you to plan ahead, make better decisions and execute faster. You don’t have to come up with best practices for how to use Linear — we already built them directly into the product."
			background="linear-gradient(90deg,rgb(255,248,85) 0.04%,rgb(70,227,183) 100.04%)" />
			<PlanCards />
			<div className="min-w-full min-h-px mt-16 bg-[linear-gradient(to_right,transparent_10%,rgb(255,255,255,0.15)_50%,transparent_90%)]"></div>
			<FeaturesText 
			title="Progress"
			text="Linear is built in pursuit of high-performance. Automatic workflows and powerful Git integrations create focus and routine. Customizable views and filters let you keep track of your work from any angle. Everything is streamlined so that you can progress with full speed, full flexibility and full visibility."			
			background="linear-gradient(106.62deg, rgb(232, 78, 56) 6.68%, rgb(186, 44, 184) 82.69%)" />
			<ProgressCards />
			<div className="min-w-full min-h-px mt-16 bg-[linear-gradient(to_right,transparent_10%,rgb(255,255,255,0.15)_50%,transparent_90%)]"></div>
			<FeaturesText 
			title="Collaborate"
			text="A new center of gravity for productivity and collaboration. Linear keeps everyone in your organization aligned and working without friction. Engineers, designers, product managers and peers — all collaborating in one tool."			
			background="linear-gradient(124.31deg, rgb(70, 227, 183) 0.18%, rgb(82, 124, 172) 89.2%)" />
			<CollaborateCards />
			<div className="min-w-full min-h-px mt-16 bg-[linear-gradient(to_right,transparent_10%,rgb(255,255,255,0.15)_50%,transparent_90%)]"></div>
			<FeaturesText 
			title="Analyze"
			text="Building truly great products is both art and science. It&apos;s part intuition and part data. To help with the data part, Linear offers a variety of advanced reporting and analytics features."			
			background="linear-gradient(129.06deg, rgb(154, 106, 255) 0%, rgb(96, 255, 199) 88.16%)" />
			<AnalyzeCards />
			<div className="min-w-full min-h-px mt-16 bg-[linear-gradient(to_right,transparent_10%,rgb(255,255,255,0.15)_50%,transparent_90%)]"></div>
			<FeaturesText 
			title="Level up"
			text="Linear is designed based on the practices and processes that distinguish world-class product teams from the rest: relentless focus, fast execution, and a commitment to the quality of craft. It&apos;s a professional tool built for professional teams."			
			background="linear-gradient(285.49deg, rgb(245, 55, 249) -14.61%, rgb(247, 190, 43) 106.06%)" />
			<LevelUpCards />
			<div className="min-w-full min-h-px mt-16 bg-[linear-gradient(to_right,transparent_10%,rgb(255,255,255,0.15)_50%,transparent_90%)]"></div>
			<FeaturesText 
			title="Secure"
			text="Enterprise-grade security, state-of-the-art encryption, advanced identity management, admin controls, and much more. Everything in Linear is designed to keep your data safe and secure. Because your business is nobody else&apos;s business."			
			background="linear-gradient(285.49deg, rgb(148, 151, 157) -14.61%, rgb(118, 124, 175) 106.06%) " />
			<SecureCards />
			<div className="min-w-full min-h-px mt-16 bg-[linear-gradient(to_right,transparent_10%,rgb(255,255,255,0.15)_50%,transparent_90%)]"></div>
		</main>
	)
}

export default Features;