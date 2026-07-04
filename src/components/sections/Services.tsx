'use client';

import { motion } from 'framer-motion';
import { Bot, BarChart3, Search, ClipboardList, Shield, Settings, Building2, Globe, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'Software Development with AI',
    description: 'Agentic AI automated module-based systems with seamless AI integration for enterprise applications.',
    features: ['Agentic AI Systems', 'Module-based Architecture', 'AI Integration', 'Enterprise AI Apps'],
    color: 'gold',
  },
  {
    icon: BarChart3,
    title: 'goAML Reporting',
    description: 'Comprehensive goAML implementation including UAT, threshold reporting, and transaction reporting.',
    features: ['goAML UAT', 'Threshold Reporting', 'Transaction Reporting', 'Reject Rectification'],
    color: 'teal',
  },
  {
    icon: Search,
    title: 'goAML Audit & Validation',
    description: 'Independent audit and validation of goAML threshold reporting with source system reconciliation.',
    features: ['Threshold Audit', 'Source Reconciliation', 'Transaction Validation', 'Compliance Assessment'],
    color: 'gold',
  },
  {
    icon: ClipboardList,
    title: 'Regulatory Consultancy',
    description: 'Expert guidance on regulatory reporting standards, transaction mapping, and compliance requirements.',
    features: ['Regulatory Standards', 'Transaction Mapping', 'Compliance Requirements', 'Regulatory Directions'],
    color: 'teal',
  },
  {
    icon: Shield,
    title: 'AML/CFT/CPF Consultancy',
    description: 'Comprehensive anti-money laundering, counter-terrorist financing, and counter-proliferation financing solutions.',
    features: ['AML Standards', 'CFT Measures', 'CPF Compliance', 'Risk Assessment'],
    color: 'gold',
  },
  {
    icon: Settings,
    title: 'System Design & Implementation',
    description: 'End-to-end consultancy for system design, development, and implementation of enterprise solutions.',
    features: ['System Design', 'Development', 'Implementation', 'Business Automation'],
    color: 'teal',
  },
  {
    icon: Building2,
    title: 'Banking & Financial Systems',
    description: 'Specialized banking applications including cheque clearing, pension processing, and core banking.',
    features: ['Cheque Clearing', 'Pension Processing', 'Core Banking', 'Payment Systems'],
    color: 'gold',
  },
  {
    icon: Globe,
    title: 'Website & Application Development',
    description: 'Modern web and mobile application development with cutting-edge technologies and best practices.',
    features: ['Web Development', 'Mobile Apps', 'API Integration', 'Cloud Solutions'],
    color: 'teal',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-navy-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm">Our Services</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Comprehensive <span className="gradient-text">Compliance Solutions</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            From agentic AI systems to regulatory consultancy, we provide end-to-end solutions 
            for financial institutions seeking compliance excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group p-6 rounded-2xl bg-navy-900/50 border border-navy-700 hover:border-gold-500/30 transition-all duration-300 flex flex-col"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                service.color === 'gold' ? 'bg-gold-500/10 group-hover:bg-gold-500/20' : 'bg-teal-500/10 group-hover:bg-teal-500/20'
              } transition-colors`}>
                <service.icon className={service.color === 'gold' ? 'text-gold-500' : 'text-teal-500'} size={28} />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm mb-5 flex-grow">{service.description}</p>

              <ul className="space-y-2 mb-5">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className={`w-1.5 h-1.5 rounded-full ${service.color === 'gold' ? 'bg-gold-500' : 'bg-teal-500'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#contact" className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                service.color === 'gold' ? 'text-gold-500 hover:text-gold-400' : 'text-teal-500 hover:text-teal-400'
              }`}>
                Learn More <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-gold-500/10 to-teal-500/10 border border-gold-500/20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Our team of experts can design and implement tailored compliance solutions 
            that meet your specific regulatory requirements.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-gold-500/20 transition-all duration-300">
            Schedule a Consultation <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
