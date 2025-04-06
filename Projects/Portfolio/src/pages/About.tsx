import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Book, Gamepad2, Cpu } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import JourneyTimeline from '@/components/about/JourneyTimeline';
import HobbyCard from '@/components/about/HobbyCard';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const hobbies = [
  {
    icon: <Book />,
    title: 'Reading Books',
    description: 'Exploring knowledge beyond the screen.',
  },
  {
    icon: <Gamepad2 />,
    title: 'Gaming',
    description: 'BGMI, PUBG – Competitive gaming & strategy development.',
  },
  {
    icon: <Cpu />,
    title: 'Exploring Tech',
    description: 'Always learning & trying new tools/frameworks.',
  },
];

const About = () => {
  useEffect(() => {
    // Hero text animation
    gsap.from('.hero-text', {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.2,
      ease: 'power3.out',
    });

    // Work ethic text animation
    gsap.to('.work-ethic-text', {
      duration: 2,
      text: 'Dedicated, Always Learning, Ready to Explore New Tools!',
      ease: 'none',
      scrollTrigger: {
        trigger: '.work-ethic-section',
        start: 'top center',
      },
    });

    // Background gradient animation
    gsap.to('.gradient-bg', {
      backgroundPosition: '200% 200%',
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'none',
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="gradient-bg absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 bg-[length:200%_200%]" />
        <div className="container mx-auto px-4 relative">
          <motion.h1
            className="hero-text text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hey, I'm <span className="text-primary">Dax Patel</span>
          </motion.h1>
          <motion.p
            className="hero-text text-xl md:text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A Passionate Developer, Explorer, & Tech Enthusiast
          </motion.p>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            My Coding Journey
          </motion.h2>
          <JourneyTimeline />
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Beyond Code: My Passions
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
              <HobbyCard
                key={hobby.title}
                icon={hobby.icon}
                title={hobby.title}
                description={hobby.description}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Work Ethic Section */}
      <section className="work-ethic-section py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            Work Ethic & Mindset
          </motion.h2>
          <div className="max-w-2xl mx-auto">
            <p className="work-ethic-text text-xl md:text-2xl text-primary font-medium"></p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;