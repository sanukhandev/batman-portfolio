"use client";

import { useRef } from "react";
import Link from "next/link";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import { useScroll } from "framer-motion";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // This tracks the scroll progress across the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <>
      {/* Fixed Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-[#121212]/80 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-8 md:px-24 py-4 flex justify-between items-center">
          <Link 
            href="/" 
            className="text-xl font-bold tracking-widest uppercase hover:text-[#00FF41] transition-colors font-[family-name:var(--font-bebas)]"
          >
            SK
          </Link>
          <nav className="flex gap-8 items-center">
            <Link
              href="/about"
              className="text-sm tracking-wider uppercase hover:text-[#00FF41] transition-colors font-[family-name:var(--font-bebas)]"
            >
              About
            </Link>
          </nav>
        </div>
      </header>

      <main className="bg-[#121212] flex flex-col min-h-screen">
        <div ref={containerRef} className="relative h-[500vh] w-full">
          {/* ScrollyCanvas renders the persistent sticky canvas */}
          <ScrollyCanvas scrollProgress={scrollYProgress} />
          {/* Overlay renders the persistent sticky text on top */}
          <Overlay scrollProgress={scrollYProgress} />
        </div>
      </main>
    </>
  );
}
