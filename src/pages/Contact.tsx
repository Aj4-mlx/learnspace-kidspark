import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  Facebook,
  MapPin,
  Clock,
  Send
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "aj4.mlx@gmail.com",
      action: "mailto:aj4.mlx@gmail.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+20 10 5544 3384",
      action: "tel:+201055443384"
    },
    {
      icon: Facebook,
      title: "Follow Us",
      value: "facebook.com/LearnSpaceAJ4",
      action: "https://facebook.com/LearnSpaceAJ4"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <Send className="w-16 h-16 text-primary-foreground mx-auto mb-6" />
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-6 text-shadow">
            Get In Touch
          </h1>
          <p className="font-body text-primary-foreground/90 text-lg md:text-xl max-w-3xl mx-auto text-shadow">
            Ready to start your child's tech journey? We're here to help with any questions you have.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-foreground">Send Us a Message</CardTitle>
                <p className="font-body text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="font-body font-semibold text-foreground">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-body font-semibold text-foreground">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="font-body font-semibold text-foreground">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      rows={5}
                      placeholder="Tell us about your child's interests and any questions you have..."
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.action}
                      target={info.icon === Facebook ? "_blank" : undefined}
                      rel={info.icon === Facebook ? "noopener noreferrer" : undefined}
                      className="flex items-center space-x-4 p-4 bg-card rounded-lg border border-border hover:bg-muted/30 transition-colors"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground">{info.title}</h3>
                        <p className="font-body text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Operating Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-foreground flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>Operating Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-body text-foreground">Saturday - Thursday</span>
                      <span className="font-body text-muted-foreground">2:00 PM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-body text-foreground">Friday</span>
                      <span className="font-body text-muted-foreground">10:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-foreground flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Service Areas</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-body text-muted-foreground">• Fifth Settlement</span>
                    <span className="font-body text-muted-foreground">• New Cairo</span>
                    <span className="font-body text-muted-foreground">• Maadi</span>
                    <span className="font-body text-muted-foreground">• Dokki</span>
                    <span className="font-body text-muted-foreground">• Nasr City</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-muted-foreground text-lg">
              Get quick answers to common questions about our programs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">What age groups do you serve?</h3>
                <p className="font-body text-muted-foreground">Our programs are designed for kids ages 7–14, with age-appropriate content and teaching methods.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Do kids need prior experience?</h3>
                <p className="font-body text-muted-foreground">No experience needed! Our programs start from the basics and progress gradually.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">How long are the programs?</h3>
                <p className="font-body text-muted-foreground">Program duration varies from 4-10 weeks depending on the specific course and depth of content.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">What's the class size?</h3>
                <p className="font-body text-muted-foreground">We keep classes small (8-12 students) for personalized attention and effective learning.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;