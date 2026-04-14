"use client";

import { useEffect, useRef } from "react";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import { useScroll } from "framer-motion";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);
  const stepPoints = [0, 0.2, 0.4, 0.6, 0.8, 1];
  
  // Track progress across a shorter, tighter scroll experience
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      const container = containerRef.current;
      if (!container || isAnimatingRef.current) {
        return;
      }

      const containerTop = container.getBoundingClientRect().top + window.scrollY;
      const maxTravel = container.offsetHeight - window.innerHeight;
      if (maxTravel <= 0) {
        return;
      }

      const currentY = window.scrollY;
      const inScrollyRange = currentY >= containerTop - 4 && currentY <= containerTop + maxTravel + 4;
      if (!inScrollyRange) {
        return;
      }

      event.preventDefault();

      const progress = Math.min(Math.max((currentY - containerTop) / maxTravel, 0), 1);
      const direction = event.deltaY > 0 ? 1 : -1;

      let currentStep = 0;
      for (let i = 0; i < stepPoints.length; i += 1) {
        if (progress >= stepPoints[i]) {
          currentStep = i;
        }
      }

      const nextStep = Math.min(Math.max(currentStep + direction, 0), stepPoints.length - 1);
      if (nextStep === currentStep) {
        return;
      }

      isAnimatingRef.current = true;
      const targetY = containerTop + stepPoints[nextStep] * maxTravel;
      window.scrollTo({ top: targetY, behavior: "smooth" });

      window.setTimeout(() => {
        isAnimatingRef.current = false;
      }, 480);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

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
