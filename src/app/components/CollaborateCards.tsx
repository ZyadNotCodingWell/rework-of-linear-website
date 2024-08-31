import FeaturesCard from "./FeaturesCard";


export default function CollaborateCards() {
	return (
		<div className="flex flex-col w-fit self-center mx-auto items-center py-8 gap-2">
			<div className="flex flex-col md:flex-row w-full gap-2">
			<FeaturesCard BackgroundImage="/FeatureCardImages/Collaborate1.png" LogoImage="/pngIcons/oscillation.png" Title="Project updates" Text="Keep everyone oinformed about the current state of your projects"/>
			<FeaturesCard BackgroundImage="/FeatureCardImages/Collaborate2.png" LogoImage="/pngIcons/doubleEdgedArrow.png" Title="Triage" Text="A powerful workflow to manage unplanned work"/>
			<FeaturesCard BackgroundImage="/FeatureCardImages/Collaborate3.png" LogoImage="/pngIcons/chatBubble.png" Title="Discussions" Text="React and comment without losng context"/>
			</div>
			<div className="flex flex-col md:flex-row w-full gap-2">
			<FeaturesCard BackgroundImage="/FeatureCardImages/Collaborate4.png" LogoImage="/pngIcons/susSymbol.png" Title="Slack sync" Text="Create issues from Slack and sync discusions across both tools"/>
			<FeaturesCard BackgroundImage="/FeatureCardImages/Collaborate5.png" LogoImage="/pngIcons/chatBubble.png" Title="Figma integration" Text="Streamline and work across design and engineering"/>
			<FeaturesCard BackgroundImage="/FeatureCardImages/Collaborate6.png" LogoImage="/pngIcons/chatBubble.png" Title="Support workflows" Text="Link seamlessly with Zendesk, Intercom or Front"/>
			</div>
		</div>
	)
}