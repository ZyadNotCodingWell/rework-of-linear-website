import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";

const inter = Roboto({ 
  subsets: ["latin"],
  weight: ["400", "700"],
 });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export const viewport = "width=device-width, initial-scale=0.5";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[linear-gradient(to_bottom_right,black,rgb(97, 106, 115))] relative`}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
