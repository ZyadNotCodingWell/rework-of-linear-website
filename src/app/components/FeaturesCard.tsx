'use client'

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function FeaturesCard({ BackgroundImage, LogoImage, Title, Text }: any) {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
			if (!cardRef.current) return ;
      const rect = cardRef.current.getBoundingClientRect();
      setMouseX(event.clientX - rect.left);
      setMouseY(event.clientY - rect.top);
    };
		if (!cardRef.current) return ;
    cardRef.current.addEventListener("mousemove", handleMouseMove);
    return () => {
			if (!cardRef.current) return ;
      cardRef.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const gradientStyle = {
    maskImage: `radial-gradient(60% 50% at ${mouseX}px ${mouseY}px, black 35%, transparent)`,
  };

  return (
    <div
      ref={cardRef}
      className="relative w-60 lg:w-80 h-72 py-4 flex flex-col flex-none bg-white/10 border border-white/30 rounded-xl group overflow-hidden"
    >
      <div
        className="w-60 lg:w-80 min-h-44 max-h-44 flex flex-none z-0"
        style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: "cover", backgroundPositionX: "-7px" }}></div>
      <div className="w-80 h-32 flex flex-row flex-none gap-2 p-4 -translate-y-2">
        <div className="flex min-w-8 h-full items-start pt-[5px] justify-center saturate-0 brightness-200">
          <Image src={LogoImage} alt="Logo" width={16} height={16} />
        </div>
        <div className="flex flex-col items-start gap-1 tracking-wide justify-start">
          <div className="font-semibold text-base">{Title}</div>
          <div className="font-thin text-sm text-white/40 max-w-60">{Text}</div>
        </div>
      </div>
      <div
        className="absolute inset-0 w-full h-full flex opacity-0 group-hover:opacity-100 transition duration-100 flex-none"
        style={gradientStyle}
      >
        <div className="bg-white/5 w-full h-full flex flex-none"></div>
      </div>
    </div>
  );
}