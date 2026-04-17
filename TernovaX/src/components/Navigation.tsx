import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, Github, Linkedin, Twitter } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete then scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-red-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(220,38,38,0.5)]">
              <Cpu className="w-6 h-6 text-black" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-red-500 transition-colors italic">
              TRENOVA<span className="text-red-600">X</span>
            </span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Services', id: 'services' },
            { name: 'Projects', id: 'projects' },
            { name: 'Solutions', id: 'services' },
            { name: 'Careers', id: 'hero' }
          ].map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNav(link.id)}
              className="text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          <button className="bg-red-600/10 hover:bg-red-600 border border-red-600/30 text-red-500 hover:text-black hover:font-bold px-5 py-2 rounded-md text-xs font-mono tracking-widest transition-all">
            CONNECT_
          </button>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-3xl border-b border-white/5 p-6 flex flex-col gap-6 overflow-hidden"
          >
            {[
              { name: 'Services', id: 'services' },
              { name: 'Projects', id: 'projects' },
              { name: 'Solutions', id: 'services' },
              { name: 'Careers', id: 'hero' }
            ].map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleNav(link.id)}
                className="text-left text-sm font-mono uppercase tracking-widest text-slate-400 hover:text-red-500 transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button className="bg-red-600 text-black font-bold px-5 py-4 rounded-sm text-sm uppercase tracking-widest">
              CONTACT_US
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => handleNav('hero')}>
            <Cpu className="w-6 h-6 text-red-600" />
            <span className="font-display font-bold text-xl text-white italic">TRENOVA<span className="text-red-600">X</span></span>
          </div>
          <p className="text-slate-500 max-w-sm mb-6 text-sm leading-relaxed font-mono italic">
            // Engineering the future of autonomous systems and hyper-scaled digital experiences. 
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 border border-white/10 rounded-lg hover:text-red-500 hover:border-red-500/50 transition-all"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="p-2 bg-white/5 border border-white/10 rounded-lg hover:text-red-500 hover:border-red-500/50 transition-all"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="p-2 bg-white/5 border border-white/10 rounded-lg hover:text-red-500 hover:border-red-500/50 transition-all"><Github className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
           <h4 className="font-display font-bold text-slate-100 mb-6 uppercase tracking-wider text-sm">Company</h4>
           <ul className="space-y-4 text-slate-400 text-sm font-mono">
             <li><button onClick={() => handleNav('hero')} className="hover:text-red-500 transition-colors uppercase">About Us</button></li>
             <li><button onClick={() => handleNav('services')} className="hover:text-red-500 transition-colors uppercase">Services</button></li>
             <li><button onClick={() => handleNav('projects')} className="hover:text-red-500 transition-colors uppercase">Projects</button></li>
             <li><button className="hover:text-red-500 transition-colors uppercase">Contact</button></li>
           </ul>
        </div>

        <div>
           <h4 className="font-display font-bold text-slate-100 mb-6 uppercase tracking-wider text-sm">Legal</h4>
           <ul className="space-y-4 text-slate-400 text-sm font-mono">
             <li><Link to="/privacy" className="hover:text-red-500 transition-colors uppercase">Privacy Policy</Link></li>
             <li><button className="hover:text-red-500 transition-colors uppercase">Terms of Service</button></li>
             <li><button className="hover:text-red-500 transition-colors uppercase">Cookie Policy</button></li>
           </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-[10px] font-mono tracking-tighter uppercase">
        <p>© 2026 TRENOVAX. TECH LABS // 00110001</p>
        <p>RE-DEFINING THE DIGITAL GENESIS</p>
      </div>
    </footer>
  );
}
