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

const Session4 = () => {
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
            Session 4: From Training to Creation (Cinema)
          </h1>
          <p className="font-body text-primary-foreground/90 text-lg md:text-xl max-w-3xl mx-auto text-shadow">
            Explore the journey from AI training to creative cinema production
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
                  src="/sessions/Session4.pdf"
                  className="w-full h-[700px] md:h-[800px] border-0"
                  title="Session 4 Materials"
                />
              </CardContent>
            </Card>

            <div className="mt-6 text-center">
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a href="/sessions/Session4.pdf" target="_blank" rel="noopener noreferrer">
                  Download Full PDF
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Students' Work Gallery */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4 text-center">
              Students' Creative Work
            </h2>
            <p className="font-body text-muted-foreground text-center mb-8">
              Explore the amazing AI-generated cinema projects created by our students!
            </p>

            {/* Image Carousel */}
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <Card className="border-border">
                    <CardContent className="p-4">
                      <div className="aspect-video w-full bg-muted flex items-center justify-center overflow-hidden rounded-lg">
                        <img
                          src="/student-work/jana1.jpeg"
                          alt="Jana's AI Cinema Project"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="font-body text-sm text-muted-foreground text-center mt-4">Jana's Project</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="border-border">
                    <CardContent className="p-4">
                      <div className="aspect-video w-full bg-muted flex items-center justify-center overflow-hidden rounded-lg">
                        <img
                          src="/student-work/layan.png"
                          alt="Layan's AI Cinema Project"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="font-body text-sm text-muted-foreground text-center mt-4">Layan's Project</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="border-border">
                    <CardContent className="p-4">
                      <div className="aspect-video w-full bg-muted flex items-center justify-center overflow-hidden rounded-lg">
                        <img
                          src="/student-work/layan2.jpeg"
                          alt="Layan's Second AI Cinema Project"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="font-body text-sm text-muted-foreground text-center mt-4">Layan's Second Project</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="border-border">
                    <CardContent className="p-4">
                      <div className="aspect-video w-full bg-muted flex items-center justify-center overflow-hidden rounded-lg">
                        <img
                          src="/student-work/Nayla.jpeg"
                          alt="Nayla's AI Cinema Project"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="font-body text-sm text-muted-foreground text-center mt-4">Nayla's Project</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="border-border">
                    <CardContent className="p-4">
                      <div className="aspect-video w-full bg-muted flex items-center justify-center overflow-hidden rounded-lg">
                        <img
                          src="/student-work/sima.jpeg"
                          alt="Sima's AI Cinema Project"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="font-body text-sm text-muted-foreground text-center mt-4">Sima's Project</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="border-border">
                    <CardContent className="p-4">
                      <div className="aspect-video w-full bg-muted flex items-center justify-center overflow-hidden rounded-lg">
                        <img
                          src="/student-work/Sima(1).jpeg"
                          alt="Sima's Second AI Cinema Project"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="font-body text-sm text-muted-foreground text-center mt-4">Sima's Second Project</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>

            <div className="text-center mt-8">
              <Button
                asChild
                variant="outline"
                className="border-green-500 text-green-600 hover:bg-green-50"
              >
                <a href="https://drive.google.com/drive/folders/1nXoUldTBq7mfqYgZYgvWHscM8O6KDmB6" target="_blank" rel="noopener noreferrer">
                  View More in Google Drive
                </a>
              </Button>
            </div>

            {/* Video Gallery */}
            <div className="mt-16">
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4 text-center">
                AI-Generated Cinema Videos
              </h3>
              <p className="font-body text-muted-foreground text-center mb-8">
                Watch the incredible AI-powered videos created by our students!
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-border">
                  <CardContent className="p-4">
                    <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
                      <video
                        controls
                        className="w-full h-full"
                        preload="metadata"
                      >
                        <source src="/student-work/gemini_generated_video_EF208749.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <p className="font-body text-sm text-muted-foreground text-center mt-4">
                      Gemini-Generated AI Cinema
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-4">
                    <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
                      <video
                        controls
                        className="w-full h-full"
                        preload="metadata"
                      >
                        <source src="/student-work/Generated File October 08, 2025 - 4_16PM.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <p className="font-body text-sm text-muted-foreground text-center mt-4">
                      Student AI Cinema Creation
                    </p>
                  </CardContent>
                </Card>
              </div>
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
                    <li className="font-body text-muted-foreground">• AI training fundamentals</li>
                    <li className="font-body text-muted-foreground">• Cinema production techniques</li>
                    <li className="font-body text-muted-foreground">• Creative storytelling with AI</li>
                    <li className="font-body text-muted-foreground">• Video editing and effects</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-4">Activities</h3>
                  <ul className="space-y-2">
                    <li className="font-body text-muted-foreground">• AI model training exercises</li>
                    <li className="font-body text-muted-foreground">• Cinema scene creation</li>
                    <li className="font-body text-muted-foreground">• Video storytelling projects</li>
                    <li className="font-body text-muted-foreground">• Creative film challenges</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-primary bg-primary/5">
              <CardContent className="p-8 text-center">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Ready to Create?</h3>
                <p className="font-body text-muted-foreground mb-6">
                  Explore the journey from AI training to creative cinema production!
                </p>
                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Begin Session 4
                  </Button>
                  <div>
                    <p className="font-body text-muted-foreground text-sm mb-2">Access Training Materials:</p>
                    <Button
                      asChild
                      variant="outline"
                      className="border-green-500 text-green-600 hover:bg-green-50"
                    >
                      <a href="https://drive.google.com/drive/folders/1nXoUldTBq7mfqYgZYgvWHscM8O6KDmB6" target="_blank" rel="noopener noreferrer">
                        Open Training Drive
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

export default Session4;
