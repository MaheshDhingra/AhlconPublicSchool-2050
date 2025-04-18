
import { 
  SectionTitle, 
  FeatureCard, 
  FuturisticCard, 
  FuturisticBadge 
} from "@/components/ui/ExtendedFuturisticComponents";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Microscope, 
  Dna, 
  Binary, 
  Cpu, 
  Zap, 
  Brain, 
  Globe,
  Rocket,
  Lightbulb,
  Users,
  Star
} from "lucide-react";

const AcademicsPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-futuristic-dark py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <SectionTitle 
              title="The Future of Learning" 
              subtitle="Our innovative academic programs designed for 2050 and beyond"
              center={true}
            />
            <p className="text-gray-300 leading-relaxed">
              At Ahlcon, we've reimagined education for the challenges and opportunities of 
              the mid-21st century. Our comprehensive curriculum blends advanced technological 
              training with timeless skills like critical thinking, creativity, and empathy. 
              Through AI-enhanced personalization, we ensure each student reaches their full potential.
            </p>
          </div>
        </div>
      </section>
      
      {/* Educational Approach */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <div className="w-full h-[400px] rounded-lg overflow-hidden holographic">
                <img 
                  src="https://source.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="AI-Enhanced Learning at Ahlcon" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-futuristic-blue/20 to-futuristic-purple/20"></div>
              </div>
            </div>
            
            <div className="space-y-6 order-1 md:order-2">
              <SectionTitle 
                title="Our Educational Approach" 
                subtitle="The perfect balance of human touch and technological advancement"
              />
              <p className="text-gray-300 leading-relaxed">
                Our approach combines traditional pedagogical wisdom with the latest advances 
                in educational neuroscience and artificial intelligence. Each student follows 
                a personalized learning path that adapts in real-time to their progress, 
                interests, and learning style.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-6 h-6 bg-futuristic-blue/20 rounded-full flex items-center justify-center">
                    <Rocket size={14} className="text-futuristic-neon" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">AI-Enhanced Personalization</h4>
                    <p className="text-gray-400 text-sm">
                      Advanced algorithms create custom learning paths for each student
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-6 h-6 bg-futuristic-purple/20 rounded-full flex items-center justify-center">
                    <Lightbulb size={14} className="text-futuristic-purple" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Project-Based Learning</h4>
                    <p className="text-gray-400 text-sm">
                      Real-world applications through collaborative, interdisciplinary projects
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-6 h-6 bg-futuristic-teal/20 rounded-full flex items-center justify-center">
                    <Users size={14} className="text-futuristic-teal" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Mentor Networks</h4>
                    <p className="text-gray-400 text-sm">
                      Connection with global experts in various fields through holographic meetings
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-6 h-6 bg-futuristic-accent/20 rounded-full flex items-center justify-center">
                    <Star size={14} className="text-futuristic-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Immersive Experiences</h4>
                    <p className="text-gray-400 text-sm">
                      Virtual and augmented reality environments that bring learning to life
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Academic Programs */}
      <section className="py-20 bg-futuristic-dark">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Academic Programs" 
            subtitle="Cutting-edge disciplines preparing students for the world of tomorrow"
          />
          
          <Tabs defaultValue="stem" className="mt-10">
            <TabsList className="w-full max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="stem" className="data-[state=active]:bg-futuristic-blue/20 data-[state=active]:text-futuristic-neon">
                STEM+
              </TabsTrigger>
              <TabsTrigger value="humanities" className="data-[state=active]:bg-futuristic-purple/20 data-[state=active]:text-futuristic-purple">
                New Humanities
              </TabsTrigger>
              <TabsTrigger value="arts" className="data-[state=active]:bg-futuristic-teal/20 data-[state=active]:text-futuristic-teal">
                Digital Arts
              </TabsTrigger>
              <TabsTrigger value="global" className="data-[state=active]:bg-futuristic-accent/20 data-[state=active]:text-futuristic-accent">
                Global Studies
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="stem" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FeatureCard
                  icon={Dna}
                  title="Bioengineering"
                  description="From genetic engineering to synthetic biology, students learn to solve complex health challenges."
                />
                <FeatureCard
                  icon={Cpu}
                  title="Quantum Computing"
                  description="Programming quantum computers and understanding quantum algorithms and cryptography."
                />
                <FeatureCard
                  icon={Microscope}
                  title="Nanotechnology"
                  description="Exploring materials at the nanoscale and their applications in medicine, electronics, and more."
                />
                <FeatureCard
                  icon={Brain}
                  title="Neurotech"
                  description="Understanding brain-computer interfaces and cognitive enhancement technologies."
                />
                <FeatureCard
                  icon={Binary}
                  title="Advanced AI"
                  description="Developing, training, and ethically implementing artificial intelligence systems."
                />
                <FeatureCard
                  icon={Zap}
                  title="Sustainable Energy"
                  description="Designing the next generation of clean energy systems and infrastructure."
                />
              </div>
            </TabsContent>
            
            <TabsContent value="humanities" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FeatureCard
                  icon={Brain}
                  title="AI Ethics"
                  description="Exploring the ethical implications of artificial intelligence and other emerging technologies."
                />
                <FeatureCard
                  icon={Users}
                  title="Digital Sociology"
                  description="Understanding how technology shapes social structures, relationships, and behaviors."
                />
                <FeatureCard
                  icon={Globe}
                  title="Techno-Politics"
                  description="Examining how technology influences governance, democracy, and international relations."
                />
                <FeatureCard
                  icon={BookOpen}
                  title="Future Literature"
                  description="Creating and analyzing narrative in an age of AI-generated and immersive content."
                />
                <FeatureCard
                  icon={Lightbulb}
                  title="Transhumanism Studies"
                  description="Investigating the evolution of humanity through technological enhancement."
                />
                <FeatureCard
                  icon={Rocket}
                  title="Space Humanities"
                  description="Exploring the cultural, ethical, and philosophical dimensions of space exploration."
                />
              </div>
            </TabsContent>
            
            <TabsContent value="arts" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FeatureCard
                  icon={Binary}
                  title="Neural Art"
                  description="Creating art using brain-computer interfaces and AI collaboration."
                />
                <FeatureCard
                  icon={Zap}
                  title="Virtual Reality Design"
                  description="Crafting immersive experiences and environments for education and entertainment."
                />
                <FeatureCard
                  icon={Globe}
                  title="Holographic Media"
                  description="Producing interactive holographic content for communication and expression."
                />
                <FeatureCard
                  icon={Cpu}
                  title="Quantum Aesthetics"
                  description="Exploring artistic expressions based on quantum principles and phenomena."
                />
                <FeatureCard
                  icon={Lightbulb}
                  title="Bio-Art"
                  description="Creating at the intersection of art, biology, and technology."
                />
                <FeatureCard
                  icon={Rocket}
                  title="Zero-G Performance"
                  description="Developing new forms of dance, theater, and music for zero-gravity environments."
                />
              </div>
            </TabsContent>
            
            <TabsContent value="global" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FeatureCard
                  icon={Globe}
                  title="Planetary Governance"
                  description="Understanding global systems for managing climate, resources, and technology."
                />
                <FeatureCard
                  icon={Users}
                  title="Cultural Integration"
                  description="Navigating multicultural societies and digital cultural exchange."
                />
                <FeatureCard
                  icon={Brain}
                  title="Digital Diplomacy"
                  description="Practicing international relations in an age of instantaneous global communication."
                />
                <FeatureCard
                  icon={Rocket}
                  title="Space Colonization"
                  description="Exploring the sociopolitical dimensions of human expansion beyond Earth."
                />
                <FeatureCard
                  icon={Lightbulb}
                  title="Global Resource Management"
                  description="Developing strategies for sustainable and equitable resource distribution."
                />
                <FeatureCard
                  icon={Zap}
                  title="Crisis Response"
                  description="Preparing for global challenges from pandemics to climate disasters."
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Learning Technologies */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Learning Technologies" 
            subtitle="State-of-the-art tools enhancing the educational experience"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <FuturisticCard className="h-full">
              <div className="w-12 h-12 rounded-lg bg-futuristic-blue/20 flex items-center justify-center mb-4">
                <Brain size={24} className="text-futuristic-neon" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Neural Learning Interface
              </h3>
              <p className="text-gray-400 mb-4">
                Our non-invasive BCI technology monitors brain activity to optimize learning 
                conditions and detect when concepts need reinforcement.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <FuturisticBadge>Adaptive</FuturisticBadge>
                <FuturisticBadge variant="purple">Personalized</FuturisticBadge>
                <FuturisticBadge variant="teal">Neuroscience-Based</FuturisticBadge>
              </div>
            </FuturisticCard>
            
            <FuturisticCard className="h-full">
              <div className="w-12 h-12 rounded-lg bg-futuristic-purple/20 flex items-center justify-center mb-4">
                <Globe size={24} className="text-futuristic-purple" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Holographic Classrooms
              </h3>
              <p className="text-gray-400 mb-4">
                Interactive 3D environments that bring abstract concepts to life and connect 
                students with peers and mentors from around the world.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <FuturisticBadge>Immersive</FuturisticBadge>
                <FuturisticBadge variant="purple">Global</FuturisticBadge>
                <FuturisticBadge variant="teal">Interactive</FuturisticBadge>
              </div>
            </FuturisticCard>
            
            <FuturisticCard className="h-full">
              <div className="w-12 h-12 rounded-lg bg-futuristic-teal/20 flex items-center justify-center mb-4">
                <Cpu size={24} className="text-futuristic-teal" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Quantum Learning Cloud
              </h3>
              <p className="text-gray-400 mb-4">
                Our quantum computing infrastructure powers advanced simulations and calculations 
                that were impossible with classical computers.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <FuturisticBadge>Quantum-Powered</FuturisticBadge>
                <FuturisticBadge variant="purple">Real-time</FuturisticBadge>
                <FuturisticBadge variant="teal">Secure</FuturisticBadge>
              </div>
            </FuturisticCard>
            
            <FuturisticCard className="h-full">
              <div className="w-12 h-12 rounded-lg bg-futuristic-accent/20 flex items-center justify-center mb-4">
                <Rocket size={24} className="text-futuristic-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Virtual Field Studies
              </h3>
              <p className="text-gray-400 mb-4">
                Students explore historical sites, natural wonders, and even other planets 
                through fully immersive virtual reality environments.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <FuturisticBadge>Experiential</FuturisticBadge>
                <FuturisticBadge variant="purple">Global</FuturisticBadge>
                <FuturisticBadge variant="teal">Historical</FuturisticBadge>
              </div>
            </FuturisticCard>
            
            <FuturisticCard className="h-full">
              <div className="w-12 h-12 rounded-lg bg-futuristic-blue/20 flex items-center justify-center mb-4">
                <Binary size={24} className="text-futuristic-neon" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                AI Tutoring System
              </h3>
              <p className="text-gray-400 mb-4">
                Personalized AI tutors that adapt to each student's learning style, providing 
                customized support and challenges.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <FuturisticBadge>24/7 Support</FuturisticBadge>
                <FuturisticBadge variant="purple">Adaptive</FuturisticBadge>
                <FuturisticBadge variant="teal">Multi-modal</FuturisticBadge>
              </div>
            </FuturisticCard>
            
            <FuturisticCard className="h-full">
              <div className="w-12 h-12 rounded-lg bg-futuristic-purple/20 flex items-center justify-center mb-4">
                <Microscope size={24} className="text-futuristic-purple" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Nano-Lab Simulations
              </h3>
              <p className="text-gray-400 mb-4">
                Students manipulate matter at the atomic level through haptic interfaces, 
                exploring nanoscale phenomena firsthand.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <FuturisticBadge>Hands-on</FuturisticBadge>
                <FuturisticBadge variant="purple">Molecular</FuturisticBadge>
                <FuturisticBadge variant="teal">Safe</FuturisticBadge>
              </div>
            </FuturisticCard>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-futuristic-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Experience the <span className="text-futuristic-neon text-glow">Future</span> of Education?
            </h2>
            <p className="text-gray-300">
              Schedule a virtual tour of our campus and learn more about our innovative academic programs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" className="bg-gradient-to-r from-futuristic-blue to-futuristic-purple hover:from-futuristic-purple hover:to-futuristic-blue shadow-lg hover:shadow-futuristic-blue/50 transition-all">
                Schedule a Tour
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicsPage;
