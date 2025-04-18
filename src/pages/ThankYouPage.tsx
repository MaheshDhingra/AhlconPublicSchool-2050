
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/ExtendedFuturisticComponents";
import { CheckCircle, Home, School, Calendar, Phone } from "lucide-react";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-futuristic-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-1/4 -left-10 w-40 h-40 bg-futuristic-blue/20 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-0 w-60 h-60 bg-futuristic-purple/20 rounded-full filter blur-3xl animate-pulse" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 0.8, bounce: 0.4 }}
            className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-r from-futuristic-blue/20 to-futuristic-purple/20 flex items-center justify-center"
          >
            <CheckCircle size={40} className="text-futuristic-neon" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <SectionTitle
              title="Application Submitted Successfully!"
              subtitle="Thank you for choosing Ahlcon Public School"
              center={true}
            />

            <p className="text-gray-300 mt-6 leading-relaxed">
              We appreciate your interest in Ahlcon Public School. Our admissions team will carefully review your application 
              and contact you within 5-7 working days with further information about the admission process.
            </p>

            <div className="bg-white/5 rounded-lg p-6 space-y-4 backdrop-blur-sm">
              <h3 className="text-futuristic-neon font-semibold text-lg">Next Steps:</h3>
              <ul className="text-left text-gray-300 space-y-3">
                <li className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-futuristic-purple" />
                  You will receive an email with the schedule for entrance assessment and interaction
                </li>
                <li className="flex items-center gap-2">
                  <School className="h-5 w-5 text-futuristic-blue" />
                  Please keep the required documents ready for verification
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-futuristic-neon" />
                  For any queries, contact our admission helpdesk: +91 11 2275 1208
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                variant="outline"
                className="group relative overflow-hidden border-futuristic-neon/50"
              >
                <Link to="/">
                  <Home className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Return to Home
                  <div className="absolute inset-0 bg-futuristic-neon/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
              </Button>
              
              <Button
                asChild
                className="bg-gradient-to-r from-futuristic-blue to-futuristic-purple hover:from-futuristic-purple hover:to-futuristic-blue group relative overflow-hidden"
              >
                <Link to="/academics">
                  <School className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Explore Academics
                  <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
