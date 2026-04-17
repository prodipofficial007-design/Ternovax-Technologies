import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Cpu, Globe, Rocket, Shield, Terminal, Zap } from 'lucide-react';
import { Navbar, Footer } from './Navigation';

const projectDetails = {
  "hypenews": {
    title: "HypeNews ⚡",
    subtitle: "News, But Faster. Smarter. Better.",
    description: "HypeNews is an AI-native news delivery system that bypasses the noise of traditional media. Using neural sentiment analysis and real-time validation, we deliver only the high-impact signal directly to your feed.",
    technologies: ["GPT-4o Integration", "Next.js 15", "Redis Stream", "Tailwind CSS"],
    challenges: "Synchronizing global data streams while maintaining sub-second latency for breaking news alerts was our primary hurdle.",
    gallery: [
      "https://picsum.photos/seed/hypenews1/800/600",
      "https://picsum.photos/seed/hypenews2/800/600",
      "https://picsum.photos/seed/hypenews3/800/600"
    ]
  },
  "trenovax-ai-platform": {
    title: "TrenovaX AI Platform",
    subtitle: "Enterprise Intelligence Re-defined.",
    description: "The core engine of the TrenovaX ecosystem. Our platform allows massive corporations to deploy, monitor, and fine-tune private LLM clusters within their own security perimeter.",
    technologies: ["Kubernetes", "Python/PyTorch", "gRPC", "React"],
    challenges: "Building a bridge between heterogeneous legacy data sources and modern vector databases required a custom synchronization layer.",
    gallery: [
      "https://picsum.photos/seed/ai-plat1/800/600",
      "https://picsum.photos/seed/ai-plat2/800/600",
      "https://picsum.photos/seed/ai-plat3/800/600"
    ]
  },
  "quantumleap-crm": {
    title: "QuantumLeap CRM",
    subtitle: "The Future of Engagement.",
    description: "A CRM that doesn't just record history, but predicts the future. QuantumLeap uses proprietary forecasting models to suggest the next best action for sales teams before an opportunity even surfaces.",
    technologies: ["TensorFlow", "Node.js", "PostgreSQL", "D3.js"],
    challenges: "Ensuring the privacy of customer data while feeding encrypted signals into our prediction models without compromising accuracy.",
    gallery: [
      "https://picsum.photos/seed/crm1/800/600",
      "https://picsum.photos/seed/crm2/800/600",
      "https://picsum.photos/seed/crm3/800/600"
    ]
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = id ? projectDetails[id as keyof typeof projectDetails] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-red-500 font-mono">
        404_PROJECT_NOT_FOUND
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-500 hover:text-red-500 transition-colors font-mono text-xs mb-12 uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" /> RE_RETURN_TO_BASE
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-mono mb-6 tracking-widest uppercase">
                <Zap className="w-3 h-3 animate-pulse" />
                <span>PROJECT_REPORTS: {id?.replace(/-/g, '_').toUpperCase()}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 uppercase italic">
                {project.title}
              </h1>
              <p className="text-red-600 font-mono text-sm tracking-[0.2em] mb-8 uppercase italic">
                {project.subtitle}
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-12">
                {project.description}
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-white font-display font-bold text-sm uppercase mb-4 tracking-widest flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-red-600" /> STACK_DEPLOYED
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="bg-white/5 border border-white/10 px-3 py-1 text-[10px] font-mono text-slate-300 rounded-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-display font-bold text-sm uppercase mb-4 tracking-widest flex items-center gap-2">
                    <Shield className="w-4 h-4 text-red-600" /> MISSION_CRITICAL_HURDLES
                  </h3>
                  <p className="text-slate-500 text-sm font-mono italic leading-relaxed">
                    // {project.challenges}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {project.gallery.map((img, i) => (
                <div key={i} className="relative group overflow-hidden border border-white/5 rounded-sm bg-black">
                   <div className="absolute inset-0 bg-red-600/5 group-hover:bg-transparent transition-colors z-10" />
                   <img 
                    src={img} 
                    alt={`Mockup ${i}`} 
                    className="w-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100 scale-105 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                   />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="border border-white/5 bg-white/[0.02] p-12 rounded-sm text-center">
             <h4 className="text-white font-display font-bold text-2xl mb-4 uppercase italic">WANT_THE_BLUEPRINT?</h4>
             <p className="text-slate-500 font-mono text-xs mb-8 uppercase">// Contact our engineering lead for full documentation access.</p>
             <button className="bg-red-600 hover:bg-red-500 text-black font-black px-8 py-4 rounded-sm text-xs transition-all uppercase tracking-widest shadow-[0_0_20px_rgba(255,0,0,0.2)]">
                REQUEST_CORE_ACCESS
             </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
