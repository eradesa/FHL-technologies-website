'use client';

import { motion } from 'framer-motion';
import { Target, Heart, Award, Users } from 'lucide-react';

const stats = [
  { value: '29+', label: 'Years Banking Experience' },
  { value: '25+', label: 'Years Software Development' },
  { value: '9+', label: 'Years Compliance Expertise' },
  { value: '100%', label: 'Client Satisfaction' },
];

const values = [
  {
    icon: Target,
    title: 'Purpose-Driven',
    description: 'Every solution we build serves a clear mission: protecting financial systems from risk through intelligent design.',
  },
  {
    icon: Heart,
    title: 'Client-Centric',
    description: 'We listen, understand, and deliver solutions that truly address your compliance challenges.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Rigorous attention to detail and unwavering commitment to regulatory standards.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'Long-term relationships built on trust, transparency, and shared success.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-navy-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm">About Us</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Building Trust Through <span className="gradient-text">Compliance Excellence</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            F H & L Technologies (Pvt) Ltd is a premier fintech company specializing in enterprise AML/CFT/CPF compliance solutions. 
            With decades of combined expertise in banking, software development, and regulatory compliance, we deliver 
            intelligent systems that protect financial institutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-navy-800/50 border border-navy-700 hover:border-gold-500/30 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-navy-800/30 border border-navy-700 hover:border-teal-500/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
                <value.icon className="text-gold-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-navy-800 to-navy-700 border border-navy-600 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              To empower financial institutions with cutting-edge compliance technology and expert consultancy services 
              that not only meet regulatory requirements but proactively prevent financial crimes. We believe in 
              <span className="text-gold-500 font-semibold"> building to serve</span> — creating systems that 
              protect communities and strengthen the integrity of Sri Lanka's financial ecosystem.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
