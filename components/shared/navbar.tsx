import { Home, User, Briefcase, Code, Mail } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { name: 'Bosh sahifa', href: '#home', icon: Home },
  { name: 'Men haqimda', href: '#about', icon: User },
  { name: 'Ko\'nikmalar', href: '#skills', icon: Code },
  { name: 'Loyihalar', href: '#projects', icon: Briefcase },
  { name: 'Aloqa', href: '#contact', icon: Mail },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0B]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="#home" className="text-xl font-heading font-bold tracking-tighter uppercase group relative">
              <span className="text-white relative z-10 text-2xl tracking-[0.2em]">PORTFOLIO</span>
              <span className="absolute inset-x-0 -bottom-2 h-[2px] bg-amber-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8 text-sm font-medium uppercase tracking-widest text-[#888]">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
