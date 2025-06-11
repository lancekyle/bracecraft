import Hero from "@/components/Hero";
import InjuryGuideCard from "@/components/InjuryGuideCard";
import VideoCard from "@/components/VideoCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const injuryGuides = [
    {
      title: "Plantar Fasciitis Complete Guide",
      description: "Everything you need to know about heel pain - from causes and symptoms to treatment and prevention strategies.",
      readTime: "15 min read",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=240",
      imageAlt: "Foot anatomy for plantar fasciitis guide",
      isPopular: true,
      href: "/guides/plantar-fasciitis"
    },
    {
      title: "Runner's Knee Prevention",
      description: "Comprehensive strategies to prevent and treat patellofemoral pain syndrome in runners and athletes.",
      readTime: "12 min read",
      imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=240",
      imageAlt: "Knee injury prevention and treatment guide"
    },
    {
      title: "Shoulder Impingement Recovery",
      description: "Expert techniques for overcoming shoulder impingement and returning to overhead activities safely.",
      readTime: "18 min read",
      imageUrl: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=240",
      imageAlt: "Shoulder impingement therapy and treatment"
    },
    {
      title: "Ankle Sprain Recovery Protocol",
      description: "Step-by-step recovery plan to get back on your feet stronger and prevent re-injury.",
      readTime: "10 min read",
      imageUrl: "https://images.unsplash.com/photo-1594736797933-d0f9dd23ba7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=240",
      imageAlt: "Ankle sprain taping and recovery methods"
    },
    {
      title: "IT Band Syndrome Solutions",
      description: "Effective treatments and prevention strategies for iliotibial band syndrome in runners.",
      readTime: "14 min read",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=240",
      imageAlt: "IT band syndrome stretching and treatment"
    },
    {
      title: "Lower Back Pain Management",
      description: "Comprehensive approach to understanding and treating lower back pain in active individuals.",
      readTime: "16 min read",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=240",
      imageAlt: "Lower back pain exercises and treatment"
    }
  ];

  const videos = [
    {
      title: "Ankle Strengthening Basics",
      description: "Essential exercises to build ankle stability and prevent sprains.",
      duration: "8:45",
      views: "45K views",
      instructor: "Dr. Mike Rodriguez",
      thumbnailUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225",
      thumbnailAlt: "Ankle strengthening exercise demonstration"
    },
    {
      title: "Shoulder Mobility Flow",
      description: "Improve shoulder range of motion and prevent impingement.",
      duration: "12:30",
      views: "67K views",
      instructor: "Dr. Lisa Park",
      thumbnailUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225",
      thumbnailAlt: "Shoulder mobility exercise demonstration"
    },
    {
      title: "IT Band Release Techniques",
      description: "Effective stretches to relieve IT band tightness and pain.",
      duration: "10:15",
      views: "89K views",
      instructor: "Dr. James Miller",
      thumbnailUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225",
      thumbnailAlt: "IT band stretching routine demonstration"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Featured Guides Section */}
      <section className="py-16 lg:py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Featured Injury Guides
            </h2>
            <p className="text-xl text-gray-custom max-w-3xl mx-auto">
              Comprehensive, medically-reviewed guides to help you understand,
              prevent, and recover from common athletic injuries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {injuryGuides.map((guide, index) => (
              <InjuryGuideCard key={index} {...guide} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-athletic-blue text-white hover:bg-athletic-blue/90">
              View All Guides
            </Button>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Exercise Video Library
            </h2>
            <p className="text-xl text-gray-custom max-w-3xl mx-auto">
              Follow along with our expert-led exercise videos designed for
              injury prevention and recovery.
            </p>
          </div>

          {/* Featured Video */}
          <div className="mb-12">
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
              <div className="relative aspect-video bg-gray-800 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675"
                  alt="Physical therapist demonstrating plantar fasciitis stretches"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <Button
                    size="icon"
                    className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 transform hover:scale-105 transition-all duration-200"
                  >
                    <Play className="w-12 h-12 text-brand-teal ml-1" fill="currentColor" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
                  15:32
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Complete Plantar Fasciitis Stretching Routine
                </h3>
                <p className="text-gray-300 mb-4">
                  Follow along with Dr. Sarah Chen as she demonstrates the most
                  effective stretches for plantar fasciitis relief and prevention.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Badge className="bg-success-green text-white">FEATURED</Badge>
                    <span className="text-gray-400 text-sm">127K views</span>
                  </div>
                  <Button
                    variant="link"
                    className="text-warm-orange hover:text-white transition-colors duration-200"
                  >
                    Add to Playlist
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <VideoCard key={index} {...video} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/videos">
              <Button className="bg-warm-orange text-white hover:bg-warm-orange/90">
                Browse Video Library
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-16 lg:py-24 bg-brand-teal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Trusted by Athletes & Medical Professionals
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Our content is developed and reviewed by licensed physical
              therapists, sports medicine doctors, and certified athletic trainers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-warm-orange mb-2">
                500K+
              </div>
              <div className="text-lg font-semibold mb-1">Athletes Helped</div>
              <div className="text-gray-100">
                Successful injury prevention and recovery
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-warm-orange mb-2">
                15+
              </div>
              <div className="text-lg font-semibold mb-1">Medical Experts</div>
              <div className="text-gray-100">
                Licensed professionals on our team
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-warm-orange mb-2">
                98%
              </div>
              <div className="text-lg font-semibold mb-1">Success Rate</div>
              <div className="text-gray-100">
                Users report improved outcomes
              </div>
            </div>
          </div>

          {/* Medical Advisory Board */}
          <div className="bg-white bg-opacity-10 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">
              Our Medical Advisory Board
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
                  alt="Dr. Sarah Chen, Sports Medicine Physician"
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="font-semibold">Dr. Sarah Chen</div>
                <div className="text-sm text-gray-100">Sports Medicine Physician</div>
                <div className="text-xs text-gray-200 mt-1">15+ years experience</div>
              </div>

              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
                  alt="Dr. Mike Rodriguez, Physical Therapist"
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="font-semibold">Dr. Mike Rodriguez</div>
                <div className="text-sm text-gray-100">Physical Therapist, DPT</div>
                <div className="text-xs text-gray-200 mt-1">Olympic team experience</div>
              </div>

              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
                  alt="Dr. Lisa Park, Certified Athletic Trainer"
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="font-semibold">Dr. Lisa Park</div>
                <div className="text-sm text-gray-100">Certified Athletic Trainer</div>
                <div className="text-xs text-gray-200 mt-1">NCAA Division I experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6">
            Ready to Start Your Recovery Journey?
          </h2>
          <p className="text-xl text-gray-custom mb-8">
            Join thousands of athletes who have successfully prevented and
            recovered from injuries with our expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-athletic-blue text-white hover:bg-athletic-blue/90 transform hover:scale-105 transition-all duration-200 text-lg font-semibold px-8 py-4"
            >
              Get Your Personalized Plan
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
            No credit card required • Free initial consultation • 30-day money-back
            guarantee
          </p>
        </div>
      </section>
    </div>
  );
}
