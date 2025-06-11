import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Calendar, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function PlanterFasciitisGuide() {
  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-warm-orange text-white">MOST POPULAR</Badge>
            <Badge variant="outline">Injury Guide</Badge>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Plantar Fasciitis Complete Guide
          </h1>
          
          <p className="text-xl text-gray-custom mb-6">
            Everything you need to know about heel pain - from causes and symptoms to treatment and prevention strategies.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-custom">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              15 min read
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              Dr. Sarah Chen, DPT
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Updated Dec 2024
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="font-semibold text-charcoal mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  <a href="#overview" className="block text-sm text-gray-custom hover:text-athletic-blue transition-colors">
                    Overview
                  </a>
                  <a href="#symptoms" className="block text-sm text-gray-custom hover:text-athletic-blue transition-colors">
                    Symptoms
                  </a>
                  <a href="#causes" className="block text-sm text-gray-custom hover:text-athletic-blue transition-colors">
                    Causes
                  </a>
                  <a href="#treatment" className="block text-sm text-gray-custom hover:text-athletic-blue transition-colors">
                    Treatment Options
                  </a>
                  <a href="#exercises" className="block text-sm text-gray-custom hover:text-athletic-blue transition-colors">
                    Exercises
                  </a>
                  <a href="#prevention" className="block text-sm text-gray-custom hover:text-athletic-blue transition-colors">
                    Prevention
                  </a>
                  <a href="#when-to-see-doctor" className="block text-sm text-gray-custom hover:text-athletic-blue transition-colors">
                    When to See a Doctor
                  </a>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="prose prose-lg max-w-none">
              <Card className="mb-8">
                <CardContent className="p-8">
                  <section id="overview">
                    <h2 className="text-2xl font-bold text-charcoal mb-4">What is Plantar Fasciitis?</h2>
                    <p className="text-gray-custom mb-6">
                      Plantar fasciitis is one of the most common causes of heel pain, affecting millions of people worldwide. 
                      This condition occurs when the plantar fascia, a thick band of tissue that connects your heel bone to 
                      your toes, becomes inflamed or irritated.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                      alt="Foot anatomy showing plantar fascia"
                      className="w-full rounded-lg mb-6"
                    />
                    <p className="text-gray-custom">
                      The plantar fascia acts like a shock-absorbing bowstring, supporting the arch of your foot. 
                      When tension and stress on this bowstring become too great, small tears can occur in the fascia, 
                      leading to inflammation and pain.
                    </p>
                  </section>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-8">
                  <section id="symptoms">
                    <h2 className="text-2xl font-bold text-charcoal mb-4">Common Symptoms</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-custom">
                      <li>Sharp, stabbing pain in the bottom of your foot near the heel</li>
                      <li>Pain that is typically worse with the first few steps after awakening</li>
                      <li>Pain that flares up after standing or sitting for long periods</li>
                      <li>Pain that worsens after exercise or activity (not during)</li>
                      <li>Stiffness and tenderness in the bottom of the foot</li>
                    </ul>
                  </section>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-8">
                  <section id="causes">
                    <h2 className="text-2xl font-bold text-charcoal mb-4">What Causes Plantar Fasciitis?</h2>
                    <div className="space-y-4 text-gray-custom">
                      <h3 className="text-lg font-semibold text-charcoal">Risk Factors:</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li><strong>Age:</strong> Most common between ages 40-60</li>
                        <li><strong>Foot mechanics:</strong> Flat feet, high arches, or abnormal walking patterns</li>
                        <li><strong>Obesity:</strong> Extra weight puts additional stress on the plantar fascia</li>
                        <li><strong>Occupational hazards:</strong> Jobs that require long periods of standing</li>
                        <li><strong>Exercise:</strong> Activities that place stress on the heel and attached tissue</li>
                      </ul>
                    </div>
                  </section>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-8">
                  <section id="treatment">
                    <h2 className="text-2xl font-bold text-charcoal mb-4">Treatment Options</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-charcoal mb-3">Conservative Treatment</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-custom">
                          <li>Rest and ice therapy</li>
                          <li>Stretching exercises</li>
                          <li>Proper footwear and orthotics</li>
                          <li>Night splints</li>
                          <li>Anti-inflammatory medications</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-charcoal mb-3">Advanced Treatment</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-custom">
                          <li>Physical therapy</li>
                          <li>Corticosteroid injections</li>
                          <li>Platelet-rich plasma (PRP) therapy</li>
                          <li>Extracorporeal shock wave therapy</li>
                          <li>Surgery (in severe cases)</li>
                        </ul>
                      </div>
                    </div>
                  </section>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-8">
                  <section id="exercises">
                    <h2 className="text-2xl font-bold text-charcoal mb-4">Recommended Exercises</h2>
                    <div className="bg-success-green bg-opacity-10 border border-success-green rounded-lg p-4 mb-6">
                      <p className="text-sm text-success-green font-medium">
                        <strong>Important:</strong> Perform these exercises gently and stop if you experience increased pain.
                      </p>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-charcoal mb-3">1. Calf Stretch</h3>
                        <p className="text-gray-custom mb-2">
                          Stand arm's length from a wall. Place your right foot behind your left foot. 
                          Slowly bend your left leg forward, keeping your right knee straight and your right heel on the floor.
                        </p>
                        <p className="text-sm text-gray-custom">Hold for 15-30 seconds. Repeat 2-4 times, then switch legs.</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-charcoal mb-3">2. Plantar Fascia Stretch</h3>
                        <p className="text-gray-custom mb-2">
                          Sit in a chair and cross your affected foot over your other leg. Pull your toes back toward your shin 
                          until you feel a stretch in your arch.
                        </p>
                        <p className="text-sm text-gray-custom">Hold for 15-30 seconds. Repeat 2-4 times.</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-charcoal mb-3">3. Towel Stretch</h3>
                        <p className="text-gray-custom mb-2">
                          Sit on the floor with your legs straight out. Loop a towel around the ball of your foot and pull 
                          the towel toward you while keeping your knee straight.
                        </p>
                        <p className="text-sm text-gray-custom">Hold for 15-30 seconds. Repeat 2-4 times.</p>
                      </div>
                    </div>
                  </section>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-8">
                  <section id="prevention">
                    <h2 className="text-2xl font-bold text-charcoal mb-4">Prevention Strategies</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-custom">
                      <li>Maintain a healthy weight to reduce stress on your feet</li>
                      <li>Choose supportive shoes with good arch support and heel cushioning</li>
                      <li>Replace athletic shoes regularly (every 300-500 miles for runners)</li>
                      <li>Avoid walking barefoot on hard surfaces</li>
                      <li>Stretch your calves and plantar fascia regularly</li>
                      <li>Gradually increase activity levels</li>
                      <li>Cross-train with low-impact activities</li>
                    </ul>
                  </section>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-8">
                  <section id="when-to-see-doctor">
                    <h2 className="text-2xl font-bold text-charcoal mb-4">When to See a Doctor</h2>
                    <div className="bg-destructive bg-opacity-10 border border-destructive rounded-lg p-4 mb-4">
                      <p className="text-sm text-destructive font-medium">
                        <strong>Seek medical attention if:</strong>
                      </p>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-gray-custom">
                      <li>Pain persists for more than a few weeks despite rest and home treatment</li>
                      <li>Pain is severe or interferes with normal activities</li>
                      <li>You experience numbness, tingling, or weakness in your foot</li>
                      <li>You have diabetes and experience persistent foot pain</li>
                      <li>Pain occurs after an injury or trauma</li>
                    </ul>
                  </section>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <Card className="bg-brand-teal text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Need Personalized Help?</h3>
                <p className="mb-6">
                  Our licensed physical therapists can create a customized treatment plan for your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-warm-orange text-white hover:bg-warm-orange/90">
                    Schedule Consultation
                  </Button>
                  <Link href="/videos">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-teal">
                      Watch Exercise Videos
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
