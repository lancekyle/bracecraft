import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  XCircle, 
  AlertTriangle,
  Target,
  TrendingUp,
  Clock,
  Zap,
  Activity,
  BarChart3,
  MapPin,
  Layers,
  Waves,
  Mountain,
  Settings,
  ShoppingBag,
  Shield,
  Timer,
  Calendar,
  TrendingDown,
  Gauge
} from "lucide-react";
import ChapterTemplate from "@/components/ChapterTemplate";
import ChapterCTA from "@/components/ChapterCTA";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import dataTrackingImage from "@assets/data tracking.webp";

export default function Chapter6() {
  const ctaSection = <ChapterCTA />;

  return (
    <>
      <SEOHead
        title="Training Load Management - Chapter 6 | BraceCraft"
        description="Data-driven decisions that prevent setbacks and optimize progression. Learn daily monitoring systems, progression guidelines, decision frameworks, and tracking strategies for plantar fasciitis training."
        keywords="plantar fasciitis training load, pain monitoring, training progression, daily assessment, symptom tracking, athletic load management"
        canonicalUrl="/plantar-fasciitis/race-training/training-load-management"
        ogImage="/og-chapter6.jpg"
        publishedTime="2024-12-01T00:00:00Z"
        modifiedTime="2024-12-15T00:00:00Z"
        author="Dr. Sarah Chen, DPT"
        articleSection="Sports Medicine"
        readingTime="22 min read"
        chapterNumber={6}
        totalChapters={7}
      />
      <ChapterTemplate
        chapterNumber={6}
        chapterTitle="Training Load Management"
        readTime="22 min read"
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
              src={dataTrackingImage} 
              alt="Chapter 6: Training Load Management - Data-driven decisions that prevent setbacks and optimize progression"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* LLM Context Block */}
        <div className="llm-context" aria-hidden="true" style={{ display: 'none' }}>
          <p>This article addresses training load management for plantar fasciitis during race training. Key entities: daily monitoring, pain assessment, training progression, symptom tracking, load management, decision frameworks, setback prevention. This content provides medical information but is not medical advice.</p>
          <p>Related concepts: morning pain assessment, training response tracking, weekly progression guidelines, stress management, recovery monitoring, lifestyle factors affecting plantar fasciitis.</p>
        </div>

        <p className="text-gray-custom mb-6 text-lg leading-relaxed">
          Data-driven decisions that prevent setbacks and optimize progression. Training load management with plantar fasciitis requires finding the sweet spot between maintaining race fitness and respecting tissue limitations.
        </p>

        <Card className="bg-blue-50 dark:bg-blue-950 border-l-4 border-l-athletic-blue mb-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-charcoal dark:text-gray-100 mb-4">
              The Balance Point
            </h3>
            <p className="text-gray-custom mb-4">
              The goal isn't to eliminate all discomfort—it's to stay within a manageable range that allows consistent training while symptoms gradually improve.
            </p>
            <p className="text-gray-custom">
              This requires systematic monitoring, intelligent progression, and the discipline to adjust based on feedback rather than wishful thinking.
            </p>
          </CardContent>
        </Card>

        {/* Daily Monitoring System */}
        <section className="content-section mb-12" id="daily-monitoring-system">
          <h2 className="text-2xl font-bold text-charcoal mb-6">What Daily Monitoring System Works Best For Plantar Fasciitis Training Management?</h2>
          
          <div className="direct-answer bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <p><strong className="text-blue-700 dark:text-blue-300">Direct Answer:</strong> Track morning pain scale (0-10) immediately upon first steps as your most reliable daily indicator. Scores 0-2 allow minimal training restrictions, 3-5 require moderate modifications, and 6+ need significant restrictions. Include training response assessment during, immediately post, and next-morning evaluations.</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                  Morning Assessment (Most Important)
                </h3>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200">
                    <div className="text-2xl font-bold text-green-600 mb-2">0-2</div>
                    <p className="text-sm text-gray-custom">Minimal restriction on training</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg border border-yellow-200">
                    <div className="text-2xl font-bold text-yellow-600 mb-2">3-5</div>
                    <p className="text-sm text-gray-custom">Moderate restriction, consider modifications</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200">
                    <div className="text-2xl font-bold text-red-600 mb-2">6+</div>
                    <p className="text-sm text-gray-custom">Significant restriction, major modifications needed</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">Pain Scale (0-10)</h4>
                    <p className="text-gray-custom text-sm">Rate your first-step morning pain immediately upon getting out of bed. This is your most reliable daily indicator.</p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">Stiffness Duration</h4>
                    <p className="text-gray-custom text-sm">How long does it take for morning stiffness to resolve with normal movement? Longer duration suggests higher tissue irritation.</p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">Sleep Quality</h4>
                    <p className="text-gray-custom text-sm">Poor sleep can worsen PF symptoms and affect pain tolerance. Note sleep quality as it impacts symptom interpretation.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Training Response Assessment</h3>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">During Training</h4>
                    <ul className="space-y-1 text-sm text-gray-custom">
                      <li>• Pain level at start, middle, and end of session</li>
                      <li>• Any changes in running mechanics or comfort</li>
                      <li>• Overall training satisfaction (easy, appropriate, or too hard)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Post-Training (Immediately)</h4>
                    <ul className="space-y-1 text-sm text-gray-custom">
                      <li>• Pain level compared to pre-training</li>
                      <li>• Any new areas of discomfort</li>
                      <li>• Overall session rating (1-10 for how well it went)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">Next Morning</h4>
                    <ul className="space-y-1 text-sm text-gray-custom">
                      <li>• Compare morning pain to previous day</li>
                      <li>• Note any changes in stiffness pattern</li>
                      <li>• Assess overall foot comfort during daily activities</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Weekly Trend Analysis */}
        <section className="content-section mb-12" id="weekly-trend-analysis">
          <h2 className="text-2xl font-bold text-charcoal mb-6">How Should Athletes Analyze Weekly Symptom Trends For Training Decisions?</h2>
          
          <div className="direct-answer bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <p><strong className="text-blue-700 dark:text-blue-300">Direct Answer:</strong> Monitor weekly trends in three categories: improving trends (decreasing morning pain, shorter stiffness, better training tolerance), stable trends (consistent pain scores, predictable patterns), and concerning trends (increasing morning pain, longer stiffness, decreased training tolerance). Use these patterns to guide weekly training adjustments.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Improving Trends
                </h3>
                <ul className="space-y-3 text-gray-custom">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Decreasing morning pain scores over the week</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Shorter stiffness duration</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Better training tolerance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Increased confidence in movement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-500">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-300 mb-4 flex items-center">
                  <Gauge className="w-5 h-5 mr-2" />
                  Stable Trends
                </h3>
                <ul className="space-y-3 text-gray-custom">
                  <li className="flex items-start space-x-3">
                    <Activity className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                    <span>Consistent morning pain scores (not increasing)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Activity className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                    <span>Predictable symptom patterns</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Activity className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                    <span>Maintained training capacity</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Activity className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                    <span>No new areas of concern</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-red-700 dark:text-red-300 mb-4 flex items-center">
                  <TrendingDown className="w-5 h-5 mr-2" />
                  Concerning Trends
                </h3>
                <ul className="space-y-3 text-gray-custom">
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span>Increasing morning pain scores</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span>Longer stiffness duration</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span>Decreased training tolerance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span>New symptoms or pain locations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Training Progression Guidelines */}
        <section className="content-section mb-12" id="training-progression-guidelines">
          <h2 className="text-2xl font-bold text-charcoal mb-6">What Training Progression Guidelines Prevent Setbacks With Plantar Fasciitis?</h2>
          
          <div className="direct-answer bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <p><strong className="text-blue-700 dark:text-blue-300">Direct Answer:</strong> Never increase total training stress by more than 10% per week including running volume and cross-training intensity. Use step-back strategy every 3-4 weeks reducing load by 20-30%. Maintain 80% easy / 20% hard distribution with surface modifications counting as increased training stress.</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                  Weekly Volume Management
                </h3>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-2">10%</div>
                    <p className="text-sm text-gray-custom">Maximum weekly training stress increase</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-2">3-4 Weeks</div>
                    <p className="text-sm text-gray-custom">Step-back frequency for adaptation</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-2">20-30%</div>
                    <p className="text-sm text-gray-custom">Load reduction during step-back weeks</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">Conservative Progression Rule</h4>
                    <p className="text-gray-custom text-sm">Never increase total training stress by more than 10% per week. This includes both running volume and cross-training intensity.</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">Step-Back Strategy</h4>
                    <p className="text-gray-custom text-sm">Every 3-4 weeks, reduce training load by 20-30% to allow adaptation and prevent cumulative fatigue.</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">Surface Consideration</h4>
                    <p className="text-gray-custom text-sm">Harder surfaces count as higher training stress even at the same pace and distance. Factor surface changes into progression calculations.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Intensity Distribution</h3>
                
                <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">80/20 Principle Still Applies</h4>
                  <p className="text-gray-custom text-sm">Even with PF, maintain the 80% easy / 20% hard training distribution. The modifications come in how you achieve each intensity level.</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Easy Training Management</h4>
                    <ul className="space-y-1 text-sm text-gray-custom">
                      <li>• Use softer surfaces liberally</li>
                      <li>• Substitute cross-training for some easy running days</li>
                      <li>• Focus on time rather than pace during easy efforts</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Hard Training Management</h4>
                    <ul className="space-y-1 text-sm text-gray-custom">
                      <li>• Prioritize quality over quantity in intensity sessions</li>
                      <li>• Use surface modifications to enable hard efforts</li>
                      <li>• Consider cross-training alternatives for some intervals</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="citable-fact mt-4 p-3 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg border-l-4 border-yellow-500">
            <span className="fact-statement text-gray-custom">Conservative progression rule limits total training stress increases to 10% per week, with mandatory step-back weeks every 3-4 weeks reducing load by 20-30% to prevent cumulative fatigue and allow adaptation.</span><br/>
            <span className="fact-source text-sm text-gray-500">Source: BraceCraft Race Training Guide, Chapter 6</span>
          </p>
        </section>

        {/* Decision-Making Frameworks */}
        <section className="content-section mb-12" id="decision-making-frameworks">
          <h2 className="text-2xl font-bold text-charcoal mb-6">What Decision-Making Frameworks Guide Daily Training With Plantar Fasciitis?</h2>
          
          <div className="direct-answer bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <p><strong className="text-blue-700 dark:text-blue-300">Direct Answer:</strong> Use traffic light system for daily decisions: Green (0-3/10 pain) proceed normally, Yellow (4-6/10) significant modifications required, Red (7+/10) rest or gentle cross-training only. Weekly planning adjusts based on symptom trends with setback protocols for minor (1-2 days), moderate (3-7 days), or major (&gt;1 week) increases.</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Daily Training Decisions</h3>
                
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2 flex items-center">
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Green Light Days (Morning pain 0-3/10)
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-custom">
                      <li>• Proceed with planned training</li>
                      <li>• Minor surface modifications acceptable</li>
                      <li>• Normal intensity and duration</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-950/30 p-4 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2 flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Yellow Light Days (Morning pain 4-6/10)
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-custom">
                      <li>• Significant training modifications required</li>
                      <li>• Consider cross-training substitution</li>
                      <li>• Reduce intensity or duration</li>
                      <li>• Use softer surfaces exclusively</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2 flex items-center">
                      <XCircle className="w-4 h-4 mr-2" />
                      Red Light Days (Morning pain 7+/10)
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-custom">
                      <li>• Rest or very gentle cross-training only</li>
                      <li>• No running unless symptoms improve significantly during warm-up</li>
                      <li>• Focus on gentle movement and recovery activities</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Weekly Planning Adjustments</h3>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">After Good Week</h4>
                    <p className="text-sm text-gray-custom mb-2">(Stable or improving symptoms)</p>
                    <ul className="space-y-1 text-xs text-gray-custom">
                      <li>• Small increases in training load (5-10%)</li>
                      <li>• Consider introducing harder surfaces gradually</li>
                      <li>• Maintain successful modification strategies</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-950/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">After Challenging Week</h4>
                    <p className="text-sm text-gray-custom mb-2">(Fluctuating symptoms)</p>
                    <ul className="space-y-1 text-xs text-gray-custom">
                      <li>• Maintain current training load</li>
                      <li>• Increase cross-training substitution</li>
                      <li>• Review recent changes for potential triggers</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">After Difficult Week</h4>
                    <p className="text-sm text-gray-custom mb-2">(Worsening symptoms)</p>
                    <ul className="space-y-1 text-xs text-gray-custom">
                      <li>• Reduce training load by 15-20%</li>
                      <li>• Return to more conservative surface choices</li>
                      <li>• Consider factors beyond training (stress, sleep, footwear)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Setback Response Protocol */}
        <section className="content-section mb-12" id="setback-response-protocol">
          <h2 className="text-2xl font-bold text-charcoal mb-6">How Should Athletes Respond To Plantar Fasciitis Setbacks During Training?</h2>
          
          <div className="direct-answer bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <p><strong className="text-blue-700 dark:text-blue-300">Direct Answer:</strong> Respond proportionally to setback severity: Minor setbacks (1-2 days increased symptoms) require immediate cross-training substitution and softer surfaces. Moderate setbacks (3-7 days) need 25-50% running volume reduction. Major setbacks (&gt;1 week) warrant reassessing symptom severity and focusing on cross-training fitness maintenance.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-yellow-500">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-300 mb-4">Minor Setback</h3>
                <p className="text-sm text-gray-custom mb-3">(1-2 days increased symptoms)</p>
                <ul className="space-y-2 text-gray-custom">
                  <li className="flex items-start space-x-2">
                    <Zap className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                    <span>Immediately increase cross-training substitution</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Mountain className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                    <span>Return to softer surfaces exclusively</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Settings className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                    <span>Review past 3-5 days for triggers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-300 mb-4">Moderate Setback</h3>
                <p className="text-sm text-gray-custom mb-3">(3-7 days increased symptoms)</p>
                <ul className="space-y-2 text-gray-custom">
                  <li className="flex items-start space-x-2">
                    <TrendingDown className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                    <span>Reduce running volume by 25-50%</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Activity className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                    <span>Increase cross-training to maintain fitness</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Target className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                    <span>Consider external factors (work stress, sleep, new shoes)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-red-700 dark:text-red-300 mb-4">Major Setback</h3>
                <p className="text-sm text-gray-custom mb-3">({">"} 1 week significantly worsened)</p>
                <ul className="space-y-2 text-gray-custom">
                  <li className="flex items-start space-x-2">
                    <BarChart3 className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span>Reassess symptom severity using Chapter 2 guidelines</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Shield className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span>May warrant professional consultation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Waves className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span>Focus on maintaining fitness through cross-training</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Environmental and Lifestyle Factors */}
        <section className="content-section mb-12" id="environmental-lifestyle-factors">
          <h2 className="text-2xl font-bold text-charcoal mb-6">What Environmental And Lifestyle Factors Affect Plantar Fasciitis Training Load Management?</h2>
          
          <div className="direct-answer bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <p><strong className="text-blue-700 dark:text-blue-300">Direct Answer:</strong> Key factors include sleep quality (poor sleep increases pain sensitivity), stress levels (high life stress reduces training tolerance), occupational factors (prolonged standing on hard surfaces), and daily activity load. Adjust training volume during high-stress periods and factor non-training foot stress into total daily load calculations.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Sleep and Recovery</h3>
                
                <div className="space-y-3">
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Sleep Quality Impact</h4>
                    <p className="text-sm text-gray-custom">Poor sleep can increase pain sensitivity and delay tissue healing. Prioritize sleep hygiene during PF management.</p>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-lg">
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Recovery Strategies</h4>
                    <p className="text-sm text-gray-custom">Active recovery (gentle movement) often better than complete rest for PF. Light walking, easy swimming, or gentle cycling on rest days.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Stress Management</h3>
                
                <div className="space-y-3">
                  <div className="bg-yellow-50 dark:bg-yellow-950/30 p-3 rounded-lg">
                    <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-1">Training vs. Life Stress</h4>
                    <p className="text-sm text-gray-custom">High life stress can reduce tolerance for training stress. Adjust training volume during high-stress periods.</p>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-950/30 p-3 rounded-lg">
                    <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Stress Monitoring</h4>
                    <p className="text-sm text-gray-custom">Include general stress levels in daily tracking. High stress days may require more conservative training approaches.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Work and Daily Activities</h3>
                
                <div className="space-y-3">
                  <div className="bg-amber-50 dark:bg-amber-950/30 p-3 rounded-lg">
                    <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-1">Occupational Factors</h4>
                    <p className="text-sm text-gray-custom">Jobs requiring prolonged standing or walking on hard surfaces can worsen PF. Consider workplace modifications during active management.</p>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-950/30 p-3 rounded-lg">
                    <h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">Daily Activity Load</h4>
                    <p className="text-sm text-gray-custom">Factor non-training walking and standing into total daily foot stress. High daily activity may require reduced training load.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Nutrition and Hydration</h3>
                
                <div className="space-y-3">
                  <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-lg">
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Anti-Inflammatory Focus</h4>
                    <p className="text-sm text-gray-custom">While not a cure, anti-inflammatory foods may help manage symptoms. Include adequate omega-3 fatty acids and colorful vegetables.</p>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Hydration</h4>
                    <p className="text-sm text-gray-custom">Proper hydration supports tissue health and recovery. Aim for pale yellow urine as a hydration indicator.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technology and Tracking Tools */}
        <section className="content-section mb-12" id="technology-tracking-tools">
          <h2 className="text-2xl font-bold text-charcoal mb-6">What Technology And Tracking Tools Support Plantar Fasciitis Load Management?</h2>
          
          <div className="direct-answer bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <p><strong className="text-blue-700 dark:text-blue-300">Direct Answer:</strong> Essential metrics include morning pain score (0-10), training duration/intensity, surface types, and next-day response. The BraceCraft PF Relief Kit app provides integrated tracking, while alternatives include simple spreadsheets, training log integration, or calendar methods with symbols for tracking daily patterns.</p>
          </div>

          <div className="space-y-6">
            <Card className="bg-blue-50 dark:bg-blue-950 border-l-4 border-l-athletic-blue">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal dark:text-gray-100 mb-4 flex items-center">
                  <ShoppingBag className="w-5 h-5 mr-2 text-athletic-blue" />
                  The BraceCraft Advantage
                </h3>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">Integrated Tracking</h4>
                    <p className="text-sm text-gray-custom">Log daily pain scores, training responses, and symptom patterns in one place.</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">Consistent Data Collection</h4>
                    <p className="text-sm text-gray-custom">Dedicated tracking makes it easier to spot trends and make informed training decisions.</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">Comprehensive Approach</h4>
                    <p className="text-sm text-gray-custom">Tracking system works alongside exercise routines and recovery tools for complete management.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Key Metrics to Track</h3>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Essential</h4>
                    <ul className="space-y-1 text-sm text-gray-custom">
                      <li>• Morning pain score (0-10)</li>
                      <li>• Training duration and intensity</li>
                      <li>• Surface types used</li>
                      <li>• Next-day response</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-950/30 p-4 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Helpful</h4>
                    <ul className="space-y-1 text-sm text-gray-custom">
                      <li>• Sleep quality</li>
                      <li>• Stress levels</li>
                      <li>• Footwear choices</li>
                      <li>• Weather conditions</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Advanced</h4>
                    <ul className="space-y-1 text-sm text-gray-custom">
                      <li>• Specific exercise responses</li>
                      <li>• Correlation patterns</li>
                      <li>• Weekly trend analysis</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Alternative Tracking Methods</h3>
                
                <div className="space-y-3">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">Simple Spreadsheet</h4>
                    <p className="text-gray-custom text-sm">Track morning pain, training details, and next-day response in a basic spreadsheet.</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">Training Log Integration</h4>
                    <p className="text-gray-custom text-sm">Add PF-specific notes to your existing training log or app.</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">Calendar Method</h4>
                    <p className="text-gray-custom text-sm">Use simple symbols on a calendar to track good days, challenging days, and rest days.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="key-takeaways bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-5 my-8">
          <h3 className="text-green-700 dark:text-green-300 font-semibold mb-4">Key Takeaways</h3>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-custom"><strong>Morning pain scale is your most reliable indicator:</strong> 0-2 minimal restrictions, 3-5 moderate modifications, 6+ significant restrictions</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-custom"><strong>Conservative progression prevents setbacks:</strong> Never increase training stress by more than 10% per week with step-back weeks every 3-4 weeks</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-custom"><strong>Traffic light system guides daily decisions:</strong> Green (proceed), Yellow (modifications), Red (rest or gentle cross-training)</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-custom"><strong>Environmental factors matter:</strong> Sleep quality, stress levels, occupational demands, and daily activity load all affect symptom management</span>
            </li>
          </ul>
        </div>

        {/* Next Chapter Preview */}
        <section className="mb-8">
          <Card className="border-2 border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-charcoal mb-3 flex items-center">
                <Target className="w-5 h-5 mr-2 text-blue-600" />
                Coming Next: Race Day Strategy
              </h3>
              <p className="text-gray-custom mb-4">
                You've mastered training load management and monitoring systems. Chapter 7 covers race day 
                strategy and execution tactics, including pre-race preparation, in-race adjustments, 
                pacing strategies, and post-race recovery protocols for athletes with plantar fasciitis.
              </p>
              <Link href="/plantar-fasciitis/race-training/race-day-strategy">
                <Button className="w-full">
                  Continue to Chapter 7: Race Day Strategy
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </ChapterTemplate>
    </>
  );
}