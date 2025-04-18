import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Rocket, 
  GraduationCap, 
  Users, 
  Building, 
  FileText, 
  CalendarDays 
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-futuristic-dark/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            onClick={closeMenu}
          >
            <div className="relative w-10 h-10 bg-futuristic-blue rounded-lg flex items-center justify-center overflow-hidden neon-border">
              <span className="text-white font-bold text-xl">A</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-futuristic-blue to-futuristic-purple opacity-50"></div>
            </div>
            <div>
              <h1 className="font-bold text-lg text-white leading-tight">
                AHLCON <span className="text-futuristic-neon text-glow">2050</span>
              </h1>
              <p className="text-xs text-gray-300">Future Vision</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-futuristic-neon transition-colors">Home</Link>
            <Link to="/about" className="text-white hover:text-futuristic-neon transition-colors">About Us</Link>
            <Link to="/academics" className="text-white hover:text-futuristic-neon transition-colors">Academics</Link>
            <Link to="/campus" className="text-white hover:text-futuristic-neon transition-colors">Campus</Link>
            <Link to="/admissions" className="text-white hover:text-futuristic-neon transition-colors">Admissions</Link>
            <Link to="/news" className="text-white hover:text-futuristic-neon transition-colors">News & Events</Link>
            
            <Link 
              to="/apply" 
              className="bg-gradient-to-r from-futuristic-blue to-futuristic-purple hover:from-futuristic-purple hover:to-futuristic-blue text-white rounded-lg px-4 py-2 transition-all duration-300 shadow-lg hover:shadow-futuristic-blue/50"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 visible glass"
            : "max-h-0 opacity-0 invisible"
        } overflow-hidden`}
      >
        <div className="container mx-auto px-4 py-3 space-y-3">
          <Link
            to="/"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
            onClick={closeMenu}
          >
            <Rocket size={20} className="text-futuristic-neon" />
            <span>Home</span>
          </Link>
          <Link
            to="/about"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
            onClick={closeMenu}
          >
            <Users size={20} className="text-futuristic-neon" />
            <span>About Us</span>
          </Link>
          <Link
            to="/academics"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
            onClick={closeMenu}
          >
            <GraduationCap size={20} className="text-futuristic-neon" />
            <span>Academics</span>
          </Link>
          <Link
            to="/campus"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
            onClick={closeMenu}
          >
            <Building size={20} className="text-futuristic-neon" />
            <span>Campus</span>
          </Link>
          <Link
            to="/admissions"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
            onClick={closeMenu}
          >
            <FileText size={20} className="text-futuristic-neon" />
            <span>Admissions</span>
          </Link>
          <Link
            to="/news"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
            onClick={closeMenu}
          >
            <CalendarDays size={20} className="text-futuristic-neon" />
            <span>News & Events</span>
          </Link>
          <div className="pt-2 pb-3">
            <Link
              to="/apply"
              className="w-full inline-block text-center bg-gradient-to-r from-futuristic-blue to-futuristic-purple hover:from-futuristic-purple hover:to-futuristic-blue text-white shadow-lg hover:shadow-futuristic-blue/50 px-4 py-2 rounded-lg"
              onClick={closeMenu}
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
