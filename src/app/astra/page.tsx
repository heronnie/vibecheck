"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowLeft,
  Shield,
  Code,
  TrendingUp,
  Palette,
  Rocket,
  Heart,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const services = [
  {
    id: 1,
    title: 'Internet & Security Installation',
    description: 'Comprehensive network infrastructure and cybersecurity solutions for your business.',
    icon: <Shield className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Modern, scalable web applications built with cutting-edge technologies.',
    icon: <Code className="w-8 h-8" />,
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 3,
    title: 'Company Online Marketing',
    description: 'Strategic digital marketing and viral campaigns to grow your brand.',
    icon: <TrendingUp className="w-8 h-8" />,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 4,
    title: 'Design Services',
    description: 'Beautiful, user-centric design that converts and engages your audience.',
    icon: <Palette className="w-8 h-8" />,
    color: 'from-pink-500 to-rose-500'
  }
];

const caseStudy = {
  name: 'Define the Vibe',
  description: 'A viral Valentine\'s Day relationship audit app that generated thousands of shares and showcased our expertise in building engaging, shareable web experiences.',
  features: [
    'Interactive quiz with real-time progress tracking',
    'WhatsApp integration for seamless sharing',
    'Responsive design for mobile and desktop',
    'Modern glassmorphism UI with smooth animations',
    'ROI-driven viral marketing mechanics'
  ]
};

export default function AstraPage() {
  return (
    <main className="min-h-screen bg-[#0f0f13] text-white selection:bg-indigo-500/30 overflow-x-hidden">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 md:py-20">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-widest">Back</span>
          </Link>
        </div>

        {/* Hero Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="space-y-8 mb-16"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center p-4 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl mb-4">
              <Rocket className="w-12 h-12 text-indigo-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter bg-linear-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
              Astra IT
            </h1>
            <p className="text-xl text-zinc-400 max-w-lg leading-relaxed">
              We craft innovative digital solutions that drive results. From web development to viral marketing campaigns, we specialize in building experiences that matter.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 hover:bg-white/8 transition-all"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 bg-linear-to-br ${service.color} blur-3xl group-hover:opacity-20 transition-opacity`} />
              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10">
                  <div className={`text-transparent bg-clip-text bg-linear-to-r ${service.color}`}>
                    {service.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-zinc-400 leading-snug">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Case Study Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-linear-to-br from-rose-500/10 to-pink-500/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 mb-16 space-y-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-rose-500" />
              <h2 className="text-3xl font-black">Featured Case Study</h2>
            </div>
            <h3 className="text-2xl font-bold text-rose-400 mb-3">{caseStudy.name}</h3>
            <p className="text-zinc-300 text-lg mb-6">{caseStudy.description}</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Key Highlights</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {caseStudy.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/30 rounded-xl font-bold uppercase tracking-widest text-sm transition-all"
          >
            Try Define the Vibe
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center space-y-8 py-12"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-black">Ready to Transform Your Ideas?</h2>
            <p className="text-zinc-400 text-lg max-w-lg mx-auto">
              Let's create something amazing together. Visit Astra IT to explore how we can help your business grow.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://astra.it.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-linear-to-r from-indigo-500 to-purple-600 font-bold text-lg rounded-2xl shadow-lg shadow-indigo-500/20 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              Visit Astra IT
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/"
              className="px-8 py-4 bg-white/5 border border-white/10 font-bold text-lg rounded-2xl hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              Back to Quiz
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-8 left-0 right-0 z-10 text-center">
        <p className="text-zinc-600 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
          © 2024 Astra IT • Crafting Digital Excellence
        </p>
      </footer>
    </main>
  );
}
