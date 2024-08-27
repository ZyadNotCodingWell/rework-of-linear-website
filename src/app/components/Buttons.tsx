import { Children } from "react";


export const ButtonPrimary = ({children} : any) => {
	return (
		<button
		className="px-3 relative py-1 flex text-black min-w-24 flex-none justify-center bg-white font-normal text-md md:text-lg shadow-header-glass border-header-glass rounded-lg hover:bg-zinc-100 transition duration-500">
			<div className="absolute inset-0 shadow-[0px_1px_15px_#AAAAAA] rounded-lg hover:shadow-[0px_0px_25px_#575757] transition duration-500"></div>
			{children}
		</button>
	);
};

export const ButtonSecondary = ({children} : any) => {
	return(
		<button 
		className="px-3 py-1 flex text-white min-w-24 flex-none justify-center bg-black font-normal text-md md:text-lg shadow-header-glass border-header-glass rounded-lg hover:bg-zinc-950 transition duration-300">
			{children}
		</button>
	)
}