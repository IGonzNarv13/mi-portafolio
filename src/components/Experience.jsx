import { motion } from 'framer-motion';
import { Briefcase, Globe, Laptop, Calendar, CheckCircle } from 'lucide-react';

const ExperienceCard = ({ title, company, period, icon: Icon, details, tags, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    // CONTRASTE: La tarjeta usa bg-bg-deep sobre el fondo bg-surface de la sección
    className="bg-bg-deep border border-primary/10 p-8 rounded-3xl shadow-xl hover:border-primary/30 transition-all flex flex-col h-full group"
  >
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 bg-surface rounded-2xl text-primary border border-primary/5 group-hover:scale-110 transition-transform">
        <Icon size={24} />
      </div>
      <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-text-body/60 bg-surface px-3 py-1.5 rounded-full border border-primary/5">
        <Calendar size={12} /> {period}
      </div>
    </div>

    <div className="mb-6">
      <h3 className="text-xl font-bold text-text-main mb-1 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-primary font-medium text-sm">{company}</p>
    </div>

    <div className="space-y-4 mb-8 flex-grow">
      {details.map((detail, i) => (
        <div key={i} className="flex items-start gap-3 text-sm text-text-body leading-relaxed">
          <CheckCircle size={16} className="text-primary/60 shrink-0 mt-0.5" />
          <p>{detail}</p>
        </div>
      ))}
    </div>

    <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-primary/5">
      {tags.map((tag, i) => (
        <span key={i} className="px-3 py-1 bg-surface border border-primary/10 rounded-md text-[10px] font-bold text-text-body uppercase tracking-wider">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    // CONTRASTE: Fondo principal en bg-surface
    <section id="experience" className="py-24 bg-surface transition-colors duration-500 relative overflow-hidden border-t border-primary/5">
      <div className="container mx-auto px-6 max-w-[1400px]">
        
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-text-main mb-6 tracking-tight">
            Professional <span className="text-primary">Journey</span>
          </h2>
          <div className="h-2 w-32 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ExperienceCard 
            title="Software & BI Intern"
            company="Corporativo Transporta"
            period="Jan 2025 - July 2025"
            icon={Briefcase}
            delay={0.1}
            details={[
              "Led the migration of ERP modules from legacy Visual Basic to modern web architecture.",
              "Architected ETL pipelines using Python and RStudio for strategic insights.",
              "Implemented Machine Learning models for route optimization."
            ]}
            tags={["PYTHON", "R", "SQL SERVER", "ETL"]}
          />
          <ExperienceCard 
            title="E-commerce Integration"
            company="Arro Shoecrafters"
            period="Applied Project"
            icon={Globe}
            delay={0.2}
            details={[
              "Developed a full-scale e-commerce platform integrated with business logic.",
              "Engineered a real-time omni-channel inventory system."
            ]}
            tags={["SHOPIFY", "API", "INVENTORY"]}
          />
          <ExperienceCard 
            title="Inventory & Audit System"
            company="Hugo Boots"
            period="Applied Project"
            icon={Laptop}
            delay={0.3}
            details={[
              "Architected a C++ desktop application with SQL connectivity.",
              "Developed barcode-driven auditing modules for stock automation."
            ]}
            tags={["C++", "SQL", "AUTOMATION"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;