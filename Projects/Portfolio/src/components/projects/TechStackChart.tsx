import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

interface TechStackItem {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'APIs';
}

const techStack: TechStackItem[] = [
  { name: 'React', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 85, category: 'Frontend' },
  { name: 'GSAP', level: 80, category: 'Frontend' },
  { name: 'Node.js', level: 75, category: 'Backend' },
  { name: 'Express', level: 70, category: 'Backend' },
  { name: 'Firebase', level: 80, category: 'Backend' },
  { name: 'RESTful APIs', level: 85, category: 'APIs' },
  { name: 'GraphQL', level: 70, category: 'APIs' },
];

const TechStackChart = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {(['Frontend', 'Backend', 'APIs'] as const).map((category) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-xl font-semibold mb-4">{category}</h3>
          {techStack
            .filter((item) => item.category === category)
            .map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className="text-sm text-muted-foreground">{item.level}%</span>
                </div>
                <Progress value={item.level} className="h-2" />
              </motion.div>
            ))}
        </motion.div>
      ))}
    </div>
  );
};

export default TechStackChart;