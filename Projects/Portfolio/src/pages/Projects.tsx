import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/projects/ProjectCard';
import FeaturedProject from '@/components/projects/FeaturedProject';
import TechStackChart from '@/components/projects/TechStackChart';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates.',
    techStack: ['React', 'Firebase', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/daxp472/TaskSync',
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather updates with interactive maps.',
    techStack: ['React', 'OpenWeather API', 'Chart.js'],
    liveUrl: 'https://weather-sphere-1.netlify.app/',
    githubUrl: 'https://github.com/daxp472/WeatherSphere',
  },
  {
    title: 'PrimePlay',
    description: 'A movie search app with ratings and trailer view.',
    techStack: ['React', 'TMDb API', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/daxp472/primeplay',
  }
];

const figmaProjects = [
  {
    title: 'GameZone UI Design',
    description: 'A modern and immersive gaming platform interface designed with user experience in mind. Features include game discovery, user profiles, and social integration.',
    techStack: ['Figma', 'UI/UX', 'Design System'],
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070',
    liveUrl: 'https://www.figma.com/design/G132E1ohYFA7hwn16abR8p/Game?node-id=0-1&t=T0KlfvNo3UuwTwD7-1',
    challenges: [
      'Creating an intuitive navigation system',
      'Designing responsive layouts for multiple devices',
      'Implementing a cohesive design system'
    ]
  },
  {
    title: 'Health Bot Interface',
    description: 'An AI-powered healthcare assistant interface designed to provide accessible medical information and symptom checking.',
    techStack: ['Figma', 'UI/UX', 'Healthcare'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070',
    liveUrl: 'https://www.figma.com/',
    challenges: [
      'Ensuring accessibility for all users',
      'Simplifying complex medical information',
      'Creating a trustworthy and professional appearance'
    ]
  },
  {
    title: 'Smart Home Dashboard',
    description: 'A comprehensive smart home control interface that allows users to manage all their connected devices from one place.',
    techStack: ['Figma', 'IoT', 'Dashboard'],
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070',
    liveUrl: 'https://www.figma.com/',
    challenges: [
      'Organizing complex device controls intuitively',
      'Creating a responsive and adaptive layout',
      'Implementing real-time status indicators'
    ]
  }
];

const featuredProject = {
  title: 'GameZone - Ultimate Gaming Hub',
  description: 'A dynamic gaming platform that provides game details, ratings, and trailers in one place.',
  techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
  challenges: [
    'Optimizing API calls for seamless game data fetching',
    'Enhancing UI/UX for better user engagement',
    'Implementing efficient state management for performance',
  ],
  imageUrl: 'https://images.unsplash.com/photo-1555617981-3b41c2f84b29?q=80&w=2070',
  liveUrl: 'https://gamezoneofficial.netlify.app',
  githubUrl: 'https://github.com/daxp472/game_zone',
};

const allTechStacks = Array.from(
  new Set(projects.flatMap((project) => project.techStack))
);

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const filteredProjects = selectedTech
    ? projects.filter((project) => project.techStack.includes(selectedTech))
    : projects;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Showcasing My Best Work
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A collection of projects built with passion, skill, and innovation.
            </p>
            <Button asChild>
              <a href="/contact">Let's Build One Together!</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Featured Project
          </motion.h2>
          <FeaturedProject {...featuredProject} />
        </div>
      </section>

      {/* Projects Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="development" className="w-full">
            <TabsList className="grid w-full max-w-[400px] grid-cols-2 mx-auto mb-12">
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="design">UI/UX Design</TabsTrigger>
            </TabsList>

            {/* Development Projects */}
            <TabsContent value="development">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-center mb-8"
              >
                Development Projects
              </motion.h2>

              {/* Tech Stack Filter */}
              <div className="flex flex-wrap gap-2 justify-center mb-12">
                <Button
                  variant={selectedTech === null ? 'default' : 'outline'}
                  onClick={() => setSelectedTech(null)}
                  size="sm"
                >
                  All
                </Button>
                {allTechStacks.map((tech) => (
                  <Button
                    key={tech}
                    variant={selectedTech === tech ? 'default' : 'outline'}
                    onClick={() => setSelectedTech(tech)}
                    size="sm"
                  >
                    {tech}
                  </Button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.title} {...project} delay={index * 0.1} />
                ))}
              </div>
            </TabsContent>

            {/* Figma Designs */}
            <TabsContent value="design">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-center mb-12"
              >
                UI/UX Design Projects
              </motion.h2>
              
              <div className="space-y-12">
                {figmaProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <FeaturedProject {...project} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Tech Stack Breakdown
          </motion.h2>
          <TechStackChart />
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;