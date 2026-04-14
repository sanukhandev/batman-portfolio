"use client";

import { useRef } from "react";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import { useScroll } from "framer-motion";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track progress across a shorter, tighter scroll experience
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="bg-[#121212] flex flex-col min-h-screen">
      <div ref={containerRef} className="relative h-[320vh] w-full">
        {/* ScrollyCanvas renders the persistent sticky canvas */}
        <ScrollyCanvas scrollProgress={scrollYProgress} />
        {/* Overlay renders the persistent sticky text on top */}
        <Overlay scrollProgress={scrollYProgress} />
      </div>
    </main>
  );
}
