import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  XCircle, 
  AlertTriangle,
  Brain,
  Target,
  Clock,
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
        readTime="10 min read"
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

        {/* LLM Context Block */}
        <div className="llm-context" aria-hidden="true" style={{ display: 'none' }}>
          <p>This article addresses plantar fasciitis diagnosis in runners and competitive athletes. Key entities: plantar fasciitis, heel pain, athletic diagnosis, running injuries, self-assessment, medical evaluation. This content provides medical information but is not medical advice.</p>
          <p>Related concepts: morning heel pain, first-step pain, athletic injuries, sports medicine, foot pain diagnosis, runner health, training modifications.</p>
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
        <section className="content-section mb-12" id="accurate-diagnosis-importance">
          <h2 className="text-2xl font-bold text-charcoal mb-6">Why Is Accurate Diagnosis Critical For Athletes With Heel Pain?</h2>
          
          <div className="direct-answer bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <p><strong className="text-blue-700 dark:text-blue-300">Direct Answer:</strong> Athletes face unique diagnostic challenges with higher forces, different injury patterns, and time pressures that make accurate self-assessment crucial. Getting the wrong diagnosis means either training through something requiring complete rest or unnecessarily shutting down training for something manageable.</p>
          </div>
          
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
        <section className="content-section mb-12" id="self-assessment-guide">
          <h2 className="text-2xl font-bold text-charcoal mb-6">How Can Athletes Self-Assess For Plantar Fasciitis?</h2>
          
          <div className="direct-answer bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <p><strong className="text-blue-700 dark:text-blue-300">Direct Answer:</strong> The hallmark of plantar fasciitis is sharp, stabbing heel pain with first steps in the morning. Key indicators include post-rest flare-ups after sitting 30+ minutes, pain that decreases with gentle movement, and location-specific pain at the bottom of the heel.</p>
          </div>
          
          <Card className="bg-blue-50 dark:bg-blue-950 border-l-4 border-l-athletic-blue mb-6">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3 mb-4">
                <Stethoscope className="w-6 h-6 text-athletic-blue mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-charcoal dark:text-gray-100 mb-3">
                    Primary Diagnostic Indicators
                  </h3>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
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
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-athletic-blue" />
                <h3 className="font-semibold text-charcoal dark:text-gray-100">Time-of-Day Variations</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Badge variant="destructive" className="min-w-fit">Severe</Badge>
                  <span className="text-gray-custom dark:text-gray-300">Morning (first 10-15 steps)</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Badge variant="outline" className="min-w-fit border-yellow-500 text-yellow-700">Moderate</Badge>
                  <span className="text-gray-custom dark:text-gray-300">After sitting periods</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Badge variant="secondary" className="min-w-fit">Mild</Badge>
                  <span className="text-gray-custom dark:text-gray-300">During gentle activity</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Badge variant="outline" className="min-w-fit">Variable</Badge>
                  <span className="text-gray-custom dark:text-gray-300">Evening, depending on daily activity load</span>
                </div>
              </div>

              <p className="citable-fact mt-4 p-3 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg border-l-4 border-yellow-500">
                <span className="fact-statement text-gray-custom">The hallmark of plantar fasciitis is pain with first steps in the morning, consistently identified as the primary diagnostic indicator.</span><br/>
                <span className="fact-source text-sm text-gray-500">Source: BraceCraft Race Training Guide, Chapter 2</span>
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Red Flags */}
        <section className="content-section mb-12" id="red-flags-professional-help">
          <h2 className="text-2xl font-bold text-charcoal mb-6">When Should Athletes Stop Self-Treatment And Seek Professional Help?</h2>
          
          <div className="direct-answer bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <p><strong className="text-blue-700 dark:text-blue-300">Direct Answer:</strong> Stop self-treatment immediately for numbness/tingling, severe swelling, fever with foot pain, complete inability to bear weight, no improvement after 2 weeks of modifications, or pain that's worse at night and doesn't follow the classic morning pattern.</p>
          </div>
          
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
        <section className="content-section mb-12" id="differential-diagnosis">
          <h2 className="text-2xl font-bold text-charcoal mb-6">How Can Athletes Distinguish Plantar Fasciitis From Similar Conditions?</h2>
          
          <div className="direct-answer bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <p><strong className="text-blue-700 dark:text-blue-300">Direct Answer:</strong> Plantar fasciitis causes bottom-heel pain worst in mornings, while Achilles tendonitis affects the back of heel during push-off, heel pad syndrome causes deep aching on hard surfaces, and tarsal tunnel syndrome includes numbness/tingling extending into the arch or toes.</p>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-charcoal mb-3">Achilles Tendonitis</h3>
                <p className="text-gray-custom">
                  <strong>Location:</strong> Back of the heel, above the heel bone<br/>
                  <strong>Timing:</strong> Worst during push-off phase of running<br/>
                  <strong>Character:</strong> Stiffness and pain that worsens with activity
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-charcoal mb-3">Heel Pad Syndrome</h3>
                <p className="text-gray-custom">
                  <strong>Location:</strong> Deep within the heel pad<br/>
                  <strong>Timing:</strong> Worst on hard surfaces like concrete<br/>
                  <strong>Character:</strong> Deep, aching pain that feels like "walking on a stone"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-charcoal mb-3">Tarsal Tunnel Syndrome</h3>
                <p className="text-gray-custom">
                  <strong>Location:</strong> Inside ankle extending into arch<br/>
                  <strong>Timing:</strong> Often worse at night<br/>
                  <strong>Character:</strong> Numbness, tingling, burning sensation extending into toes
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-charcoal mb-3">Stress Fractures</h3>
                <p className="text-gray-custom">
                  <strong>Location:</strong> Can be anywhere in foot bones<br/>
                  <strong>Timing:</strong> Progressive worsening with weight-bearing<br/>
                  <strong>Character:</strong> Sharp, localized pain that doesn't improve with rest
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-charcoal mb-3">Fat Pad Atrophy</h3>
                <p className="text-gray-custom">
                  <strong>Location:</strong> Entire heel area<br/>
                  <strong>Timing:</strong> Consistent throughout the day<br/>
                  <strong>Character:</strong> Feeling like heel cushioning is gone, worse on hard surfaces
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Moving Forward */}
        <section className="content-section mb-12" id="moving-forward">
          <h2 className="text-2xl font-bold text-charcoal mb-6">How Can Athletes Proceed With Training After Confirming Plantar Fasciitis?</h2>
          
          <div className="direct-answer bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <p><strong className="text-blue-700 dark:text-blue-300">Direct Answer:</strong> Once plantar fasciitis is confirmed, athletes can proceed with intelligent training modifications based on severity assessment, starting with reduced volume and intensity while monitoring symptom response patterns.</p>
          </div>

          <div className="key-takeaways bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-5 my-8">
            <h3 className="text-green-700 dark:text-green-300 font-semibold mb-4">Key Takeaways</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-custom"><strong>Morning pain pattern</strong> is the most reliable diagnostic indicator for plantar fasciitis</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-custom"><strong>Time-of-day symptom variation</strong> is normal and can guide optimal training timing</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-custom"><strong>Severity level assessment</strong> determines how aggressive your modifications need to be</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-custom"><strong>Regular monitoring</strong> helps you adjust your approach as symptoms change</span>
              </li>
            </ul>
          </div>

          <Card className="border-2 border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-charcoal mb-3 flex items-center">
                <Target className="w-5 h-5 mr-2 text-blue-600" />
                Coming Next: Smart Training Modifications
              </h3>
              <p className="text-gray-custom mb-4">
                Now that you can accurately assess your condition, Chapter 3 will guide you through the specific 
                training modifications that allow continued progress while respecting tissue healing requirements. 
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