import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

interface FeaturedProjectProps {
  title: string;
  description: string;
  techStack: string[];
  challenges: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

const FeaturedProject = ({
  title,
  description,
  techStack,
  challenges,
  imageUrl,
  liveUrl,
  githubUrl,
}: FeaturedProjectProps) => {
  return (
    <Card className="relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-primary/5 -z-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
        <div>
          <CardHeader className="p-0">
            <CardTitle className="text-2xl mb-4">{title}</CardTitle>
            <CardDescription className="text-lg mb-6">{description}</CardDescription>
          </CardHeader>
          <CardContent className="p-0 mb-6">
            <div className="flex flex-wrap gap-2 mb-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Badge variant="secondary">{tech}</Badge>
                </motion.div>
              ))}
            </div>
            <div>
              <h4 className="font-semibold mb-2">Key Challenges & Learnings:</h4>
              <ul className="list-disc list-inside space-y-2">
                {challenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="text-muted-foreground"
                  >
                    {challenge}
                  </motion.li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter className="p-0 flex gap-4">
            {liveUrl && (
              <Button asChild>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Preview
                </a>
              </Button>
            )}
            {githubUrl && (
              <Button variant="outline" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </a>
              </Button>
            )}
          </CardFooter>
        </div>
        <div className="relative overflow-hidden rounded-lg">
          <motion.img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            initial={{ y: 0 }}
            animate={{ y: [0, -200, 0] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>
      </div>
    </Card>
  );
};

export default FeaturedProject;