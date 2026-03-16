import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Project Alpha",
    category: "WebGL / React",
    description: "A high-performance interactive 3D experience.",
    link: "#"
  },
  {
    title: "Project Beta",
    category: "Next.js / Tailwind",
    description: "E-commerce platform with cinematic scrollytelling.",
    link: "#"
  },
  {
    title: "Project Gamma",
    category: "Framer Motion",
    description: "Award-winning agency portfolio showcasing modern design.",
    link: "#"
  },
  {
    title: "Project Delta",
    category: "Three.js / Canvas",
    description: "Data visualization for complex networks and systems.",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#0a0a0a] py-32 px-8 md:px-24 text-white relative z-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight">Selected Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group relative p-10 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md overflow-hidden hover:bg-white/[0.04] transition-all duration-500 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 flex flex-col h-full justify-between min-h-[200px]">
                <div>
                  <p className="text-sm text-white/40 font-mono mb-4 tracking-wider uppercase">{project.category}</p>
                  <h3 className="text-3xl md:text-4xl font-semibold mb-4 group-hover:text-white/90 transition-colors">{project.title}</h3>
                  <p className="text-white/50 leading-relaxed text-lg">{project.description}</p>
                </div>
                
                <div className="mt-12 flex items-center gap-3 text-white/30 group-hover:text-white transition-colors duration-300">
                  <span className="text-sm font-medium tracking-wide uppercase">View Project</span>
                  <ExternalLink size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
