import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="text-center p-6">
      <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="w-10 h-10 text-secondary" />
      </div>
      <h3 className="font-heading font-bold text-lg text-foreground mb-3">{title}</h3>
      <p className="font-body text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;