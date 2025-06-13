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
import ChapterCTA from "@/components/ChapterCTA";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import chapterHeaderImage from "@assets/chapter1-header.webp";
import morningPainImage from "@assets/morning-pain.webp";

export default function Chapter1() {
  const ctaSection = <ChapterCTA />;

  return (
    <>
      <SEOHead
        title="Why Standard Advice Fails Athletes - Chapter 1 | BraceCraft"
        description="Discover why traditional plantar fasciitis treatment fails athletes and learn performance-focused strategies that keep you training while healing."
        keywords="plantar fasciitis athletes, athletic training injury, sports medicine plantar fasciitis, performance training heel pain"
        canonicalUrl="/plantar-fasciitis/race-training/why-standard-advice-fails"
        ogImage="/og-chapter1.jpg"
        publishedTime="2024-12-01T00:00:00Z"
        modifiedTime="2024-12-15T00:00:00Z"
        author="Dr. Sarah Chen, DPT"
        articleSection="Sports Medicine"
        readingTime="PT8M"
        chapterNumber={1}
        totalChapters={7}
      />
      <ChapterTemplate
        chapterNumber={1}
        chapterTitle="Why Standard Advice Fails Athletes"
        readTime="8 min read"
        author="Dr. Sarah Chen, DPT"
        lastUpdated="December 2024"
        guideSlug="training-guide"
        totalChapters={7}
        ctaSection={ctaSection}
      >
        {/* Chapter Header Image */}
        <div className="mb-8 flex justify-center">
          <div className="w-full max-w-md md:max-w-lg">
            <img 
              src={chapterHeaderImage} 
              alt="Chapter 1: Why Standard Advice Fails Athletes - Athletic training with plantar fasciitis"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        <p className="text-gray-custom mb-6 text-lg leading-relaxed">
          Standard plantar fasciitis advice centers on one recommendation: complete rest until symptoms resolve. 
          This approach works for sedentary individuals experiencing heel pain during daily activities. 
          <span className="font-bold text-destructive"> It fails catastrophically for athletes.</span>
        </p>

        {/* The Standard Advice Problem */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100 flex items-center">
            <AlertTriangle className="h-6 w-6 mr-3 text-amber-500" />
            The Standard Advice Problem
          </h2>

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
                    <h3 className="text-lg font-semibold text-charcoal mb-2">Training Load Reality</h3>
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
                  <div className="text-destructive">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">Timeline Reality</h3>
                    <p className="text-gray-custom mb-3">
                      Complete rest protocols recommend 6-12 weeks of activity cessation. For athletes with 
                      training cycles, competition schedules, or seasonal demands, this timeline conflicts 
                      directly with performance objectives.
                    </p>
                    <p className="text-sm text-gray-custom italic">
                      Missing 3 months of training creates fitness losses that require 6+ months to recover.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Training vs Daily Activity Demands */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100 flex items-center">
            <TrendingUp className="h-6 w-6 mr-3 text-primary" />
            Training vs Daily Activity Demands
          </h2>

          <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg mb-8">
            <div className="text-center mb-6">
              <img 
                src={morningPainImage} 
                alt="Morning plantar fasciitis pain comparison between athletes and non-athletes"
                className="w-full max-w-sm mx-auto rounded-lg shadow-sm"
              />
            </div>
            <p className="text-gray-custom leading-relaxed">
              The mechanical demands placed on an athlete's plantar fascia during training create a 
              fundamentally different healing environment than what standard protocols address.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-green-600" />
                  Standard Protocol Context
                </h3>
                <ul className="space-y-3 text-gray-custom">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-green-600 mt-1 flex-shrink-0" />
                    Walking: 1.2-1.5x body weight force
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-green-600 mt-1 flex-shrink-0" />
                    Stairs: 2x body weight force
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-green-600 mt-1 flex-shrink-0" />
                    Daily activities: 2,000-5,000 steps
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-green-600 mt-1 flex-shrink-0" />
                    Rest periods: Extended between activities
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-amber-600" />
                  Athletic Training Context
                </h3>
                <ul className="space-y-3 text-gray-custom">
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 mr-2 text-amber-600 mt-1 flex-shrink-0" />
                    Running: 2.5-3x body weight force
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 mr-2 text-amber-600 mt-1 flex-shrink-0" />
                    Jumping/plyometrics: 4-6x body weight
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 mr-2 text-amber-600 mt-1 flex-shrink-0" />
                    Training volume: 15,000-30,000 steps
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 mr-2 text-amber-600 mt-1 flex-shrink-0" />
                    Recovery: Minimal between training sessions
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Performance Maintenance Strategy */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100 flex items-center">
            <Brain className="h-6 w-6 mr-3 text-purple-600" />
            Performance Maintenance Strategy
          </h2>

          <div className="bg-green-50 dark:bg-green-950/30 p-6 rounded-lg border-l-4 border-green-500 mb-8">
            <h3 className="text-lg font-semibold text-charcoal mb-3">The Athletic Approach</h3>
            <p className="text-gray-custom leading-relaxed">
              Instead of eliminating all stress on the plantar fascia, the athletic approach focuses on 
              <strong className="text-green-700 dark:text-green-300"> intelligent load management</strong> 
              that maintains training adaptations while respecting tissue healing capacity.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Load Modification Principles</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-2">40-60%</div>
                    <p className="text-sm text-gray-custom">Initial volume reduction</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-2">2-3x</div>
                    <p className="text-sm text-gray-custom">Recovery time between sessions</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-2">Progressive</div>
                    <p className="text-sm text-gray-custom">Volume increases based on response</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Decision Framework */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100 flex items-center">
            <Target className="h-6 w-6 mr-3 text-blue-600" />
            The Athletic Decision Framework
          </h2>

          <p className="text-gray-custom mb-8 text-lg leading-relaxed">
            Every training decision becomes a calculated risk-benefit analysis balancing immediate performance 
            needs against long-term tissue health. This requires a systematic approach that standard advice 
            doesn't provide.
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-950/30 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
            <h3 className="text-lg font-semibold text-charcoal mb-3 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-yellow-600" />
              Critical Questions for Every Training Session
            </h3>
            <ul className="space-y-2 text-gray-custom">
              <li>• What's the minimum effective dose for maintaining fitness?</li>
              <li>• How will today's session impact tomorrow's tissue tolerance?</li>
              <li>• Which training elements are non-negotiable vs. modifiable?</li>
              <li>• What early warning signs indicate I'm exceeding tissue capacity?</li>
            </ul>
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-charcoal mb-4">Implementation Reality</h3>
              <p className="text-gray-custom mb-4">
                This framework requires real-time decision making during training, detailed symptom tracking, 
                and the discipline to modify sessions mid-workout when tissue response indicates overreach.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-custom italic">
                  "The difference between successful athletic plantar fasciitis management and prolonged injury 
                  lies in the athlete's ability to make intelligent modifications without abandoning training goals."
                </p>
                <p className="text-sm text-gray-custom mt-2 font-medium">
                  — Dr. Sarah Chen, Sports Physical Therapist
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Next Chapter Preview */}
        <section className="mb-8">
          <Card className="border-2 border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-charcoal mb-3 flex items-center">
                <Target className="w-5 h-5 mr-2 text-blue-600" />
                Coming Next: Know What You're Dealing With
              </h3>
              <p className="text-gray-custom mb-4">
                Before implementing any training modifications, you need accurate diagnosis and severity assessment. 
                Chapter 2 will guide you through self-assessment techniques, red flags that require immediate 
                medical attention, and severity grading to determine your specific modification approach.
              </p>
              <Link href="/plantar-fasciitis/race-training/know-what-youre-dealing-with">
                <Button className="w-full">
                  Continue to Chapter 2: Diagnosis & Assessment
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </ChapterTemplate>
    </>
  );
}