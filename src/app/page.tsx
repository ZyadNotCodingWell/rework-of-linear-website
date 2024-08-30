"use client";

import { Roboto } from "next/font/google";

import Hero from "./components/HeroSection";
import CustomerSection from "./components/CustomerSection";
import ProductSection from "./components/ProductSection";
import ProductDirection from "./components/ProductDirection";
import ProductFeaturesSection from "./components/ProductFeaturesSection";
import IssueTracking from "./components/IssueTracking";
import IssueTrackingFeatures from "./components/TrackingFeaturesSection";
import Collaborations from "./components/CollaborationSection";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400', '400'], 
})


export default function Home() {
  return (
    <main className={`${roboto.className} flex w-full overflow-hidden flex-col mb-100`}>
      
      <Hero />
      <CustomerSection /> 
      <ProductSection />
      <ProductDirection /> 
      <ProductFeaturesSection />
      <IssueTracking />
      <IssueTrackingFeatures />
      <Collaborations />

    </main>
  );
}
