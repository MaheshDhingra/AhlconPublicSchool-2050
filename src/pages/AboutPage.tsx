
import { 
  SectionTitle, 
  FuturisticCard, 
  TimelineItem, 
  StatItem 
} from "@/components/ui/ExtendedFuturisticComponents";
import { Button } from "@/components/ui/button";
import { Rocket, Users, Trophy, Target, GraduationCap } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-futuristic-dark py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <SectionTitle 
                title="About Ahlcon Public School" 
                subtitle="Pioneering education for the future since 1988"
              />
              <p className="text-gray-300 leading-relaxed">
                Ahlcon Public School stands at the forefront of educational innovation, 
                blending rich traditions with cutting-edge technology. Our journey from a 
                conventional school to a futuristic learning hub reflects our commitment 
                to nurturing tomorrow's leaders, thinkers, and innovators.
              </p>
              <p className="text-gray-300 leading-relaxed">
                In 2050, we continue to uphold our founding principles while embracing 
                the technological advancements that have transformed education. Our 
                approach combines human connection with AI-enhanced learning, creating 
                a unique educational experience that prepares students for the complexities 
                of the mid-21st century world.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-full h-[400px] rounded-lg overflow-hidden holographic">
                <img 
                  src="https://source.unsplash.com/photo-1485827404703-89b55fcc595e" 
                  alt="Ahlcon Public School Campus" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-futuristic-blue/20 to-futuristic-purple/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision & Mission */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <FuturisticCard className="h-full" glow={true}>
              <div className="flex flex-col h-full">
                <div className="w-16 h-16 bg-futuristic-blue/20 rounded-lg flex items-center justify-center mb-6">
                  <Rocket size={32} className="text-futuristic-neon" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed flex-grow">
                  To create a future-ready learning ecosystem where tradition and innovation 
                  coexist, empowering students to navigate and shape the world of 2050 and beyond 
                  with wisdom, ethics, and technological fluency.
                </p>
              </div>
            </FuturisticCard>
            
            <FuturisticCard className="h-full" glow={true}>
              <div className="flex flex-col h-full">
                <div className="w-16 h-16 bg-futuristic-purple/20 rounded-lg flex items-center justify-center mb-6">
                  <Target size={32} className="text-futuristic-purple" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed flex-grow">
                  To deliver personalized, AI-enhanced education that develops critical thinking, 
                  creativity, and adaptability while nurturing ethical values and global citizenship. 
                  We aim to prepare our students to lead with empathy and innovation in an increasingly 
                  complex technological society.
                </p>
              </div>
            </FuturisticCard>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-20 bg-futuristic-dark">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Core Values" 
            subtitle="The principles that guide our educational philosophy"
            center={true}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <FuturisticCard className="text-center">
              <div className="w-16 h-16 mx-auto bg-futuristic-blue/20 rounded-full flex items-center justify-center mb-4">
                <GraduationCap size={32} className="text-futuristic-neon" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
              <p className="text-gray-400">
                Pushing boundaries to achieve the highest standards in all endeavors
              </p>
            </FuturisticCard>
            
            <FuturisticCard className="text-center">
              <div className="w-16 h-16 mx-auto bg-futuristic-purple/20 rounded-full flex items-center justify-center mb-4">
                <Users size={32} className="text-futuristic-purple" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Collaboration</h3>
              <p className="text-gray-400">
                Fostering teamwork and community across physical and virtual spaces
              </p>
            </FuturisticCard>
            
            <FuturisticCard className="text-center">
              <div className="w-16 h-16 mx-auto bg-futuristic-teal/20 rounded-full flex items-center justify-center mb-4">
                <Rocket size={32} className="text-futuristic-teal" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
              <p className="text-gray-400">
                Embracing creativity and forward thinking to solve tomorrow's challenges
              </p>
            </FuturisticCard>
            
            <FuturisticCard className="text-center">
              <div className="w-16 h-16 mx-auto bg-futuristic-accent/20 rounded-full flex items-center justify-center mb-4">
                <Trophy size={32} className="text-futuristic-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Integrity</h3>
              <p className="text-gray-400">
                Maintaining ethical standards in an evolving technological landscape
              </p>
            </FuturisticCard>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Journey" 
            subtitle="From traditional beginnings to futuristic innovation"
          />
          
          <div className="mt-10">
            <TimelineItem 
              year="1988"
              title="Foundation"
              description="Ahlcon Public School was established with a vision to provide quality education focused on holistic development."
            />
            <TimelineItem 
              year="2010"
              title="Digital Transformation"
              description="Implemented the first Smart Classrooms and integrated digital learning tools into the curriculum."
            />
            <TimelineItem 
              year="2025"
              title="AI Integration"
              description="Pioneered AI-assisted learning pathways, becoming one of the first schools to use adaptive learning algorithms."
            />
            <TimelineItem 
              year="2035"
              title="Quantum Computing Lab"
              description="Established the first K-12 Quantum Computing Laboratory, allowing students hands-on experience with quantum technologies."
            />
            <TimelineItem 
              year="2045"
              title="Neuro-Enhanced Learning"
              description="Introduced brain-computer interface technologies for enhanced learning experiences, revolutionizing educational neuroscience."
            />
            <TimelineItem 
              year="2050"
              title="Future Vision Campus"
              description="Unveiled our completely redesigned campus featuring holographic classrooms, virtual reality spaces, and sustainable architecture."
            />
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-futuristic-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass rounded-xl p-8 border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatItem value="62" label="Years of Excellence" />
              <StatItem value="200+" label="Expert Educators" />
              <StatItem value="5000+" label="Global Alumni" />
              <StatItem value="100%" label="Innovation Rate" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Leadership" 
            subtitle="Meet the visionaries guiding Ahlcon into the future"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <FuturisticCard>
              <div className="aspect-square rounded-xl overflow-hidden mb-4">
                <img 
                  src="https://source.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  alt="Dr. Ashok Pandey" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white">Dr. Ashok Pandey</h3>
              <p className="text-futuristic-neon">Principal & Director</p>
              <p className="text-gray-400 mt-2">
                Leading Ahlcon's transformation into a future-ready institution with over 25 years of experience in educational innovation.
              </p>
            </FuturisticCard>
            
            <FuturisticCard>
              <div className="aspect-square rounded-xl overflow-hidden mb-4">
                <img 
                  src="https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                  alt="Dr. Neha Sharma" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white">Dr. Neha Sharma</h3>
              <p className="text-futuristic-purple">AI Integration Head</p>
              <p className="text-gray-400 mt-2">
                Expert in educational technology and AI-enhanced learning systems, shaping our adaptive curriculum.
              </p>
            </FuturisticCard>
            
            <FuturisticCard>
              <div className="aspect-square rounded-xl overflow-hidden mb-4">
                <img 
                  src="https://source.unsplash.com/photo-1518770660439-4636190af475" 
                  alt="Prof. Raj Kumar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white">Prof. Raj Kumar</h3>
              <p className="text-futuristic-teal">Quantum Sciences Chair</p>
              <p className="text-gray-400 mt-2">
                Internationally acclaimed quantum physicist heading our advanced science programs and research initiatives.
              </p>
            </FuturisticCard>
          </div>
          
          <div className="text-center mt-10">
            <Button className="bg-gradient-to-r from-futuristic-blue to-futuristic-purple hover:from-futuristic-purple hover:to-futuristic-blue">
              Meet the Full Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
