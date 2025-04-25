import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
}

export function NavBar({ items }: NavBarProps) {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  const handleItemClick = (url: string) => {
    setActiveItem(url);
  };

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-black/70 backdrop-blur-lg px-6 py-3 rounded-full border border-white/10">
        <ul className="flex items-center gap-1">
          {items.map((item) => {
            const isActive = activeItem === item.url;
            const Icon = item.icon;
            
            return (
              <motion.li
                key={item.name}
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.url}
                  onClick={() => handleItemClick(item.url)}
                  className={`relative flex items-center gap-2 px-3 py-2 rounded-full transition-colors ${
                    isActive ? 'text-white' : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="tubelight"
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
