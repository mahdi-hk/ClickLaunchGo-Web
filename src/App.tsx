import { SplineSceneBasic, HeroScrollDemo, MagnetizeButtonDemo } from '@/components/demo';
import { Home, User, Briefcase, FileText } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Packages } from './pages/Packages';
import { AnimatePresence } from 'framer-motion';
import './App.css';

function AppContent() {
  const location = useLocation();
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '#', icon: User },
    { name: 'Projects', url: '/packages', icon: Briefcase },
    { name: 'Resume', url: '#', icon: FileText }
  ];

  return (
    <>
      <NavBar items={navItems} />
      <div className="fixed top-4 left-4 z-50">
        <a href="https://clicklaunchgo.com" target="_blank" rel="noopener noreferrer">
          <img 
            src="/favicon.svg" 
            alt="ClickLaunchGo Logo" 
            className="w-20 h-20 hover:scale-110 transition-transform duration-200"
          />
        </a>
      </div>
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