import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Palette, Database, Server, Blocks, Layers, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroScene from '@/components/home/HeroScene';
import SkillCard from '@/components/home/SkillCard';
import ServiceCard from '@/components/home/ServiceCard';
import ResumeDownload from '@/components/home/ResumeDownload';
import Typed from 'typed.js';

const skills = [
  { icon: <Code2 />, name: 'React', progress: 90 },
  { icon: <Palette />, name: 'Tailwind CSS', progress: 85 },
  { icon: <Database />, name: 'MongoDB', progress: 80 },
  { icon: <Server />, name: 'Node.js', progress: 85 },
  { icon: <Blocks />, name: 'ShadCN', progress: 80 },
  { icon: <Layers />, name: 'Material-UI', progress: 75 },
];

const services = [
  {
    icon: <Code2 />,
    title: 'Web Development',
    description: 'Modern, responsive web applications built with React and Next.js',
  },
  {
    icon: <Server />,
    title: 'Backend Development',
    description: 'Scalable backend solutions with Node.js and MongoDB',
  },
  {
    icon: <Palette />,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces with modern design principles',
  },
];

// Social media links configuration
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/daxp472',
    icon: <Github className="w-5 h-5" />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dax-cg/',
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    name: 'Twitter',
    url: 'https://x.com/dax_CG',
    icon: <Twitter className="w-5 h-5" />,
  },
];

const Home = () => {
  const navigate = useNavigate();
  const typedRef = useRef<Typed | null>(null);

  useEffect(() => {
    // Typing effect
    typedRef.current = new Typed('.typed-text', {
      strings: ['Developer', 'Designer', 'Innovator'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <HeroScene />
        <div className="container mx-auto px-4">
          <div className="max-w-2xl relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Hey, I'm{' '}
              <span className="text-primary">Dax Patel</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8"
            >
              <span className="typed-text"></span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="mr-4"
                onClick={() => navigate('/projects')}
              >
                View Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/contact')}
              >
                Contact Me
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Skills & Tools
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                icon={skill.icon}
                name={skill.name}
                progress={skill.progress}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Want a Site?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Download Resume
          </motion.h2>
          <div className="max-w-xl mx-auto">
            <ResumeDownload />
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            Let's Connect
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((social) => (
              <Button
                key={social.name}
                variant="outline"
                size="lg"
                asChild
                className="gap-2"
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                  {social.name}
                </a>
              </Button>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;