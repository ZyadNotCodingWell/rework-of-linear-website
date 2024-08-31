import FeaturesMain from "../components/FeaturesMain";
import IconTicker from "../components/IconsTicker";

const Features = () => {
	return(
		<main className="container overflow-hidden flex flex-col min-w-screen self-center mx-auto min-h-screen py-24 md:py-28 items-center">
			<IconTicker />
			<FeaturesMain />
		</main>
	)
}

export default Features;