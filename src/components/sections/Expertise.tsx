'use client';

import { motion } from 'framer-motion';
import { FileCheck, AlertTriangle, Users, TrendingUp, CheckCircle2, Globe } from 'lucide-react';

const expertiseAreas = [
  {
    icon: FileCheck,
    title: 'goAML Implementation',
    description: 'Complete goAML system implementation including configuration, testing, and staff training.',
    metrics: ['100% FIU Compliance', 'Seamless Integration', 'Full UAT Support'],
  },
  {
    icon: AlertTriangle,
    title: 'Sanctions Screening',
    description: 'Real-time screening against global sanctions lists including UN, EU, OFAC, and more.',
    metrics: ['Multi-list Coverage', 'Instant Matching', 'False Positive Management'],
  },
  {
    icon: Users,
    title: 'KYC & CDD',
    description: 'Comprehensive customer due diligence and know your customer solutions.',
    metrics: ['Risk Categorization', 'Enhanced Due Diligence', 'Ongoing Monitoring'],
  },
  {
    icon: TrendingUp,
    title: 'Transaction Monitoring',
    description: 'AI-powered transaction monitoring with customizable rules and anomaly detection.',
    metrics: ['Real-time Alerts', 'Pattern Recognition', 'Case Management'],
  },
];

const complianceBadges = [
  { label: 'FIU Compliant', description: 'Sri Lanka Financial Intelligence Unit' },
  { label: 'FATF Standards', description: 'Financial Action Task Force' },
  { label: 'APG Member', description: 'Asia/Pacific Group on Money Laundering' },
  { label: 'AML/CFT/CPF', description: 'Full Regulatory Framework' },
];

const technologies = ['goAML', 'AI/ML', 'Big Data', 'Cloud Native', 'Real-time Processing', 'Blockchain Ready', 'API-First', 'Mobile-Enabled'];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm">Our Expertise</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            AML/CFT/CPF <span className="gradient-text">Compliance Specialists</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            With decades of combined experience in banking, software development, and regulatory compliance, 
            our team delivers solutions that exceed international standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-navy-800/50 border border-navy-700 hover:border-gold-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                  <area.icon className="text-gold-500" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{area.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{area.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.metrics.map((metric, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-medium">
                        <CheckCircle2 size={12} />
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Regulatory Compliance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {complianceBadges.map((badge, index) => (
              <div key={index} className="flex flex-col items-center p-6 rounded-xl bg-navy-800/30 border border-navy-700 text-center hover:border-gold-500/30 transition-colors">
                <Globe className="text-gold-500 mb-3" size={32} />
                <span className="text-white font-semibold mb-1">{badge.label}</span>
                <span className="text-slate-500 text-xs">{badge.description}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span key={index} className="px-5 py-2.5 rounded-full bg-navy-800 border border-navy-600 text-slate-300 text-sm font-medium hover:border-gold-500/30 hover:text-gold-500 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
