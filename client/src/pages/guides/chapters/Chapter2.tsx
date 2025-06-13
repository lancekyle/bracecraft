import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  Target, 
  TrendingUp, 
  Clock,
  CheckCircle2,
  XCircle,
  Stethoscope,
  AlertCircle,
  Phone
} from "lucide-react";
import ChapterTemplate from "@/components/ChapterTemplate";
import ChapterCTA from "@/components/ChapterCTA";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import chapterHeaderImage from "@assets/chapter2-header.webp";

export default function Chapter2() {
  const ctaSection = <ChapterCTA />;

  return (
    <>
      <SEOHead
        title="Know What You're Dealing With - Chapter 2 | BraceCraft"
        description="Learn to accurately diagnose plantar fasciitis with self-assessment tools, recognize red flags requiring medical attention, and understand severity grading for proper treatment."
        keywords="plantar fasciitis diagnosis, heel pain assessment, plantar fasciitis self test, sports injury diagnosis, foot pain evaluation"
        canonicalUrl="/plantar-fasciitis/race-training/know-what-youre-dealing-with"
        ogImage="/og-chapter2.jpg"
        publishedTime="2024-12-01T00:00:00Z"
        modifiedTime="2024-12-15T00:00:00Z"
        author="Dr. Sarah Chen, DPT"
        articleSection="Sports Medicine"
        readingTime="PT10M"
        chapterNumber={2}
        totalChapters={7}
      />
      <ChapterTemplate
        chapterNumber={2}
      chapterTitle="Know What You're Dealing With"
      readTime="7 min read"
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
            alt="Chapter 2: Know What You're Dealing With - Diagnosis and assessment for plantar fasciitis"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      <p className="text-gray-custom mb-6 text-lg leading-relaxed">
        Before modifying your training plan, you need to know exactly what you're dealing with. Heel pain isn't 
        always plantar fasciitis, and the wrong diagnosis leads to the wrong approach—potentially costing 
        weeks of training time or, worse, making the problem worse.
      </p>

      <p className="text-gray-custom mb-8 leading-relaxed">
        Athletes face unique diagnostic challenges. You're dealing with higher forces, different injury patterns, 
        and time pressures that make accurate self-assessment crucial. Getting this wrong means either training 
        through something that requires complete rest or unnecessarily shutting down training for something 
        manageable.
      </p>

      {/* Why Accurate Diagnosis Matters */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-charcoal mb-6">Why Accurate Diagnosis Matters for Athletes</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-l-4 border-l-destructive">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <XCircle className="w-6 h-6 text-destructive mt-0.5" />
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Wrong Diagnosis Risks</h3>
                  <ul className="space-y-2 text-gray-custom">
                    <li>• Training through conditions requiring rest</li>
                    <li>• Unnecessary training shutdowns</li>
                    <li>• Wasted weeks using wrong treatments</li>
                    <li>• Potential injury progression</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-success-green">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-success-green mt-0.5" />
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Accurate Assessment Benefits</h3>
                  <ul className="space-y-2 text-gray-custom">
                    <li>• Targeted treatment approach</li>
                    <li>• Appropriate training modifications</li>
                    <li>• Faster recovery timeline</li>
                    <li>• Confident decision-making</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Self-Assessment */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-charcoal mb-6">Quick Self-Assessment for Plantar Fasciitis</h2>
        
        <Card className="bg-blue-50 dark:bg-blue-950 border-l-4 border-l-athletic-blue mb-6">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3 mb-4">
              <Stethoscope className="w-6 h-6 text-athletic-blue mt-0.5" />
              <div>
                <h3 className="text-xl font-semibold text-charcoal dark:text-gray-100 mb-3">Classic PF Pattern</h3>
                <p className="text-gray-custom dark:text-gray-300 mb-4">
                  The hallmark of plantar fasciitis is pain with your first steps in the morning. Research 
                  consistently identifies this as the primary diagnostic indicator. Here's what true PF feels like:
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-athletic-blue rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">First-step pain</h3>
                  <p className="text-gray-custom">
                    Sharp, stabbing heel pain that's worst with the first few steps after getting out of bed
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-athletic-blue rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Post-rest flare-ups</h3>
                  <p className="text-gray-custom">
                    Similar pain after sitting for 30+ minutes, then standing/walking
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-athletic-blue rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Activity response</h3>
                  <p className="text-gray-custom">
                    Pain often decreases with gentle movement but increases with high-impact or prolonged activity
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-athletic-blue rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Location specificity</h3>
                  <p className="text-gray-custom">
                    Pain at the bottom of the heel, not the sides or back
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-slate-50 dark:bg-slate-900">
          <CardContent className="p-6">
            <h3 className="font-semibold text-charcoal dark:text-gray-100 mb-4">Time-of-Day Variations</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Badge variant="destructive" className="min-w-fit">Worst</Badge>
                <span className="text-gray-custom dark:text-gray-300">Morning first steps and after periods of rest</span>
              </div>
              <div className="flex items-center space-x-3">
                <Badge variant="secondary" className="min-w-fit bg-success-green text-white">Better</Badge>
                <span className="text-gray-custom dark:text-gray-300">Mid-day after gentle warm-up</span>
              </div>
              <div className="flex items-center space-x-3">
                <Badge variant="outline" className="min-w-fit">Variable</Badge>
                <span className="text-gray-custom dark:text-gray-300">Evening, depending on daily activity load</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Red Flags */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-charcoal mb-6">Red Flags: When NOT to Self-Treat</h2>
        
        <Card className="bg-red-50 dark:bg-red-950 border-l-4 border-l-destructive">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-destructive mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-charcoal dark:text-gray-100 mb-3">
                  Stop self-treatment and seek professional evaluation if you experience:
                </h3>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-gray-custom dark:text-gray-300">Numbness or tingling in the foot or toes</span>
              </div>
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-gray-custom dark:text-gray-300">Severe swelling or visible redness around the heel</span>
              </div>
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-gray-custom dark:text-gray-300">Fever accompanying foot pain</span>
              </div>
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-gray-custom dark:text-gray-300">Complete inability to bear weight on the affected foot</span>
              </div>
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-gray-custom dark:text-gray-300">No improvement after 2 weeks of appropriate modifications</span>
              </div>
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-gray-custom dark:text-gray-300">Pain that's worse at night or doesn't follow the classic morning pattern</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Ruling Out Common Mimics */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-charcoal mb-6">Ruling Out Common Mimics</h2>
        
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-charcoal mb-3">Achilles Tendonitis</h3>
              <p className="text-gray-custom">
                Pain and stiffness at the back of the heel, especially noticeable when pushing off 
                during running or walking uphill.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-charcoal mb-3">Heel Pad Syndrome</h3>
              <p className="text-gray-custom">
                Deep, aching heel pain that's worse on hard surfaces and doesn't improve with the 
                classic PF treatments.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-charcoal mb-3">Tarsal Tunnel Syndrome</h3>
              <p className="text-gray-custom">
                Heel pain accompanied by numbness, tingling, or burning sensations that may 
                extend into the arch or toes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-charcoal mb-3">Stress Fractures</h3>
              <p className="text-gray-custom">
                Usually present with activity-related pain that doesn't improve with warming up. Often 
                affects both the heel bone or nearby foot bones.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-charcoal mb-3">Fat Pad Atrophy</h3>
              <p className="text-gray-custom">
                More common in older athletes, presents as deep heel pain that's worse on hard 
                surfaces and doesn't follow the typical PF morning pattern.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Assessment Tool */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-charcoal mb-6">Complete PF Assessment Tool</h2>
        
        <Card className="bg-gradient-to-r from-brand-teal to-athletic-blue text-white">
          <CardContent className="p-8 text-center">
            <div className="bg-white bg-opacity-20 p-4 rounded-lg mb-6 inline-block">
              <Phone className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-bold mb-4">Complete PF Assessment Tool</h3>
            <p className="text-lg opacity-95 mb-6">
              Access our comprehensive diagnostic assessment to confirm your condition and receive 
              personalized recommendations.
            </p>
            <Link href="/resources">
              <Button className="bg-white text-brand-teal hover:bg-gray-100 font-semibold">
                Take Assessment
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Moving Forward */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-charcoal mb-6">Moving Forward with Confidence</h2>
        
        <p className="text-gray-custom mb-6 leading-relaxed">
          Accurate diagnosis gives you the foundation for smart training decisions. If your symptoms clearly 
          match the PF pattern and you've ruled out red flags, you can proceed confidently with the training 
          modifications outlined in the following chapters.
        </p>

        <Card className="bg-emerald-50 dark:bg-emerald-950 border-l-4 border-l-success-green">
          <CardContent className="p-6">
            <h3 className="font-semibold text-charcoal dark:text-gray-100 mb-4">Key Takeaways</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                <span className="text-gray-custom dark:text-gray-300">Morning pain pattern is the most reliable diagnostic indicator</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                <span className="text-gray-custom dark:text-gray-300">Time-of-day symptom variation is normal and can guide training timing</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                <span className="text-gray-custom dark:text-gray-300">Severity level determines how aggressive your modifications need to be</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                <span className="text-gray-custom dark:text-gray-300">Regular monitoring helps you adjust your approach as symptoms change</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-50 dark:bg-slate-900 border-l-4 border-l-brand-teal mt-6">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <Target className="w-6 h-6 text-brand-teal mt-0.5" />
              <p className="text-gray-custom dark:text-gray-300 font-medium">
                Remember: The goal isn't to eliminate all discomfort before training—it's to ensure you're dealing with 
                a condition that responds well to intelligent activity modification rather than one requiring complete rest.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Next Chapter Preview */}
      <section className="mb-8">
        <Card className="bg-light-gray border-l-4 border-l-athletic-blue">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-charcoal mb-3">
              Next: Surface and timing strategies that make training possible...
            </h3>
            <p className="text-gray-custom">
              Chapter 3 will cover specific surface selections, timing modifications, and environmental 
              factors that can make the difference between successful training and setbacks.
            </p>
          </CardContent>
        </Card>
      </section>
      </ChapterTemplate>
    </>
  );
}