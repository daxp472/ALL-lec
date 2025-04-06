import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  progress: number;
  delay: number;
}

const SkillCard = ({ icon, name, progress, delay }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-card p-6 rounded-lg shadow-lg"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="text-primary text-2xl">{icon}</div>
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
      <Progress value={progress} className="h-2" />
      <span className="text-sm text-muted-foreground mt-2 block">
        {progress}% Proficiency
      </span>
    </motion.div>
  );
};

export default SkillCard;