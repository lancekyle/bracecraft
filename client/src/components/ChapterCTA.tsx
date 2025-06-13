import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ShoppingCart, Play, Smartphone } from "lucide-react";
import { useState } from "react";
import recoveryKitImage from "@assets/pf-recovery-kit.jpg";

interface ChapterCTAProps {
  productImageUrl?: string;
}

export default function ChapterCTA({ productImageUrl }: ChapterCTAProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // TODO: Integrate with email service
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setEmail("");
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* Email Capture CTA */}
      <Card className="bg-gradient-to-r from-athletic-blue to-brand-teal text-white">
        <CardContent className="p-8">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <Mail className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3">Don't Miss Your Start</h3>
            <p className="text-lg opacity-95 mb-6">
              Get our tips and tricks with a dash of motivation to make sure you make your start!
            </p>
          </div>
          
          {isSubmitted ? (
            <div className="text-center py-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <p className="text-lg font-medium">Thanks! Check your email for tips.</p>
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white text-charcoal placeholder:text-gray-400"
                  required
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-white text-athletic-blue hover:bg-gray-100 font-semibold px-6"
                >
                  {isSubmitting ? "..." : "Get Tips"}
                </Button>
              </div>
              <p className="text-sm opacity-80 mt-3 text-center">
                No spam, just actionable advice. Unsubscribe anytime.
              </p>
            </form>
          )}
        </CardContent>
      </Card>

      {/* Product Purchase CTA */}
      <Card className="border-2 border-success-green">
        <CardContent className="p-6">
          <div className="md:flex md:items-center md:space-x-6">
            {/* Product Image */}
            <div className="md:w-1/3 mb-4 md:mb-0">
              <img 
                src={productImageUrl || recoveryKitImage} 
                alt="Plantar Fasciitis 5-piece Recovery Kit"
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>

            {/* Product Details */}
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold text-charcoal mb-3">
                Plantar Fasciitis 5-Piece Recovery Kit
              </h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-custom">
                  <Play className="w-4 h-4 mr-2 text-success-green" />
                  <span>Recovery exercise videos</span>
                </div>
                <div className="flex items-center text-gray-custom">
                  <Smartphone className="w-4 h-4 mr-2 text-success-green" />
                  <span>Mobile tracking app</span>
                </div>
                <div className="flex items-center text-gray-custom">
                  <ShoppingCart className="w-4 h-4 mr-2 text-success-green" />
                  <span>5 essential recovery tools</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  className="bg-success-green hover:bg-success-green/90 text-white font-semibold"
                  onClick={() => {
                    // TODO: Integrate with Stripe checkout
                    console.log("Redirect to Stripe checkout");
                  }}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Get Recovery Kit
                </Button>
                <Button 
                  variant="outline" 
                  className="border-success-green text-success-green hover:bg-success-green hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}