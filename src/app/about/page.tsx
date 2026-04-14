"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { profileData } from "@/lib/profileData";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main className="min-h-screen bg-[#121212] text-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#121212]/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-8 md:px-24 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-bold tracking-widest uppercase hover:text-[#00FF41] transition-colors"
          >
            Architect
          </Link>
          <nav className="flex gap-8">
            <Link
              href="/"
              className="text-sm tracking-wider uppercase hover:text-[#00FF41] transition-colors"
            >
              Home
            </Link>
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-wider uppercase hover:text-[#00FF41] transition-colors"
            >
              GitHub
            </a>
            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-wider uppercase hover:text-[#00FF41] transition-colors"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto px-8 md:px-24 py-24"
      >
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-bold tracking-wider uppercase">
            {profileData.hero.name}
          </motion.h1>
          <motion.p variants={itemVariants} className="text-2xl md:text-4xl font-light text-[#00FF41] tracking-wide">
            {profileData.hero.title}
          </motion.p>
          <motion.div variants={itemVariants} className="flex gap-8 pt-4 text-sm md:text-base">
            <div>
              <p className="text-[#00FF41] font-bold text-xl md:text-2xl">{profileData.hero.yearsExperience}</p>
              <p className="text-white/60 uppercase tracking-wider">Years Experience</p>
            </div>
            <div>
              <p className="text-[#00FF41] font-bold text-xl md:text-2xl">{profileData.hero.projectsCompleted}</p>
              <p className="text-white/60 uppercase tracking-wider">Projects Built</p>
            </div>
            <div>
              <p className="text-[#00FF41] font-bold text-xl md:text-2xl">{profileData.hero.clientsServed}</p>
              <p className="text-white/60 uppercase tracking-wider">Happy Clients</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Career Timeline */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto px-8 md:px-24 py-24 border-t border-white/10"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-wider uppercase mb-16">
          Career Timeline
        </motion.h2>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-12">
          {profileData.careerTimeline.map((position, index) => (
            <motion.div key={index} variants={itemVariants} className="border-l-2 border-[#00FF41] pl-8">
              <div className="absolute w-4 h-4 bg-[#00FF41] rounded-full -left-[9px] mt-2"></div>
              <div className="space-y-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="text-2xl font-bold tracking-wider">{position.role}</h3>
                  <span className="text-[#00FF41] text-sm font-bold tracking-wider uppercase">{position.period}</span>
                </div>
                <p className="text-white/60 uppercase tracking-wider text-sm">{position.company}</p>
                <p className="text-white/80 leading-relaxed text-base md:text-lg">{position.description}</p>
                <ul className="space-y-2 pt-2">
                  {position.highlights.map((highlight, i) => (
                    <li key={i} className="text-white/70 flex gap-3">
                      <span className="text-[#00FF41] font-bold">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Skills Stack */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto px-8 md:px-24 py-24 border-t border-white/10"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-wider uppercase mb-16">
          Skills & Expertise
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {profileData.skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-[#00FF41] transition-colors"
            >
              <h3 className="text-xl font-bold text-[#00FF41] uppercase tracking-wider mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm font-light border border-white/20">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto px-8 md:px-24 py-24 border-t border-white/10"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-wider uppercase mb-16">
          Featured Projects
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {profileData.featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-lg p-6 hover:border-[#00FF41] transition-all hover:shadow-lg hover:shadow-[#00FF41]/20"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold tracking-wider flex-1">{project.title}</h3>
                <span className="text-xs font-bold uppercase tracking-widest bg-[#00FF41]/20 text-[#00FF41] px-3 py-1 rounded-full whitespace-nowrap ml-2">
                  {project.status}
                </span>
              </div>
              <p className="text-white/70 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10 font-light">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Education & Certifications */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto px-8 md:px-24 py-24 border-t border-white/10"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-wider uppercase mb-16">
          Certifications & Training
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {profileData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex gap-4 bg-white/5 border border-white/10 rounded-lg p-4 hover:border-[#00FF41] transition-colors"
            >
              <div className="h-10 min-w-10 rounded-md border border-[#00FF41]/40 bg-[#00FF41]/10 text-[#00FF41] text-[11px] tracking-wider font-bold flex items-center justify-center px-2 flex-shrink-0">
                {cert.icon}
              </div>
              <div>
                <p className="font-bold tracking-wider">{cert.title}</p>
                <p className="text-white/60 text-sm">{cert.issuer}</p>
                <p className="text-[#00FF41] text-xs font-bold tracking-wider mt-1">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto px-8 md:px-24 py-24 border-t border-white/10 text-center"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-wider uppercase mb-8">
          Let's Work Together
        </motion.h2>
        <motion.p variants={itemVariants} className="text-white/70 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Whether you're building a new product or scaling an existing platform, I'm ready to bring full-stack expertise and architectural thinking to your team.
        </motion.p>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col md:flex-row gap-4 justify-center">
          <motion.a
            variants={itemVariants}
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold tracking-wider uppercase rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v12m0 0l4-4m-4 4l-4-4M4 17v1a3 3 0 003 3h10a3 3 0 003-3v-1" />
            </svg>
            <span>Download Resume</span>
          </motion.a>
          <motion.a
            variants={itemVariants}
            href={profileData.contact.kofi}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#00FF41] text-[#00FF41] font-bold tracking-wider uppercase rounded-lg hover:bg-[#00FF41]/10 transition-all"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 8h11a3 3 0 010 6h-1m-10 0h8a2 2 0 002-2V8H6v4a2 2 0 002 2zm0 0v2a2 2 0 002 2h6a2 2 0 002-2v-2M6 8V6a2 2 0 012-2h8a2 2 0 012 2v2" />
            </svg>
            <span>Buy Me a Coffee</span>
          </motion.a>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-24 py-12 px-8 md:px-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© 2025 Sanu Khan. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00FF41] transition-colors"
            >
              GitHub
            </a>
            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00FF41] transition-colors"
            >
              LinkedIn
            </a>
            <a href={`mailto:${profileData.contact.email}`} className="hover:text-[#00FF41] transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
