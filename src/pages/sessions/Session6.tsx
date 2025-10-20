import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link, ArrowLeft } from 'lucide-react';

const Session6 = () => {
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
            Session 6: AI in Games
          </h1>
          <p className="font-body text-primary-foreground/90 text-lg md:text-xl max-w-3xl mx-auto text-shadow">
            Discover how AI creates games and manages scoring, challenges, and gameplay
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
                    <li className="font-body text-muted-foreground">• How AI creates game worlds</li>
                    <li className="font-body text-muted-foreground">• Algorithms for scoring systems</li>
                    <li className="font-body text-muted-foreground">• Game logic and decision making</li>
                    <li className="font-body text-muted-foreground">• Win/lose conditions and balance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-4">Activities</h3>
                  <ul className="space-y-2">
                    <li className="font-body text-muted-foreground">• Design a scoring algorithm</li>
                    <li className="font-body text-muted-foreground">• Create AI game characters</li>
                    <li className="font-body text-muted-foreground">• Build game logic rules</li>
                    <li className="font-body text-muted-foreground">• Test game balancing</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-primary bg-primary/5">
              <CardContent className="p-8 text-center">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Ready to Build Games?</h3>
                <p className="font-body text-muted-foreground mb-6">
                  Learn how AI powers game creation, from scoring systems to intelligent gameplay mechanics!
                </p>
                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Begin Session 6
                  </Button>
                  <div>
                    <p className="font-body text-muted-foreground text-sm mb-2">Explore Game AI Tools:</p>
                    <Button
                      asChild
                      variant="outline"
                      className="border-green-500 text-green-600 hover:bg-green-50"
                    >
                      <a href="https://scratch.mit.edu/" target="_blank" rel="noopener noreferrer">
                        Open Scratch Editor
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

export default Session6;
