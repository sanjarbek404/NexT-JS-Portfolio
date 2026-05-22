'use client';

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative bg-[#0A0A0B] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tighter mb-4"><span className="text-[#333] outline-text">Bog'lanish</span></h2>
            <p className="text-[#777] max-w-2xl mb-4 text-sm font-bold uppercase tracking-widest bg-white/5 inline-block px-3 py-1">
              Yangi loyihalar va takliflar
            </p>
            <div className="w-20 h-1 bg-[#333] mt-2" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {}
            }}
            className="flex flex-col gap-8 justify-center relative"
          >
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px] -translate-y-1/2 -z-10"></div>
            
            {[
              { icon: Mail, label: 'Email', value: 'sanjarbekotabekov010@gmail.com', link: 'mailto:sanjarbekotabekov010@gmail.com' },
              { icon: Phone, label: 'Telefon', value: '+998 90 123 45 67', link: 'tel:+998901234567' },
              { icon: MapPin, label: 'Manzil', value: "Toshkent, O'zbekiston", link: null }
            ].map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.div 
                  key={contact.label}
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                  className="flex items-start gap-4 group cursor-pointer"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 border border-[#333] text-amber-500 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-black transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xs uppercase tracking-widest text-[#555] mb-1 group-hover:text-[#888] transition-colors">{contact.label}</h3>
                    {contact.link ? (
                      <a href={contact.link} className="font-bold border-b border-transparent group-hover:border-amber-500 transition-colors">{contact.value}</a>
                    ) : (
                      <p className="font-bold border-b border-transparent group-hover:border-amber-500 transition-colors inline-block">{contact.value}</p>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#111] border border-[#222] p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <motion.div whileFocus="focused" initial="unfocused">
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-[#555] mb-2">Ismingiz</label>
                <motion.input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-[#0A0A0B] border border-[#333] focus:outline-none focus:border-amber-500 transition-all text-white placeholder:text-[#333]"
                  placeholder="Ali Valiyev"
                  variants={{ focused: { scale: 1.02 }, unfocused: { scale: 1 } }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              <motion.div whileFocus="focused" initial="unfocused">
                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-[#555] mb-2">Email manzil</label>
                <motion.input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-[#0A0A0B] border border-[#333] focus:outline-none focus:border-amber-500 transition-all text-white placeholder:text-[#333]"
                  placeholder="ali@example.com"
                  variants={{ focused: { scale: 1.02 }, unfocused: { scale: 1 } }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              <motion.div whileFocus="focused" initial="unfocused">
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-[#555] mb-2">Xabaringiz</label>
                <motion.textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-[#0A0A0B] border border-[#333] focus:outline-none focus:border-amber-500 transition-all resize-none text-white placeholder:text-[#333]"
                  placeholder="Qanday loyiha haqida gaplashamiz?"
                  variants={{ focused: { scale: 1.02 }, unfocused: { scale: 1 } }}
                  transition={{ duration: 0.2 }}
                ></motion.textarea>
              </motion.div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, backgroundColor: "#f59e0b" }} /* amber-500 */
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-white text-black font-bold uppercase text-xs tracking-widest transition-colors flex items-center justify-center border border-transparent shadow-[0_0_15px_rgba(255,255,255,0.05)]"
              >
                Xabarni yuborish
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
