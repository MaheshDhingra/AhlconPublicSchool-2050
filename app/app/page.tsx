"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { FiCpu, FiUsers, FiBox, FiArrowRight, FiZap, FiBookOpen, FiEye, FiMessageSquare, FiUserCheck, FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import BasicScene from '@/components/Scene/BasicScene';

// --- Animation Variants remain the same ---
const sectionVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const containerVariants = { hidden: { opacity: 1 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function HomePage() {
  return (
    <>
      {/* --- Hero Section --- */}
      <ParallaxBanner style={{ height: '100vh' }} className={styles.hero}>
        <ParallaxBannerLayer speed={-35}>
           <Image src="/images/hero-background-layer1.jpg" alt="Futuristic school background" fill style={{ objectFit: 'cover' }} priority quality={90}/>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className={styles.heroOverlay} speed={-5} />
        <ParallaxBannerLayer style={{zIndex: 2}}>
          <div className={`container ${styles.heroContent}`}>
            {/* Decorative Shapes */}
            <motion.div className={`${styles.heroShape} ${styles.shape1}`} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.0, duration: 1.5, ease: "circOut" }}/>
            <motion.div className={`${styles.heroShape} ${styles.shape2}`} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }}/>
            <motion.div className={`${styles.heroShape} ${styles.shape3}`} initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.4, duration: 1.2, ease: "easeOut" }}/>
            {/* Content */}
            <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 80 }} className={styles.heroTitle}>
              Welcome to Ahlcon Public School
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className={`lead ${styles.heroSubtitle}`}>
              Leading the way towards 2050. Experience how we blend tradition with technology, shaping responsible innovators through AI, VR and future-focused learning.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}>
              <Link href="/about" className={`button ${styles.heroButton}`}>
                Discover Our Future <FiArrowRight style={{ marginLeft: '8px', verticalAlign: 'middle' }}/>
              </Link>
            </motion.div>
          </div>
           <motion.div className={styles.scrollIndicator} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}>
                 <FiChevronDown size={30} />
            </motion.div>
        </ParallaxBannerLayer>
      </ParallaxBanner>

      {/* --- Features Section --- */}
      <motion.section className={styles.features} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why Ahlcon Public School?</h2>
          <motion.div className={styles.featuresGrid} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.div variants={itemVariants} className={`${styles.featureCard} glass-effect`}>
              <FiCpu size={40} className={styles.featureIcon} />
              <h3>AI-Enhanced Learning</h3>
              <p>Personalized support systems and adaptive tools helping every student reach their potential.</p>
            </motion.div>
            <motion.div variants={itemVariants} className={`${styles.featureCard} glass-effect`}>
              <FiBox size={40} className={styles.featureIcon} />
              <h3>Immersive Experiences (VR/AR)</h3>
              <p>Bringing complex subjects to life through virtual labs and augmented reality explorations.</p>
            </motion.div>
            <motion.div variants={itemVariants} className={`${styles.featureCard} glass-effect`}>
              <FiUsers size={40} className={styles.featureIcon} />
              <h3>Collaborative Tech Spaces</h3>
              <p>Developing teamwork and digital literacy using interactive displays and shared project platforms.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* --- Vision Section --- */}
      <motion.section className={styles.vision} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <div className={`container ${styles.visionContent}`}>
          <div className={styles.visionText}>
            <h2 className={styles.sectionTitle} style={{textAlign: 'left', width: 'auto', display: 'inline-block'}}>Our Vision for 2050</h2>
            <p className="lead">To cultivate knowledgeable, compassionate, and future-ready citizens prepared to lead and innovate responsibly.</p>
            <p>Ahlcon Public School is committed to integrating advanced tools thoughtfully, enhancing our core values of academic excellence, ethical awareness, and holistic development in a dynamic world.</p>
            <Link href="/tech" className="button" style={{marginTop: '1rem'}}>
              Explore Our Technology <FiArrowRight style={{ marginLeft: '8px', verticalAlign: 'middle' }}/>
            </Link>
          </div>
          <motion.div className={styles.visionImage} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
            <Image src="/images/futuristic-vision.jpg" alt="Vision of future learning at Ahlcon" width={550} height={450} style={{ objectFit: 'cover' }}/>
          </motion.div>
        </div>
      </motion.section>

      {/* --- Technology Showcase --- */}
      <motion.section className={styles.techShowcase} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Integrated Technology Initiatives</h2>
          <p className="lead" style={{ textAlign: 'center', maxWidth: '800px', margin: '-2rem auto 2rem auto' }}>
            Leveraging next-generation tools to create unparalleled learning opportunities.
          </p>
           <div className={styles.techPlaceholder3D}>
                <BasicScene />
           </div>
          <motion.div className={styles.techGrid} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <motion.div variants={itemVariants} className={`${styles.techItem} glass-effect`}>
                  <FiZap size={35} className={styles.techIcon}/>
                  <h4>Advanced Simulation Labs</h4>
                  <p>High-fidelity simulations for science, engineering, and social studies exploration.</p>
              </motion.div>
              <motion.div variants={itemVariants} className={`${styles.techItem} glass-effect`}>
                  <FiBox size={35} className={styles.techIcon}/>
                  <h4>Data Science & AI Literacy</h4>
                  <p>Equipping students to understand and ethically utilize data and AI systems.</p>
              </motion.div>
              <motion.div variants={itemVariants} className={`${styles.techItem} glass-effect`}>
                  <FiCpu size={35} className={styles.techIcon}/>
                  <h4>Smart Campus Systems</h4>
                  <p>Optimized learning environments with real-time resource management and feedback.</p>
              </motion.div>
              <motion.div variants={itemVariants} className={`${styles.techItem} glass-effect`}>
                  <FiEye size={35} className={styles.techIcon}/>
                  <h4>AR Campus Navigation & Info</h4>
                  <p>Augmented reality overlays providing contextual information and interactive campus guides.</p>
              </motion.div>
          </motion.div>
        </div>
      </motion.section>

       {/* --- Curriculum Highlights --- */}
      <motion.section className={styles.curriculum} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <div className="container">
            <h2 className={styles.sectionTitle}>Future-Focused Curriculum</h2>
             <div className={styles.curriculumContent}>
                <motion.div className={styles.curriculumImage} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
                     <Image src="/images/curriculum-concept.jpg" alt="Visual representation of diverse learning streams" width={500} height={400} style={{ objectFit: 'cover' }}/>
                </motion.div>
                <div className={styles.curriculumText}>
                    <p className="lead" style={{marginBottom: '1.5rem'}}>Developing critical skills through dynamic pathways like:</p>
                    <ul>
                        <li><FiArrowRight size={16}/> Applied STEM & Robotics</li>
                        <li><FiArrowRight size={16}/> Global Citizenship & Ethics</li>
                        <li><FiArrowRight size={16}/> Digital Arts & Creative Technologies</li>
                        <li><FiArrowRight size={16}/> Sustainable Development Studies</li>
                        <li><FiArrowRight size={16}/> Advanced Computational Thinking</li>
                    </ul>
                    <Link href="/programs" className="button" style={{marginTop: '2rem'}}>
                        Explore Academics
                    </Link>
                </div>
             </div>
        </div>
      </motion.section>

      {/* --- Virtual Tour Teaser --- */}
      <motion.section className={styles.virtualTour} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <div className={styles.virtualTourOverlay}></div>
        <div className={`container ${styles.virtualTourContent}`}>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: 'spring' }}>
             <FiEye size={60} style={{ marginBottom: '1rem', filter: 'drop-shadow(var(--glow-primary))' }}/>
          </motion.div>
          <h2>Experience Ahlcon Virtually</h2>
          <p>Take a glimpse into our evolving campus. Full interactive virtual tour planned for future updates.</p>
          <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="button" disabled style={{opacity: 0.6, cursor: 'not-allowed', background: 'rgba(100, 100, 100, 0.5)', boxShadow: 'none'}}>
            Virtual Tour Coming Soon
          </motion.button>
        </div>
      </motion.section>

       {/* --- Testimonials / Spotlight --- */}
      <motion.section className={styles.testimonials} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Community Voices</h2>
           <motion.div className={styles.testimonialsGrid} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.div variants={itemVariants} className={`${styles.testimonialCard} glass-effect`}>
                <FiMessageSquare size={30} className={styles.testimonialIcon}/>
                <p className={styles.quote}>"The school's focus on integrating technology thoughtfully has really prepared my child for complex challenges."</p>
                <p className={styles.attribution}>- Parent</p>
            </motion.div>
            <motion.div variants={itemVariants} className={`${styles.testimonialCard} glass-effect`}>
                <FiUserCheck size={30} className={styles.testimonialIcon}/>
                <p className={styles.quote}>"Using the VR tools for biology made learning anatomy incredibly intuitive and memorable. It's unlike any textbook."</p>
                <p className={styles.attribution}>- Current Student</p>
            </motion.div>
            <motion.div variants={itemVariants} className={`${styles.testimonialCard} glass-effect`}>
                 <FiMessageSquare size={30} className={styles.testimonialIcon}/>
                 <p className={styles.quote}>"Ahlcon fosters not just academic growth, but also the critical thinking needed to navigate a tech-driven future responsibly."</p>
                <p className={styles.attribution}>- Teacher</p>
            </motion.div>
           </motion.div>
        </div>
      </motion.section>

      {/* --- Call to Action --- */}
      <motion.section className={styles.cta} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <div className="container">
          <h2>Ready for the Future of Learning?</h2>
          <p>Explore admissions requirements for Ahlcon Public School and learn how to join our forward-thinking community.</p>
          <div className={styles.ctaButtons}>
            <Link href="/admissions" className="button">
              Admissions Information <FiArrowRight style={{ marginLeft: '8px', verticalAlign: 'middle' }}/>
            </Link>
             <Link href="/contact" className="buttonOutline">
              Contact Us
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
}