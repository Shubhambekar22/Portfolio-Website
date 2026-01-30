import type { Metadata } from "next";
import { Inter, Rajdhani, Roboto_Mono } from "next/font/google";
import "./globals.css";
import LoadingScreen from "../components/LoadingScreen";
import Script from "next/script";
import { GA_TRACKING_ID } from "@/lib/gtag";

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
      <body className={`${inter.variable} ${rajdhani.variable} ${robotoMono.variable} font-sans bg-slate-950 text-slate-200 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden`}>
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
