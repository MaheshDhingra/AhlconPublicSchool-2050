
import { 
  SectionTitle, 
  FuturisticCard, 
  FuturisticBadge,
  TimelineItem
} from "@/components/ui/ExtendedFuturisticComponents";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Calendar, 
  User, 
  BarChart, 
  Award, 
  Check,
  Brain,
  Heart,
  Users
} from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AdmissionsPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-futuristic-dark py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <SectionTitle 
                title="Join the Future of Education" 
                subtitle="Our admissions process for the 2050-51 academic year"
              />
              <p className="text-gray-300 leading-relaxed">
                At Ahlcon Public School, we're looking for curious minds, creative thinkers, and 
                future leaders who are ready to embrace the challenges and opportunities of the 
                mid-21st century. Our holistic admissions process evaluates cognitive abilities, 
                emotional intelligence, adaptability, and passion for learning.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-gradient-to-r from-futuristic-blue to-futuristic-purple hover:from-futuristic-purple hover:to-futuristic-blue">
                  Apply Now
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Download Brochure
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-[400px] rounded-lg overflow-hidden holographic">
                <img 
                  src="/school.png" 
                  alt="Students at Ahlcon" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-futuristic-blue/20 to-futuristic-purple/20"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-lg w-3/4 glass">
                <div className="space-y-3">
                  <h3 className="text-white font-semibold">Application Timeline</h3>
                  <div className="flex items-center text-sm text-gray-300">
                    <div className="w-3 h-3 rounded-full bg-futuristic-neon mr-2"></div>
                    <span>Applications Open: August 15, 2050</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <div className="w-3 h-3 rounded-full bg-futuristic-purple mr-2"></div>
                    <span>Deadline: December 1, 2050</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <div className="w-3 h-3 rounded-full bg-futuristic-teal mr-2"></div>
                    <span>Decisions: February 15, 2051</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Admissions Process */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Admissions Process" 
            subtitle="A comprehensive approach to finding tomorrow's leaders"
            center={true}
          />
          
          <div className="mt-10">
            <TimelineItem 
              year="Step 1"
              title="Online Application"
              description="Complete our neural-adaptive application that adjusts to your child's responses and provides a personalized experience."
            />
            <TimelineItem 
              year="Step 2"
              title="Cognitive Assessment"
              description="A holistic evaluation of problem-solving abilities, creativity, and learning agility using our proprietary AI assessment tools."
            />
            <TimelineItem 
              year="Step 3"
              title="Virtual Interview"
              description="An immersive conversation with our admissions team through our holographic meeting platform or in person at our campus."
            />
            <TimelineItem 
              year="Step 4"
              title="Collaborative Project"
              description="Potential students participate in a group challenge to demonstrate teamwork, communication, and innovative thinking."
            />
            <TimelineItem 
              year="Step 5"
              title="Decision & Enrollment"
              description="Successful applicants receive personalized acceptance packages and begin their onboarding journey to Ahlcon."
            />
          </div>
        </div>
      </section>
      
      {/* What We Look For */}
      <section className="py-20 bg-futuristic-dark">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="What We Look For" 
            subtitle="The qualities we value in future Ahlcon students"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <FuturisticCard className="h-full">
              <div className="w-12 h-12 rounded-lg bg-futuristic-blue/20 flex items-center justify-center mb-4">
                <Brain size={24} className="text-futuristic-neon" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Cognitive Agility</h3>
              <p className="text-gray-400">
                We seek students who can adapt their thinking to new challenges, learn across 
                disciplines, and synthesize information in novel ways.
              </p>
            </FuturisticCard>
            
            <FuturisticCard className="h-full">
              <div className="w-12 h-12 rounded-lg bg-futuristic-purple/20 flex items-center justify-center mb-4">
                <Heart size={24} className="text-futuristic-purple" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Emotional Intelligence</h3>
              <p className="text-gray-400">
                The ability to understand oneself and others, navigate social complexities, and 
                make ethical decisions in an increasingly technological world.
              </p>
            </FuturisticCard>
            
            <FuturisticCard className="h-full">
              <div className="w-12 h-12 rounded-lg bg-futuristic-teal/20 flex items-center justify-center mb-4">
                <Users size={24} className="text-futuristic-teal" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Collaborative Spirit</h3>
              <p className="text-gray-400">
                Students who thrive on teamwork, value diverse perspectives, and can contribute to 
                collective problem-solving across physical and virtual spaces.
              </p>
            </FuturisticCard>
          </div>
        </div>
      </section>
      
      {/* Tuition & Financial Aid */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Tuition & Financial Aid" 
            subtitle="Making quality education accessible to promising students"
          />
          
          <Tabs defaultValue="tuition" className="mt-10">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8">
              <TabsTrigger value="tuition" className="data-[state=active]:bg-futuristic-blue/20 data-[state=active]:text-futuristic-neon">
                Tuition
              </TabsTrigger>
              <TabsTrigger value="aid" className="data-[state=active]:bg-futuristic-purple/20 data-[state=active]:text-futuristic-purple">
                Financial Aid
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="tuition" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FuturisticCard className="h-full">
                  <h3 className="text-xl font-bold text-white mb-4">Annual Tuition</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-white/10">
                      <span className="text-gray-300">Kindergarten - Grade 5</span>
                      <span className="text-futuristic-neon font-semibold">₹600,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-white/10">
                      <span className="text-gray-300">Grades 6 - 8</span>
                      <span className="text-futuristic-neon font-semibold">₹750,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-white/10">
                      <span className="text-gray-300">Grades 9 - 10</span>
                      <span className="text-futuristic-neon font-semibold">₹850,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-white/10">
                      <span className="text-gray-300">Grades 11 - 12</span>
                      <span className="text-futuristic-neon font-semibold">₹950,000</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mt-4">
                    Tuition includes access to all facilities, technology resources, personal AI tutor, 
                    and basic neural interface equipment.
                  </p>
                </FuturisticCard>
                
                <FuturisticCard className="h-full">
                  <h3 className="text-xl font-bold text-white mb-4">Additional Fees</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-white/10">
                      <span className="text-gray-300">Advanced Neural Interface (Optional)</span>
                      <span className="text-futuristic-purple font-semibold">₹50,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-white/10">
                      <span className="text-gray-300">Quantum Computing Lab Access (Grades 9-12)</span>
                      <span className="text-futuristic-purple font-semibold">₹35,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-white/10">
                      <span className="text-gray-300">Bioengineering Lab Access (Grades 9-12)</span>
                      <span className="text-futuristic-purple font-semibold">₹35,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-white/10">
                      <span className="text-gray-300">Global Learning Experience Program</span>
                      <span className="text-futuristic-purple font-semibold">₹75,000</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mt-4">
                    Fees are reviewed annually and may be adjusted to account for technological 
                    advancements and operational costs.
                  </p>
                </FuturisticCard>
              </div>
            </TabsContent>
            
            <TabsContent value="aid" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Our Commitment to Access</h3>
                  <p className="text-gray-300">
                    We believe that financial circumstances should not be a barrier to accessing 
                    world-class education. Our need-blind admissions process evaluates students based 
                    purely on merit, and we are committed to meeting 100% of demonstrated financial 
                    need for all admitted students.
                  </p>
                  <p className="text-gray-300">
                    Our AI-powered financial aid assessment uses a holistic approach to understand 
                    each family's financial situation and determine appropriate aid packages.
                  </p>
                  <div className="pt-4">
                    <Button className="bg-gradient-to-r from-futuristic-purple to-futuristic-blue hover:from-futuristic-blue hover:to-futuristic-purple">
                      Apply for Financial Aid
                    </Button>
                  </div>
                </div>
                
                <FuturisticCard className="h-full">
                  <h3 className="text-xl font-bold text-white mb-4">Scholarship Programs</h3>
                  <div className="space-y-4">
                    <div className="p-3 border border-futuristic-blue/30 rounded-lg bg-futuristic-blue/10">
                      <h4 className="text-futuristic-neon font-semibold">Innovator Scholarship</h4>
                      <p className="text-gray-400 text-sm">
                        Full-tuition scholarships for students demonstrating exceptional creative problem-solving abilities.
                      </p>
                    </div>
                    <div className="p-3 border border-futuristic-purple/30 rounded-lg bg-futuristic-purple/10">
                      <h4 className="text-futuristic-purple font-semibold">STEM+ Excellence Award</h4>
                      <p className="text-gray-400 text-sm">
                        Partial to full tuition for students with outstanding achievements in STEM fields.
                      </p>
                    </div>
                    <div className="p-3 border border-futuristic-teal/30 rounded-lg bg-futuristic-teal/10">
                      <h4 className="text-futuristic-teal font-semibold">Global Citizen Fellowship</h4>
                      <p className="text-gray-400 text-sm">
                        Comprehensive packages for international students bringing unique perspectives.
                      </p>
                    </div>
                    <div className="p-3 border border-futuristic-accent/30 rounded-lg bg-futuristic-accent/10">
                      <h4 className="text-futuristic-accent font-semibold">Community Impact Grant</h4>
                      <p className="text-gray-400 text-sm">
                        For students with demonstrated commitment to social initiatives and community service.
                      </p>
                    </div>
                  </div>
                </FuturisticCard>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-futuristic-dark">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Answers to common questions about our admissions process"
            center={true}
          />
          
          <div className="max-w-3xl mx-auto mt-10">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-white/10 rounded-lg bg-white/5 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-white hover:no-underline hover:bg-white/10">
                  What age groups does Ahlcon accept?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  Ahlcon Public School accepts students from ages 5 to 18, corresponding to Kindergarten through Grade 12. Each grade has specific developmental-appropriate curricula and technologies.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border border-white/10 rounded-lg bg-white/5 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-white hover:no-underline hover:bg-white/10">
                  Is prior experience with neural interfaces required?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  No prior experience is necessary. All new students participate in our Neural Onboarding Program, which gradually introduces them to our neural learning technologies at an appropriate pace.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border border-white/10 rounded-lg bg-white/5 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-white hover:no-underline hover:bg-white/10">
                  What is the typical class size?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  Our physical classes typically have 15-20 students, while our virtual and hybrid learning environments can accommodate flexible groupings based on learning objectives and student needs.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border border-white/10 rounded-lg bg-white/5 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-white hover:no-underline hover:bg-white/10">
                  How does Ahlcon accommodate different learning styles?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  Our AI-enhanced education system adapts to individual learning profiles, preferences, and strengths. Each student's experience is personalized through our adaptive curriculum and neural feedback systems.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border border-white/10 rounded-lg bg-white/5 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-white hover:no-underline hover:bg-white/10">
                  What higher education institutions do Ahlcon graduates attend?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  Our graduates are highly sought after by prestigious institutions worldwide, including MIT Quantum Institute, Oxford Neurotech, Tokyo Advanced Sciences, and the Mars Colony University. Many also pursue entrepreneurial ventures or specialized apprenticeships.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="border border-white/10 rounded-lg bg-white/5 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-white hover:no-underline hover:bg-white/10">
                  Does Ahlcon offer boarding facilities?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  Yes, we offer state-of-the-art boarding facilities for students in grades 6-12. Our residential program includes smart living spaces, 24/7 support staff, and a rich after-hours learning and cultural program.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center glass p-8 rounded-xl border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Begin Your <span className="text-futuristic-neon text-glow">Journey</span> with Ahlcon
            </h2>
            <p className="text-gray-300 mb-8">
              Take the first step toward an extraordinary education that will prepare your child 
              for the challenges and opportunities of 2050 and beyond.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button className="bg-gradient-to-r from-futuristic-blue to-futuristic-purple hover:from-futuristic-purple hover:to-futuristic-blue">
                <FileText className="mr-2 h-4 w-4" />
                Apply Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <Calendar className="mr-2 h-4 w-4" />
                Open House Events
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <User className="mr-2 h-4 w-4" />
                Contact Admissions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionsPage;
