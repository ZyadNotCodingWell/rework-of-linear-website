import FeaturesCard from "./FeaturesCard";


export default function ProgressCards() {
	return (
		<div className="relative flex flex-col w-fit self-center mx-auto items-center py-8 gap-2">
			<div className="flex flex-col md:flex-row w-full gap-2">
			<FeaturesCard BackgroundImage="/FeatureCardImages/Progress1.png" LogoImage="/pngIcons/halfMoon.png" Title="Automated workflows" Text="flexible workflows that automate away your busy work"/>
			<FeaturesCard BackgroundImage="/FeatureCardImages/Progress2.png" LogoImage="/pngIcons/plus.png" Title="Git integrations" Text="Automatically update and close issues as you work"/>
			<FeaturesCard BackgroundImage="/FeatureCardImages/Progress3.png" LogoImage="/pngIcons/documentManager.png" Title="Notification inbox" Text="A dedicated inbox to update tickets directly"/>
			</div>
			<div className="flex flex-col md:flex-row w-full gap-2">
			<FeaturesCard BackgroundImage="/FeatureCardImages/Progress4.png" LogoImage="/pngIcons/filters.png" Title="Filters and views" Text="Zero in on what&apos; important to you"/>
			<FeaturesCard BackgroundImage="/FeatureCardImages/Progress5.png" LogoImage="/pngIcons/chatBubble.png" Title="Labels" Text="Organize and standardize your issues"/>
			<FeaturesCard BackgroundImage="/FeatureCardImages/Progress6.png" LogoImage="/pngIcons/chatBubble.png" Title="Powerful search" Text="Find anything across your entire workspace"/>
			</div>
			<div className="absolute inset-0 bg-[linear-gradient(106.62deg,rgb(232,78,56)_6.68%,rgb(186,44,184)_82.69%)] [mask-image:radial-gradient(70%_60%_at_center_center,rgb(0,0,0,0.7)_45%,transparent)] opacity-10 pointer-events-none"></div>
		</div>
	)
}