'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platforma',
    description: 'Zamonaviy internet do\'kon tizimi. Foydalanuvchilar mahsulotlarni izlashi, savatga qo\'shishi va xarid qilishlari mumkin. To\'liq admin panel ham mavjud.',
    image: 'https://picsum.photos/seed/ecommerce/800/600',
    tags: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Klinika Boshqaruv Tizimi',
    description: 'Tibbiyot muassasalari uchun bemorlarni ro\'yxatga olish, shifokorlar grafigi va tibbiy tarixni yuritish platformasi.',
    image: 'https://picsum.photos/seed/clinic/800/600',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Ta\'lim Platformasi LMS',
    description: 'Online ta\'lim uchun mo\'ljallangan videodarslar bazasi, testlar tizimi va o\'quvchilar reytingi modulini o\'z ichiga olgan dastur.',
    image: 'https://picsum.photos/seed/edu/800/600',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-[#0A0A0B] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tighter mb-4">Eng Sara <span className="text-[#333] outline-text">Loyihalar</span></h2>
            <p className="text-[#777] max-w-2xl mb-4 text-sm font-bold uppercase tracking-widest bg-white/5 inline-block px-3 py-1">
              Oxirgi qilingan ishlar
            </p>
            <div className="w-20 h-1 bg-[#333] mt-2" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group bg-[#111] border border-[#222] p-8 cursor-pointer flex flex-col relative overflow-hidden hover:border-amber-500/50 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <span className="text-xs font-mono text-amber-500 bg-amber-500/10 px-2 py-1 border border-amber-500/20">0{project.id} / PROJECT</span>
                <span className="text-xs text-[#555] tracking-widest">2024</span>
              </div>
              
              <div className="relative aspect-video overflow-hidden mb-6 border border-[#222] group-hover:border-amber-500/30 transition-colors z-10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-transform duration-700 ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#0A0A0B]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl} 
                    className="font-bold text-xs uppercase tracking-widest px-6 py-3 bg-white text-black hover:bg-amber-500 transition-colors" 
                    title="Live Demo"
                  >
                    Visit
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl} 
                    className="font-bold text-xs uppercase tracking-widest px-6 py-3 bg-transparent border border-white text-white hover:bg-white hover:text-black transition-colors" 
                    title="GitHub Code"
                  >
                    Code
                  </motion.a>
                </div>
              </div>
              
              <div className="flex flex-col flex-grow relative z-10">
                <h3 className="text-2xl font-bold uppercase mb-2 text-white group-hover:text-amber-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#AAA] mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-[10px] border border-[#333] text-[#999] uppercase tracking-widest group-hover:bg-[#222] transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
