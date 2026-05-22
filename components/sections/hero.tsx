'use client';

import { motion } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-24 pb-12 relative overflow-hidden z-10">
      {/* Background Letters */}
      <motion.div 
        className="absolute -top-12 -left-12 opacity-5 select-none pointer-events-none -z-10 hidden md:block"
        animate={{ x: [0, -50, 0], y: [0, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <h1 className="text-[300px] font-black leading-none uppercase tracking-tighter">PORTFOLIO</h1>
      </motion.div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] -z-20"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col items-start justify-center relative">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="inline-flex items-center gap-3 text-amber-500 font-mono text-sm mb-4 uppercase tracking-[0.3em] bg-amber-500/10 px-4 py-2 border border-amber-500/20">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            Senior Web Dasturchi
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-[110px] font-heading font-bold leading-[0.9] tracking-tighter uppercase mb-6"
        >
          Sanjarbek <br />
          <motion.span 
            className="text-[#333] outline-text inline-block"
            whileHover={{ scale: 1.02, color: "#fff", textShadow: "0px 0px 15px rgba(255,255,255,0.8)" }}
            transition={{ duration: 0.3 }}
          >
            Otabekov
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-[#AAA] text-lg max-w-md leading-relaxed mb-10 border-l-2 border-[#333] pl-4"
        >
          Men zamonaviy, tez va foydalanuvchiga qulay web ilovalar yaratishga ixtisoslashgan Dasturchiman. G'oyalaringizni raqamli reallikka aylantirishga yordam beraman.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#projects"
              className="px-10 py-4 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-amber-500 hover:text-black transition-colors block border border-transparent shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]"
            >
              Loyihalarni ko'rish
            </Link>
          </motion.div>
          <motion.a
            href="#"
            className="flex items-center gap-3 group cursor-pointer"
            whileHover={{ x: 10 }}
          >
            <span className="w-12 h-[1px] bg-[#555] group-hover:bg-amber-500 transition-colors hidden sm:block relative overflow-hidden">
               <span className="absolute inset-0 bg-amber-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
            <span className="text-xs uppercase tracking-widest text-[#888] group-hover:text-white transition-colors">
              Rezyumeni yuklash
            </span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex items-center gap-6"
        >
          {[
            { icon: Github, label: 'GitHub' },
            { icon: Linkedin, label: 'LinkedIn' },
            { icon: Twitter, label: 'Twitter' },
          ].map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a 
                key={social.label} 
                href="#" 
                className="w-10 h-10 border border-[#333] flex items-center justify-center text-[#666] hover:text-amber-500 hover:border-amber-500 transition-colors bg-[#111]"
                whileHover={{ y: -5, rotate: 5 }}
              >
                <span className="sr-only">{social.label}</span>
                <Icon className="w-4 h-4" />
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
}
