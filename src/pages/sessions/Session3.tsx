import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link, ArrowLeft } from 'lucide-react';

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
            Session 3: Image Generation
          </h1>
          <p className="font-body text-primary-foreground/90 text-lg md:text-xl max-w-3xl mx-auto text-shadow">
            Create amazing images and artwork using AI technology
          </p>
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
                    <li className="font-body text-muted-foreground">• How AI creates images</li>
                    <li className="font-body text-muted-foreground">• Text-to-image generation</li>
                    <li className="font-body text-muted-foreground">• Creative AI tools</li>
                    <li className="font-body text-muted-foreground">• Digital art with AI</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-4">Activities</h3>
                  <ul className="space-y-2">
                    <li className="font-body text-muted-foreground">• AI art creation</li>
                    <li className="font-body text-muted-foreground">• Prompt engineering</li>
                    <li className="font-body text-muted-foreground">• Style exploration</li>
                    <li className="font-body text-muted-foreground">• Art gallery showcase</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-primary bg-primary/5">
              <CardContent className="p-8 text-center">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Ready to Create?</h3>
                <p className="font-body text-muted-foreground mb-6">
                  Unleash your creativity and learn how to generate stunning images using AI technology!
                </p>
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Begin Session 3
                  </Button>
                  <div>
                    <p className="font-body text-muted-foreground text-sm mb-2">Try AI Image Generation:</p>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="border-blue-500 text-blue-600 hover:bg-blue-50"
                    >
                      <a href="https://gemini.google.com/app" target="_blank" rel="noopener noreferrer">
                        Open Gemini AI
                      </a>
                    </Button>
                  </div>
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
