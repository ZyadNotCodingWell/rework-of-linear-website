import FeaturesCard from "./FeaturesCard";


export default function AnalyzeCards() {
	return (
		<div className="relative flex flex-col w-fit self-center mx-auto items-center py-8 gap-2">
			<div className="flex flex-col md:flex-row w-full gap-2">
			<FeaturesCard BackgroundImage="/FeatureCardImages/Analyze1.png" LogoImage="/pngIcons/graph.png" Title="Linear Insights" Text="Instant analytics for any stream of work"/>
			<FeaturesCard BackgroundImage="/FeatureCardImages/Analyze2.png" LogoImage="/pngIcons/functionCurve.png" Title="Progress graphs" Text="See how much progress you are making in Cycles and Projects"/>
			<FeaturesCard BackgroundImage="/FeatureCardImages/Analyze3.png" LogoImage="/pngIcons/download.png" Title="Data exports" Text="Export your work to Airbyte, Google Sheets, or as CSV"/>
			</div>
			<div className="absolute inset-0 bg-[linear-gradient(129.06deg,rgb(154,106,255)_0%,rgb(96,255,199)_88.16%)] [mask-image:radial-gradient(70%_60%_at_center_center,rgb(0,0,0,0.7)_45%,transparent)] opacity-10 pointer-events-none"></div>
		</div>
	)
}