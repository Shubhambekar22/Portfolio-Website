"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second for a faster load

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="relative w-64 h-64 md:w-96 md:h-96 mix-blend-screen">
        {/* Using unoptimized=true for gifs to ensure they animate correctly */}
        <Image 
          src="/Portfolio-Website/preloader_fast.gif" 
          alt="Loading..." 
          fill
          className="object-contain brightness-75 contrast-125"
          unoptimized
          priority
        />
      </div>
    </div>
  );
}
