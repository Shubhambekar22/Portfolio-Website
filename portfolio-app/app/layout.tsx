import type { Metadata } from "next";
import { Inter, Rajdhani, Roboto_Mono } from "next/font/google";
import "./globals.css";
import LoadingScreen from "../components/LoadingScreen";
import Script from "next/script";
import { GA_TRACKING_ID } from "@/lib/gtag";
import MechanicalBackground from "../components/MechanicalBackground";

declare global {
  interface Window {
    gtag: any;
  }
}


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
  title: "Shubham Ambekar | Aerospace & Mechanical Engineer",
  description: "Portfolio of Shubham Ambekar, specializing in Mechanical Engineering, CFD, and Computational Design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${rajdhani.variable} ${robotoMono.variable} font-sans bg-transparent text-slate-200 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden`}>
        {/* Global Fixed 3D Background */}
        <div className="fixed inset-0 z-[-10] bg-slate-950">
          <MechanicalBackground 
             wireframe={false} 
             rotationSpeed={2.5} 
             size="full"
             colorPalette={{
               base: "#94a3b8", // slate-400
               rim: "#06b6d4",  // cyan-500
               bg: "#020617"    // slate-950 base color
             }}
          />
          {/* Global vignette overlay for readability */}
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_90%)] pointer-events-none" />
        </div>

        <LoadingScreen />
        {children}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
