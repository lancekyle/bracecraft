import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  Target, 
  TrendingUp, 
  Brain,
  Zap,
  CheckCircle2
} from "lucide-react";
import ChapterTemplate from "@/components/ChapterTemplate";
import { Link } from "wouter";

export default function Chapter1() {
  const ctaSection = (
    <Card className="bg-brand-teal text-white">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold mb-4">Ready to Assess Your Situation?</h3>
        <p className="text-gray-100 mb-6">
          Now that you understand why conventional advice fails athletes, it's time to properly assess your plantar fasciitis and create your personalized training strategy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/guides/plantar-fasciitis/training-guide/chapter-2">
            <Button className="bg-warm-orange hover:bg-warm-orange/90 text-white">
              Continue to Chapter 2: Assessment
            </Button>
          </Link>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-teal">
            Download PF Relief Kit Guide
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <ChapterTemplate
      chapterNumber={1}
      chapterTitle="The Athletic Difference"
      readTime="8 min read"
      author="Dr. Sarah Chen, DPT"
      lastUpdated="December 2024"
      guideSlug="training-guide"
      totalChapters={7}
      ctaSection={ctaSection}
    >
      {/* Introduction */}
      <Card className="mb-8 border-l-4 border-l-warm-orange">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="text-warm-orange">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-charcoal mb-2">Core Principle</h3>
              <p className="text-lg font-medium text-athletic-blue">
                "Smart training beats stopped training"
              </p>
              <p className="text-gray-custom mt-2">
                This principle will guide every decision you make throughout your plantar fasciitis journey.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why Standard Advice Fails */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-charcoal mb-6">Why Standard Plantar Fasciitis Advice Fails Athletes</h2>
        
        <p className="text-gray-custom mb-6 text-lg leading-relaxed">
          If you're reading this guide, chances are you've already encountered the standard plantar fasciitis advice: 
          "Rest until it doesn't hurt." For most athletes, this advice is not only impractical—it's counterproductive.
        </p>

        <Card className="mb-6">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-charcoal mb-4">The Standard Advice Problem</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-charcoal">Complete Rest:</strong> 
                  <span className="text-gray-custom"> Leads to deconditioning, lost fitness, and psychological frustration</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-charcoal">Generic Exercises:</strong> 
                  <span className="text-gray-custom"> Don't account for training loads and athletic demands</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-charcoal">One-Size-Fits-All:</strong> 
                  <span className="text-gray-custom"> Ignores race goals, training cycles, and individual circumstances</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="text-gray-custom mb-6 leading-relaxed">
          Standard medical advice is designed for the general population—people whose primary concern is walking 
          to the mailbox pain-free. As an athlete, your demands are fundamentally different. You need solutions 
          that maintain performance while managing symptoms.
        </p>
      </section>

      {/* Training vs Daily Activity Demands */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-charcoal mb-6">Training vs. Daily Activity: A Different Game</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="text-gray-custom mr-3">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal">Daily Activities</h3>
              </div>
              <ul className="space-y-2 text-gray-custom">
                <li>• Low-intensity walking</li>
                <li>• Minimal impact forces</li>
                <li>• Flexible timing</li>
                <li>• Easy to modify or avoid</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="text-athletic-blue mr-3">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal">Athletic Training</h3>
              </div>
              <ul className="space-y-2 text-gray-custom">
                <li>• High-intensity efforts</li>
                <li>• Repetitive impact forces</li>
                <li>• Structured progressions</li>
                <li>• Performance consequences</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-athletic-blue bg-opacity-5 border-athletic-blue">
          <CardContent className="p-6">
            <h4 className="font-semibold text-charcoal mb-3">The Athletic Reality</h4>
            <p className="text-gray-custom">
              When you're training for a race, every week matters. A month of complete rest might eliminate 
              your heel pain, but it also eliminates months of fitness gains. The key is finding the sweet 
              spot where you can maintain training adaptations while managing tissue load.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Performance Maintenance Strategy */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-charcoal mb-6">The Performance Maintenance Strategy</h2>
        
        <p className="text-gray-custom mb-6 leading-relaxed">
          Instead of stopping training entirely, we focus on maintaining your cardiovascular fitness, 
          muscular strength, and movement patterns while reducing plantar fascia stress. This approach 
          requires more thought than complete rest, but it preserves your athletic progress.
        </p>

        <div className="space-y-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="text-success-green">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Cardiovascular Maintenance</h4>
                  <p className="text-gray-custom">
                    Substitute high-impact running with pool running, cycling, or elliptical training 
                    at equivalent intensities to maintain your aerobic base.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="text-success-green">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Strength Preservation</h4>
                  <p className="text-gray-custom">
                    Continue strength training with modifications that avoid aggravating positions 
                    while building supporting muscle groups.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="text-success-green">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Progressive Loading</h4>
                  <p className="text-gray-custom">
                    Gradually reintroduce running volume and intensity based on tissue tolerance, 
                    not arbitrary timelines.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-charcoal mb-6">Decision Framework: Modify vs. Rest</h2>
        
        <p className="text-gray-custom mb-6 leading-relaxed">
          The key to successful plantar fasciitis management lies in making smart daily decisions about 
          training modifications. Here's the framework we'll use throughout this guide:
        </p>

        <Card className="mb-6">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-charcoal mb-4">The Traffic Light System</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-success-green bg-opacity-10 rounded-lg">
                <div className="w-4 h-4 bg-success-green rounded-full flex-shrink-0"></div>
                <div>
                  <strong className="text-charcoal">Green Light (0-3/10 pain):</strong>
                  <span className="text-gray-custom"> Normal training with surface considerations</span>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-warm-orange bg-opacity-10 rounded-lg">
                <div className="w-4 h-4 bg-warm-orange rounded-full flex-shrink-0"></div>
                <div>
                  <strong className="text-charcoal">Yellow Light (4-6/10 pain):</strong>
                  <span className="text-gray-custom"> Modified training with alternative surfaces/activities</span>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-destructive bg-opacity-10 rounded-lg">
                <div className="w-4 h-4 bg-destructive rounded-full flex-shrink-0"></div>
                <div>
                  <strong className="text-charcoal">Red Light (7-10/10 pain):</strong>
                  <span className="text-gray-custom"> Cross-training only or complete rest day</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Athletic Psychology */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-charcoal mb-6">Athletic Psychology Considerations</h2>
        
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="text-athletic-blue">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">The Mental Game</h3>
                <p className="text-gray-custom mb-4">
                  Plantar fasciitis affects more than just your feet—it impacts your confidence, training consistency, 
                  and race goals. Understanding the psychological aspects is crucial for long-term success.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4 mb-6">
          <div className="flex items-start space-x-3">
            <CheckCircle2 className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
            <div>
              <strong className="text-charcoal">Maintain Training Identity:</strong>
              <span className="text-gray-custom"> Continue identifying as an athlete in training, not an injured person</span>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle2 className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
            <div>
              <strong className="text-charcoal">Focus on What You Can Control:</strong>
              <span className="text-gray-custom"> Training modifications, surface choices, and recovery protocols</span>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle2 className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
            <div>
              <strong className="text-charcoal">Reframe Success Metrics:</strong>
              <span className="text-gray-custom"> Celebrate smart training decisions, not just pain-free days</span>
            </div>
          </div>
        </div>

        <Card className="bg-brand-teal bg-opacity-5 border-brand-teal">
          <CardContent className="p-6">
            <p className="text-gray-custom italic">
              "The strongest athletes aren't those who never get injured—they're the ones who adapt, 
              modify, and continue pursuing their goals despite setbacks."
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Chapter Summary */}
      <section className="mb-8">
        <Card className="bg-light-gray">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-charcoal mb-4">Chapter 1 Key Takeaways</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Badge variant="outline" className="mt-0.5">1</Badge>
                <span className="text-gray-custom">Standard plantar fasciitis advice fails athletes because it ignores training demands</span>
              </div>
              <div className="flex items-start space-x-3">
                <Badge variant="outline" className="mt-0.5">2</Badge>
                <span className="text-gray-custom">Performance maintenance strategies preserve fitness while managing symptoms</span>
              </div>
              <div className="flex items-start space-x-3">
                <Badge variant="outline" className="mt-0.5">3</Badge>
                <span className="text-gray-custom">The traffic light system guides daily training decisions</span>
              </div>
              <div className="flex items-start space-x-3">
                <Badge variant="outline" className="mt-0.5">4</Badge>
                <span className="text-gray-custom">Athletic psychology plays a crucial role in successful management</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </ChapterTemplate>
  );
}