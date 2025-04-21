'use client'

import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { MagnetizeButton } from "@/components/ui/magnetize-button";
import { ContactForm } from "@/components/ui/contact-form";
import { useRef, useState } from "react";
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full min-h-[600px] md:h-[500px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-6 md:p-8 relative z-10 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            ClickLaunchGo
          </h1>
          <p className="mt-4 text-sm sm:text-base text-neutral-300 max-w-lg mx-auto md:mx-0">
            Your Vision, Our Design.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative h-[300px] md:h-full">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Discover our <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Creative Process
              </span>
            </h1>
          </>
        }
      >
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070"
          alt="Team collaboration and creative process"
          className="mx-auto rounded-2xl object-cover h-full"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

export function MagnetizeButtonDemo() {
  const contactRef = useRef<HTMLDivElement>(null);
  const [showContact, setShowContact] = useState(false);

  const handleClick = () => {
    if (!showContact) {
      setShowContact(true);
      requestAnimationFrame(() => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  };

  return (
    <>
      <div className="min-h-[500px] flex flex-col items-center justify-center gap-10 py-32 mb-20">
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Interactive Elements
        </h2>
        <p className="text-xl text-neutral-300 text-center max-w-2xl mx-auto leading-relaxed">
          Experience our magnetic button interaction - a small example of the attention to detail we bring to every project.
        </p>
        <div onClick={handleClick} className="mt-4">
          <MagnetizeButton particleCount={14} attractRadius={50} />
        </div>
      </div>
      {showContact && (
        <div 
          ref={contactRef} 
          className="min-h-screen flex items-center justify-center bg-neutral-900/50 backdrop-blur-sm"
        >
          <ContactForm />
        </div>
      )}
    </>
  );
}