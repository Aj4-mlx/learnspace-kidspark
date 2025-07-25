import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ProgramCardProps {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description?: string;
  variant?: 'home' | 'detailed';
}

const ProgramCard = ({ icon: Icon, title, tagline, description, variant = 'home' }: ProgramCardProps) => {
  return (
    <Card className="card-hover border-border bg-card h-full">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">{title}</h3>
            <p className="font-body font-medium text-accent text-sm mb-2">{tagline}</p>
            {variant === 'detailed' && description && (
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{description}</p>
            )}
          </div>
        </div>
      </CardContent>
      {variant === 'home' && (
        <CardFooter className="p-6 pt-0">
          <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Learn More
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProgramCard;