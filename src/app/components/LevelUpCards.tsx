import FeaturesCard from "./FeaturesCard";


export default function LevelUpCards() {
	return (
		<div className="relative flex flex-col w-fit self-center mx-auto items-center py-8 gap-2">
			<div className="flex flex-col md:flex-row w-full gap-2">
			<FeaturesCard BackgroundImage="/FeatureCardImages/Level1.png" LogoImage="/pngIcons/lightbolt.png" Title="Blazingly fast" Text="Designed in pursuit of high-speed performance"/>
			<FeaturesCard BackgroundImage="/FeatureCardImages/Level2.png" LogoImage="/pngIcons/keyboard.png" Title="Keyboard-first design" Text="Shortcuts for everything - no mouse required"/>
			<FeaturesCard BackgroundImage="/FeatureCardImages/Level3.png" LogoImage="/pngIcons/plus.png" Title="Integrations" Text="Bring the magic of Linear to the rest of your productivity stack"/>
			</div>
			<div className="flex flex-col md:flex-row w-full gap-2">
			<FeaturesCard BackgroundImage="/FeatureCardImages/Level4.png" LogoImage="/pngIcons/cube.png" Title="API and webhooks" Text="Creat custom tools, workflows and dashboards"/>
			<FeaturesCard BackgroundImage="/FeatureCardImages/Level5.png" LogoImage="/pngIcons/chatBubble.png" Title="Make it yours" Text="Custom themes, icons and emojis"/>
			<FeaturesCard BackgroundImage="/FeatureCardImages/Level6.png" LogoImage="/pngIcons/chatBubble.png" Title="Cross-platform apps" Text="Works on web, Mac, Windows or mobile"/>
			</div>
			<div className="absolute inset-0 bg-[linear-gradient(285.49deg,rgb(245,55,249)_-14.61%,rgb(247,190,43)_106.06%)] [mask-image:radial-gradient(70%_60%_at_center_center,rgb(0,0,0,0.7)_45%,transparent)] opacity-10 pointer-events-none"></div>
		</div>
	)
}