



export default function FeaturesText({title,text,background}: any) {
	return (
		<div className="flex flex-col flex-none lg:max-w-screen-md items-left py-8">
			<div className={`font-semibold w-fit py-1 text-transparent md:max-w-2xl text-2xl md:text-5xl`} 
			style={{background, backgroundClip:"text"}}>{title}</div>
			<div className="font-normal py-2 text-white/75 text-xs max-w-64 md:text-xl md:max-w-full">{text}</div>
		</div>
	)
}