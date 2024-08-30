import { Children } from "react";


export const ButtonPrimary = ({children} : any) => {
	return (
		<button
		className="px-2.5 relative py-1 flex text-black flex-none items-center justify-center text-md md:text-lg bg-white font-bold tracking-wide shadow-header-glass border-header-glass rounded-lg hover:bg-zinc-100 transition duration-500">
			<div className="absolute inset-0 shadow-[0px_1px_20px_#AAAAAA] rounded-lg hover:shadow-[0px_0px_40px_#575757] transition duration-500"></div>
			{children}
		</button>
	);
};

export const ButtonSecondary = ({children} : any) => {
	return(
		<button 
			className="px-2.5 py-1 flex text-white min-w-24 flex-none justify-center bg-neutral-900 font-bold tracking-wide text-md md:text-lg shadow-header-glass border-header-glass rounded-lg hover:bg-neutral-800 transition duration-300">
			{children}
		</button>
	)
}