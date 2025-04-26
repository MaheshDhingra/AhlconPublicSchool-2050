import React from 'react';
import { 
  FuturisticBadge, 
  FuturisticCard, 
  SectionTitle
} from "@/components/ui/FuturisticComponents";
import { TimelineItem } from "@/components/ui/ExtendedFuturisticComponents";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  Calendar, 
  User, 
  Tag, 
  ArrowUpRight, 
  Newspaper, 
  Link2,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Flame,
  TrendingUp,
  Zap,
  MessageSquare,
  Share2,
  FileText,
  Download
} from "lucide-react";

const NewsPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-futuristic-dark py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <SectionTitle 
              title="Stay Informed" 
              subtitle="The latest news, breakthroughs, and stories from Ahlcon Public School"
              center={true}
            />
            <p className="text-gray-300 leading-relaxed">
              Keep up-to-date with the cutting-edge research, innovative programs, and 
              achievements of our students and faculty. Explore the future of education 
              through our news and media.
            </p>
          </div>
        </div>
      </section>
      
      {/* News Feed Section */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main News Article */}
            <div className="md:col-span-2 space-y-6">
              <FuturisticCard className="space-y-4">
                <div className="relative">
                  <img 
                    src="/public/school.png" 
                    alt="Ahlcon's AI Research Lab Achieves Breakthrough" 
                    className="w-full rounded-lg object-cover aspect-video" 
                  />
                  <div className="absolute top-4 left-4">
                    <FuturisticBadge>Research</FuturisticBadge>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-white">
                    Ahlcon's AI Research Lab Achieves Breakthrough in Neural Networks
                  </h2>
                  <p className="text-gray-400">
                    Our researchers have developed a new neural network architecture that 
                    significantly improves the efficiency and accuracy of AI models.
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>July 18, 2050</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>5 min read</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Button variant="secondary" size="sm">
                      <Newspaper className="w-4 h-4 mr-2" />
                      Read More
                    </Button>
                    <a href="#" className="text-futuristic-neon hover:underline">
                      <Link2 className="w-4 h-4 mr-1" />
                      Source
                    </a>
                  </div>
                  
                  {/* Social Sharing Icons */}
                  <div className="flex items-center space-x-4 mt-2">
                    <a href="#" className="hover:text-futuristic-blue">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-futuristic-purple">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-futuristic-teal">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-futuristic-neon">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </FuturisticCard>
              
              {/* Additional News Article */}
              <FuturisticCard className="space-y-4">
                <div className="relative">
                  <img 
                    src="/public/school.png" 
                    alt="Students Win International Bioengineering Competition" 
                    className="w-full rounded-lg object-cover aspect-video" 
                  />
                  <div className="absolute top-4 left-4">
                    <FuturisticBadge variant="purple">Awards</FuturisticBadge>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-white">
                    Ahlcon Students Win International Bioengineering Competition
                  </h2>
                  <p className="text-gray-400">
                    Our talented students have won first place in the International 
                    Bioengineering Competition for their innovative work on sustainable 
                    bio-reactors.
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>June 22, 2050</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>7 min read</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Button variant="secondary" size="sm">
                      <Newspaper className="w-4 h-4 mr-2" />
                      Read More
                    </Button>
                    <a href="#" className="text-futuristic-neon hover:underline">
                      <Link2 className="w-4 h-4 mr-1" />
                      Source
                    </a>
                  </div>
                  
                  {/* Social Sharing Icons */}
                  <div className="flex items-center space-x-4 mt-2">
                    <a href="#" className="hover:text-futuristic-blue">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-futuristic-purple">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-futuristic-teal">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-futuristic-neon">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </FuturisticCard>
            </div>
            
            {/* Sidebar with Trending News and Events */}
            <div className="space-y-6">
              <FuturisticCard className="space-y-4">
                <h3 className="text-xl font-bold text-white">Trending News</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <Flame className="w-4 h-4 text-futuristic-neon" />
                    <a href="#" className="text-gray-300 hover:text-white hover:underline">
                      New Quantum Computing Curriculum Launched
                    </a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <TrendingUp className="w-4 h-4 text-futuristic-purple" />
                    <a href="#" className="text-gray-300 hover:text-white hover:underline">
                      AI Ethics Debate Sparks National Interest
                    </a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Zap className="w-4 h-4 text-futuristic-teal" />
                    <a href="#" className="text-gray-300 hover:text-white hover:underline">
                      Sustainable Energy Research Grant Awarded
                    </a>
                  </li>
                </ul>
              </FuturisticCard>
              
              <FuturisticCard className="space-y-4">
                <h3 className="text-xl font-bold text-white">Upcoming Events</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 text-futuristic-neon" />
                    <a href="#" className="text-gray-300 hover:text-white hover:underline">
                      AI and Society Conference - August 15-17
                    </a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 text-futuristic-purple" />
                    <a href="#" className="text-gray-300 hover:text-white hover:underline">
                      Bioengineering Workshop - September 5
                    </a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 text-futuristic-teal" />
                    <a href="#" className="text-gray-300 hover:text-white hover:underline">
                      Quantum Computing Seminar - October 10
                    </a>
                  </li>
                </ul>
              </FuturisticCard>
              
              {/* Newsletter Subscription */}
              <FuturisticCard className="space-y-4">
                <h3 className="text-xl font-bold text-white">Subscribe to Our Newsletter</h3>
                <p className="text-gray-400">
                  Stay updated with the latest news, events, and research from Ahlcon.
                </p>
                <div className="space-y-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-futuristic-neon focus:ring-0" 
                  />
                  <Button className="w-full bg-gradient-to-r from-futuristic-blue to-futuristic-purple hover:from-futuristic-purple hover:to-futuristic-blue">
                    Subscribe
                  </Button>
                </div>
              </FuturisticCard>
            </div>
          </div>
        </div>
      </section>
      
      {/* Multimedia Section */}
      <section className="py-20 bg-futuristic-dark">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Multimedia Gallery" 
            subtitle="Explore our visual stories and media content"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {/* Image Gallery */}
            <FuturisticCard>
              <div className="relative">
                <img 
                  src="/public/school.png" 
                  alt="Ahlcon Students in Quantum Computing Lab" 
                  className="w-full rounded-lg object-cover aspect-video" 
                />
                <div className="absolute top-4 left-4">
                  <FuturisticBadge>Image</FuturisticBadge>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-bold text-white">
                  Ahlcon Students in Quantum Computing Lab
                </h3>
                <p className="text-gray-400">
                  Students working on quantum algorithms and simulations.
                </p>
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">12 Comments</span>
                  <Share2 className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </FuturisticCard>
            
            {/* Video Gallery */}
            <FuturisticCard>
              <div className="relative">
                <video controls className="w-full rounded-lg object-cover aspect-video">
                  <source src="https://samplelib.com/lib/preview/mp4/sample-5mb.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute top-4 left-4">
                  <FuturisticBadge variant="purple">Video</FuturisticBadge>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-bold text-white">
                  Bioengineering Research Showcase
                </h3>
                <p className="text-gray-400">
                  A short video showcasing our latest bioengineering research projects.
                </p>
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">25 Comments</span>
                  <Share2 className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </FuturisticCard>
            
            {/* Document/Report */}
            <FuturisticCard>
              <div className="p-6 bg-white/5 rounded-lg flex flex-col h-full">
                <FileText className="w-8 h-8 text-futuristic-neon mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">
                  AI Ethics Report 2050
                </h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  Download our comprehensive report on the ethical implications of AI.
                </p>
                <a 
                  href="#" 
                  className="text-futuristic-neon hover:underline inline-flex items-center"
                >
                  <Download className="w-4 h-4 mr-1" />
                  Download (PDF)
                </a>
              </div>
            </FuturisticCard>
            
            {/* More Images */}
            <FuturisticCard>
              <div className="relative">
                <img 
                  src="/public/school.png" 
                  alt="Holographic Classroom Experience" 
                  className="w-full rounded-lg object-cover aspect-video" 
                />
                <div className="absolute top-4 left-4">
                  <FuturisticBadge>Image</FuturisticBadge>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-bold text-white">
                  Holographic Classroom Experience
                </h3>
                <p className="text-gray-400">
                  Students interacting in a holographic classroom environment.
                </p>
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">18 Comments</span>
                  <Share2 className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </FuturisticCard>
            
            {/* Another Video */}
            <FuturisticCard>
              <div className="relative">
                <video controls className="w-full rounded-lg object-cover aspect-video">
                  <source src="https://samplelib.com/lib/preview/mp4/sample-10mb.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute top-4 left-4">
                  <FuturisticBadge variant="purple">Video</FuturisticBadge>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-bold text-white">
                  Sustainable Energy Solutions Showcase
                </h3>
                <p className="text-gray-400">
                  A video highlighting our sustainable energy research initiatives.
                </p>
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">31 Comments</span>
                  <Share2 className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </FuturisticCard>
            
            {/* Another Document/Report */}
            <FuturisticCard>
              <div className="p-6 bg-white/5 rounded-lg flex flex-col h-full">
                <FileText className="w-8 h-8 text-futuristic-neon mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">
                  Quantum Computing Research Report
                </h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  Explore our latest findings in quantum computing research.
                </p>
                <a 
                  href="#" 
                  className="text-futuristic-neon hover:underline inline-flex items-center"
                >
                  <Download className="w-4 h-4 mr-1" />
                  Download (PDF)
                </a>
              </div>
            </FuturisticCard>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Ahlcon in Time" 
            subtitle="Key milestones and achievements in our journey"
            center={true}
          />
          
          <div className="mt-10">
            <TimelineItem 
              year="2025"
              title="Launched AI Ethics Program"
              description="Ahlcon was one of the first schools to introduce a comprehensive AI ethics program."
            />
            <TimelineItem 
              year="2035"
              title="Opened Quantum Computing Lab"
              description="Our state-of-the-art quantum computing lab enabled groundbreaking research."
            />
            <TimelineItem 
              year="2042"
              title="Won International Bioengineering Award"
              description="Our students won the prestigious International Bioengineering Award."
            />
            <TimelineItem 
              year="2050"
              title="Achieved Neural Network Breakthrough"
              description="Our AI research lab achieved a significant breakthrough in neural networks."
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-futuristic-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Stay Connected with the <span className="text-futuristic-neon text-glow">Future</span>
            </h2>
            <p className="text-gray-300">
              Subscribe to our newsletter and follow us on social media for the latest updates.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" className="bg-gradient-to-r from-futuristic-blue to-futuristic-purple hover:from-futuristic-purple hover:to-futuristic-blue shadow-lg hover:shadow-futuristic-blue/50 transition-all">
                Subscribe to Newsletter
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Follow Us on Social Media
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
