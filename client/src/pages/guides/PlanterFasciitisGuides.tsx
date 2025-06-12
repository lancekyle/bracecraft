import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Clock, 
  Users, 
  Target,
  Home,
  Trophy,
  ArrowRight,
  Star
} from "lucide-react";
import { Link } from "wouter";

export default function PlanterFasciitisGuides() {
  const guides = [
    {
      id: "training-guide",
      title: "Race Training with Plantar Fasciitis",
      subtitle: "Complete Runner's Guide",
      description: "Comprehensive guide for competitive athletes who refuse to let plantar fasciitis derail their race goals. Learn to train smart, not stop training.",
      duration: "~75 min read",
      chapters: 7,
      difficulty: "Intermediate",
      audience: "Competitive Athletes",
      featured: true,
      icon: <Trophy className="w-8 h-8" />,
      topics: [
        "Race distance modifications",
        "Training load management", 
        "Gear strategy",
        "Race day protocols"
      ],
      highlights: [
        "Core principle: Smart training beats stopped training",
        "Distance-specific modifications (5K to Ultra)",
        "Daily monitoring systems",
        "Race day strategy"
      ]
    },
    {
      id: "home-treatment",
      title: "Home-Based Treatment Guide", 
      subtitle: "Self-Care & Recovery",
      description: "Comprehensive home treatment protocols for plantar fasciitis management and recovery without frequent clinic visits.",
      duration: "~60 min read",
      chapters: 6,
      difficulty: "Beginner",
      audience: "General Population",
      featured: false,
      icon: <Home className="w-8 h-8" />,
      topics: [
        "Self-assessment techniques",
        "Home treatment protocols",
        "Pain management strategies",
        "Prevention methods"
      ],
      highlights: [
        "Evidence-based home treatments",
        "Cost-effective solutions",
        "Step-by-step protocols",
        "When to seek professional help"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-gradient-to-br from-brand-teal to-athletic-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Plantar Fasciitis Guides
            </h1>
            <p className="text-xl lg:text-2xl text-gray-100 mb-8">
              Comprehensive, evidence-based guides for every stage of your plantar fasciitis journey. 
              From competitive training to home treatment protocols.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center text-sm">
                <BookOpen className="w-4 h-4 mr-2" />
                Expert-authored content
              </div>
              <div className="flex items-center text-sm">
                <Users className="w-4 h-4 mr-2" />
                For all activity levels
              </div>
              <div className="flex items-center text-sm">
                <Target className="w-4 h-4 mr-2" />
                Actionable strategies
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Guides Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {guides.map((guide) => (
              <Card key={guide.id} className={`overflow-hidden ${guide.featured ? 'ring-2 ring-warm-orange shadow-xl' : 'shadow-lg'} hover:shadow-xl transition-all duration-300`}>
                <CardContent className="p-0">
                  <div className="lg:flex">
                    {/* Content */}
                    <div className="lg:w-2/3 p-8 lg:p-12">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-athletic-blue">
                          {guide.icon}
                        </div>
                        <div>
                          {guide.featured && (
                            <Badge className="bg-warm-orange text-white mb-2">
                              <Star className="w-3 h-3 mr-1" />
                              FEATURED GUIDE
                            </Badge>
                          )}
                          <h2 className="text-2xl lg:text-3xl font-bold text-charcoal">
                            {guide.title}
                          </h2>
                          <p className="text-lg text-athletic-blue font-semibold">
                            {guide.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-custom text-lg mb-6 leading-relaxed">
                        {guide.description}
                      </p>

                      {/* Guide Stats */}
                      <div className="flex flex-wrap gap-4 mb-6 text-sm">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1 text-gray-400" />
                          {guide.duration}
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="w-4 h-4 mr-1 text-gray-400" />
                          {guide.chapters} chapters
                        </div>
                        <Badge variant="outline">{guide.difficulty}</Badge>
                        <Badge variant="outline">{guide.audience}</Badge>
                      </div>

                      {/* Topics */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-charcoal mb-3">Key Topics:</h4>
                        <div className="flex flex-wrap gap-2">
                          {guide.topics.map((topic, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <Link href={`/guides/plantar-fasciitis/${guide.id}`}>
                        <Button 
                          size="lg"
                          className={`${guide.featured ? 'bg-warm-orange hover:bg-warm-orange/90' : 'bg-athletic-blue hover:bg-athletic-blue/90'} text-white transform hover:scale-105 transition-all duration-200`}
                        >
                          Start Guide
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </Link>
                    </div>

                    {/* Highlights Sidebar */}
                    <div className="lg:w-1/3 bg-light-gray p-8 lg:p-12">
                      <h4 className="font-bold text-charcoal mb-4">Guide Highlights</h4>
                      <ul className="space-y-3">
                        {guide.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-athletic-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-custom text-sm">{highlight}</span>
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

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6">
            Not Sure Which Guide to Choose?
          </h2>
          <p className="text-xl text-gray-custom mb-8">
            Take our quick assessment to get personalized guidance recommendations based on your activity level and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/resources">
              <Button
                size="lg"
                className="bg-athletic-blue text-white hover:bg-athletic-blue/90 transform hover:scale-105 transition-all duration-200 text-lg font-semibold px-8 py-4"
              >
                Take Assessment
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-athletic-blue text-athletic-blue hover:bg-athletic-blue hover:text-white transition-all duration-200 text-lg font-semibold px-8 py-4"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}