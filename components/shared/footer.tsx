import { Github, Twitter, Linkedin, Heart } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0B] px-6 lg:px-12 py-8 border-t border-[#1a1a1a] flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-[#444] z-10 gap-4 md:gap-0">
      <div>Toshkent, O'zbekiston &bull; GMT +5</div>
      <div className="flex gap-6">
        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-white transition-colors">GitHub</a>
        <a href="#" className="hover:text-white transition-colors">Twitter</a>
      </div>
      <div>&copy; {currentYear} Sanjarbek Otabekov</div>
    </footer>
  );
}
