import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  Target, 
  TrendingUp, 
  Brain,
  Zap,
  CheckCircle2,
  Clock
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

      {/* The Standard Advice Problem */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-charcoal mb-6">The Standard Advice Problem</h2>
        
        <p className="text-gray-custom mb-6 text-lg leading-relaxed">
          Standard plantar fasciitis advice centers on one recommendation: complete rest until symptoms resolve. 
          This approach works for sedentary individuals experiencing heel pain during daily activities. 
          <strong className="text-charcoal"> It fails catastrophically for athletes.</strong>
        </p>

        <p className="text-gray-custom mb-8 leading-relaxed">
          The failure isn't about compliance or stubbornness. Athletes face fundamentally different mechanical 
          demands, timeline pressures, and performance requirements that standard protocols don't address.
        </p>

        <div className="space-y-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="text-destructive">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Training Load Reality</h4>
                  <p className="text-gray-custom mb-3">
                    Athletic training generates forces 2-3 times body weight through the plantar fascia, 
                    repeated thousands of times per session. A 150-pound runner produces 300-450 pounds 
                    of force per foot strike during a typical training run.
                  </p>
                  <p className="text-sm text-gray-custom italic">
                    This mechanical stress exceeds daily living demands by orders of magnitude.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="text-warm-orange">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Timeline Constraints</h4>
                  <p className="text-gray-custom mb-3">
                    Athletes typically discover PF 8-16 weeks before goal races. Complete rest until 
                    asymptomatic would eliminate months of training and potentially entire competitive seasons.
                  </p>
                  <p className="text-sm text-gray-custom italic">
                    Cardiovascular fitness begins declining within 7-10 days of inactivity, with 15-25% 
                    losses possible after 3-4 weeks.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="text-athletic-blue">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Performance Decay</h4>
                  <p className="text-gray-custom mb-3">
                    Unlike general fitness maintenance, athletic performance requires specific neuromuscular 
                    adaptations that deteriorate rapidly without consistent stimulus.
                  </p>
                  <p className="text-sm text-gray-custom italic">
                    Alternative activities can maintain aerobic capacity but cannot fully preserve running 
                    economy or sport-specific coordination.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-brand-teal bg-opacity-5 border-brand-teal">
          <CardContent className="p-6">
            <p className="text-gray-custom font-medium">
              The solution isn't abandoning medical principles—it's applying them intelligently within athletic contexts.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Training vs Daily Activity Demands */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-charcoal mb-6">Training vs Daily Activity Demands</h2>
        
        <p className="text-gray-custom mb-6 leading-relaxed">
          Athletic training creates unique healing challenges that require modified management approaches.
        </p>

        <div className="space-y-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold text-charcoal mb-3">Force and Frequency</h4>
              <p className="text-gray-custom mb-3">
                Running generates repetitive high-force loading cycles that don't occur in daily activities. 
                Each training session can involve 8,000-15,000 foot strikes at forces exceeding 2x body weight.
              </p>
              <p className="text-sm text-gray-custom italic">
                This cumulative loading creates a fundamentally different tissue stress environment.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold text-charcoal mb-3">Movement Complexity</h4>
              <p className="text-gray-custom mb-3">
                Athletic movements require rapid transitions between plantar fascia flexibility (shock absorption) 
                and rigidity (propulsion). This mechanical cycling occurs in milliseconds during each foot strike, 
                demanding tissue adaptations beyond normal walking or standing.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold text-charcoal mb-3">Recovery Intervals</h4>
              <p className="text-gray-custom mb-3">
                While sedentary individuals have 16-20 hours between significant foot loading, athletes often 
                train daily with 12-24 hour recovery windows. This compressed timeline requires strategic 
                loading management rather than complete avoidance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold text-charcoal mb-3">Adaptation Stimulus</h4>
              <p className="text-gray-custom mb-3">
                Connective tissue healing requires controlled mechanical stimulus. Complete rest eliminates 
                the loading necessary for optimal tissue remodeling.
              </p>
              <p className="text-sm text-athletic-blue font-medium">
                The challenge is identifying the optimal stimulus zone—enough load to promote healing 
                without exceeding current tissue capacity.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Performance Maintenance Strategy */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-charcoal mb-6">Performance Maintenance Strategy</h2>
        
        <p className="text-gray-custom mb-6 leading-relaxed">
          The goal during PF management isn't pain elimination—it's maintaining competitive fitness while 
          allowing tissue adaptation. This requires understanding which performance components are resilient 
          to modification and which require careful preservation.
        </p>

        <div className="space-y-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold text-charcoal mb-3">Aerobic Fitness Preservation</h4>
              <p className="text-gray-custom">
                Cardiovascular adaptations can be maintained through alternative activities that don't stress 
                the plantar fascia. Cycling, swimming, and elliptical training can preserve aerobic capacity 
                with appropriate intensity management.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold text-charcoal mb-3">Neuromuscular Coordination</h4>
              <p className="text-gray-custom">
                Running-specific coordination is more fragile and requires targeted maintenance. Complete 
                elimination of running-related movement patterns leads to rapid performance degradation 
                that alternative training cannot prevent.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold text-charcoal mb-3">Biomechanical Efficiency</h4>
              <p className="text-gray-custom">
                Running economy depends on specific movement patterns and muscle activation sequences. 
                Strategic maintenance of running-specific training, even if modified, is often necessary 
                for competitive readiness.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-success-green bg-opacity-5 border-success-green">
          <CardContent className="p-6">
            <p className="text-gray-custom font-medium">
              Smart athletes can typically maintain 80-90% of performance capacity through intelligent 
              training modifications rather than complete activity cessation.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Decision Framework */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-charcoal mb-6">Decision Framework: Modify vs Rest</h2>
        
        <p className="text-gray-custom mb-6 leading-relaxed">
          Athletes need clear, practical criteria for daily training decisions. Here's a framework based on 
          clinical experience and research on PF pain patterns:
        </p>

        <Card className="mb-6">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-charcoal mb-4">Morning Assessment (Primary Decision Point)</h3>
            <p className="text-gray-custom mb-4">
              Your first steps out of bed are the most reliable indicator of plantar fascia status:
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-charcoal">Minimal discomfort (feels stiff but manageable):</strong>
                  <span className="text-gray-custom"> Proceed with planned training, minor modifications</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-warm-orange rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-charcoal">Moderate pain (makes you limp for first few steps):</strong>
                  <span className="text-gray-custom"> Significant training modifications required</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-charcoal">Severe pain (sharp, makes you avoid weight-bearing):</strong>
                  <span className="text-gray-custom"> Rest day or complete modification to non-weight bearing exercise</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-charcoal mb-4">Training Time Assessment</h3>
            <p className="text-gray-custom mb-4">
              PF pain typically decreases throughout the day as tissues warm up. This is why many athletes 
              can train in the afternoon/evening even with morning symptoms:
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-charcoal">Morning pain that resolves within 30 minutes of movement:</strong>
                  <span className="text-gray-custom"> Training later in the day is usually possible</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-warm-orange mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-charcoal">Pain that persists despite warming up:</strong>
                  <span className="text-gray-custom"> Training modifications needed regardless of timing</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-charcoal">Pain that worsens with activity:</strong>
                  <span className="text-gray-custom"> Stop and reassess</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-charcoal mb-4">During-Training Guidelines</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-charcoal">Stable discomfort:</strong>
                  <span className="text-gray-custom"> Continue but monitor closely</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-warm-orange rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-charcoal">Increasing pain or altered mechanics:</strong>
                  <span className="text-gray-custom"> Stop immediately and modify approach</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-charcoal">Sharp, acute pain:</strong>
                  <span className="text-gray-custom"> Complete cessation required</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-athletic-blue bg-opacity-5 border-athletic-blue">
          <CardContent className="p-6">
            <h4 className="font-semibold text-charcoal mb-3">Next-Day Assessment</h4>
            <p className="text-gray-custom">
              Use morning symptoms to guide the following day's decisions. Worsening morning pain indicates 
              previous day's training was excessive.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Implementation Approach */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-charcoal mb-6">Implementation Approach</h2>
        
        <p className="text-gray-custom mb-6 leading-relaxed">
          Effective PF management for athletes requires systematic application of modified training principles:
        </p>

        <div className="space-y-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="text-athletic-blue">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Assessment</h4>
                  <p className="text-gray-custom">
                    Accurate diagnosis and severity grading to determine appropriate modification levels
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="text-athletic-blue">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Strategy</h4>
                  <p className="text-gray-custom">
                    Race-distance specific training modifications that maintain competitive readiness
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="text-athletic-blue">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Equipment</h4>
                  <p className="text-gray-custom">
                    Gear choices that prioritize training completion over optimal recovery
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="text-athletic-blue">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Timeline</h4>
                  <p className="text-gray-custom">
                    Post-race recovery planning that addresses long-term foot health
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <p className="text-gray-custom mb-6 leading-relaxed">
          The following chapters provide specific implementation strategies for each component, allowing 
          athletes to maintain race goals while respecting tissue healing requirements.
        </p>

        <Card className="bg-brand-teal text-white">
          <CardContent className="p-6">
            <h4 className="text-xl font-bold mb-3">Bottom Line</h4>
            <p className="text-lg font-medium mb-3">
              Smart training beats stopped training.
            </p>
            <p className="text-gray-100">
              Athletes don't have to choose between foot health and race goals—they need intelligent 
              strategies that address both simultaneously.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Next Chapter Preview */}
      <section className="mb-8">
        <Card className="bg-light-gray border-l-4 border-l-athletic-blue">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-charcoal mb-3">
              Next: Confirming your diagnosis and ruling out conditions that require different approaches...
            </h3>
            <p className="text-gray-custom">
              Chapter 2 will guide you through self-assessment techniques, red flags that require immediate 
              medical attention, and severity grading to determine your specific modification approach.
            </p>
          </CardContent>
        </Card>
      </section>
    </ChapterTemplate>
  );
}