import Navigation from '@/components/Navigation';

const Registration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-6 text-shadow">
            Register for Programs
          </h1>
          <p className="font-body text-primary-foreground/90 text-lg md:text-xl max-w-3xl mx-auto text-shadow">
            Join hundreds of kids exploring the exciting world of technology with LearnSpace
          </p>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                Program Registration
              </h2>
              <p className="font-body text-muted-foreground text-lg">
                Complete the form below to register your child for our technology programs
              </p>
            </div>
            
            {/* Google Form */}
            <div className="bg-card rounded-lg border border-border p-8">
              <div className="flex justify-center">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLScSMHdAKklvcoGSgM3FIDJR6yJZqOW6q3NLCaG1IIXBRJ1_YA/viewform?embedded=true" 
                  width={640}
                  height={988}
                  style={{ border: 0 }}
                  className="w-full max-w-2xl rounded-lg"
                  title="Program Registration Form"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;