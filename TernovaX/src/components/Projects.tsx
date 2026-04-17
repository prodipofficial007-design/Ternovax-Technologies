import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Zap, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: "hypenews",
    title: "HypeNews ⚡",
    subtitle: "News, But Faster. Smarter. Better.",
    description: "A high-velocity AI-driven news aggregator designed for the digital generation. Real-time updates with zero fluff.",
    status: "COMING_SOON",
    tags: ["AI", "React", "Real-time"]
  },
  {
    id: "trenovax-ai-platform",
    title: "TrenovaX AI Platform",
    subtitle: "Enterprise Intelligence Re-defined.",
    description: "A comprehensive SaaS solution for deploying custom LLMs across distributed enterprise architectures.",
    status: "LIVE_BETA",
    tags: ["SaaS", "LLM", "Cloud"]
  },
  {
    id: "quantumleap-crm",
    title: "QuantumLeap CRM",
    subtitle: "The Future of Engagement.",
    description: "Predictive customer relationship management tool that anticipates market shifts before they happen.",
    status: "OPERATIONAL",
    tags: ["Predictive", "CRM", "BigData"]
  }
];

const allTags = ["ALL", ...Array.from(new Set(projects.flatMap(p => p.tags)))];

export default function Projects() {
  const [filter, setFilter] = useState("ALL");
  const navigate = useNavigate();

  const filteredProjects = filter === "ALL" 
    ? projects 
    : projects.filter(p => p.tags.includes(filter));

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-4 uppercase italic"
          >
            LAB_<span className="text-gradient">OUTPUTS</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 max-w-xl mx-auto text-xs font-mono tracking-widest uppercase"
          >
            // Strategic deployments currently active in the digital sector.
          </motion.p>
        </div>

        {/* Filter mechanism */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <div className="w-full flex justify-center mb-4 md:hidden">
             <Filter className="w-4 h-4 text-red-500 mr-2" />
             <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest leading-4">Filter_Modules</span>
          </div>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-sm text-[10px] font-mono tracking-widest transition-all duration-300 border ${
                filter === tag 
                  ? 'bg-red-600 text-black border-red-600 shadow-[0_0_15px_rgba(255,0,0,0.3)]' 
                  : 'bg-transparent text-slate-500 border-white/10 hover:border-red-600/50 hover:text-slate-300'
              } uppercase`}
            >
              {tag}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="glass-panel p-8 rounded-sm relative group overflow-hidden border-white/5 hover:border-red-600/40 transition-all duration-500 flex flex-col h-full"
              >
                <div className="absolute top-0 right-0 p-4">
                  <div className={`text-[9px] font-mono px-3 py-1 border flex items-center gap-2 ${
                    project.status === 'COMING_SOON' ? 'border-yellow-500/30 text-yellow-500' : 
                    project.status === 'LIVE_BETA' ? 'border-sky-500/30 text-sky-500' : 'border-emerald-500/30 text-emerald-500'
                  } rounded-full bg-black/50 backdrop-blur-md`}>
                    <div className={`w-1 h-1 rounded-full ${
                      project.status === 'COMING_SOON' ? 'bg-yellow-500 shadow-[0_0_5px_yellow]' : 
                      project.status === 'LIVE_BETA' ? 'bg-sky-500 shadow-[0_0_5px_skyblue]' : 'bg-emerald-500 shadow-[0_0_5px_springgreen]'
                    }`} />
                    {project.status}
                  </div>
                </div>

                <div className="mb-8 flex-grow">
                  <div className="w-12 h-12 bg-red-600/10 rounded-sm flex items-center justify-center mb-6 neon-border group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2 uppercase italic tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-red-500/80 text-[10px] font-mono mb-4 uppercase tracking-[0.2em]">
                    {project.subtitle}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 font-mono">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[9px] font-mono text-slate-600 bg-white/5 px-2 py-1 rounded-sm uppercase group-hover:text-red-500/50 transition-colors">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => navigate(`/project/${project.id}`)}
                    className="flex items-center gap-2 text-[10px] font-mono font-bold text-white group-hover:text-red-500 transition-colors uppercase tracking-[0.2em] w-fit"
                  >
                    LEARN_MORE <ExternalLink className="w-3 h-3" />
                  </motion.button>
                </div>

                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-red-600/5 rounded-full blur-[60px] group-hover:bg-red-600/10 transition-colors -z-10" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
