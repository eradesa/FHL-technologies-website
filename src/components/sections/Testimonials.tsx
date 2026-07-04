'use client';

import { motion } from 'framer-motion';
import { Quote, Star, Building2, User, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    quote: "F H & L Technologies transformed our compliance operations. Their goAML implementation was seamless and their team provided exceptional support throughout the process.",
    author: "Chandima Perera",
    role: "Chief Compliance Officer",
    company: "Sejaya Micro Credit Limited",
    rating: 5,
    logo: Building2,
  },
  {
    quote: "The expertise in AML/CFT regulations combined with technical excellence makes F H & L Technologies the ideal partner for any financial institution.",
    author: "Dr. Nimali Fernando",
    role: "Managing Director",
    company: "Colombo Financial Services",
    rating: 5,
    logo: Building2,
  },
  {
    quote: "Their agentic AI chatbot has revolutionized how we engage with clients. It's like having a compliance expert available 24/7.",
    author: "Roshan De Silva",
    role: "Head of Operations",
    company: "Island Payments Bank",
    rating: 5,
    logo: Building2,
  },
];

const caseStudies = [
  {
    title: "Sejaya Micro Credit Limited",
    description: "Full goAML implementation including system configuration, staff training, and ongoing support. Achieved 100% FIU compliance within 3 months.",
    metrics: [
      { label: "Compliance Rate", value: "100%" },
      { label: "Implementation Time", value: "3 Months" },
      { label: "Staff Trained", value: "150+" },
    ],
    icon: CheckCircle,
  },
  {
    title: "Regional Banking Group",
    description: "Multi-branch goAML audit and validation covering 12 branches. Identified critical compliance gaps and provided remediation roadmap.",
    metrics: [
      { label: "Branches Audited", value: "12" },
      { label: "Issues Resolved", value: "47" },
      { label: "Risk Reduction", value: "85%" },
    ],
    icon: Building2,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Trusted by leading financial institutions across Sri Lanka for compliance excellence and innovative solutions.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-navy-800/50 border border-navy-700 hover:border-gold-500/30 transition-all duration-300 flex flex-col"
            >
              {/* Quote Icon */}
              <Quote className="text-gold-500/30 w-10 h-10 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-gold-500 fill-gold-500" size={16} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-navy-700">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center">
                  <User className="text-gold-500" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  <p className="text-gold-500 text-xs">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-700 border border-navy-600"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center">
                    <study.icon className="text-gold-500" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white">{study.title}</h4>
                </div>
                <p className="text-slate-300 text-sm mb-6">{study.description}</p>
                <div className="grid grid-cols-3 gap-4">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold gradient-text">{metric.value}</div>
                      <div className="text-slate-500 text-xs">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
