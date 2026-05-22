'use client';

import { motion } from 'motion/react';
import { 
  Terminal, 
  Database, 
  Palette, 
  Layout, 
  Server,
  Smartphone,
  Globe,
  Settings
} from 'lucide-react';

const skills = [
  { name: 'JavaScript / TypeScript', icon: Terminal, level: 90, color: 'text-yellow-500' },
  { name: 'React / Next.js', icon: Globe, level: 85, color: 'text-cyan-500' },
  { name: 'Node.js / Express', icon: Server, level: 80, color: 'text-green-500' },
  { name: 'Tailwind CSS', icon: Palette, level: 95, color: 'text-teal-400' },
  { name: 'UI / UX Design', icon: Layout, level: 75, color: 'text-purple-500' },
  { name: 'PostgreSQL / MongoDB', icon: Database, level: 70, color: 'text-blue-500' },
  { name: 'Git & GitHub', icon: Settings, level: 85, color: 'text-orange-500' },
  { name: 'Responsive Web', icon: Smartphone, level: 95, color: 'text-pink-500' },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative bg-[#0A0A0B] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tighter mb-4"><span className="text-[#333] outline-text">Mening</span> Stack</h2>
            <p className="text-[#777] max-w-2xl mb-4 text-sm font-bold uppercase tracking-widest bg-white/5 inline-block px-3 py-1">
              Texnologiyalar va vositalar
            </p>
            <div className="w-20 h-1 bg-[#333] mt-2" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isFirst = index % 4 === 0;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className={`pl-6 py-4 border-l-2 ${isFirst ? 'border-amber-500' : 'border-[#222]'} hover:border-amber-500 transition-colors group cursor-pointer relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <div className="flex items-center gap-3 mb-2 relative z-10">
                  <Icon className="w-5 h-5 text-[#555] group-hover:text-amber-500 transition-colors" />
                  <div className="w-full bg-[#111] h-1.5 flex-1 ml-2">
                    <motion.div 
                      className="h-full bg-[#333] group-hover:bg-amber-500 transition-colors"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                    ></motion.div>
                  </div>
                  <h4 className="text-xs uppercase tracking-widest text-[#555] group-hover:text-white transition-colors w-8 text-right">{skill.level}%</h4>
                </div>
                <p className="text-sm font-bold relative z-10">{skill.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
