import FeaturesCard from "./FeaturesCard";


export default function PlanCards() {
	return (
		<div className="flex flex-col w-fit self-center mx-auto items-center py-8 gap-2">
			<div className="flex flex-col md:flex-row w-full gap-2">
			<FeaturesCard BackgroundImage="/FeatureCardImages/Plan1.png" LogoImage="/pngIcons/notePad.png" Title="Issues" Text="Create new tasks and subtasks in seconds"/>
			<FeaturesCard BackgroundImage="/FeatureCardImages/Plan2.png" LogoImage="/pngIcons/play.png" Title="Cycles" Text="Don&apos;t sprint - build momentum with Cycles "/>
			<FeaturesCard BackgroundImage="/FeatureCardImages/Plan3.png" LogoImage="/pngIcons/windows.png" Title="Projects" Text="Define and organize larger pieces of work"/>
			</div>
			<div className="flex flex-col md:flex-row w-full gap-2">
			<FeaturesCard BackgroundImage="/FeatureCardImages/Plan4.png" LogoImage="/pngIcons/initiatives.png" Title="Initiatives" Text="Coordinate strategic products efforts"/>
			<FeaturesCard BackgroundImage="/FeatureCardImages/Plan5.png" LogoImage="/pngIcons/graph.png" Title="Teams" Text="Collaborate across teams with external stakeholders"/>
			<FeaturesCard BackgroundImage="/FeatureCardImages/Plan6.png" LogoImage="/pngIcons/cube.png" Title="Backlog" Text="A place for new issues and ideas"/>
			</div>
		</div>
	)
}