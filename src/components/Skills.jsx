import { motion } from 'framer-motion';
import { Monitor, Globe, Database, BarChart, Cpu, Languages, ChevronRight } from 'lucide-react';

const SkillBadge = ({ name }) => (
  <div className="flex items-center gap-2 px-4 py-2.5 bg-primary/5 border border-primary/10 rounded-xl hover:border-primary/40 transition-all group">
    <ChevronRight size={14} className="text-primary group-hover:translate-x-1 transition-transform" />
    <span className="text-text-body text-sm font-medium">{name}</span>
  </div>
);

const SkillCategory = ({ title, icon: Icon, skills, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    // UPDATE: Changed to bg-surface so the cards stand out against the deep background
    className="bg-surface p-8 rounded-3xl border border-primary/5 hover:border-primary/20 transition-all group h-full shadow-2xl"
  >
    <div className="flex items-center gap-4 mb-8">
      <div className="p-3 bg-primary/10 rounded-2xl text-primary">
        <Icon size={28} />
      </div>
      <h3 className="text-lg font-bold text-text-main uppercase tracking-widest">{title}</h3>
    </div>
    <div className="grid grid-cols-2 gap-3">
      {skills.map((skill) => <SkillBadge key={skill} name={skill} />)}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    // UPDATE: Changed to bg-bg-deep to create a clear separation from the Education section
    <section id="skills" className="py-24 bg-bg-deep relative overflow-hidden transition-colors duration-500 border-t border-primary/5">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-6 max-w-[1400px]"
      >
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-text-main mb-6 tracking-tight">
            Technical <span className="text-primary">Expertise</span>
          </h2>
          <div className="h-2 w-32 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <SkillCategory title="Software & Desktop" icon={Monitor} skills={["Java", "C++", "C", "Visual Basic", ".NET", "COBOL"]} delay={0.1} />
          <SkillCategory title="Web Technologies" icon={Globe} skills={["React.js", "Node.js", "Vue.js", "JavaScript", "Tailwind", "Vite"]} delay={0.2} />
          <SkillCategory title="Data Science & BI" icon={BarChart} skills={["Python", "R", "Power BI", "ETL Pipelines", "ML"]} delay={0.3} />
          <SkillCategory title="Databases & OS" icon={Database} skills={["SQL Server", "MySQL", "T-SQL", "Linux (Arch)", "Windows Server"]} delay={0.4} />
          <SkillCategory title="Enterprise Solutions" icon={Cpu} skills={["ERP Systems", "E-commerce", "Technical Writing"]} delay={0.5} />
          <SkillCategory title="Languages" icon={Languages} skills={["English (B2)", "Spanish (Native)"]} delay={0.6} />
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;