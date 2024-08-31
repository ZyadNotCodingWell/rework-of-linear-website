import FeaturesCard from "./FeaturesCard";


export default function SecureCards() {
	return (
		<div className="relative flex flex-col w-fit self-center mx-auto items-center py-8 gap-2">
			<div className="flex flex-col md:flex-row w-full gap-2">
			<FeaturesCard BackgroundImage="/FeatureCardImages/Secure1.png" LogoImage="/pngIcons/sherrif.png" Title="Safe and secure" Text="Designed to keep your data safe and protected"/>
			<FeaturesCard BackgroundImage="/FeatureCardImages/Secure2.png" LogoImage="/pngIcons/key.png" Title="Identity management" Text="SSO, SAML and advanced login restrictions"/>
			<FeaturesCard BackgroundImage="/FeatureCardImages/Secure3.png" LogoImage="/pngIcons/lockpad.png" Title="Privacy" Text="Private teams and admin controls for system-level privileges"/>
			</div>
			<div className="absolute inset-0 bg-[linear-gradient(285.49deg,rgb(148,151,157)_14.61%,rgb(118,124,175)_106.06%)] [mask-image:radial-gradient(70%_60%_at_center_center,rgb(0,0,0,0.7)_45%,transparent)] opacity-10 pointer-events-none"></div>
		</div>
	)
}