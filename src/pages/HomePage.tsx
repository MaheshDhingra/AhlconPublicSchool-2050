
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ParticleBackground, 
  SectionTitle, 
  FeatureCard, 
  FuturisticCard,
  StatItem,
  FuturisticBadge,
  AnimatedText,
  ParallaxSection,
  FloatingElement,
  GlowingBorder,
  HolographicDisplay,
  AnimatedStatistic
} from "@/components/ui/ExtendedFuturisticComponents";
import { 
  Rocket, 
  Brain, 
  Microscope, 
  GraduationCap, 
  Building2, 
  Users,
  Bot,
  Atom,
  Cpu,
  Dna,
  TrendingUp,
  Shield,
  Globe
} from "lucide-react";
import Hero3D from "@/components/Hero3D";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeatureCardAnimated = (props: any) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: props.index * 0.1 }}
    >
      <FeatureCard {...props} />
    </motion.div>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* 3D Hero Section */}
      <Hero3D />

      {/* Features Section */}
      <section className="bg-[#111827] py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Why Choose Ahlcon"
            subtitle="Discover what sets us apart in the world of education"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCardAnimated
              icon={Rocket}
              title="Future-Ready Curriculum"
              description="Our curriculum is designed to equip students with skills that will be relevant in 2050 and beyond."
              index={0}
            />
            <FeatureCardAnimated
              icon={Brain}
              title="AI-Enhanced Learning"
              description="Personalized education pathways powered by advanced AI that adapts to each student's learning style."
              index={1}
            />
            <FeatureCardAnimated
              icon={Microscope}
              title="Research Opportunities"
              description="Students participate in cutting-edge research with access to state-of-the-art laboratories."
              index={2}
            />
            <FeatureCardAnimated
              icon={GraduationCap}
              title="Expert Faculty"
              description="Learn from industry experts, scientists, and educators at the forefront of their fields."
              index={3}
            />
            <FeatureCardAnimated
              icon={Building2}
              title="Advanced Campus"
              description="Our campus features quantum computing labs, holographic classrooms, and sustainable architecture."
              index={4}
            />
            <FeatureCardAnimated
              icon={Users}
              title="Global Community"
              description="Join a diverse community of learners from around the world, connected through technology."
              index={5}
            />
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <ParallaxSection 
        bgImage="https://source.unsplash.com/photo-1470813740244-df37b8c1edcb"
        overlayOpacity={0.75}
      >
        <div className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <SectionTitle
              title="Our Future-Ready Programs"
              subtitle="Explore our innovative academic offerings designed for tomorrow's world"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FuturisticCard className="md:col-span-2" parallax delayIndex={0}>
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <Cpu size={32} className="text-futuristic-neon" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Quantum Computing</h3>
                  <p className="text-gray-400 mb-4 flex-grow">
                    Students learn the principles of quantum mechanics and how to program 
                    quantum computers, preparing them for the next revolution in computing.
                  </p>
                  <Link 
                    to="/academics" 
                    className="text-futuristic-neon font-medium inline-flex items-center hover:underline mt-2 group"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </FuturisticCard>
              
              <FuturisticCard parallax delayIndex={1}>
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <Dna size={32} className="text-futuristic-purple" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Bioengineering</h3>
                  <p className="text-gray-400 mb-4 flex-grow">
                    Explore the fusion of biology and engineering to solve complex health challenges.
                  </p>
                  <Link 
                    to="/academics" 
                    className="text-futuristic-purple font-medium inline-flex items-center hover:underline mt-2 group"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </FuturisticCard>
              
              <FuturisticCard parallax delayIndex={2}>
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <Bot size={32} className="text-futuristic-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">AI Ethics</h3>
                  <p className="text-gray-400 mb-4 flex-grow">
                    Examine the ethical implications of artificial intelligence in society.
                  </p>
                  <Link 
                    to="/academics" 
                    className="text-futuristic-teal font-medium inline-flex items-center hover:underline mt-2 group"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </FuturisticCard>
              
              <FuturisticCard className="md:col-span-2" parallax delayIndex={3}>
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <Atom size={32} className="text-futuristic-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Nanotechnology</h3>
                  <p className="text-gray-400 mb-4 flex-grow">
                    Discover the world of nanomaterials and molecular manufacturing that will 
                    revolutionize industries from medicine to space exploration.
                  </p>
                  <Link 
                    to="/academics" 
                    className="text-futuristic-accent font-medium inline-flex items-center hover:underline mt-2 group"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </FuturisticCard>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Holographic Stats Section */}
      <section className="py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <HolographicDisplay>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <AnimatedStatistic value="2050" label="Year Vision" icon={TrendingUp} />
              <AnimatedStatistic value="100%" label="Graduate Employment" icon={Shield} />
              <AnimatedStatistic value="250+" label="Research Projects" icon={Atom} />
              <AnimatedStatistic value="50+" label="Global Partners" icon={Globe} />
            </div>
          </HolographicDisplay>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-futuristic-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-futuristic-blue to-futuristic-purple"></div>
        </div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" id="particles-js"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white"
            >
              Ready to <GlowingBorder className="inline-block px-2 py-1"><span className="text-futuristic-neon text-glow">Join</span></GlowingBorder> the Future of Education?
            </motion.h2>
            
            <AnimatedText 
              text="Application for the 2050-51 academic year is now open. Take the first step towards your child's extraordinary future."
              className="text-gray-300 text-lg"
              duration={0.3}
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 pt-4"
            >
              <Button size="lg" className="bg-gradient-to-r from-futuristic-blue to-futuristic-purple hover:from-futuristic-purple hover:to-futuristic-blue shadow-lg hover:shadow-futuristic-blue/50 transition-all ripple">
                Apply Now
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 ripple">
                Schedule a Visit
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
