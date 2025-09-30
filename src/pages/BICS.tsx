import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Users, Calendar, Award } from 'lucide-react';

const BICS = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-6 text-shadow">
            BICS Partnership Program
          </h1>
          <p className="font-body text-primary-foreground/90 text-lg md:text-xl max-w-3xl mx-auto text-shadow">
            Exclusive Technology Education Program for BICS School Students
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6 text-center">
              Welcome BICS Students!
            </h2>
            <p className="font-body text-muted-foreground text-lg text-center mb-8">
              We're excited to partner with BICS to bring cutting-edge technology education directly to your students. 
              This exclusive program is designed specifically for BICS students, offering specialized curriculum and 
              scheduling tailored to your school's needs.
            </p>
          </div>

          {/* Program Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-border bg-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">School Integration</h3>
                <p className="font-body text-muted-foreground text-sm">Seamlessly integrated with BICS academic schedule</p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Small Class Sizes</h3>
                <p className="font-body text-muted-foreground text-sm">Personalized attention for every student</p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Flexible Scheduling</h3>
                <p className="font-body text-muted-foreground text-sm">Programs designed around school calendar</p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Exclusive Access</h3>
                <p className="font-body text-muted-foreground text-sm">Special programs only for BICS students</p>
              </CardContent>
            </Card>
          </div>

          {/* Programs Available */}
          <div className="bg-muted/30 rounded-lg p-8 md:p-12 mb-16">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8 text-center">
              Programs Available for BICS Students
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Ages 8–10</h3>
                <h4 className="font-heading font-bold text-accent mb-2">Discover AI Through Fun!</h4>
                <p className="font-body text-muted-foreground text-sm">Interactive AI exploration with games and creative projects</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Ages 11–13</h3>
                <h4 className="font-heading font-bold text-accent mb-2">AI + First Steps in Programming!</h4>
                <p className="font-body text-muted-foreground text-sm">Hands-on coding fundamentals with AI mini-projects</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Ages 14–16</h3>
                <h4 className="font-heading font-bold text-accent mb-2">Real Coding Skills + Chatbot Creation</h4>
                <p className="font-body text-muted-foreground text-sm">Professional programming languages and AI development</p>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-card rounded-lg p-8 border border-border">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6 text-center">
              Register Your BICS Student
            </h2>
            <p className="font-body text-muted-foreground text-center mb-8">
              Complete the form below to enroll your child in our exclusive BICS partnership program
            </p>
            <div className="flex justify-center">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLScSMHdAKklvcoGSgM3FIDJR6yJZqOW6q3NLCaG1IIXBRJ1_YA/viewform?embedded=true" 
                width="640" 
                height="988" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                className="w-full max-w-2xl"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BICS;
