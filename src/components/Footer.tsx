
import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-futuristic-dark border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative w-10 h-10 bg-futuristic-blue rounded-lg flex items-center justify-center overflow-hidden">
                <span className="text-white font-bold text-xl">A</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-futuristic-blue to-futuristic-purple opacity-50"></div>
              </div>
              <h3 className="font-bold text-lg text-white">
                AHLCON <span className="text-futuristic-neon">2050</span>
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              Ahlcon Public School is at the forefront of educational innovation, 
              blending traditional academic excellence with cutting-edge technology 
              to prepare students for the challenges of the future.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Facebook">
                <Facebook size={16} className="text-white" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Twitter">
                <Twitter size={16} className="text-white" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Instagram">
                <Instagram size={16} className="text-white" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="LinkedIn">
                <Linkedin size={16} className="text-white" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="YouTube">
                <Youtube size={16} className="text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-futuristic-neon flex items-center transition-colors">
                  <ArrowRight size={14} className="mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-gray-400 hover:text-futuristic-neon flex items-center transition-colors">
                  <ArrowRight size={14} className="mr-2" />
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/campus" className="text-gray-400 hover:text-futuristic-neon flex items-center transition-colors">
                  <ArrowRight size={14} className="mr-2" />
                  Campus
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-gray-400 hover:text-futuristic-neon flex items-center transition-colors">
                  <ArrowRight size={14} className="mr-2" />
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-futuristic-neon flex items-center transition-colors">
                  <ArrowRight size={14} className="mr-2" />
                  News & Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-futuristic-neon flex items-center transition-colors">
                  <ArrowRight size={14} className="mr-2" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-futuristic-neon mr-3 mt-1" />
                <span className="text-gray-400">
                  Mayur Vihar, Phase-1, Delhi-110091, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-futuristic-neon mr-3" />
                <span className="text-gray-400">+91 11 2275 1208</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-futuristic-neon mr-3" />
                <span className="text-gray-400">info@ahlcon2050.edu</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter to get the latest updates and news about our school.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your Email Address"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-gradient-to-r from-futuristic-blue to-futuristic-purple hover:from-futuristic-purple hover:to-futuristic-blue">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ahlcon Public School. All rights reserved. 
            <span className="mx-2">|</span>
            <Link to="/privacy" className="hover:text-futuristic-neon transition-colors">
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link to="/terms" className="hover:text-futuristic-neon transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
