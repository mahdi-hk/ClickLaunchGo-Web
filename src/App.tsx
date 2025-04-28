import { SplineSceneBasic, HeroScrollDemo, MagnetizeButtonDemo } from '@/components/demo';
import { Home, User, Briefcase, FileText } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Packages } from './pages/Packages';
import { About } from './pages/About';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';

function AppContent() {
  const location = useLocation();
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Projects', url: '/packages', icon: Briefcase },
    { name: 'Resume', url: '#', icon: FileText }
  ];

  return (
    <>
      <NavBar items={navItems} />
      <motion.div 
        className="fixed top-6 left-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Link to="/">
          <motion.div
            whileHover={{ 
              scale: 1.15,
              rotate: 5,
              filter: "brightness(1.2) contrast(1.1)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-background/80 backdrop-blur-sm border border-primary/10"
          >
            <img 
              src="https://i.imgur.com/BfqL191.jpeg"
              alt="ClickLaunchGo Logo" 
              className="w-full h-full object-cover rounded-2xl transform hover:scale-105 transition-transform duration-300"
              loading="eager"
              decoding="sync"
            />
          </motion.div>
        </Link>
      </motion.div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <div className="flex flex-col gap-4">
              <div className="container mx-auto px-4 py-4 md:py-8 min-h-screen flex items-center">
                <SplineSceneBasic />
              </div>
              <HeroScrollDemo />
              <MagnetizeButtonDemo />
            </div>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Packages />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;