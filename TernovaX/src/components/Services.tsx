import { motion } from 'framer-motion';
import { Cpu, Rocket, Layout, Shield, Cloud, Terminal } from 'lucide-react';

const services = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "AI Integration",
    description: "Embedding intelligence into your existing workflows with custom LLMs and machine learning models."
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "SaaS Development",
    description: "Scalable, high-performance software-as-a-service platforms built for the modern web."
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: "UI/UX Experience",
    description: "Designing intuitive digital products that focus on user retention and engagement."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Cyber Security",
    description: "Next-gen protection and compliance for your mission-critical data and infrastructure."
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Architecture",
    description: "Optimized cloud deployments ensuring 99.9% uptime and global scalability."
  },
  {
    icon: <Terminal className="w-8 h-8" />,
    title: "API Ecosystems",
    description: "Robust, well-documented APIs that power seamless integrations across your tech stack."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-4 uppercase italic"
          >
            TECH_<span className="text-gradient">CAPABILITIES</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 max-w-xl mx-auto text-sm font-mono tracking-tighter"
          >
            Deploying high-impact modules for autonomous digital navigation and enterprise structural integrity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1] 
              }}
              whileHover={{ scale: 1.02 }}
              className="glass-panel p-8 rounded-sm group transition-all hover:bg-white/10 hover:border-red-600/30 relative"
            >
              <div className="absolute top-0 right-0 p-2 text-[8px] font-mono text-slate-800 tracking-[0.5em] group-hover:text-red-500/30 transition-colors uppercase">
                T-MOD_0{index + 1}
              </div>
              <div className="text-red-600 mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.5)] transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-lg font-display font-bold mb-3 text-slate-100 uppercase tracking-wide">
                {service.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed font-mono">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
