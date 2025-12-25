import type { Metadata } from "next";
import { Inter, Rajdhani, Roboto_Mono } from "next/font/google";
import "./globals.css";
import LoadingScreen from "../components/LoadingScreen";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const rajdhani = Rajdhani({ 
  subsets: ["latin"], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani'
});
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: '--font-roboto-mono'
});

export const metadata: Metadata = {
  title: "Shubham Ambekar | Aerospace Engineer",
  description: "Portfolio of Shubham Ambekar, specializing in Mechanical Engineering, CFD, and Computational Design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${rajdhani.variable} ${robotoMono.variable} font-sans bg-slate-950 text-slate-200 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden`}>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
