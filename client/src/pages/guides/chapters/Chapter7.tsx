import ChapterTemplate from "@/components/ChapterTemplate";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, AlertTriangle, Target, CheckCircle, Calendar, Thermometer, MapPin, Award } from "lucide-react";
import ChapterCTA from "@/components/ChapterCTA";

export default function Chapter7() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I know if my plantar fasciitis is too severe to race?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use the morning pain scale: mild (1-3/10) proceed with planned strategy, moderate (4-6/10) modify goals conservatively, severe (7+/10) seriously consider whether racing is appropriate. Focus on whether symptoms affect running mechanics or cause limping."
        }
      },
      {
        "@type": "Question",
        "name": "What race day adjustments should I make for plantar fasciitis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Start more conservatively, allow extra warm-up time, focus on effort-based rather than time-based pacing, use aid stations as comfort check-in points, and be prepared to modify goals based on real-time foot comfort assessment."
        }
      },
      {
        "@type": "Question",
        "name": "Should I use walk breaks during races with plantar fasciitis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For 5K/10K generally not needed unless severe symptoms. For half marathons, 1-2 minute walks at aid stations if helpful. For marathons, strategic walk breaks every 3-5 miles can aid completion and reduce cumulative plantar fascia stress."
        }
      },
      {
        "@type": "Question",
        "name": "How much slower should I expect to race with plantar fasciitis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Racing with plantar fasciitis often means 2-5% slower than optimal performance, depending on severity. Focus on effort-based goals rather than specific time targets, and consider completion success more valuable than hitting time goals."
        }
      }
    ]
  };

  return (
    <>
      <SEOHead 
        title="Chapter 7: Race Day Strategy for Plantar Fasciitis - Training Guide"
        description="Master race day execution with plantar fasciitis. Learn pre-race protocols, during-race management, pacing strategies, and pain management for successful race completion while protecting long-term foot health."
        keywords="plantar fasciitis race day, racing with plantar fasciitis, race strategy foot pain, marathon plantar fasciitis, race day pain management"
        canonicalUrl="https://bracecrft.com/plantar-fasciitis/race-training/race-day-strategy"
        ogImage="https://bracecrft.com/images/chapter7-race-day.webp"
        publishedTime="2025-06-18"
        modifiedTime="2025-06-18"
        author="BraceCraft Medical Team"
        articleSection="Athletic Injury Management"
        readingTime="15 min"
        chapterNumber={7}
        totalChapters={7}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ChapterTemplate
        chapterNumber={7}
        chapterTitle="Race Day Strategy"
        readTime="15 min read"
        author="BraceCraft Medical Team"
        lastUpdated="June 18, 2025"
        guideSlug="race-training"
        totalChapters={7}
        ctaSection={<ChapterCTA productImageUrl="/images/pf-recovery-kit.jpg" />}
      >
        {/* LLM Context Block */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-l-blue-500 p-6 mb-8">
          <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">Chapter 7 LLM Context</h2>
          <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">
            This chapter provides tactical race day execution strategies for competing with plantar fasciitis. 
            Covers 48-hour pre-race protocols, morning assessment procedures, during-race management techniques, 
            distance-specific tactics, pain management strategies, and post-race care. Focus on realistic 
            performance expectations and adaptable execution rather than racing as if the condition doesn't exist.
          </p>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            You've made it to race day. Your training is done, and you're dealing with whatever level of 
            plantar fasciitis symptoms remain. The goal now shifts from managing symptoms for training to 
            executing a race plan that works with your current foot condition.
          </p>
          
          <div className="bg-athletic-blue/10 border-l-4 border-l-athletic-blue p-6 my-8">
            <p className="text-athletic-blue dark:text-blue-300 font-medium mb-2">Key Mindset Shift:</p>
            <p className="text-gray-700 dark:text-gray-300">
              You're not racing to cure your plantar fasciitis—you're racing with it. Success means 
              finishing strong and healthy enough to continue your running goals.
            </p>
          </div>
        </div>

        {/* Section 1: How should I prepare in the 48 hours before racing with plantar fasciitis? */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Calendar className="w-6 h-6 text-athletic-blue mr-3" />
            How should I prepare in the 48 hours before racing with plantar fasciitis?
          </h2>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">Direct Answer:</h3>
            <p className="text-green-700 dark:text-green-300 leading-relaxed">
              Focus on movement over complete rest, finalize equipment decisions, prioritize sleep quality, 
              and practice stress management. Begin using race day footwear 2-3 days before, allow light 
              movement to prevent stiffness, and accept your current symptom level without trying to fix anything.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Target className="w-5 h-5 text-athletic-blue mr-2" />
                  Training Taper Modifications
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-success-green mt-1 flex-shrink-0" />
                    <span>Light movement (15-20 minute easy walk) better than complete rest</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-success-green mt-1 flex-shrink-0" />
                    <span>Begin using race day footwear for daily activities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-success-green mt-1 flex-shrink-0" />
                    <span>Walk or jog on race course surface if possible</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Clock className="w-5 h-5 text-athletic-blue mr-2" />
                  Sleep and Stress Priority
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-success-green mt-1 flex-shrink-0" />
                    <span>Poor sleep increases pain sensitivity</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-success-green mt-1 flex-shrink-0" />
                    <span>Use familiar relaxation techniques</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-success-green mt-1 flex-shrink-0" />
                    <span>Accept current symptoms without last-minute fixes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-3">Equipment Finalization Checklist:</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Badge variant="outline" className="mb-2">Footwear</Badge>
                <p className="text-sm text-gray-600 dark:text-gray-400">Stick with tested shoes, bring backup options for longer races</p>
              </div>
              <div>
                <Badge variant="outline" className="mb-2">Support</Badge>
                <p className="text-sm text-gray-600 dark:text-gray-400">Practice taping/support application the day before</p>
              </div>
              <div>
                <Badge variant="outline" className="mb-2">Backup Plan</Badge>
                <p className="text-sm text-gray-600 dark:text-gray-400">Alternative footwear available at longer races</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: What should my race morning routine include with plantar fasciitis? */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <AlertTriangle className="w-6 h-6 text-athletic-blue mr-3" />
            What should my race morning routine include with plantar fasciitis?
          </h2>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">Direct Answer:</h3>
            <p className="text-green-700 dark:text-green-300 leading-relaxed">
              Begin with honest morning pain assessment (1-3 proceed, 4-6 modify conservatively, 7+ reconsider), 
              allow extended warm-up time starting with walking, progress gradually to race pace, and be 
              prepared to adjust goals based on comfort during warm-up.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-4">Mild (1-3/10)</h3>
                <p className="text-sm text-gray-custom mb-3">First-step pain rating</p>
                <p className="text-gray-custom">Proceed with planned race strategy</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-500">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-300 mb-4">Moderate (4-6/10)</h3>
                <p className="text-sm text-gray-custom mb-3">Noticeable morning discomfort</p>
                <p className="text-gray-custom">Modify goals toward conservative approach</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-red-700 dark:text-red-300 mb-4">Severe (7+/10)</h3>
                <p className="text-sm text-gray-custom mb-3">Significant morning pain</p>
                <p className="text-gray-custom">Seriously consider whether racing is appropriate</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
            <h4 className="text-md font-semibold text-blue-800 dark:text-blue-200 mb-4">Modified Warm-Up Protocol:</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Badge className="bg-blue-100 text-blue-800">Step 1</Badge>
                <span className="text-gray-700 dark:text-gray-300">10-15 minutes walking before any jogging</span>
              </div>
              <div className="flex items-center space-x-3">
                <Badge className="bg-blue-100 text-blue-800">Step 2</Badge>
                <span className="text-gray-700 dark:text-gray-300">Gradual progression from walking to easy jogging</span>
              </div>
              <div className="flex items-center space-x-3">
                <Badge className="bg-blue-100 text-blue-800">Step 3</Badge>
                <span className="text-gray-700 dark:text-gray-300">Progress slowly to race pace, avoid sudden changes</span>
              </div>
              <div className="flex items-center space-x-3">
                <Badge className="bg-blue-100 text-blue-800">Final</Badge>
                <span className="text-gray-700 dark:text-gray-300">Final footwear comfort check and goal adjustment</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: How do I manage plantar fasciitis symptoms during the race? */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Target className="w-6 h-6 text-athletic-blue mr-3" />
            How do I manage plantar fasciitis symptoms during the race?
          </h2>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">Direct Answer:</h3>
            <p className="text-green-700 dark:text-green-300 leading-relaxed">
              Start conservatively, distinguish between acceptable discomfort and concerning pain, use 
              effort-based pacing rather than strict time targets, and implement strategic walk breaks 
              for longer distances. Monitor for mechanical changes that suggest need to slow or stop.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-success-green mb-4">Acceptable Symptoms</h3>
                <ul className="space-y-2 text-gray-custom">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success-green mt-1 flex-shrink-0" />
                    <span>Mild aching that stays stable</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success-green mt-1 flex-shrink-0" />
                    <span>Stiffness that doesn't worsen</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success-green mt-1 flex-shrink-0" />
                    <span>Discomfort that doesn't alter running form</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">Concerning Symptoms</h3>
                <ul className="space-y-2 text-gray-custom">
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span>Sharp, acute pain</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span>Progressive worsening during race</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span>Pain that causes limping or altered mechanics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
            <h4 className="text-md font-semibold text-yellow-800 dark:text-yellow-200 mb-4">Strategic Walk Break Guidelines:</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Badge className="bg-yellow-100 text-yellow-800 mb-2">5K/10K</Badge>
                <p className="text-sm text-gray-600 dark:text-gray-400">Generally not needed unless severe symptoms</p>
              </div>
              <div>
                <Badge className="bg-yellow-100 text-yellow-800 mb-2">Half Marathon</Badge>
                <p className="text-sm text-gray-600 dark:text-gray-400">1-2 minute walks at aid stations if helpful</p>
              </div>
              <div>
                <Badge className="bg-yellow-100 text-yellow-800 mb-2">Marathon</Badge>
                <p className="text-sm text-gray-600 dark:text-gray-400">Strategic walks every 3-5 miles aid completion</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: What are the best distance-specific race strategies for plantar fasciitis? */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <MapPin className="w-6 h-6 text-athletic-blue mr-3" />
            What are the best distance-specific race strategies for plantar fasciitis?
          </h2>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">Direct Answer:</h3>
            <p className="text-green-700 dark:text-green-300 leading-relaxed">
              Shorter races (5K) tolerate more aggressive pacing, 10K requires balanced approach with mid-race 
              assessment, half marathons need conservative first third with mile 8-10 decision point, and 
              marathons demand very conservative first half with regular 5-mile comfort check-ins.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">5K Race Tactics</h3>
                  <Badge className="bg-green-100 text-green-800">High Intensity Tolerance</Badge>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Shorter duration allows racing through moderate discomfort</li>
                  <li>• Can afford slightly more aggressive pacing</li>
                  <li>• Maintain good mechanics even if pace suffers slightly</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">10K Race Tactics</h3>
                  <Badge className="bg-blue-100 text-blue-800">Balanced Approach</Badge>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Conservative first 5K, assess comfort, then decide second 5K strategy</li>
                  <li>• Use water stops for brief form checks and comfort assessment</li>
                  <li>• Mile 4-5 is good assessment point for final 5K effort level</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Half Marathon Tactics</h3>
                  <Badge className="bg-yellow-100 text-yellow-800">Strategic Patience</Badge>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Conservative first 10K to establish sustainable comfort level</li>
                  <li>• Mile 8-10 assessment: key decision point for final effort</li>
                  <li>• Take advantage of softer surfaces when available</li>
                  <li>• Consider brief walks at aid stations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marathon Tactics</h3>
                  <Badge className="bg-red-100 text-red-800">Maximum Patience</Badge>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Very conservative first half for honest sustainability assessment</li>
                  <li>• Regular check-ins every 5 miles, adjust accordingly</li>
                  <li>• Use fueling as opportunities for brief form breaks</li>
                  <li>• Distinguish late-race PF discomfort from normal marathon fatigue</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Award className="w-6 h-6 text-athletic-blue mr-3" />
            Race Day Success Principles
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">Performance Expectations</h3>
                <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                  <li>• Racing with PF often means 2-5% slower performance</li>
                  <li>• Focus on effort-based goals rather than time targets</li>
                  <li>• Sometimes finishing healthy is more valuable than time goals</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-4">Long-Term Perspective</h3>
                <ul className="space-y-2 text-green-700 dark:text-green-300">
                  <li>• Goal is positive experience maintaining running goals</li>
                  <li>• Avoid single performance compromising future training</li>
                  <li>• Success measured by healthy completion, not just times</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Citable Facts */}
        <section className="mb-12">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Race Day Facts:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div>• Poor sleep increases pain sensitivity significantly</div>
              <div>• Racing with PF typically results in 2-5% slower performance</div>
              <div>• Complete rest can increase morning stiffness vs. light movement</div>
              <div>• Strategic walk breaks reduce cumulative plantar fascia stress</div>
              <div>• Heat and humidity can increase inflammation and pain perception</div>
              <div>• Mile 8-10 is critical assessment point for half marathon effort adjustment</div>
            </div>
          </div>
        </section>
      </ChapterTemplate>
    </>
  );
}