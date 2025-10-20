import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link, ArrowLeft } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Session1 = () => {
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
            Session 1: Introduction to AI
          </h1>
          <p className="font-body text-primary-foreground/90 text-lg md:text-xl max-w-3xl mx-auto text-shadow">
            Discover what Artificial Intelligence is and how it works in our daily lives
          </p>
        </div>
      </section>

      {/* Session Materials Slider */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-8 text-center">
              Session Materials
            </h2>
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <Card className="border-border">
                    <CardContent className="p-4">
                      <div className="w-full overflow-hidden rounded-lg bg-white">
                        <object
                          data="/sessions/Session1.pdf#page=1&view=Fit&toolbar=0&navpanes=0&scrollbar=0&zoom=page-fit"
                          type="application/pdf"
                          className="w-full h-[700px] md:h-[800px]"
                        >
                          <p className="text-center p-8">PDF cannot be displayed. <a href="/sessions/Session1.pdf" className="text-primary underline">Download instead</a></p>
                        </object>
                      </div>
                      <div className="mt-4 text-center">
                        <p className="font-body text-sm text-muted-foreground">Page 1 of 4</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="border-border">
                    <CardContent className="p-4">
                      <div className="w-full overflow-hidden rounded-lg bg-white">
                        <object
                          data="/sessions/Session1.pdf#page=2&view=Fit&toolbar=0&navpanes=0&scrollbar=0&zoom=page-fit"
                          type="application/pdf"
                          className="w-full h-[700px] md:h-[800px]"
                        >
                          <p className="text-center p-8">PDF cannot be displayed. <a href="/sessions/Session1.pdf" className="text-primary underline">Download instead</a></p>
                        </object>
                      </div>
                      <div className="mt-4 text-center">
                        <p className="font-body text-sm text-muted-foreground">Page 2 of 4</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="border-border">
                    <CardContent className="p-4">
                      <div className="w-full overflow-hidden rounded-lg bg-white">
                        <object
                          data="/sessions/Session1.pdf#page=3&view=Fit&toolbar=0&navpanes=0&scrollbar=0&zoom=page-fit"
                          type="application/pdf"
                          className="w-full h-[700px] md:h-[800px]"
                        >
                          <p className="text-center p-8">PDF cannot be displayed. <a href="/sessions/Session1.pdf" className="text-primary underline">Download instead</a></p>
                        </object>
                      </div>
                      <div className="mt-4 text-center">
                        <p className="font-body text-sm text-muted-foreground">Page 3 of 4</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="border-border">
                    <CardContent className="p-4">
                      <div className="w-full overflow-hidden rounded-lg bg-white">
                        <object
                          data="/sessions/Session1.pdf#page=4&view=Fit&toolbar=0&navpanes=0&scrollbar=0&zoom=page-fit"
                          type="application/pdf"
                          className="w-full h-[700px] md:h-[800px]"
                        >
                          <p className="text-center p-8">PDF cannot be displayed. <a href="/sessions/Session1.pdf" className="text-primary underline">Download instead</a></p>
                        </object>
                      </div>
                      <div className="mt-4 text-center">
                        <p className="font-body text-sm text-muted-foreground">Page 4 of 4</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>

            <div className="mt-6 text-center">
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a href="/sessions/Session1.pdf" target="_blank" rel="noopener noreferrer">
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
                    <li className="font-body text-muted-foreground">• What is Artificial Intelligence?</li>
                    <li className="font-body text-muted-foreground">• How AI helps us every day</li>
                    <li className="font-body text-muted-foreground">• Examples of AI around us</li>
                    <li className="font-body text-muted-foreground">• Introduction to smart machines</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-4">Activities</h3>
                  <ul className="space-y-2">
                    <li className="font-body text-muted-foreground">• AI scavenger hunt</li>
                    <li className="font-body text-muted-foreground">• Drawing AI helpers</li>
                    <li className="font-body text-muted-foreground">• AI story creation</li>
                    <li className="font-body text-muted-foreground">• Group discussion</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-primary bg-primary/5">
              <CardContent className="p-8 text-center">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Ready to Start?</h3>
                <p className="font-body text-muted-foreground mb-6">
                  This session will introduce you to the amazing world of AI through fun activities and games!
                </p>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Begin Session 1
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Session1;
