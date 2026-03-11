import { useState } from 'react';
import { Mail, Linkedin, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, submitted: false, error: null });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      // Remember to replace this with your actual Formspree ID
      const response = await fetch('https://formspree.io/f/xdawaaaz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Could not send the message. Please try again.');
      }
    } catch (err) {
      setStatus({ submitting: false, submitted: false, error: err.message });
    }
  };

  return (
    <section id="contact" className="py-24 bg-bg-deep transition-colors duration-500 border-t border-primary/5">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-6xl font-black text-text-main mb-6 tracking-tight">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-lg text-text-body mb-10 leading-relaxed">
              I am currently seeking internship opportunities to apply my software development and analytical skills.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-primary/10 rounded-xl text-primary"><Mail size={24} /></div>
                <a href="mailto:isaac.gnarvaez@gmail.com" className="text-text-main hover:text-primary transition-colors font-medium">isaac.gnarvaez@gmail.com</a>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-primary/10 rounded-xl text-primary"><Linkedin size={24} /></div>
                <a href="https://www.linkedin.com/in/julio-isaac-gonzález-narváez-927b443b4" target="_blank" rel="noreferrer" className="text-text-main hover:text-primary transition-colors font-medium flex items-center gap-1">LinkedIn <ExternalLink size={14} /></a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="bg-surface border border-primary/10 p-8 rounded-3xl shadow-2xl"
          >
            {status.submitted ? (
              <div className="text-center py-12 animate-in fade-in zoom-in">
                <CheckCircle size={64} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-text-main mb-2">Message Sent!</h3>
                <p className="text-text-body">I will get back to you shortly.</p>
                <button onClick={() => setStatus({ ...status, submitted: false })} className="mt-6 text-primary font-bold hover:underline">Send another one</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-body uppercase tracking-widest">Name</label>
                    <input required name="name" value={formData.name} onChange={handleChange}
                      className="w-full bg-bg-deep border border-primary/20 rounded-xl px-4 py-3 text-text-main focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-body uppercase tracking-widest">Email</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange}
                      className="w-full bg-bg-deep border border-primary/20 rounded-xl px-4 py-3 text-text-main focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-body uppercase tracking-widest">Message</label>
                  <textarea required name="message" value={formData.message} onChange={handleChange} rows="4"
                    className="w-full bg-bg-deep border border-primary/20 rounded-xl px-4 py-3 text-text-main focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" />
                </div>

                {status.error && (
                  <div className="flex items-center gap-2 text-red-500 text-sm font-medium">
                    <AlertCircle size={16} /> {status.error}
                  </div>
                )}

                <button type="submit" disabled={status.submitting}
                  className="w-full py-4 bg-primary text-bg-deep rounded-xl font-bold transition-all shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                >
                  {status.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;