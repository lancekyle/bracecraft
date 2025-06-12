import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Activity, 
  Calculator, 
  TrendingUp, 
  Dumbbell,
  Mail,
  CheckCircle,
  AlertTriangle,
  Heart,
  Target
} from "lucide-react";

export default function Resources() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // In a real app, this would send to a backend
      console.log("Email submitted:", email);
    }
  };

  const tools = [
    {
      id: 1,
      title: "Do You Have Plantar Fasciitis?",
      description: "Take our 2-minute assessment to understand your symptoms and get personalized recommendations.",
      icon: <Activity className="w-8 h-8" />,
      buttonText: "Take Assessment",
      buttonColor: "bg-warm-orange hover:bg-warm-orange/90",
      href: "/assessment/plantar-fasciitis"
    },
    {
      id: 2,
      title: "Training Load Risk Assessment",
      description: "Evaluate your current training intensity and identify potential injury risk factors.",
      icon: <Calculator className="w-8 h-8" />,
      buttonText: "Calculate Risk",
      buttonColor: "bg-brand-teal hover:bg-brand-teal/90",
      href: "/tools/risk-calculator"
    },
    {
      id: 3,
      title: "Track Your Recovery",
      description: "Monitor your symptoms and progress with our comprehensive tracking tool.",
      icon: <TrendingUp className="w-8 h-8" />,
      buttonText: "Start Tracking",
      buttonColor: "bg-athletic-blue hover:bg-athletic-blue/90",
      href: "/tools/recovery-tracker"
    },
    {
      id: 4,
      title: "Rehabilitation Exercises",
      description: "Access our complete library of injury-specific exercises and modifications.",
      icon: <Dumbbell className="w-8 h-8" />,
      buttonText: "Browse Exercises",
      buttonColor: "bg-success-green hover:bg-success-green/90",
      href: "/exercises"
    }
  ];

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-brand-teal to-athletic-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Tools & Assessments for Your Recovery Journey
            </h1>
            <p className="text-xl lg:text-2xl text-gray-100">
              Interactive tools and assessments to help you understand your condition, 
              track progress, and optimize your recovery.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Tools Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Featured Assessment Tools
            </h2>
            <p className="text-xl text-gray-custom max-w-3xl mx-auto">
              Get personalized insights into your condition and recovery progress with our 
              evidence-based assessment tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool) => (
              <Card key={tool.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="text-athletic-blue group-hover:scale-110 transition-transform duration-300">
                        {tool.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-charcoal mb-3">
                        {tool.title}
                      </h3>
                      <p className="text-gray-custom mb-6 leading-relaxed">
                        {tool.description}
                      </p>
                      <Button 
                        className={`${tool.buttonColor} text-white transform hover:scale-105 transition-all duration-200 font-semibold`}
                        onClick={() => console.log(`Navigating to ${tool.href}`)}
                      >
                        {tool.buttonText}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="py-16 lg:py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-custom max-w-3xl mx-auto">
              Comprehensive guides and tools to support your athletic journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-athletic-blue mb-4 flex justify-center">
                  <Heart className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  Pain Scale Guide
                </h3>
                <p className="text-gray-custom mb-4">
                  Learn to accurately assess and communicate your pain levels to healthcare providers.
                </p>
                <Button variant="outline" className="border-athletic-blue text-athletic-blue hover:bg-athletic-blue hover:text-white">
                  View Guide
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-athletic-blue mb-4 flex justify-center">
                  <Target className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  Goal Setting Worksheet
                </h3>
                <p className="text-gray-custom mb-4">
                  Set realistic, achievable recovery and performance goals with our structured approach.
                </p>
                <Button variant="outline" className="border-athletic-blue text-athletic-blue hover:bg-athletic-blue hover:text-white">
                  Download
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-athletic-blue mb-4 flex justify-center">
                  <AlertTriangle className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  Red Flag Symptoms
                </h3>
                <p className="text-gray-custom mb-4">
                  Know when to seek immediate medical attention for your injury or condition.
                </p>
                <Button variant="outline" className="border-athletic-blue text-athletic-blue hover:bg-athletic-blue hover:text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Email Capture Section */}
      <section className="py-16 lg:py-24 bg-brand-teal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Mail className="w-16 h-16 mx-auto mb-6 text-warm-orange" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Get Our Complete Training Guide
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Download 'Race Training with Plantar Fasciitis' - our comprehensive guide to 
              staying competitive while managing injury.
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white text-charcoal placeholder-gray-400 border-0"
                />
                <Button 
                  type="submit"
                  className="bg-warm-orange hover:bg-warm-orange/90 text-white font-semibold px-8 whitespace-nowrap"
                >
                  Download Free Guide
                </Button>
              </div>
              <p className="text-sm text-gray-200 mt-4">
                Join 2,000+ athletes who train smarter, not harder.
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="bg-success-green bg-opacity-20 border border-success-green rounded-lg p-6 mb-4">
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-success-green" />
                <h3 className="text-lg font-semibold mb-2">Thank You!</h3>
                <p className="text-sm text-gray-100">
                  Check your email for the download link to your free training guide.
                </p>
              </div>
              <Button 
                onClick={() => setIsSubmitted(false)}
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-brand-teal"
              >
                Subscribe Another Email
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6">
            Need Personalized Help?
          </h2>
          <p className="text-xl text-gray-custom mb-8">
            Our licensed physical therapists can create a customized assessment and treatment plan for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-athletic-blue text-white hover:bg-athletic-blue/90 transform hover:scale-105 transition-all duration-200 text-lg font-semibold px-8 py-4"
            >
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-athletic-blue text-athletic-blue hover:bg-athletic-blue hover:text-white transition-all duration-200 text-lg font-semibold px-8 py-4"
            >
              Contact Our Experts
            </Button>
          </div>
          <p className="text-sm text-gray-custom mt-4">
            Free initial consultation • Expert guidance • Personalized treatment plans
          </p>
        </div>
      </section>
    </div>
  );
}