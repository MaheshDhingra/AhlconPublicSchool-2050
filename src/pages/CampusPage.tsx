import {
  SectionTitle,
  FuturisticCard,
  FuturisticBadge,
} from "@/components/ui/ExtendedFuturisticComponents";
import { Button } from "@/components/ui/button";
import {
  Users,
  Rocket,
  Brain,
  Microscope,
  Beaker,
  Building2,
  Globe,
  Cpu,
} from "lucide-react";

const CampusPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-futuristic-dark py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <SectionTitle
                title="Explore Our Futuristic Campus"
                subtitle="A hub of innovation and learning for the 21st century"
              />
              <p className="text-gray-300 leading-relaxed">
                Welcome to Ahlcon Public School's state-of-the-art campus, designed
                to inspire creativity, collaboration, and discovery. Our facilities
                blend cutting-edge technology with sustainable design, creating an
                optimal learning environment for the leaders of tomorrow.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-gradient-to-r from-futuristic-blue to-futuristic-purple hover:from-futuristic-purple hover:to-futuristic-blue">
                  Virtual Tour
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Campus Map
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-[400px] rounded-lg overflow-hidden holographic">
                <img
                  src="https://source.unsplash.com/photo-1605810230434-7631ac76ec81"
                  alt="Ahlcon Public School Campus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-futuristic-blue/20 to-futuristic-purple/20"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-lg w-2/3 glass">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-futuristic-blue/20 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-futuristic-neon" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">
                      Sustainable Architecture
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Eco-friendly design and energy-efficient systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Explore Our Key Features"
            subtitle="Cutting-edge facilities designed for future-ready education"
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <FuturisticCard className="h-full">
              <div className="w-12 h-12 rounded-lg bg-futuristic-blue/20 flex items-center justify-center mb-4">
                <Cpu size={24} className="text-futuristic-neon" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Quantum Computing Lab
              </h3>
              <p className="text-gray-400">
                Hands-on experience with quantum technologies, enabling students to
                solve complex problems and innovate in the quantum realm.
              </p>
              <FuturisticBadge>Quantum</FuturisticBadge>
            </FuturisticCard>

            <FuturisticCard className="h-full">
              <div className="w-12 h-12 rounded-lg bg-futuristic-purple/20 flex items-center justify-center mb-4">
                <Beaker size={24} className="text-futuristic-purple" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Bioengineering Labs
              </h3>
              <p className="text-gray-400">
                State-of-the-art facilities for genetic engineering, synthetic
                biology, and biomedical research, fostering innovation in healthcare.
              </p>
              <FuturisticBadge variant="purple">Bioengineering</FuturisticBadge>
            </FuturisticCard>

            <FuturisticCard className="h-full">
              <div className="w-12 h-12 rounded-lg bg-futuristic-teal/20 flex items-center justify-center mb-4">
                <Globe size={24} className="text-futuristic-teal" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Holographic Classrooms
              </h3>
              <p className="text-gray-400">
                Immersive 3D learning environments that bring abstract concepts to
                life, connecting students with global experts and peers.
              </p>
              <FuturisticBadge variant="teal">Holographic</FuturisticBadge>
            </FuturisticCard>

            <FuturisticCard className="h-full">
              <div className="w-12 h-12 rounded-lg bg-futuristic-accent/20 flex items-center justify-center mb-4">
                <Rocket size={24} className="text-futuristic-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Zero-Gravity Research Facility
              </h3>
              <p className="text-gray-400">
                Unique facility for conducting experiments in simulated zero-gravity
                conditions, pushing the boundaries of scientific discovery.
              </p>
              <FuturisticBadge variant="accent">Zero-G</FuturisticBadge>
            </FuturisticCard>

            <FuturisticCard className="h-full">
              <div className="w-12 h-12 rounded-lg bg-futuristic-blue/20 flex items-center justify-center mb-4">
                <Brain size={24} className="text-futuristic-neon" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Neural Learning Center
              </h3>
              <p className="text-gray-400">
                Advanced facilities for cognitive enhancement, personalized learning,
                and brain-computer interface research, optimizing the learning process.
              </p>
              <FuturisticBadge>Neural</FuturisticBadge>
            </FuturisticCard>

            <FuturisticCard className="h-full">
              <div className="w-12 h-12 rounded-lg bg-futuristic-purple/20 flex items-center justify-center mb-4">
                <Users size={24} className="text-futuristic-purple" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Global Collaboration Hub
              </h3>
              <p className="text-gray-400">
                A virtual and physical space for students to connect with peers and
                experts worldwide, fostering cross-cultural understanding and
                collaboration.
              </p>
              <FuturisticBadge variant="purple">Global</FuturisticBadge>
            </FuturisticCard>
          </div>
        </div>
      </section>

      {/* Sustainable Initiatives */}
      <section className="py-20 bg-futuristic-dark">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Sustainable Initiatives"
            subtitle="Committed to environmental stewardship and responsible innovation"
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <FuturisticCard className="h-full">
              <h3 className="text-xl font-bold text-white mb-4">
                Eco-Friendly Infrastructure
              </h3>
              <p className="text-gray-400">
                Our campus is designed with sustainable materials, energy-efficient
                systems, and green spaces to minimize our environmental impact.
              </p>
              <ul className="list-disc list-inside text-gray-400 mt-4">
                <li>Solar panel arrays for renewable energy</li>
                <li>Rainwater harvesting and water recycling systems</li>
                <li>Smart building management for energy optimization</li>
              </ul>
            </FuturisticCard>

            <FuturisticCard className="h-full">
              <h3 className="text-xl font-bold text-white mb-4">
                Green Education Programs
              </h3>
              <p className="text-gray-400">
                We integrate sustainability into our curriculum, empowering students
                to become environmental stewards and develop innovative solutions for a
                greener future.
              </p>
              <ul className="list-disc list-inside text-gray-400 mt-4">
                <li>Sustainable agriculture and urban farming projects</li>
                <li>Environmental science and conservation courses</li>
                <li>Community outreach programs for ecological awareness</li>
              </ul>
            </FuturisticCard>
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experience Our Campus <span className="text-futuristic-neon">Virtually</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Take a virtual tour of Ahlcon Public School and explore our
              state-of-the-art facilities, innovative learning spaces, and
              sustainable initiatives from the comfort of your home.
            </p>
            <Button className="bg-gradient-to-r from-futuristic-blue to-futuristic-purple hover:from-futuristic-purple hover:to-futuristic-blue">
              Start Virtual Tour
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusPage;
