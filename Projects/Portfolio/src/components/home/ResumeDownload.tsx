import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileDown, FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from 'sonner';

const ResumeDownload = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = (format: 'pdf' | 'docx') => {
    // Replace these URLs with your actual resume file URLs
    const files = {
      pdf: '/resume-dax-patel.pdf',
      docx: '/resume-dax-patel.docx'
    };

    const link = document.createElement('a');
    link.href = files[format];
    link.download = `Dax_Patel_Resume.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success('Resume download started!');
  };

  return (
    <Card className="relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-primary/5 -z-10"
        animate={{
          scale: isHovered ? 1.5 : 1,
          rotate: isHovered ? 45 : 0,
        }}
        transition={{ duration: 0.5 }}
      />
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Download Resume
        </CardTitle>
        <CardDescription>
          Get my latest resume in your preferred format
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-4">
        <Button
          variant="default"
          size="lg"
          className="flex-1"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => handleDownload('pdf')}
        >
          <FileDown className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="lg"
              className="flex-1"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Download className="w-4 h-4 mr-2" />
              More Formats
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => handleDownload('pdf')}>
              <FileDown className="w-4 h-4 mr-2" />
              PDF Format
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleDownload('docx')}>
              <FileDown className="w-4 h-4 mr-2" />
              DOCX Format
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardContent>
    </Card>
  );
};

export default ResumeDownload