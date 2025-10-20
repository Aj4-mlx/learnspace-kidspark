import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link, ArrowLeft } from 'lucide-react';

const Session2 = () => {
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
            Session 2: How Machine Learns
          </h1>
          <p className="font-body text-primary-foreground/90 text-lg md:text-xl max-w-3xl mx-auto text-shadow">
            Explore how computers learn and get smarter, just like humans do!
          </p>
        </div>
      </section>

      {/* Session Materials */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-8 text-center">
              Session Materials
            </h2>
            <Card className="border-border">
              <CardContent className="p-4">
                <iframe
                  src="/sessions/Session2.pdf"
                  className="w-full h-[700px] md:h-[800px] border-0"
                  title="Session 2 Materials"
                />
              </CardContent>
            </Card>

            <div className="mt-6 text-center">
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a href="/sessions/Session2.pdf" target="_blank" rel="noopener noreferrer">
                  Download Full PDF
                </a>
              </Button>
            </div>
          </div>
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
                    <li className="font-body text-muted-foreground">• How machines learn from data</li>
                    <li className="font-body text-muted-foreground">• Training vs testing</li>
                    <li className="font-body text-muted-foreground">• Patterns and recognition</li>
                    <li className="font-body text-muted-foreground">• Learning from mistakes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-4">Activities</h3>
                  <ul className="space-y-2">
                    <li className="font-body text-muted-foreground">• Pattern recognition games</li>
                    <li className="font-body text-muted-foreground">• Teaching a virtual pet</li>
                    <li className="font-body text-muted-foreground">• Data collection exercise</li>
                    <li className="font-body text-muted-foreground">• Learning experiment</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-primary bg-primary/5">
              <CardContent className="p-8 text-center">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Ready to Explore?</h3>
                <p className="font-body text-muted-foreground mb-6">
                  Discover the fascinating process of how machines learn and improve their abilities!
                </p>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Begin Session 2
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Session2;
