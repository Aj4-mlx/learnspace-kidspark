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
      title: "Discover AI Through Fun!",
      tagline: "Ages 8–10: Let your child explore the amazing world of Artificial Intelligence through games, drawing bots, voice assistants, and visual learning.",
      description: "🎮 Interactive AI Games - Fun games that teach AI concepts through play and exploration. 🖌 Creative Drawing Bots - Create art with AI assistants that respond to simple commands. 🎤 Text-to-Speech Creations - Turn written text into spoken voiceovers using AI-powered tools. Designed to spark curiosity and see results fast, all while having fun!"
    },
    {
      icon: Code,
      title: "AI + First Steps in Programming!",
      tagline: "Ages 11–13: Kids will dive deeper into AI with hands-on mini-projects and start learning introductory programming concepts like variables, logic, and automation.",
      description: "💻 Coding Fundamentals - Learn variables, functions, and logic through interactive challenges. 🤖 AI Mini-Projects - Create simple AI applications that respond to user input. ⚙ Automation Basics - Build programs that can perform tasks automatically. Perfect for curious minds who want to build their own smart apps!"
    },
    {
      icon: Lightbulb,
      title: "Real Coding Skills + Chatbot Creation",
      tagline: "Ages 14–16: Teens will gain solid foundations in Python, Java, and C++, and build intelligent chatbots like ChatGPT.",
      description: "💻 Programming Languages - Master the fundamentals of real-world programming. Languages covered: Python, Java, C++. 🤖 AI & Chatbot Development - Build intelligent conversational agents using modern AI techniques. 📁 Portfolio Projects - Create impressive projects that showcase real technical skills. Ideal for those who want to start building real-world skills and prepare for tech careers!"
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