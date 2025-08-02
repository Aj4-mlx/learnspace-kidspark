import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Clock, 
  Phone,
  Car,
  Train
} from 'lucide-react';

const Locations = () => {
  const locations = [
    {
      name: "Fifth Settlement",
      address: "New Cairo, Fifth Settlement",
      features: ["Spacious modern classrooms", "Latest tech equipment", "Parent waiting area", "Easy parking"],
      transport: "Accessible via Ring Road and New Cairo roads",
      hours: "Sat-Thu: 2:00 PM - 8:00 PM | Fri: 10:00 AM - 6:00 PM"
    },
    {
      name: "New Cairo",
      address: "New Cairo District",
      features: ["State-of-the-art lab", "Interactive whiteboards", "Small class sizes", "Secure facility"],
      transport: "Near AUC and main New Cairo hub",
      hours: "Sat-Thu: 2:00 PM - 8:00 PM | Fri: 10:00 AM - 6:00 PM"
    },
    {
      name: "Maadi",
      address: "Maadi, Cairo",
      features: ["Cozy learning environment", "Garden view classrooms", "Metro accessible", "Cafe nearby"],
      transport: "Walking distance from Maadi Metro Station",
      hours: "Sat-Thu: 3:00 PM - 9:00 PM | Fri: 9:00 AM - 5:00 PM"
    },
    {
      name: "Dokki",
      address: "Dokki, Giza",
      features: ["Central location", "Modern facilities", "Metro connection", "Multiple bus routes"],
      transport: "5 minutes from Dokki Metro Station",
      hours: "Sat-Thu: 3:00 PM - 9:00 PM | Fri: 9:00 AM - 5:00 PM"
    },
    {
      name: "Nasr City",
      address: "Nasr City, Cairo",
      features: ["Spacious classrooms", "High-tech lab", "Ample parking", "Family-friendly area"],
      transport: "Main Nasr City roads and bus connections",
      hours: "Sat-Thu: 2:00 PM - 8:00 PM | Fri: 10:00 AM - 6:00 PM"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <MapPin className="w-16 h-16 text-primary-foreground mx-auto mb-6" />
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-6 text-shadow">
            Our Locations
          </h1>
          <p className="font-body text-primary-foreground/90 text-lg md:text-xl max-w-3xl mx-auto text-shadow">
            Find a LearnSpace location near you across Cairo and Giza
          </p>
        </div>
      </section>

      {/* Locations Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              5 Convenient Locations
            </h2>
            <p className="font-body text-muted-foreground text-lg max-w-3xl mx-auto">
              We've strategically placed our centers across Cairo's major districts to ensure 
              easy access for families throughout the city.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="h-full card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-foreground">{location.name}</h3>
                      <p className="font-body text-muted-foreground text-sm">{location.address}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-4 h-4 text-secondary" />
                        <span className="font-body font-semibold text-foreground text-sm">Operating Hours</span>
                      </div>
                      <p className="font-body text-muted-foreground text-sm ml-6">{location.hours}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Train className="w-4 h-4 text-secondary" />
                        <span className="font-body font-semibold text-foreground text-sm">Transportation</span>
                      </div>
                      <p className="font-body text-muted-foreground text-sm ml-6">{location.transport}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-body font-semibold text-foreground text-sm mb-2">Facility Features:</h4>
                      <ul className="space-y-1 ml-2">
                        {location.features.map((feature, idx) => (
                          <li key={idx} className="font-body text-muted-foreground text-sm flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Visit Us Today
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-8">
              Ready to see our facilities? Contact us to schedule a visit or get detailed directions to any of our locations.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-center justify-center space-x-4 p-6 bg-primary/5 rounded-lg">
                <Phone className="w-8 h-8 text-primary" />
                <div className="text-left">
                  <h3 className="font-heading font-semibold text-foreground">Call Us</h3>
                  <p className="font-body text-muted-foreground">+20 10 5544 3384</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4 p-6 bg-primary/5 rounded-lg">
                <Car className="w-8 h-8 text-primary" />
                <div className="text-left">
                  <h3 className="font-heading font-semibold text-foreground">Free Parking</h3>
                  <p className="font-body text-muted-foreground">Available at all locations</p>
                </div>
              </div>
            </div>
            
            <Button 
              asChild 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-semibold text-lg px-8 py-6"
            >
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;