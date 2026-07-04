'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

const serviceOptions = [
  'AML/CFT/CPF Consultancy',
  'goAML Audit & Validation',
  'goAML Reporting',
  'Regulatory Consultancy',
  'System Design & Implementation',
  'Banking & Financial Systems',
  'Software Development with AI',
  'Other',
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log('Lead submitted:', result);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-navy-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Start Your <span className="gradient-text">Compliance Journey</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Ready to strengthen your compliance framework? Get in touch with our experts 
            for a personalized consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-navy-900/50 border border-navy-700"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-teal-500" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                <p className="text-slate-400 mb-6">
                  Thank you for reaching out. Our team will contact you within 24 hours.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="text-gold-500 hover:text-gold-400 font-medium">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Full Name *</label>
                  <input {...register('name')} className={`w-full px-4 py-3 rounded-xl bg-navy-800 border ${errors.name ? 'border-red-500' : 'border-navy-600'} text-white placeholder-slate-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors`} placeholder="Your full name" />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Email Address *</label>
                  <input {...register('email')} type="email" className={`w-full px-4 py-3 rounded-xl bg-navy-800 border ${errors.email ? 'border-red-500' : 'border-navy-600'} text-white placeholder-slate-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors`} placeholder="your.email@company.com" />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Company</label>
                    <input {...register('company')} className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-navy-600 text-white placeholder-slate-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors" placeholder="Your company name" />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Phone</label>
                    <input {...register('phone')} className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-navy-600 text-white placeholder-slate-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors" placeholder="+94 XX XXX XXXX" />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Service Interest *</label>
                  <select {...register('service')} className={`w-full px-4 py-3 rounded-xl bg-navy-800 border ${errors.service ? 'border-red-500' : 'border-navy-600'} text-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors`}>
                    <option value="">Select a service</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Message *</label>
                  <textarea {...register('message')} rows={4} className={`w-full px-4 py-3 rounded-xl bg-navy-800 border ${errors.message ? 'border-red-500' : 'border-navy-600'} text-white placeholder-slate-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors resize-none`} placeholder="Tell us about your compliance needs..." />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-semibold rounded-xl hover:shadow-xl hover:shadow-gold-500/20 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? (<><Loader2 className="animate-spin" size={20} />Sending...</>) : (<><Send size={20} />Send Message</>)}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              { icon: Mail, title: 'Email Us', content: 'info@fhltech.lk', subtext: 'We respond within 24 hours' },
              { icon: Phone, title: 'Call Us', content: '+94 11 234 5678', subtext: 'Mon-Fri 9AM-6PM IST' },
              { icon: MapPin, title: 'Visit Us', content: 'Colombo, Sri Lanka', subtext: 'Serving clients worldwide' },
              { icon: Clock, title: 'Business Hours', content: 'Mon-Fri: 9AM-6PM', subtext: 'Weekend: By appointment' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-5 p-5 rounded-xl bg-navy-900/50 border border-navy-700 hover:border-gold-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-gold-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{item.title}</h4>
                  <p className="text-gold-500">{item.content}</p>
                  <p className="text-slate-500 text-sm">{item.subtext}</p>
                </div>
              </div>
            ))}

            <div className="p-6 rounded-2xl bg-gradient-to-r from-teal-500/10 to-gold-500/10 border border-gold-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">AI Assistant Available</h4>
                  <p className="text-slate-400 text-sm">Chat with our intelligent assistant</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm">
                Get instant answers to your compliance questions. Our agentic AI chatbot is available 24/7 to help guide you.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
