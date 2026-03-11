import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle } from 'lucide-react';

const EducationItem = ({ title, school, period, details, location }) => (
  <div className="relative pl-12 md:pl-16 pb-20 last:pb-0">
    
    <motion.div 
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ margin: "2000px 0px -50% 0px" }}
      className="absolute left-[2px] md:left-[10px] top-8 w-5 h-5 rounded-full bg-bg-deep border-4 border-primary z-20 shadow-[0_0_10px_var(--color-primary)]"
    />

    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-bg-deep border border-primary/10 p-8 md:p-10 rounded-[2rem] shadow-2xl hover:border-primary/30 transition-all group relative z-10"
    >
      <div className="flex flex-col mb-6 gap-2">
        <h3 className="text-2xl font-black text-text-main tracking-tight group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-primary font-medium flex items-center gap-2">
          <GraduationCap size={18} /> {school}
        </p>
        <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-text-body/50 mt-2">
          <span className="flex items-center gap-1.5"><Calendar size={14} /> {period}</span>
          <span className="flex items-center gap-1.5"><MapPin size={14} /> {location}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mt-6 border-t border-primary/5 pt-6">
        {details.map((detail, i) => (
          <div key={i} className="flex items-start gap-3 text-sm text-text-body leading-relaxed">
            <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
            {detail}
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

const Education = () => {
  const timelineRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"] 
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="education" className="py-32 bg-surface transition-colors duration-500 relative overflow-hidden border-b border-primary/5">
      
      {/* Contenedor expandido a 1400px para igualar a Skills */}
      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        
        {/* Ajuste de gap a lg:gap-16 para que al estirarse no se separen demasiado */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 lg:sticky lg:top-32 pr-0 lg:pr-8">
            <h2 className="text-5xl md:text-6xl font-black text-text-main mb-6 tracking-tighter">
              Academic <br/><span className="text-primary">Journey</span>
            </h2>
            <div className="h-2 w-24 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--color-primary),0.5)] mb-8" />
            
            <p className="text-text-body text-lg leading-relaxed mb-6">
              My path in technology started with a strong technical foundation in structured programming. 
              Since then, I have evolved into a Systems Engineering student focused on software architecture 
              and enterprise solutions.
            </p>
            <p className="text-text-body text-lg leading-relaxed">
              I am passionate about bridging robust backend logic with efficient data management 
              to solve real-world business problems.
            </p>
          </div>

          <div className="lg:col-span-7 relative" ref={timelineRef}>
            
            <div className="absolute left-[11px] md:left-[19px] top-8 bottom-0 w-[2px] bg-primary/10 rounded-full" />
            
            <motion.div 
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute left-[11px] md:left-[19px] top-8 bottom-0 w-[2px] bg-primary rounded-full z-10 shadow-[0_0_15px_var(--color-primary)]"
            />

            <EducationItem 
              title="Computer Systems Engineering"
              school="TecNM Campus León"
              period="2020 - Present"
              location="León, GTO"
              details={[
                "Enterprise App Development",
                "Database Systems & Management",
                "Data Science & Analytics",
                "Networks & Telecommunications",
                "Artificial Intelligence",
                "Software Engineering"
              ]}
            />

            <EducationItem 
              title="Technician in Programming"
              school="CBTis 225"
              period="2017 - 2020"
              location="León, GTO"
              details={[
                "Structured Programming",
                "Object-Oriented Programming",
                "Web & Mobile Development",
                "Network Administration",
                "E-commerce Solutions"
              ]}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;