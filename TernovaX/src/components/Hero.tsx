import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Zap, Terminal, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-20 px-6">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-10 w-96 h-96 bg-red-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-red-800/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.05]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-mono mb-6 tracking-[0.3em] uppercase">
            <Zap className="w-3 h-3 fill-current opacity-80" />
            <span>GENESIS_PROTOCOL_CONNECTED</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-display font-bold leading-[0.85] mb-6 uppercase italic">
            <span className="glitch-text" data-text="CRAFT_THE">CRAFT_THE</span> <br />
            <span className="text-gradient drop-shadow-[0_0_20px_rgba(255,0,0,0.4)]">NEW_ERA</span>
          </h1>
          
          <p className="text-[10px] md:text-xs text-slate-500 mb-10 max-w-sm leading-relaxed font-mono uppercase tracking-[0.2em]">
            // protocol_v4.1.0: architecting neural infrastructures and high-velocity digital ecosystems for the future-forward enterprise.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-red-600 hover:bg-red-500 text-black font-black px-10 py-4 rounded-sm flex items-center gap-3 transition-all shadow-[0_0_30px_rgba(220,38,38,0.3)] uppercase tracking-wider text-sm"
            >
              DEPLOY_NOW <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-transparent border border-white/10 hover:border-red-500/50 text-white px-10 py-4 rounded-sm flex items-center gap-3 transition-all uppercase tracking-wider text-sm font-mono"
            >
              SYSTEM_REPORTS
            </motion.button>
          </div>
          
          <div className="mt-12 flex items-center gap-6 text-slate-500 text-sm italic">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/${i + 123}/100/100`} 
                  className="w-8 h-8 rounded-full border-2 border-slate-950 object-cover" 
                  alt="client"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <span>Trusted by 200+ global enterprises</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 p-2 bg-black border border-white/5 rounded-sm shadow-2xl overflow-hidden group">
             <div className="absolute inset-0 bg-red-600/5 pointer-events-none" />
             <img 
                src="https://picsum.photos/seed/cyber/800/600" 
                className="rounded-sm grayscale grayscale-100 group-hover:grayscale-0 transition-all duration-1000 w-full aspect-[4/3] object-cover opacity-80"
                alt="Tech innovation" 
                referrerPolicy="no-referrer"
             />
             
             {/* Decorative UI elements overlay */}
             <div className="absolute top-6 right-6 bg-red-600/20 backdrop-blur-3xl p-3 border border-red-500/30 rounded-full shadow-[0_0_15px_rgba(255,0,0,0.2)]">
                <Terminal className="w-5 h-5 text-red-500" />
             </div>
             <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-xl p-3 border border-white/10 rounded-sm shadow-xl flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-600 shadow-[0_0_8px_red]" />
                <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest">SYSTEM_LIVE: 98.7%</span>
             </div>
          </div>
          
          {/* Framer motion floating elements */}
          <motion.div 
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -right-12 glass-panel p-5 rounded-sm -z-10 shadow-xl border-red-500/20"
          >
            <Shield className="w-10 h-10 text-red-600 opacity-50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
