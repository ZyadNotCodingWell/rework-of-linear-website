import FeaturesCard from "./FeaturesCard";


export default function SecureCards() {
	return (
		<div className="flex flex-col w-fit self-center mx-auto items-center py-8 gap-2">
			<div className="flex flex-col md:flex-row w-full gap-2">
			<FeaturesCard BackgroundImage="/FeatureCardImages/Secure1.png" LogoImage="/pngIcons/sherrif.png" Title="Safe and secure" Text="Designed to keep your data safe and protected"/>
			<FeaturesCard BackgroundImage="/FeatureCardImages/Secure2.png" LogoImage="/pngIcons/key.png" Title="Identity management" Text="SSO, SAML and advanced login restrictions"/>
			<FeaturesCard BackgroundImage="/FeatureCardImages/Secure3.png" LogoImage="/pngIcons/lockpad.png" Title="Privacy" Text="Private teams and admin controls for system-level privileges"/>
			</div>
		</div>
	)
}