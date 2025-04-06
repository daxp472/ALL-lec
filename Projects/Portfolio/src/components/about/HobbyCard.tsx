import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface HobbyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const HobbyCard = ({ icon, title, description, delay }: HobbyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -180 }}
      whileInView={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="perspective"
    >
      <Card className="relative overflow-hidden h-full">
        <CardHeader className="text-center">
          <div className="text-4xl text-primary mb-4">{icon}</div>
          <CardTitle className="mb-2">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
};

export default HobbyCard;