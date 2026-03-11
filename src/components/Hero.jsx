import { motion } from 'framer-motion';
import { Monitor, Globe, Database, Cpu, BarChart3 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-bg-deep overflow-hidden text-text-main transition-colors duration-500">
      
      {/* BACKGROUND LAYER: Subtle Tech Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--color-primary),transparent_70%)] opacity-10" />

      {/* DECORATIVE ICONS: Visual representation of your core engineering skills */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[15%] left-[10%] text-primary -rotate-12"><Monitor size={120} /></div>
        <div className="absolute bottom-[20%] left-[5%] text-primary rotate-12"><Cpu size={180} /></div>
        <div className="absolute top-[10%] right-[8%] text-primary rotate-12"><Globe size={130} /></div>
        <div className="absolute top-[40%] right-[12%] text-primary -rotate-6"><Database size={160} /></div>
        <div className="absolute bottom-[15%] right-[10%] text-primary rotate-3"><BarChart3 size={110} /></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
              Isaac <span className="text-primary">Narváez</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-light text-text-body mb-8 border-l-4 border-primary pl-6 uppercase tracking-wider">
              Systems Engineering Student | <span className="text-text-main font-bold">Software Developer</span>
            </h2>

            {/* Professional description aligned with your Systems Engineering background */}
            <p className="text-lg md:text-xl text-text-body max-w-3xl mb-12 leading-relaxed">
              Dedicated to building high-performance software solutions that bridge the gap between 
              <span className="text-primary"> robust desktop architectures</span> and modern web environments. 
              Experienced in <span className="text-primary">ERP system migration</span> and data-driven optimization, 
              utilizing an analytical mindset to transform business needs into scalable technology.
            </p>

            <div className="flex flex-wrap gap-5">
              <a href="#projects" className="px-10 py-4 bg-primary text-bg-deep hover:opacity-90 rounded-xl font-bold transition-all shadow-xl shadow-primary/20">
                View Projects
              </a>
              <a href="/CV_Isaac_Narvaez.pdf" className="px-10 py-4 border border-primary/30 hover:bg-primary/5 rounded-xl font-bold transition-all text-text-main">
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator with dynamic primary color */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary opacity-30"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;