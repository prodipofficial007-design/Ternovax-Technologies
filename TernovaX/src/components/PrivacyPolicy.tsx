import { motion } from 'framer-motion';
import { Shield, ArrowLeft, Mail, MapPin, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Footer } from './Navigation';

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-500 hover:text-red-500 transition-colors font-mono text-xs mb-12 uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" /> RE_RETURN_TO_BASE
          </motion.button>

          <header className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-mono mb-6 tracking-widest uppercase">
              <Lock className="w-3 h-3 animate-pulse" />
              <span>SECURE_DOCUMENT_TX_09</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 uppercase italic">
              PRIVACY_<span className="text-gradient">POLICY</span>
            </h1>
            <p className="text-red-600 font-mono text-sm tracking-[0.2em] uppercase italic">
              Effective Date: 17 April 2026
            </p>
          </header>

          <div className="glass-panel p-8 md:p-12 rounded-sm space-y-12 mb-16 border-white/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <Shield className="w-40 h-40 text-red-600" />
             </div>

            <section>
              <h2 className="text-xl font-display font-bold text-white mb-4 uppercase flex items-center gap-3">
                <span className="text-red-600">01_</span>DATA_HARVESTING
              </h2>
              <p className="text-slate-400 font-mono text-sm leading-relaxed whitespace-pre-line">
                TrenovaX Technologies ("we", "our", "us") respects your privacy. We collect:
                {"\n"}<span className="text-red-500/50">// PERSONAL_IDENTIFIERS:</span> Name, Email, Phone
                {"\n"}<span className="text-red-500/50">// DEVICE_METRICS:</span> Model, OS, IP, App Version
                {"\n"}<span className="text-red-500/50">// USAGE_TELEMETRY:</span> Feature interactions, Session duration
                {"\n"}<span className="text-red-500/50">// SPATIAL_COORDINATES:</span> Approximate location (permission-based)
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-white mb-4 uppercase flex items-center gap-3">
                <span className="text-red-600">02_</span>UTILIZATION_PROTOCOL
              </h2>
              <p className="text-slate-400 font-mono text-sm leading-relaxed">
                Your data is processed to maintain services, optimize performance, dispatch notifications, and ensure structural security. No data is sold to external agencies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-white mb-4 uppercase flex items-center gap-3">
                <span className="text-red-600">03_</span>ENCRYPTION_STANDARDS
              </h2>
              <p className="text-slate-400 font-mono text-sm leading-relaxed">
                We employ high-level encryption for all data packets. However, absolute security in a distributed network is theoretically impossible. Use with caution.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-white mb-4 uppercase flex items-center gap-3">
                <span className="text-red-600">04_</span>NEURAL_PARTNERS
              </h2>
              <p className="text-slate-400 font-mono text-sm leading-relaxed">
                We utilize third-party modules: Google Firebase, Analytics, and AdMob. Their protocols are governed by their own independent encryption standards.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-white mb-4 uppercase flex items-center gap-3">
                <span className="text-red-600">05_</span>RIGHT_OF_ACCESS
              </h2>
              <p className="text-slate-400 font-mono text-sm leading-relaxed">
                Users retain the right to view, modify, or terminate their data fingerprint. Requests must be submitted via verified neural channels (email).
              </p>
            </section>

            <section className="pt-8 border-t border-white/5">
              <h2 className="text-xl font-display font-bold text-white mb-6 uppercase">
                COMM_INTERCEPT
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 text-slate-400 font-mono text-xs">
                  <Mail className="w-5 h-5 text-red-600" />
                  <span>Trenovax.technologies07@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-slate-400 font-mono text-xs">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span>Assam, India</span>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="absolute inset-0 scanlines opacity-5 pointer-events-none" />
      </main>

      <Footer />
    </div>
  );
}
