import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { School, Code, Laptop } from 'lucide-react';

const timelineData = [
  {
    icon: <School />,
    title: 'JNV BK (9th - 12th)',
    description: 'Basic learning phase. Got my first interest in coding here!',
    date: '2019 - 2023',
  },
  {
    icon: <Laptop />,
    title: 'Rai University',
    description: 'Currently exploring advanced development & real-world projects.',
    date: '2023 - Present',
  },
  {
    icon: <Code />,
    title: 'Coding Experience',
    description: 'Frontend Focus (React, GSAP, ShadCN, Three.js, Tailwind) & Backend Basics (Node.js, Express, MongoDB, Firebase)',
    date: 'Ongoing',
  },
];

const JourneyTimeline = () => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20" />

      {/* Timeline items */}
      <div className="space-y-8 relative">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative pl-12"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <div className="text-primary">{item.icon}</div>
            </div>

            <Card className="relative overflow-hidden group">
              <motion.div
                className="absolute inset-0 bg-primary/5 -z-10"
                whileHover={{ scale: 1.5, rotate: 45 }}
                transition={{ duration: 0.5 }}
              />
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                </div>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default JourneyTimeline;