import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Lock } from 'lucide-react';

const BICS = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-6 text-shadow">
            AI THROUGH FUN
          </h1>
          <p className="font-body text-primary-foreground/90 text-lg md:text-xl max-w-3xl mx-auto text-shadow">
            Exclusive Technology Education Program for BISC School Students
          </p>
        </div>
      </section>

      {/* Sessions Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-8 text-center">
            BISC Sessions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Session 1 */}
            <Link to="/bics/session1">
              <Card className="border-2 border-blue-500 bg-card hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <h3 className="font-heading font-bold text-lg text-blue-600 mb-2">Session 1</h3>
                  <p className="font-body text-muted-foreground text-sm">Introduction to AI</p>
                </CardContent>
              </Card>
            </Link>

            {/* Session 2 */}
            <Link to="/bics/session2">
              <Card className="border-2 border-blue-500 bg-card hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <h3 className="font-heading font-bold text-lg text-blue-600 mb-2">Session 2</h3>
                  <p className="font-body text-muted-foreground text-sm">How Machine Learns</p>
                </CardContent>
              </Card>
            </Link>

            {/* Session 3 */}
            <Link to="/bics/session3">
              <Card className="border-2 border-blue-500 bg-card hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <h3 className="font-heading font-bold text-lg text-blue-600 mb-2">Session 3</h3>
                  <p className="font-body text-muted-foreground text-sm">Image Generation</p>
                </CardContent>
              </Card>
            </Link>

            {/* Session 4 */}
            <Link to="/bics/session4">
              <Card className="border-2 border-green-500 bg-green-50 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <h3 className="font-heading font-bold text-lg text-green-600 mb-2">Session 4</h3>
                  <p className="font-body text-green-700 text-sm">From Training to Creation (Cinemas)</p>
                </CardContent>
              </Card>
            </Link>

            {/* Session 5 - Locked */}
            <Card className="border-2 border-gray-400 bg-gray-100 cursor-not-allowed opacity-60">
              <CardContent className="p-4 text-center">
                <Lock className="w-6 h-6 text-gray-500 mx-auto mb-2" />
                <p className="font-body text-gray-500 text-sm">Locked</p>
              </CardContent>
            </Card>

            {/* Session 6 - Locked */}
            <Card className="border-2 border-gray-400 bg-gray-100 cursor-not-allowed opacity-60">
              <CardContent className="p-4 text-center">
                <Lock className="w-6 h-6 text-gray-500 mx-auto mb-2" />
                <p className="font-body text-gray-500 text-sm">Locked</p>
              </CardContent>
            </Card>

            {/* Session 7 - Locked */}
            <Card className="border-2 border-gray-400 bg-gray-100 cursor-not-allowed opacity-60">
              <CardContent className="p-4 text-center">
                <Lock className="w-6 h-6 text-gray-500 mx-auto mb-2" />
                <p className="font-body text-gray-500 text-sm">Locked</p>
              </CardContent>
            </Card>

            {/* Session 8 - Locked */}
            <Card className="border-2 border-gray-400 bg-gray-100 cursor-not-allowed opacity-60">
              <CardContent className="p-4 text-center">
                <Lock className="w-6 h-6 text-gray-500 mx-auto mb-2" />
                <p className="font-body text-gray-500 text-sm">Locked</p>
              </CardContent>
            </Card>

            {/* Session 9 - Locked */}
            <Card className="border-2 border-gray-400 bg-gray-100 cursor-not-allowed opacity-60">
              <CardContent className="p-4 text-center">
                <Lock className="w-6 h-6 text-gray-500 mx-auto mb-2" />
                <p className="font-body text-gray-500 text-sm">Locked</p>
              </CardContent>
            </Card>

            {/* Session 10 - Locked */}
            <Card className="border-2 border-gray-400 bg-gray-100 cursor-not-allowed opacity-60">
              <CardContent className="p-4 text-center">
                <Lock className="w-6 h-6 text-gray-500 mx-auto mb-2" />
                <p className="font-body text-gray-500 text-sm">Locked</p>
              </CardContent>
            </Card>

            {/* Session 11 - Locked */}
            <Card className="border-2 border-gray-400 bg-gray-100 cursor-not-allowed opacity-60">
              <CardContent className="p-4 text-center">
                <Lock className="w-6 h-6 text-gray-500 mx-auto mb-2" />
                <p className="font-body text-gray-500 text-sm">Locked</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BICS;
