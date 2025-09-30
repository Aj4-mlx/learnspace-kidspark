import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link, ArrowLeft, Download } from 'lucide-react';

const Session3 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <Button 
            asChild 
            variant="outline"
            className="mb-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <Link to="/bics">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to BICS Sessions
            </Link>
          </Button>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-6 text-shadow">
            Session 3: AI Learns from Data
          </h1>
          <p className="font-body text-primary-foreground/90 text-lg md:text-xl max-w-3xl mx-auto text-shadow">
            Discover how AI creates amazing images by learning from data - just like you learn from practice!
          </p>
          <Button 
            asChild 
            variant="outline"
            className="mt-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <a href="/sessions/Session3_v1.pdf" download>
              <Download className="w-4 h-4 mr-2" />
              Download Lesson Plan (PDF)
            </a>
          </Button>
        </div>
      </section>

      {/* Session Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-4">What You'll Learn</h3>
                  <ul className="space-y-2">
                    <li className="font-body text-muted-foreground">• What "data" means for AI (pictures, sounds, words)</li>
                    <li className="font-body text-muted-foreground">• How AI learns from examples to create new images</li>
                    <li className="font-body text-muted-foreground">• How to write creative prompts for AI</li>
                    <li className="font-body text-muted-foreground">• Real-world uses of AI-generated images</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-4">Fun Activities</h3>
                  <ul className="space-y-2">
                    <li className="font-body text-muted-foreground">🍕 Understanding what "feeds" AI</li>
                    <li className="font-body text-muted-foreground">🦖 Create silly AI pictures: "A dinosaur eating ice cream"</li>
                    <li className="font-body text-muted-foreground">🧜‍♀️ Try fun prompts: "A mermaid riding a bicycle"</li>
                    <li className="font-body text-muted-foreground">🚀 Mix ideas: "A dog flying a spaceship"</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-primary bg-primary/5">
              <CardContent className="p-8">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4 text-center">Key Concepts</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-foreground mb-2">🍎 What Does AI Eat?</h4>
                    <p className="font-body text-muted-foreground">
                      Just like you need food to grow strong, AI needs data (pictures, sounds, words) to get smart!
                    </p>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-foreground mb-2">🎨 Creating with Prompts</h4>
                    <p className="font-body text-muted-foreground">
                      Learn how to tell AI what to create by writing fun descriptions, like "A robot eating pizza with a cat at the park"
                    </p>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-foreground mb-2">🌟 Real-World Uses</h4>
                    <p className="font-body text-muted-foreground">
                      Discover how AI helps artists, designers, and scientists imagine new things!
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Begin Session 3
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Session3;
