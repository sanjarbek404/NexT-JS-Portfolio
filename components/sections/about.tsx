'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#0A0A0B] border-t border-[#1a1a1a] relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tighter mb-4">Men <span className="text-[#333] outline-text">haqimda</span></h2>
          <div className="w-20 h-1 bg-[#333]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative aspect-square max-w-md mx-auto lg:mx-0 w-full group"
          >
            <motion.div 
              className="absolute inset-0 bg-[#111] border border-[#222] transform rotate-3 origin-center"
              whileHover={{ rotate: 6 }}
              transition={{ duration: 0.4 }}
            ></motion.div>
            <div className="absolute inset-0 bg-[#0A0A0B] border border-[#333] overflow-hidden">
              <Image
                src="https://picsum.photos/seed/sanjarbek/800/800"
                alt="Sanjarbek Otabekov"
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-amber-500/0 group-hover:border-amber-500/50 transition-colors duration-500 z-10 pointer-events-none"></div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {}
            }}
          >
            <motion.h3 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-2xl tracking-widest uppercase font-bold text-amber-500 mb-4 inline-block bg-amber-500/10 px-4 py-2 border border-amber-500/20"
            >
              Tajribali Full-Stack Dasturchi
            </motion.h3>
            
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-[#AAA] mb-6 leading-relaxed text-lg"
            >
              Assalomu alaykum! Men Sanjarbek Otabekovman. Dasturlash olamiga katta qiziqish bilan kirib kelganman va doimiy ravishda o'z ustimda ishlashdan, yangi texnologiyalarni o'rganishdan charchamayman.
            </motion.p>
            
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-[#AAA] mb-10 leading-relaxed text-lg"
            >
              Asosiy maqsadim — insonlarga foyda keltiradigan, yuqori sifatli va zamonaviy dasturiy yechimlar yaratish. Har bir loyihada toza kod yozish (clean code), arxitektura qulayligi va foydalanuvchi interfeysiga (UI/UX) alohida e'tibor qarataman.
            </motion.p>

            <div className="grid grid-cols-2 gap-6">
              <motion.div 
                variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                whileHover={{ y: -5, borderColor: "rgba(245,158,11,0.5)" }}
                className="p-6 bg-[#111] border border-[#222] transition-colors relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="block text-5xl font-heading font-black text-white mb-2 relative z-10">3+</span>
                <span className="text-xs uppercase tracking-widest text-[#777] relative z-10">Yillik Tajriba</span>
              </motion.div>
              
              <motion.div 
                variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                whileHover={{ y: -5, borderColor: "rgba(245,158,11,0.5)" }}
                className="p-6 bg-[#111] border border-[#222] transition-colors relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="block text-5xl font-heading font-black text-white mb-2 relative z-10">20+</span>
                <span className="text-xs uppercase tracking-widest text-[#777] relative z-10">Bajarilgan Loyihalar</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
