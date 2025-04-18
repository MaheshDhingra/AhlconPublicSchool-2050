
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { 
  FuturisticBadge, 
  AnimatedText,
  GlowingBorder,
  FloatingElement
} from "@/components/ui/ExtendedFuturisticComponents";
import { ThreeDModel } from "@/components/ui/3DModel";
import { motion } from "framer-motion";

const Hero3D = () => {
  const cursorTrailContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const createCursorTrail = (e: MouseEvent) => {
      if (!cursorTrailContainerRef.current) return;
      
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;
      
      cursorTrailContainerRef.current.appendChild(trail);
      
      setTimeout(() => {
        if (trail && cursorTrailContainerRef.current) {
          cursorTrailContainerRef.current.removeChild(trail);
        }
      }, 600);
    };
    
    window.addEventListener('mousemove', createCursorTrail);
    
    return () => {
      window.removeEventListener('mousemove', createCursorTrail);
    };
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Mouse trail effect container */}
      <div ref={cursorTrailContainerRef} className="fixed inset-0 pointer-events-none z-50"></div>
      
      {/* Background effects */}
      <div className="absolute inset-0 animated-gradient"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Animated stars */}
      <div className="absolute inset-0">
        <div className="shooting-star"></div>
        <div className="shooting-star" style={{ animationDelay: '2s' }}></div>
        <div className="shooting-star" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-1"
            >
              <FuturisticBadge animate={true}>Est. 1988 • Future Vision 2050</FuturisticBadge>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Welcome to<br />
                <span className="text-futuristic-neon text-glow glitch" data-text="Ahlcon">Ahlcon</span> Public School
              </h1>
            </motion.div>
            
            <AnimatedText 
              text="Where tradition meets innovation. We're preparing the next generation of leaders, thinkers, and creators with cutting-edge education powered by the latest technology and time-tested values."
              className="text-gray-300 text-lg leading-relaxed"
              staggerChildren={0.02}
            />
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-futuristic-blue to-futuristic-purple hover:from-futuristic-purple hover:to-futuristic-blue shadow-lg hover:shadow-futuristic-blue/50 transition-all ripple"
              >
                Apply Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-futuristic-neon text-futuristic-neon hover:bg-futuristic-neon/10 ripple"
              >
                Virtual Tour
              </Button>
            </motion.div>
          </div>
          
          <div className="relative">
            <GlowingBorder className="rounded-lg">
              <ThreeDModel 
                className="w-full h-[500px] rounded-lg"
                backgroundColor="transparent"
                ambientLightColor="#8B5CF6"
                directionalLightColor="#00F9FF"
                directionalLightIntensity={1.5}
              />
            </GlowingBorder>
            
            <FloatingElement 
              className="absolute -bottom-6 -right-6 z-10 w-2/3"
              floatHeight={15}
              duration={5}
            >
              <div className="glass p-4 rounded-lg w-full cyberpunk-scanner">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-futuristic-blue/20 flex items-center justify-center animate-pulse-glow">
                    <span className="text-futuristic-neon text-xl font-bold">AI</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">AI-Enhanced Learning</h3>
                    <p className="text-gray-400 text-sm">Personalized education pathways</p>
                  </div>
                </div>
              </div>
            </FloatingElement>
          </div>
        </div>
      </div>
      
      {/* Curved divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,132.66,46.89,321.39,56.44Z"
            className="fill-[#111827]"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero3D;
