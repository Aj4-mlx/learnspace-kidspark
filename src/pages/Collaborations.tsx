import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  School, 
  Users, 
  BookOpen, 
  Clock,
  CheckCircle,
  Star
} from 'lucide-react';

const Collaborations = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: "Customized Curriculum",
      description: "Programs tailored to your school's specific needs, age groups, and learning objectives."
    },
    {
      icon: Users,
      title: "Optimal Class Sizes",
      description: "Groups of 15–30 students ensure personalized attention while maintaining collaborative energy."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "We work with your school's timetable to integrate programs seamlessly into your enrichment offerings."
    },
    {
      icon: CheckCircle,
      title: "Professional Educators",
      description: "Experienced instructors from top universities with expertise in both technology and child education."
    }
  ];

  const programOptions = [
    {
      title: "AI & Machine Learning Workshop",
      duration: "4-6 weeks",
      description: "Introduction to artificial intelligence concepts through interactive games and visual programming tools."
    },
    {
      title: "Creative Coding Bootcamp",
      duration: "6-8 weeks", 
      description: "Learn Python programming through creative projects like digital art, games, and interactive stories."
    },
    {
      title: "Robotics Engineering",
      duration: "8-10 weeks",
      description: "Hands-on robotics program where students build, program, and test their own robots."
    },
    {
      title: "App Development Academy",
      duration: "6-8 weeks",
      description: "Students design and create their first mobile application from concept to completion."
    },
    {
      title: "Digital Innovation Lab",
      duration: "4-6 weeks",
      description: "Problem-solving workshop where students use technology to address real-world challenges."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <School className="w-16 h-16 text-primary-foreground mx-auto mb-6" />
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-6 text-shadow">
            School Collaborations
          </h1>
          <p className="font-body text-primary-foreground/90 text-lg md:text-xl max-w-3xl mx-auto text-shadow">
            Partner with LearnSpace to bring cutting-edge technology education directly to your students
          </p>
        </div>
      </section>

      {/* Partnership Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Enrichment Programs for Schools
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              LearnSpace collaborates with forward-thinking schools across Cairo to provide customized 
              technology enrichment programs. Our expert educators deliver hands-on tech education that 
              complements your curriculum while inspiring students to explore the digital world with confidence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center h-full">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-3">{benefit.title}</h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Options */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Available Programs
            </h2>
            <p className="font-body text-muted-foreground text-lg max-w-3xl mx-auto">
              Choose from our comprehensive catalog of technology programs, each designed to engage 
              and inspire students while building essential 21st-century skills.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programOptions.map((program, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Star className="w-6 h-6 text-secondary" />
                    <span className="font-body text-sm text-accent font-semibold bg-accent/10 px-3 py-1 rounded-full">
                      {program.duration}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-3">{program.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                Why Partner With LearnSpace?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Proven Track Record</h3>
                    <p className="font-body text-muted-foreground">Successfully delivered programs to hundreds of students across multiple Cairo schools.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Expert Educators</h3>
                    <p className="font-body text-muted-foreground">Designed by Ain Shams Computer Engineers & AUC trainers with expertise in both technology and child education</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Complete Program Management</h3>
                    <p className="font-body text-muted-foreground">We handle everything from curriculum design to equipment, materials, and progress tracking.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Flexible Implementation</h3>
                    <p className="font-body text-muted-foreground">Programs can be delivered as after-school activities, weekend workshops, or integrated into regular school hours.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary/5 p-8 rounded-lg">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-6 text-center">Partnership Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-body text-foreground">Enhanced school reputation for innovation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-body text-foreground">Increased student engagement and excitement</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-body text-foreground">Preparation for future academic pathways</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-body text-foreground">Professional development for faculty</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-body text-foreground">Comprehensive program reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 md:py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-6 text-shadow">
            Ready to Transform Your Students' Learning Experience?
          </h2>
          <p className="font-body text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto text-shadow">
            Contact us today to discuss how we can create a customized technology program for your school.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-semibold text-lg px-8 py-6"
          >
            <Link to="/contact">Start Partnership Discussion</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Collaborations;