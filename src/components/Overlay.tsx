"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  // Title: Fades out immediately as user starts scrolling
  const titleOpacity = useTransform(scrollProgress, [0, 0.05], [1, 0]);
  const titleScale = useTransform(scrollProgress, [0, 0.05], [1, 0.95]);

  // Line 1: "Criminals think the night belongs to them."
  // left aligned near upper-left area
  // fade in with slight upward motion and low-opacity smoky entrance
  const opacity1 = useTransform(scrollProgress, [0.05, 0.15, 0.25], [0, 1, 0]);
  const y1 = useTransform(scrollProgress, [0.05, 0.15, 0.25], [50, 0, -50]);
  const filter1 = useTransform(scrollProgress, [0.05, 0.15, 0.2], ["blur(10px)", "blur(0px)", "blur(10px)"]);

  // Line 2: "They never look up."
  // right aligned near upper-right area
  // slide in from right with subtle blur-to-sharp transition
  const opacity2 = useTransform(scrollProgress, [0.2, 0.35, 0.5], [0, 1, 0]);
  const x2 = useTransform(scrollProgress, [0.2, 0.35, 0.5], [100, 0, -50]);
  const filter2 = useTransform(scrollProgress, [0.2, 0.35, 0.45], ["blur(12px)", "blur(0px)", "blur(12px)"]);

  // Line 3: "But fear changes everything."
  // center aligned in the middle
  // scale in gently at center with stronger presence and faint glow
  const opacity3 = useTransform(scrollProgress, [0.45, 0.55, 0.65, 0.75], [0, 1, 1, 0]);
  const scale3 = useTransform(scrollProgress, [0.45, 0.6, 0.75], [0.85, 1, 1.1]);
  const filter3 = useTransform(scrollProgress, [0.45, 0.55], ["blur(8px)", "blur(0px)"]);
  const glow3 = useTransform(scrollProgress, [0.45, 0.6, 0.75], [
    "0px 0px 0px rgba(255,255,255,0)", 
    "0px 0px 20px rgba(255,255,255,0.3)", 
    "0px 0px 0px rgba(255,255,255,0)"
  ]);

  // Line 4: "I AM BATMAN"
  // center aligned near bottom center
  // fade + scale up, subtle text glow
  const opacity4 = useTransform(scrollProgress, [0.75, 0.9, 1], [0, 1, 1]);
  const scale4 = useTransform(scrollProgress, [0.75, 0.9, 1], [0.8, 1, 1.05]);
  const filter4 = useTransform(scrollProgress, [0.75, 0.85], ["blur(20px)", "blur(0px)"]);
  
  // Batman yellow glow
  const textShadow4 = useTransform(scrollProgress, [0.85, 0.92, 1], [
    "0px 0px 0px rgba(200, 160, 40, 0)", 
    "0px 0px 40px rgba(200, 160, 40, 0.6)", 
    "0px 0px 80px rgba(200, 160, 40, 0.8)"
  ]);
  const color4 = useTransform(scrollProgress, [0.85, 0.92], ["#ffffff", "#e0c050"]); 
  
  // Bat Logo: Appears after "I AM BATMAN" reaches peak
  const logoOpacity = useTransform(scrollProgress, [0.95, 1], [0, 1]);
  const logoScale = useTransform(scrollProgress, [0.95, 1], [0.8, 1]);
  const logoPathLength = useTransform(scrollProgress, [0.92, 1], [0, 1]);

  // Dark overlay that thickens as we transition out of images to purely text/drama
  const backgroundOpacity = useTransform(scrollProgress, [0, 0.8, 1], [0.1, 0.6, 0.85]);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 font-[family-name:var(--font-bebas)]">
      
      {/* Dynamic Dark Vignette & Shadow Overlay */}
      <motion.div 
        className="sticky top-0 h-screen w-full bg-black pointer-events-none"
        style={{ opacity: backgroundOpacity, marginTop: 0 }}
      />
      
      {/* Grain / Noise Overlay - reduced opacity from 20% to 8% so frames look clearer */}
      <div 
        className="sticky top-0 h-screen w-full opacity-[0.08] pointer-events-none mix-blend-overlay"
        style={{
            marginTop: '-100vh',
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Subtle vignette border gradient */}
      <div 
        className="sticky top-0 h-screen w-full pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/70" 
        style={{ marginTop: '-100vh' }} 
      />

      {/* Main Text Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col px-8 md:px-24 overflow-hidden" style={{ marginTop: '-100vh' }}>
        
        {/* Line 1 */}
        <motion.div
          style={{ opacity: opacity1, y: y1, filter: filter1 }}
          className="absolute left-8 md:left-24 top-1/4 max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-[0.1em] text-[#e0e0e0] uppercase leading-tight drop-shadow-lg">
            Criminals think the night belongs to them.
          </h1>
        </motion.div>

        {/* Line 2 */}
        <motion.div
          style={{ opacity: opacity2, x: x2, filter: filter2 }}
          className="absolute right-8 md:right-24 top-1/3 max-w-2xl text-right"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-[0.1em] text-[#e0e0e0] uppercase leading-tight drop-shadow-lg">
            They never look up.
          </h2>
        </motion.div>

        {/* Line 3 */}
        <motion.div
          style={{ opacity: opacity3, scale: scale3, filter: filter3, textShadow: glow3 }}
          className="absolute inset-x-0 top-[45%] -translate-y-1/2 text-center px-4"
        >
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-[0.15em] text-white uppercase origin-center drop-shadow-2xl">
            But fear changes everything.
          </h3>
        </motion.div>

        {/* Starting Title */}
        <motion.div
          style={{ opacity: titleOpacity, scale: titleScale }}
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center"
        >
          <p className="text-xl md:text-2xl font-light tracking-[0.3em] text-white/50 uppercase mb-4">
            A Cinematic Experience
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-widest text-white uppercase drop-shadow-2xl">
            The Dark Knight
          </h1>
          <p className="mt-8 text-sm md:text-base font-light tracking-widest text-white/40 uppercase animate-pulse">
            Scroll to begin
          </p>
        </motion.div>

        {/* BATMAN LOGO OUTLINE ANIMATION */}
        <motion.div
          style={{ 
            opacity: logoOpacity, 
            scale: logoScale
          }}
          className="absolute inset-x-0 top-1/4 -translate-y-1/2 flex justify-center items-center pointer-events-none"
        >
          <svg 
            width="726" 
            height="252" 
            viewBox="0 0 726 252.17" 
            className="w-64 h-auto md:w-[600px] text-[#e0c050] drop-shadow-[0_0_15px_rgba(224,192,80,0.5)]"
          >
            <motion.path 
              d="M483.92 0S481.38 24.71 466 40.11c-11.74 11.74-24.09 12.66-40.26 15.07-9.42 1.41-29.7 3.77-34.81-.79-2.37-2.11-3-21-3.22-27.62-.21-6.92-1.36-16.52-2.82-18-.75 3.06-2.49 11.53-3.09 13.61S378.49 34.3 378 36a85.13 85.13 0 0 0-30.09 0c-.46-1.67-3.17-11.48-3.77-13.56s-2.34-10.55-3.09-13.61c-1.45 1.45-2.61 11.05-2.82 18-.21 6.67-.84 25.51-3.22 27.62-5.11 4.56-25.38 2.2-34.8.79-16.16-2.47-28.51-3.39-40.21-15.13C244.57 24.71 242 0 242 0H0s69.52 22.74 97.52 68.59c16.56 27.11 14.14 58.49 9.92 74.73C170 140 221.46 140 273 158.57c69.23 24.93 83.2 76.19 90 93.6 6.77-17.41 20.75-68.67 90-93.6 51.54-18.56 103-18.59 165.56-15.25-4.21-16.24-6.63-47.62 9.93-74.73C656.43 22.74 726 0 726 0z" 
              fill="transparent" 
              stroke="currentColor" 
              strokeWidth="4" 
              style={{ pathLength: logoPathLength }}
            />
          </svg>
        </motion.div>

        {/* Line 4 - I AM BATMAN */}
        <motion.div
          style={{ 
            opacity: opacity4, 
            scale: scale4, 
            filter: filter4,
            textShadow: textShadow4,
            color: color4
          }}
          className="absolute bottom-0 inset-x-0 text-center pb-24 md:pb-32 px-4 flex flex-col items-center justify-end origin-bottom"
        >
          <h1 
            className="text-7xl md:text-[10rem] lg:text-[12rem] font-bold tracking-widest uppercase leading-none drop-shadow-2xl"
            style={{ 
                WebkitTextStroke: "2px rgba(255,255,255,0.1)", // Subtle outline to force readability against bright frames
                textShadow: "0px 4px 20px rgba(0,0,0,0.8)" // Dark drop shadow behind the glow for contrast
            }}
          >
            I AM BATMAN
          </h1>
        </motion.div>

      </div>
    </div>
  );
}
