import { Github, Linkedin, Mail, ArrowUpCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // Usamos bg-bg-footer para que siempre sea la parte más oscura
    <footer className="bg-bg-footer border-t border-primary/5 py-16 text-text-body transition-colors duration-500">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Professional Identity */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black text-text-main tracking-tight mb-3">
              Isaac <span className="text-primary">Narvaez</span>
            </h3>
            <p className="text-sm text-text-body/80 max-w-[320px] leading-relaxed">
              Systems Engineer dedicated to developing high-performance software and data-driven solutions.
            </p>
          </div>

          {/* Social Presence */}
          <div className="flex items-center gap-8">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-body hover:text-primary transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/julio-isaac-gonzález-narváez-927b443b4" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-body hover:text-primary transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:isaac.gnarvaez@gmail.com" 
              className="text-text-body hover:text-primary transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Functional Navigation */}
          <button 
            onClick={scrollToTop}
            className="flex flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-text-body hover:text-primary transition-all group"
          >
            <ArrowUpCircle size={28} className="group-hover:-translate-y-2 transition-transform duration-300" />
            Back to Top
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="mt-16 pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-text-body/40">
          <p>© {currentYear} — Handcrafted with React & Tailwind</p>
          <div className="flex gap-6">
            <p>León, GTO, Mexico</p>
            <p>Julio Isaac González Narváez</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;