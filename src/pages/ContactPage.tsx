
import { 
  SectionTitle, 
  FuturisticCard
} from "@/components/ui/FuturisticComponents";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  BrainCircuit,
  MessagesSquare
} from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-futuristic-dark py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle 
              title="Get in Touch" 
              subtitle="Connect with us through multiple channels, both traditional and neural"
              center={true}
            />
            <p className="text-gray-300 mt-4">
              We're here to answer your questions about admissions, curriculum, campus facilities, 
              or any other inquiries about Ahlcon Public School. Choose the communication method 
              that works best for you.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Methods Section */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FuturisticCard className="text-center">
              <div className="w-16 h-16 mx-auto bg-futuristic-blue/20 rounded-full flex items-center justify-center mb-4">
                <MessagesSquare className="w-8 h-8 text-futuristic-neon" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Traditional Contact</h3>
              <p className="text-gray-400 mb-6">
                Reach us through conventional communication methods
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Mail className="w-5 h-5 text-futuristic-neon" />
                  <span className="text-gray-300">apsmayurvihar1@gmail.com</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5 text-futuristic-neon" />
                  <span className="text-gray-300">+91-11-46347777</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="w-5 h-5 text-futuristic-neon" />
                  <span className="text-gray-300">Mayur Vihar, Phase-1, Delhi-110091</span>
                </div>
              </div>
            </FuturisticCard>
            
            <FuturisticCard className="text-center">
              <div className="w-16 h-16 mx-auto bg-futuristic-purple/20 rounded-full flex items-center justify-center mb-4">
                <BrainCircuit className="w-8 h-8 text-futuristic-purple" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Neural Connect</h3>
              <p className="text-gray-400 mb-6">
                For neural interface users, connect directly with our AI assistant
              </p>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Neural Address: <span className="text-futuristic-purple font-mono">ahlcon.edu/neural</span>
                </p>
                <p className="text-gray-300">
                  Connection Protocol: <span className="text-futuristic-purple font-mono">NCP-v4.2</span>
                </p>
                <p className="text-gray-300">
                  Encryption: <span className="text-futuristic-purple font-mono">Quantum-256</span>
                </p>
              </div>
              <Button className="mt-6 bg-futuristic-purple hover:bg-futuristic-purple/80">
                Initialize Neural Connection
              </Button>
            </FuturisticCard>
            
            <FuturisticCard className="text-center">
              <div className="w-16 h-16 mx-auto bg-futuristic-teal/20 rounded-full flex items-center justify-center mb-4">
                <Send className="w-8 h-8 text-futuristic-teal" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Visit Hours</h3>
              <p className="text-gray-400 mb-6">
                Schedule a visit to our campus or join a virtual tour
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold">Physical Campus Tours</h4>
                  <p className="text-gray-300">Monday - Friday: 10:00 - 15:00</p>
                  <p className="text-gray-300">Saturday: 10:00 - 12:00</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Virtual Tours</h4>
                  <p className="text-gray-300">Available 24/7</p>
                  <p className="text-gray-300">Live Guide: Weekdays 09:00 - 17:00</p>
                </div>
              </div>
              <Button className="mt-6 bg-futuristic-teal hover:bg-futuristic-teal/80">
                Schedule a Visit
              </Button>
            </FuturisticCard>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-20 bg-futuristic-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionTitle 
              title="Send Us a Message" 
              subtitle="We'll respond to your inquiry within 24 hours"
              center={true}
            />
            
            <FuturisticCard className="mt-10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-white">Full Name</label>
                    <Input 
                      id="name" 
                      placeholder="Enter your name" 
                      className="bg-white/5 border-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-white">Email Address</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      className="bg-white/5 border-white/10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-white">Subject</label>
                  <Input 
                    id="subject" 
                    placeholder="What is your message about?" 
                    className="bg-white/5 border-white/10"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-white">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Write your message here..." 
                    className="bg-white/5 border-white/10 min-h-[150px]"
                  />
                </div>
                
                <div className="flex justify-center">
                  <Button className="px-8 py-6 bg-gradient-to-r from-futuristic-blue to-futuristic-purple hover:from-futuristic-purple hover:to-futuristic-blue text-lg">
                    Send Message
                  </Button>
                </div>
              </form>
            </FuturisticCard>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Find Us" 
            subtitle="Our location in the heart of Delhi"
            center={true}
          />
          
          <div className="mt-10 h-[400px] w-full rounded-lg overflow-hidden relative">
            <img 
              src="https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
              alt="Ahlcon Public School Map" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-futuristic-blue/20 to-futuristic-purple/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass p-6 rounded-lg max-w-md text-center">
                <h3 className="text-xl font-bold text-white mb-2">Ahlcon Public School</h3>
                <p className="text-gray-300 mb-4">
                  Mayur Vihar, Phase-1, Delhi-110091, India
                </p>
                <Button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-300">
              We are conveniently located near the Mayur Vihar Phase-1 Metro Station, 
              with both conventional and autonomous vehicle parking available.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
