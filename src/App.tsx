import { SplineSceneBasic, HeroScrollDemo, MagnetizeButtonDemo } from '@/components/demo';
import './App.css';

function App() {
  return (
    <div className="flex flex-col gap-4">
      <div className="container mx-auto px-4 py-4 md:py-8 min-h-screen flex items-center">
        <SplineSceneBasic />
      </div>
      <HeroScrollDemo />
      <MagnetizeButtonDemo />
    </div>
  );
}

export default App;