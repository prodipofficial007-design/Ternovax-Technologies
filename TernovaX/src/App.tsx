import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar, Footer } from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import PrivacyPolicy from './components/PrivacyPolicy';
import AIAssistant from './components/AIAssistant';
import { motion } from 'framer-motion';
import { Database, Layout, Search, Layers, Server, Globe } from 'lucide-react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      
      {/* Tech Stack Marquee */}
      <section className="py-12 border-y border-white/5 bg-black/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-20 grayscale hover:opacity-50 transition-opacity duration-500">
              <div className="flex items-center gap-2"><Database className="w-5 h-5 text-red-600" /> <span className="font-mono text-[10px] tracking-widest uppercase">POSTGRES_DB</span></div>
              <div className="flex items-center gap-2"><Layout className="w-5 h-5 text-red-600" /> <span className="font-mono text-[10px] tracking-widest uppercase">KUBERNETES_X</span></div>
              <div className="flex items-center gap-2"><Search className="w-5 h-5 text-red-600" /> <span className="font-mono text-[10px] tracking-widest uppercase">ELASTIC_QUERY</span></div>
              <div className="flex items-center gap-2"><Layers className="w-5 h-5 text-red-600" /> <span className="font-mono text-[10px] tracking-widest uppercase">TERRAFORM_IO</span></div>
              <div className="flex items-center gap-2"><Server className="w-5 h-5 text-red-600" /> <span className="font-mono text-[10px] tracking-widest uppercase">AWS_CLUSTER</span></div>
              <div className="flex items-center gap-2"><Globe className="w-5 h-5 text-red-600" /> <span className="font-mono text-[10px] tracking-widest uppercase">EDGE_NODE</span></div>
           </div>
        </div>
      </section>

      <Services />
      
      <Projects />

      {/* Call to Action Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto border border-white/5 bg-white/[0.02] backdrop-blur-3xl p-12 md:p-20 rounded-sm text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-[100px] -mr-40 -mt-40" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600/10 rounded-full blur-[100px] -ml-40 -mb-40" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-7xl font-display font-bold mb-8 uppercase italic">
              INITIATE_<span className="text-gradient">GENESIS</span>
            </h1>
            <p className="text-slate-500 font-mono text-sm mb-10 max-w-xl mx-auto uppercase tracking-tighter">
              // System Upgrade Required: Align your infrastructure with the TrenovaX_Protocol.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-500 text-black font-black px-12 py-5 rounded-sm text-sm transition-all uppercase tracking-widest shadow-[0_0_40px_rgba(255,0,0,0.2)]"
            >
              REQUEST_ACCESS
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <div className="min-h-screen bg-black flex flex-col opacity-100">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <main className="flex-grow">
                <HomePage />
              </main>
              <Footer />
            </>
          } />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <AIAssistant />
        <div className="fixed inset-0 pointer-events-none bg-noise opacity-[0.03] z-50" />
      </div>
    </Router>
  );
}
