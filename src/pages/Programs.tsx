import Navigation from '@/components/Navigation';
import ProgramCard from '@/components/ProgramCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Code, 
  Palette, 
  Smartphone, 
  Settings, 
  Lightbulb 
} from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: Bot,
      title: "AI Adventures",
      tagline: "Meet Your First Friendly Robot – Learn AI the fun way!",
      description: "Introduce kids to artificial intelligence through interactive games and friendly AI companions. Students will learn how AI works in everyday life, create simple chatbots, and explore machine learning concepts through fun, visual activities. Perfect for curious minds wanting to understand the technology shaping our future."
    },
    {
      icon: Code,
      title: "Python for Young Coders",
      tagline: "Turn ideas into code – your first step as a real programmer!",
      description: "Start the coding journey with Python, the world's most beginner-friendly programming language. Through creative projects like drawing with code, building simple games, and creating interactive stories, kids learn fundamental programming concepts while having fun and seeing immediate results."
    },
    {
      icon: Palette,
      title: "Creative Tech Lab",
      tagline: "Unleash your imagination – design games, art, and stories with tech!",
      description: "Blend creativity with technology in this multimedia program. Students create digital art, design simple games, compose music with code, and bring stories to life through animation. Perfect for artistic kids who want to explore how technology can enhance their creative expression."
    },
    {
      icon: Smartphone,
      title: "Build Your First App",
      tagline: "From idea to app – create something the world can use!",
      description: "Turn ideas into reality by building real mobile applications. Using beginner-friendly tools, students learn app design principles, user experience basics, and bring their creative concepts to life. They'll finish with a working app they can share with family and friends."
    },
    {
      icon: Settings,
      title: "Robotics & Smart Machines",
      tagline: "Bring machines to life – explore the magic of robotics!",
      description: "Enter the exciting world of robotics by building and programming real robots. Students learn about sensors, motors, and programming logic while creating robots that can move, respond to their environment, and complete fun challenges. Hands-on engineering at its best!"
    },
    {
      icon: Lightbulb,
      title: "Design & Innovation Studio",
      tagline: "Solve problems like an innovator – blend creativity and technology!",
      description: "Develop critical thinking and innovation skills by identifying real-world problems and creating technology-based solutions. Students learn design thinking, prototyping, and presentation skills while working on projects that could actually make a difference in their community."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-6 text-shadow">
            Our Programs
          </h1>
          <p className="font-body text-primary-foreground/90 text-lg md:text-xl max-w-3xl mx-auto text-shadow">
            Comprehensive tech education programs designed to inspire, engage, and empower young minds
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {programs.map((program, index) => (
              <ProgramCard
                key={index}
                icon={program.icon}
                title={program.title}
                tagline={program.tagline}
                description={program.description}
                variant="detailed"
              />
            ))}
          </div>
          
          {/* Learning Outcomes */}
          <div className="bg-muted/30 rounded-lg p-8 md:p-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8 text-center">
              What Your Child Will Gain
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Technical Skills</h3>
                <p className="font-body text-muted-foreground">Programming fundamentals, logical thinking, and hands-on experience with real technology tools.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Creative Problem-Solving</h3>
                <p className="font-body text-muted-foreground">Learn to approach challenges creatively and develop innovative solutions using technology.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Confidence & Communication</h3>
                <p className="font-body text-muted-foreground">Build confidence through project presentations and collaborative learning experiences.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Future-Ready Skills</h3>
                <p className="font-body text-muted-foreground">Prepare for an increasingly digital world with essential 21st-century skills.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Collaboration</h3>
                <p className="font-body text-muted-foreground">Work effectively in teams, share ideas, and learn from peers in a supportive environment.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Digital Citizenship</h3>
                <p className="font-body text-muted-foreground">Understand responsible technology use and develop healthy digital habits.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
            Ready to Enroll Your Child?
          </h2>
          <p className="font-body text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Give your child the opportunity to explore technology in a fun, supportive environment.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-semibold text-lg px-8 py-6"
          >
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Programs;