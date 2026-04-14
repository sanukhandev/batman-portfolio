"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { profileData, scrollNarrative } from "@/lib/profileData";

export default function Overlay({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  // Title: Fades out immediately as user starts scrolling
  const titleOpacity = useTransform(scrollProgress, [0, 0.06], [1, 0]);
  const titleScale = useTransform(scrollProgress, [0, 0.06], [1, 0.95]);

  // Act 1 line: origin story
  // left aligned near upper-left area
  // fade in with slight upward motion and low-opacity smoky entrance
  const opacity1 = useTransform(scrollProgress, [0.08, 0.18, 0.3], [0, 1, 0]);
  const y1 = useTransform(scrollProgress, [0.08, 0.18, 0.3], [50, 0, -50]);
  const filter1 = useTransform(scrollProgress, [0.08, 0.18, 0.26], ["blur(10px)", "blur(0px)", "blur(10px)"]);

  // Line 2: "They never look up."
  // right aligned near upper-right area
  // slide in from right with subtle blur-to-sharp transition
  const opacity2 = useTransform(scrollProgress, [0.32, 0.42, 0.58], [0, 1, 0]);
  const x2 = useTransform(scrollProgress, [0.32, 0.42, 0.58], [100, 0, -50]);
  const filter2 = useTransform(scrollProgress, [0.32, 0.42, 0.52], ["blur(12px)", "blur(0px)", "blur(12px)"]);

  // Line 3: "But fear changes everything."
  // center aligned in the middle
  // scale in gently at center with stronger presence and faint glow
  const opacity3 = useTransform(scrollProgress, [0.62, 0.72, 0.82, 0.9], [0, 1, 1, 0]);
  const scale3 = useTransform(scrollProgress, [0.62, 0.75, 0.9], [0.85, 1, 1.08]);
  const filter3 = useTransform(scrollProgress, [0.62, 0.72], ["blur(8px)", "blur(0px)"]);
  const glow3 = useTransform(scrollProgress, [0.62, 0.75, 0.9], [
    "0px 0px 0px rgba(255,255,255,0)", 
    "0px 0px 20px rgba(255,255,255,0.3)", 
    "0px 0px 0px rgba(255,255,255,0)"
  ]);

  // Act 3 line: final identity reveal
  // center aligned near bottom center
  // fade + scale up, subtle text glow
  const opacity4 = useTransform(scrollProgress, [0.84, 0.93, 1], [0, 1, 1]);
  const scale4 = useTransform(scrollProgress, [0.84, 0.93, 1], [0.82, 1, 1.03]);
  const filter4 = useTransform(scrollProgress, [0.84, 0.92], ["blur(20px)", "blur(0px)"]);
  
  // Green glow for Sanu Khan branding
  const textShadow4 = useTransform(scrollProgress, [0.85, 0.92, 1], [
    "0px 0px 0px rgba(0, 255, 65, 0)", 
    "0px 0px 40px rgba(0, 255, 65, 0.6)", 
    "0px 0px 80px rgba(0, 255, 65, 0.8)"
  ]);
  const color4 = useTransform(scrollProgress, [0.85, 0.92], ["#ffffff", "#00FF41"]); 
  
  // Initials badge appears at the final stage
  const logoOpacity = useTransform(scrollProgress, [0.95, 1], [0, 1]);
  const logoScale = useTransform(scrollProgress, [0.95, 1], [0.8, 1]);

  // Act 2 proof-strip for impact metrics
  const proofOpacity = useTransform(scrollProgress, [0.3, 0.4, 0.62, 0.72], [0, 1, 1, 0]);
  const proofScale = useTransform(scrollProgress, [0.3, 0.5, 0.72], [0.96, 1, 1.03]);

  // Dark overlay that thickens as we transition out of images to purely text/drama
  const backgroundOpacity = useTransform(scrollProgress, [0, 0.75, 1], [0.1, 0.58, 0.85]);
  const subtextOpacity = useTransform(scrollProgress, [0.9, 0.96, 1], [0, 0.92, 1]);
  const ctaOpacity = useTransform(scrollProgress, [0.93, 0.98, 1], [0, 0.9, 1]);

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
          className="absolute left-8 md:left-24 top-[26%] max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-[0.1em] text-[#e0e0e0] uppercase leading-tight drop-shadow-lg">
            Started small. Built consistently.
          </h1>
        </motion.div>

        {/* Act 2: Proof strip */}
        <motion.div
          style={{ opacity: proofOpacity, scale: proofScale }}
          className="absolute inset-x-0 top-[54%] -translate-y-1/2 px-4"
        >
          <div className="mx-auto max-w-4xl grid grid-cols-3 gap-3 md:gap-6">
            <div className="rounded-lg border border-white/20 bg-black/35 px-3 py-4 md:px-5 md:py-6 text-center">
              <p className="text-2xl md:text-4xl text-[#00FF41] tracking-wider">{profileData.hero.yearsExperience}</p>
              <p className="mt-2 text-[10px] md:text-xs text-white/70 tracking-[0.16em] uppercase">Years</p>
            </div>
            <div className="rounded-lg border border-white/20 bg-black/35 px-3 py-4 md:px-5 md:py-6 text-center">
              <p className="text-2xl md:text-4xl text-[#00FF41] tracking-wider">{profileData.hero.projectsCompleted}</p>
              <p className="mt-2 text-[10px] md:text-xs text-white/70 tracking-[0.16em] uppercase">Projects</p>
            </div>
            <div className="rounded-lg border border-white/20 bg-black/35 px-3 py-4 md:px-5 md:py-6 text-center">
              <p className="text-2xl md:text-4xl text-[#00FF41] tracking-wider">{profileData.hero.clientsServed}</p>
              <p className="mt-2 text-[10px] md:text-xs text-white/70 tracking-[0.16em] uppercase">Clients</p>
            </div>
          </div>
        </motion.div>

        {/* Line 2 */}
        <motion.div
          style={{ opacity: opacity2, x: x2, filter: filter2 }}
          className="absolute right-8 md:right-24 top-[36%] max-w-2xl text-right"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-[0.1em] text-[#e0e0e0] uppercase leading-tight drop-shadow-lg">
            Proof over promises.
          </h2>
        </motion.div>

        {/* Line 3 */}
        <motion.div
          style={{ opacity: opacity3, scale: scale3, filter: filter3, textShadow: glow3 }}
          className="absolute inset-x-0 top-[44%] -translate-y-1/2 text-center px-4"
        >
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-[0.15em] text-white uppercase origin-center drop-shadow-2xl">
            Now architecting secure, scalable platforms.
          </h3>
        </motion.div>

        {/* Starting Title */}
        <motion.div
          style={{ opacity: titleOpacity, scale: titleScale }}
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center"
        >
          <p className="text-xl md:text-2xl font-light tracking-[0.3em] text-white/50 uppercase mb-4">
            A Creative Journey
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-widest text-white uppercase drop-shadow-2xl">
            Architect of the Web
          </h1>
          <p className="mt-8 text-sm md:text-base font-light tracking-widest text-white/40 uppercase animate-pulse">
            Scroll to begin
          </p>
        </motion.div>

        {/* SANU KHAN INITIALS BADGE */}
        <motion.div
          style={{ 
            opacity: useTransform(scrollProgress, [0.92, 1], [0, 0.8]),
            scale: logoScale
          }}
          className="absolute inset-x-0 top-1/4 -translate-y-1/2 flex justify-center items-center pointer-events-none"
        >
          <div className="w-48 h-48 md:w-80 md:h-80 border-2 border-[#00FF41] rounded-full flex items-center justify-center">
            <span className="text-6xl md:text-8xl font-bold text-[#00FF41]">SK</span>
          </div>
        </motion.div>

        {/* Line 4 - Final Reveal */}
        <motion.div
          style={{ 
            opacity: opacity4, 
            scale: scale4, 
            filter: filter4,
            textShadow: textShadow4,
            color: color4
          }}
          className="absolute bottom-0 inset-x-0 text-center pb-32 md:pb-44 px-4 flex flex-col items-center justify-end origin-bottom"
        >
          <h1 
            className="text-7xl md:text-[10rem] lg:text-[12rem] font-bold tracking-widest uppercase leading-none drop-shadow-2xl"
            style={{ 
                WebkitTextStroke: "2px rgba(255,255,255,0.1)",
                textShadow: "0px 4px 20px rgba(0,0,0,0.8)"
            }}
          >
            I'M SANU KHAN
          </h1>
          <motion.p
            style={{ 
              opacity: subtextOpacity,
            }}
            className="text-xl md:text-3xl font-light tracking-[0.2em] text-[#00FF41] uppercase mt-4 drop-shadow-lg"
          >
            Extended Full Stack Developer
          </motion.p>
        </motion.div>

        {/* Coffee CTA Button */}
        <motion.div
          style={{ 
            opacity: ctaOpacity,
          }}
          className="absolute bottom-0 inset-x-0 text-center pb-8 md:pb-12 px-4 flex flex-col items-center justify-end pointer-events-auto"
        >
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center justify-center">
            <motion.a
              href="/about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-3 md:px-10 md:py-4 border-2 border-[#00FF41] text-[#00FF41] font-bold tracking-wider uppercase rounded-lg hover:bg-[#00FF41]/10 transition-all duration-300 text-sm md:text-base pointer-events-auto"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>About Me</span>
            </motion.a>
            <motion.a
              href={scrollNarrative.finalReveal.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold tracking-wider uppercase rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 text-sm md:text-base pointer-events-auto"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 8h11a3 3 0 010 6h-1m-10 0h8a2 2 0 002-2V8H6v4a2 2 0 002 2zm0 0v2a2 2 0 002 2h6a2 2 0 002-2v-2M6 8V6a2 2 0 012-2h8a2 2 0 012 2v2" />
              </svg>
              <span>{scrollNarrative.finalReveal.ctaText}</span>
            </motion.a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
