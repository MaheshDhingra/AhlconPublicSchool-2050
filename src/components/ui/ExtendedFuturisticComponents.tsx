
import React from 'react';
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { LucideIcon } from "lucide-react";
import {
  SectionTitle,
  FuturisticBadge,
  ParticleBackground,
  Model3D,
  ParallaxSection,
  AnimatedText,
  FloatingElement,
  GlowingBorder,
  FuturisticCard
} from "./FuturisticComponents";

// Timeline Item Component
export const TimelineItem = ({ 
  year, 
  title, 
  description 
}: { 
  year: string, 
  title: string, 
  description: string 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="flex mb-8 last:mb-0"
    >
      <div className="mr-4 flex flex-col items-center">
        <div className="w-16 h-16 bg-futuristic-blue/20 rounded-full flex items-center justify-center border border-white/10">
          <span className="text-futuristic-neon font-bold">{year}</span>
        </div>
        <div className="w-0.5 h-full bg-gradient-to-b from-futuristic-neon/50 to-transparent mt-4"></div>
      </div>
      <div className="pt-3 flex-1">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

// Stat Item Component
export const StatItem = ({ 
  value, 
  label 
}: { 
  value: string, 
  label: string 
}) => {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-futuristic-neon mb-1">{value}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  );
};

// Enhance FeatureCard with more interactive elements
export const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  className,
  interactive = true 
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  interactive?: boolean;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      whileHover={interactive ? { 
        scale: 1.05,
        transition: { duration: 0.3 }
      } : {}}
      className={cn(
        "bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 transition-all group",
        interactive && "hover:border-futuristic-neon/50 hover:shadow-lg",
        className
      )}
    >
      <div className={cn(
        "w-12 h-12 rounded-lg bg-futuristic-blue/20 flex items-center justify-center mb-4 transition-all duration-300",
        interactive && "group-hover:bg-futuristic-blue/30"
      )}>
        <Icon className={cn(
          "w-6 h-6 text-futuristic-neon transition-transform",
          interactive && "group-hover:scale-110"
        )} />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

// Add a new Holographic Display component
export const HolographicDisplay = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode, 
  className?: string 
}) => {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/10 p-6",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-futuristic-blue/10 before:to-futuristic-purple/10",
        "after:absolute after:inset-0 after:border-2 after:border-futuristic-neon/20 after:animate-pulse-glow",
        "backdrop-blur-sm shadow-2xl",
        className
      )}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Enhanced Animated Statistic Component
export const AnimatedStatistic = ({ 
  value, 
  label, 
  icon: Icon 
}: { 
  value: string, 
  label: string, 
  icon?: LucideIcon 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="text-center bg-white/5 rounded-lg p-4 border border-white/10"
    >
      {Icon && (
        <div className="w-12 h-12 mx-auto mb-4 bg-futuristic-blue/20 rounded-full flex items-center justify-center">
          <Icon className="w-6 h-6 text-futuristic-neon" />
        </div>
      )}
      <motion.div 
        className="text-3xl font-bold text-futuristic-neon"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {value}
      </motion.div>
      <p className="text-gray-400 mt-2">{label}</p>
    </motion.div>
  );
};

// Re-export components from FuturisticComponents to make them available through ExtendedFuturisticComponents
export {
  SectionTitle,
  FuturisticCard,
  FuturisticBadge,
  ParticleBackground,
  Model3D,
  ParallaxSection,
  AnimatedText,
  FloatingElement,
  GlowingBorder
};
