
import React, { useRef, useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

// Enhanced with animation
export const SectionTitle = ({ title, subtitle, center = false }: SectionTitleProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`space-y-2 mb-8 ${center ? 'text-center' : ''}`}
    >
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl md:text-4xl font-bold text-white"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-400 text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

type FuturisticCardProps = {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  parallax?: boolean;
  delayIndex?: number;
};

// Enhanced with animations and parallax
export const FuturisticCard = ({ 
  children, 
  className, 
  glow = false, 
  parallax = false,
  delayIndex = 0 
}: FuturisticCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!parallax || !cardRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top;  // y position within the element
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const moveX = (x - centerX) / 25;
      const moveY = (y - centerY) / 25;
      
      setMousePosition({ x: moveX, y: moveY });
    };
    
    const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 });
    };
    
    const card = cardRef.current;
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [parallax]);
  
  const cardStyle = parallax ? {
    transform: `perspective(1000px) rotateX(${mousePosition.y * -1}deg) rotateY(${mousePosition.x}deg) scale3d(1, 1, 1)`,
    transition: 'transform 0.2s ease-out'
  } : {};
  
  const glowClass = glow ? 'border-white/20 shadow-lg shadow-futuristic-neon/20 hover:shadow-futuristic-neon/30 hover:border-white/30' : '';
  
  return (
    <motion.div 
      ref={(node) => {
        // Combine refs
        if (node) {
          (cardRef as any).current = node;
          (ref as any)(node);
        }
      }}
      style={cardStyle}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.1 * delayIndex }}
      className={cn(
        "bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all",
        glowClass,
        className
      )}
    >
      {children}
    </motion.div>
  );
};

type FuturisticBadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "purple" | "teal" | "accent";
  className?: string;
  animate?: boolean;
};

// Enhanced with animations
export const FuturisticBadge = ({ 
  children, 
  variant = "default", 
  className,
  animate = false
}: FuturisticBadgeProps) => {
  const variantClasses = {
    default: "text-futuristic-neon border-futuristic-neon/30",
    purple: "text-futuristic-purple border-futuristic-purple/30",
    teal: "text-futuristic-teal border-futuristic-teal/30",
    accent: "text-futuristic-accent border-futuristic-accent/30"
  };

  return animate ? (
    <motion.span 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, type: "spring" }}
      className={cn(`inline-block px-3 py-1 text-xs font-medium rounded-full border ${variantClasses[variant]}`, className)}
    >
      {children}
    </motion.span>
  ) : (
    <span className={cn(`inline-block px-3 py-1 text-xs font-medium rounded-full border ${variantClasses[variant]}`, className)}>
      {children}
    </span>
  );
};

// Enhanced with animations
export const ParticleBackground = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!particlesRef.current) return;
    
    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'absolute rounded-full bg-white';
      
      // Random size between 1px and 3px
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random opacity
      star.style.opacity = `${Math.random() * 0.7 + 0.3}`;
      
      // Random animation delay
      star.style.animationDelay = `${Math.random() * 5}s`;
      
      // Add animation class
      star.classList.add('animate-twinkle');
      
      return star;
    };
    
    // Create stars
    for (let i = 0; i < 100; i++) {
      const star = createStar();
      particlesRef.current.appendChild(star);
    }
    
    return () => {
      if (particlesRef.current) {
        particlesRef.current.innerHTML = '';
      }
    };
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-futuristic-blue/10 to-futuristic-purple/10"></div>
      <div className="absolute top-1/4 -left-10 w-40 h-40 bg-futuristic-blue/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-60 h-60 bg-futuristic-purple/20 rounded-full filter blur-3xl"></div>
      <div ref={particlesRef} className="absolute inset-0 z-0"></div>
      
      {/* Animated shooting stars */}
      <div className="shooting-star"></div>
      <div className="shooting-star" style={{ animationDelay: '2s' }}></div>
      <div className="shooting-star" style={{ animationDelay: '5s' }}></div>
    </div>
  );
};

// 3D Model Placeholder (to be replaced with an actual 3D model implementation)
export const Model3D = ({ 
  modelPath = '/models/sphere.glb', 
  className = '',
  rotationSpeed = 0.01,
  size = { width: '100%', height: '300px' } 
}: { 
  modelPath?: string;
  className?: string;
  rotationSpeed?: number;
  size?: { width: string; height: string };
}) => {
  return (
    <div 
      className={cn("relative overflow-hidden rounded-lg", className)}
      style={{ width: size.width, height: size.height }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-futuristic-blue to-futuristic-purple animate-spin-slow"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          3D Model Placeholder
        </div>
      </div>
    </div>
  );
};

// Parallax Scroll Section
export const ParallaxSection = ({ 
  children, 
  bgImage, 
  overlayOpacity = 0.5,
  speed = 0.5
}: {
  children: React.ReactNode;
  bgImage: string;
  overlayOpacity?: number;
  speed?: number;
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const offset = window.pageYOffset;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      
      // Only update if section is in view
      if (offset > sectionTop - window.innerHeight && offset < sectionTop + sectionHeight) {
        const relativeScroll = offset - sectionTop + window.innerHeight;
        setScrollPosition(relativeScroll * speed);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  
  return (
    <div ref={sectionRef} className="relative overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${bgImage})`,
          transform: `translateY(${scrollPosition}px)`,
          zIndex: -1
        }}
      />
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: `rgba(10, 15, 37, ${overlayOpacity})` }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Animated text reveal component
export const AnimatedText = ({ 
  text, 
  className = "",
  duration = 0.5,
  staggerChildren = 0.1,
  once = true,
}: {
  text: string;
  className?: string;
  duration?: number;
  staggerChildren?: number;
  once?: boolean;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: staggerChildren, delayChildren: 0.1 * i },
    }),
  };
  
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: duration,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: duration,
      },
    },
  };
  
  return (
    <motion.div
      ref={ref}
      className={cn("overflow-hidden", className)}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {text.split(" ").map((word, i) => (
        <motion.span key={i} className="inline-block mr-1" variants={child}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Floating element with hover effect
export const FloatingElement = ({ 
  children, 
  className = "",
  floatHeight = 10,
  duration = 4,
  hoverScale = 1.05
}: {
  children: React.ReactNode;
  className?: string;
  floatHeight?: number;
  duration?: number;
  hoverScale?: number;
}) => {
  return (
    <motion.div
      className={className}
      animate={{ y: [-floatHeight/2, floatHeight/2, -floatHeight/2] }}
      transition={{ 
        repeat: Infinity, 
        duration: duration,
        ease: "easeInOut"
      }}
      whileHover={{ scale: hoverScale }}
    >
      {children}
    </motion.div>
  );
};

// Glowing border effect
export const GlowingBorder = ({
  children,
  color = "futuristic-neon",
  intensity = "medium",
  className = "",
  pulseAnimation = true
}: {
  children: React.ReactNode;
  color?: "futuristic-neon" | "futuristic-purple" | "futuristic-teal" | "futuristic-accent";
  intensity?: "low" | "medium" | "high";
  className?: string;
  pulseAnimation?: boolean;
}) => {
  const colorMap = {
    "futuristic-neon": "rgba(0, 249, 255, VAR)",
    "futuristic-purple": "rgba(139, 92, 246, VAR)",
    "futuristic-teal": "rgba(11, 197, 234, VAR)",
    "futuristic-accent": "rgba(255, 61, 255, VAR)"
  };
  
  const intensityMap = {
    "low": { border: 0.3, shadow: 0.2 },
    "medium": { border: 0.5, shadow: 0.3 },
    "high": { border: 0.8, shadow: 0.5 }
  };
  
  const borderColor = colorMap[color].replace("VAR", intensityMap[intensity].border.toString());
  const shadowColor = colorMap[color].replace("VAR", intensityMap[intensity].shadow.toString());
  
  const pulseClass = pulseAnimation ? "animate-pulse-glow" : "";
  
  return (
    <div 
      className={cn("border rounded-lg overflow-hidden relative", pulseClass, className)}
      style={{ 
        borderColor: borderColor,
        boxShadow: `0 0 15px ${shadowColor}, 0 0 30px ${shadowColor}`
      }}
    >
      {children}
    </div>
  );
};
