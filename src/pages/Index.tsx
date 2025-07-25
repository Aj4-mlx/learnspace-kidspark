import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import ProgramCard from '@/components/ProgramCard';
import FeatureCard from '@/components/FeatureCard';
import { 
  Bot, 
  Code, 
  Palette, 
  Smartphone, 
  Settings, 
  Lightbulb,
  BookOpen,
  Users,
  GraduationCap,
  Shield
} from 'lucide-react';
import heroImage from '@/assets/hero-kids-tech.jpg';
import collaborationImage from '@/assets/kids-collaboration.jpg';

const Index = () => {
  const programs = [
    {
      icon: Bot,
      title: "AI Adventures",
      tagline: "Meet Your First Friendly Robot – Learn AI the fun way!"
    },
    {
      icon: Code,
      title: "Python for Young Coders",
      tagline: "Turn ideas into code – your first step as a real programmer!"
    },
    {
      icon: Palette,
      title: "Creative Tech Lab",
      tagline: "Unleash your imagination – design games, art, and stories with tech!"
    },
    {
      icon: Smartphone,
      title: "Build Your First App",
      tagline: "From idea to app – create something the world can use!"
    },
    {
      icon: Settings,
      title: "Robotics & Smart Machines",
      tagline: "Bring machines to life – explore the magic of robotics!"
    },
    {
      icon: Lightbulb,
      title: "Design & Innovation Studio",
      tagline: "Solve problems like an innovator – blend creativity and technology!"
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Age-Appropriate Curriculum",
      description: "Carefully crafted programs designed specifically for kids ages 7–14, ensuring perfect learning progression."
    },
    {
      icon: Users,
      title: "Hands-On, Project-Based Learning",
      description: "Learn by doing! Every session includes practical projects that kids can be proud of and share with friends."
    },
    {
      icon: GraduationCap,
      title: "Experienced Educators",
      description: "Our team includes graduates from Ain Shams & AUC with expertise in both technology and child education."
    },
    {
      icon: Shield,
      title: "Safe & Supportive Environment",
      description: "A nurturing space where kids feel confident to explore, make mistakes, and grow their tech skills."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Kids engaging with technology" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 text-shadow">
              Discover AI & Tech Through Fun!
            </h1>
            <p className="font-body text-lg md:text-xl mb-8 text-shadow">
              Hands-on programs in AI, coding, and creative technology for kids ages 7–14.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-semibold text-lg px-8 py-6"
            >
              <Link to="/programs">Explore Our Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About LearnSpace */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                About LearnSpace
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-lg">
                LearnSpace empowers kids to explore technology through fun, project-based programs. 
                From AI to coding, our hands-on approach builds confidence, creativity, and future-ready skills. 
                We run sessions at multiple locations across Cairo, designed to make tech learning engaging, 
                safe, and inspiring.
              </p>
            </div>
            <div className="order-first md:order-last">
              <img 
                src={collaborationImage} 
                alt="Kids collaborating on tech projects" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose LearnSpace */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Why Choose LearnSpace?
            </h2>
            <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
              We're committed to providing the best tech education experience for your child.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Our Programs
            </h2>
            <p className="font-body text-muted-foreground text-lg max-w-3xl mx-auto">
              Explore our programs designed to spark curiosity and build future-ready skills.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <ProgramCard
                key={index}
                icon={program.icon}
                title={program.title}
                tagline={program.tagline}
                variant="home"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call-To-Action */}
      <section className="py-16 md:py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-6 text-shadow">
            Ready to Start Your Child's Tech Journey?
          </h2>
          <p className="font-body text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto text-shadow">
            Join hundreds of kids who are already exploring the exciting world of technology with LearnSpace.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-semibold text-lg px-8 py-6"
          >
            <Link to="/contact">Register Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
