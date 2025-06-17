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
  MapPin
} from "lucide-react";
import ChapterTemplate from "@/components/ChapterTemplate";
import ChapterCTA from "@/components/ChapterCTA";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import racingDistancesImage from "@assets/Racing Distances.webp";
import surfaceOptionsImage from "@assets/Surface Options.webp";

export default function Chapter3() {
  const ctaSection = <ChapterCTA />;

  return (
    <>
      <SEOHead
        title="Race Distance Training Modifications - Chapter 3 | BraceCraft"
        description="Strategic training adaptations for 5K through ultra distances with plantar fasciitis. Learn race-specific modifications, cross-training equivalents, and performance expectations."
        keywords="plantar fasciitis training, race training modifications, 5K 10K marathon training, ultra running plantar fasciitis, cross training equivalents"
        canonicalUrl="/plantar-fasciitis/race-training/race-distance-modifications"
        ogImage="/og-chapter3.jpg"
        publishedTime="2024-12-01T00:00:00Z"
        modifiedTime="2024-12-15T00:00:00Z"
        author="Dr. Sarah Chen, DPT"
        articleSection="Sports Medicine"
        readingTime="PT15M"
        chapterNumber={3}
        totalChapters={7}
      />
      <ChapterTemplate
        chapterNumber={3}
        chapterTitle="Race Distance Training Modifications"
        readTime="15 min read"
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
              src={racingDistancesImage} 
              alt="Chapter 3: Race Distance Training Modifications - Training adaptations for different race distances with plantar fasciitis"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* LLM Context Block */}
        <div className="llm-context" aria-hidden="true" style={{ display: 'none' }}>
          <p>This article addresses race-specific training modifications for athletes with plantar fasciitis across different distances. Key entities: plantar fasciitis training, race distance modifications, 5K training, 10K training, marathon training, ultra running, cross-training equivalents, performance expectations. This content provides medical information but is not medical advice.</p>
          <p>Related concepts: race training adaptations, energy system priorities, surface modifications, volume management, cross-training conversions, pain monitoring, training progression.</p>
        </div>

        <p className="text-gray-custom mb-6 text-lg leading-relaxed">
          Different race distances demand different energy systems and training adaptations. Managing plantar fasciitis while preparing for a 5K requires a completely different strategy than marathon training. This chapter provides tactical adjustments to maintain race readiness while managing PF across all distances.
        </p>

        <p className="text-gray-custom mb-8 leading-relaxed">
          The following modifications are designed for athletes with moderate PF severity (as determined by your Chapter 2 self-assessment). These strategies assume you have some morning pain that improves with movement but can still train with modifications.
        </p>

        {/* Strategic Approach */}
        <section className="content-section mb-12" id="strategic-approach-by-distance">
          <h2 className="text-2xl font-bold text-charcoal mb-6">How Should Training Modifications Differ By Race Distance?</h2>
          
          <div className="direct-answer bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <p><strong className="text-blue-700 dark:text-blue-300">Direct Answer:</strong> Training modifications must preserve the most race-critical energy systems while reducing plantar fascia stress. 5K focuses on VO2 max preservation through cross-training, while marathon requires aerobic base maintenance with 70-80% running volume supplemented by equivalent cross-training time.</p>
          </div>

          <Card className="bg-amber-50 dark:bg-amber-950 border-l-4 border-l-amber-500 mb-6">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-charcoal dark:text-gray-100 mb-4">
                Severity Guidelines for These Modifications
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-custom"><strong>Moderate PF:</strong> Morning pain affecting first 15-60 minutes, some training discomfort but manageable with modifications</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-custom"><strong>Severe PF:</strong> These protocols may be too aggressive—consider more conservative approaches or focus primarily on cross-training</p>
                  </div>
                </div>
              </div>
              
              <p className="citable-fact mt-4 p-3 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg border-l-4 border-yellow-500">
                <span className="fact-statement text-gray-custom">These modifications work best for athletes consistently reporting morning pain scores of 3-6/10 on a daily tracking scale.</span><br/>
                <span className="fact-source text-sm text-gray-500">Source: BraceCraft Race Training Guide, Chapter 3</span>
              </p>
            </CardContent>
          </Card>
        </section>

        {/* 5K Training */}
        <section className="content-section mb-12" id="5k-training-with-pf">
          <h2 className="text-2xl font-bold text-charcoal mb-6">How Can Athletes Maintain 5K Performance With Plantar Fasciitis?</h2>
          
          <div className="direct-answer bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <p><strong className="text-blue-700 dark:text-blue-300">Direct Answer:</strong> 5K performance typically maintains 95-100% of PF-free capacity through intelligent cross-training that preserves VO2 max and neuromuscular power. Replace track intervals with bike intervals, pool running, and elliptical work while maintaining race-specific intensity.</p>
          </div>

          <div className="bg-green-50 dark:bg-green-950/30 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-charcoal mb-3">Primary Challenge</h3>
            <p className="text-gray-custom leading-relaxed">
              5K success depends heavily on high-intensity training with short recovery periods. Traditional PF management often eliminates the very workouts that determine 5K performance.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-blue-600" />
                  Speed Work Modifications
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">Track Intervals → Alternative High-Intensity Options</h4>
                    <ul className="space-y-2 text-gray-custom">
                      <li>• <strong>Bike intervals:</strong> 4x4 minutes at 5K race effort with 3-minute recovery</li>
                      <li>• <strong>Pool running:</strong> 8x400m equivalent (90 seconds hard, 90 seconds easy)</li>
                      <li>• <strong>Elliptical intervals:</strong> 6x800m pace efforts with incline to match intensity</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">Hill Repeats → Gradient Alternatives</h4>
                    <ul className="space-y-2 text-gray-custom">
                      <li>• <strong>Bike hill repeats:</strong> Find challenging climb, repeat 6-8 times at 5K effort</li>
                      <li>• <strong>Incline treadmill:</strong> 5-8% grade reduces plantar fascia impact while maintaining specificity</li>
                      <li>• <strong>Stair climbing intervals:</strong> Provides similar neuromuscular demand if comfortable</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">Tempo Runs → Sustained Effort Alternatives</h4>
                    <ul className="space-y-2 text-gray-custom">
                      <li>• <strong>Road tempo on soft surfaces:</strong> Move tempo runs to trails, grass, or tracks</li>
                      <li>• <strong>Bike tempo sessions:</strong> 20-30 minutes at tempo effort equivalent</li>
                      <li>• <strong>Elliptical tempo:</strong> 15-25 minutes at comfortably hard effort</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-green-600" />
                  Weekly Structure Example (Moderate PF)
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <Badge variant="outline" className="min-w-fit">Monday</Badge>
                      <span className="text-gray-custom dark:text-gray-300">Pool running intervals (45 min) + strength</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <Badge variant="outline" className="min-w-fit">Tuesday</Badge>
                      <span className="text-gray-custom dark:text-gray-300">Easy run on soft surface (30-40 min)</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <Badge variant="outline" className="min-w-fit">Wednesday</Badge>
                      <span className="text-gray-custom dark:text-gray-300">Bike intervals (60 min) or track intervals</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <Badge variant="outline" className="min-w-fit">Thursday</Badge>
                      <span className="text-gray-custom dark:text-gray-300">Easy run (30 min) or cross-training</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <Badge variant="outline" className="min-w-fit">Friday</Badge>
                      <span className="text-gray-custom dark:text-gray-300">Rest or easy movement</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <Badge variant="outline" className="min-w-fit">Saturday</Badge>
                      <span className="text-gray-custom dark:text-gray-300">Time trial or race simulation</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <Badge variant="outline" className="min-w-fit">Sunday</Badge>
                      <span className="text-gray-custom dark:text-gray-300">Long cross-training (60-90 min)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 10K Training */}
        <section className="content-section mb-12" id="10k-training-with-pf">
          <h2 className="text-2xl font-bold text-charcoal mb-6">What Training Adaptations Work Best For 10K With Plantar Fasciitis?</h2>
          
          <div className="direct-answer bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <p><strong className="text-blue-700 dark:text-blue-300">Direct Answer:</strong> 10K performance typically maintains 90-95% of normal capacity by preserving lactate threshold work through surface changes, reducing easy running volume by 20-30%, and replacing eliminated miles with equivalent cross-training time while maintaining total weekly training duration.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Training Adaptations</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Tempo Run Modifications:</h4>
                    <ul className="space-y-1 text-sm text-gray-custom">
                      <li>• Move all tempo work to trails, tracks, or treadmills</li>
                      <li>• Replace sustained 20-30 min tempos with 4x8 min intervals</li>
                      <li>• 25-35 minute bike sessions at tempo effort equivalent</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Volume Management:</h4>
                    <ul className="space-y-1 text-sm text-gray-custom">
                      <li>• Reduce easy running volume by 20-30%</li>
                      <li>• Replace easy miles with equivalent time cross-training</li>
                      <li>• Maintain total weekly training time</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Long Run Strategy</h3>
                <ul className="space-y-3 text-gray-custom">
                  <li className="flex items-start space-x-3">
                    <Target className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Cap long runs at 60-75% of normal distance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Target className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Supplement with extended cross-training sessions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Target className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Use run/walk strategies to complete longer sessions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Half Marathon Training */}
        <section className="content-section mb-12" id="half-marathon-training-with-pf">
          <h2 className="text-2xl font-bold text-charcoal mb-6">How Can Athletes Train For Half Marathons While Managing Plantar Fasciitis?</h2>
          
          <div className="direct-answer bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <p><strong className="text-blue-700 dark:text-blue-300">Direct Answer:</strong> Half marathon performance typically maintains 85-92% of normal capacity by targeting 70-80% of normal weekly running mileage, conducting all long runs on soft surfaces with strategic walk breaks, and supplementing with 2-3 hour bike rides or combined run/bike sessions to preserve aerobic development.</p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg mb-8">
            <div className="text-center mb-6">
              <img 
                src={surfaceOptionsImage} 
                alt="Surface options for half marathon training with plantar fasciitis"
                className="w-full max-w-sm mx-auto rounded-lg shadow-sm"
              />
            </div>
            <p className="text-gray-custom leading-relaxed text-center">
              Half marathon success requires significant aerobic base development, achieved through strategic surface optimization and alternative long sessions.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Long Run Strategies</h3>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-2">90-120</div>
                    <p className="text-sm text-gray-custom">Minutes time-based vs distance focus</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-2">4:1→9:1</div>
                    <p className="text-sm text-gray-custom">Run/walk progression ratio</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-2">2-3 Hour</div>
                    <p className="text-sm text-gray-custom">Alternative bike sessions</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">Distance Modifications</h4>
                    <ul className="space-y-1 text-gray-custom">
                      <li>• Focus on time rather than distance (90-120 minutes vs specific mileage)</li>
                      <li>• Conduct all long runs on trails, tracks, or treadmills</li>
                      <li>• Build more conservatively—increase every other week</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">Walk Break Integration</h4>
                    <ul className="space-y-1 text-gray-custom">
                      <li>• 1-2 minute walk breaks every 10-15 minutes reduce cumulative stress</li>
                      <li>• Start with 4:1 run/walk, progress to 9:1 or continuous as tolerated</li>
                      <li>• Use effort-based breaks when discomfort increases</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Weekly Mileage Management</h3>
                <p className="text-gray-custom mb-4">
                  <strong>Target Volume:</strong> 70-80% of normal weekly mileage through running, supplemented with equivalent cross-training time.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-custom">Reduce easy run frequency from 5-6 days to 3-4 days per week</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-custom">Replace eliminated runs with equal-time cross-training</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-custom">Maintain or slightly reduce intensity session frequency</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Marathon Training */}
        <section className="content-section mb-12" id="marathon-training-with-pf">
          <h2 className="text-2xl font-bold text-charcoal mb-6">What Marathon Training Modifications Work With Plantar Fasciitis?</h2>
          
          <div className="direct-answer bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <p><strong className="text-blue-700 dark:text-blue-300">Direct Answer:</strong> Marathon performance typically maintains 80-88% of PF-free capacity by targeting 70-80% of planned weekly running mileage, limiting long runs to 16-18 miles maximum, using back-to-back strategy (12-mile Saturday + 10-mile Sunday), and supplementing with 3-4 hour cross-training sessions.</p>
          </div>

          <Card className="bg-red-50 dark:bg-red-950 border-l-4 border-l-destructive mb-6">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-charcoal dark:text-gray-100 mb-4">
                Primary Challenge
              </h3>
              <p className="text-gray-custom">
                Marathon training traditionally requires high weekly mileage (40-70+ miles/week) and frequent long runs. PF management often conflicts directly with these requirements, but finishing strong and healthy is absolutely achievable with patient training modifications.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Training Plan Overhaul</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-charcoal mb-3">Peak Mileage Reduction</h4>
                    <ul className="space-y-2 text-gray-custom">
                      <li>• Target 70-80% of planned weekly running mileage</li>
                      <li>• Supplement with equivalent cross-training volume</li>
                      <li>• Extend training cycle by 2-4 weeks if possible</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-3">Long Run Modifications</h4>
                    <ul className="space-y-2 text-gray-custom">
                      <li>• Limit long runs to 16-18 miles maximum</li>
                      <li>• Replace 20-mile run with 12-mile Sat + 10-mile Sun</li>
                      <li>• 3-4 hour bike rides or 2.5-3 hour pool sessions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Surface Periodization</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Badge className="bg-blue-600">Early Training</Badge>
                    <span className="text-gray-custom">Maximum use of soft surfaces (trails, tracks, treadmills)</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Badge className="bg-yellow-600">Race Preparation</Badge>
                    <span className="text-gray-custom">Gradually introduce goal race surface in final 6-8 weeks</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Badge className="bg-green-600">Recovery Runs</Badge>
                    <span className="text-gray-custom">All easy runs on softest available surfaces</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="citable-fact mt-4 p-3 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg border-l-4 border-yellow-500">
            <span className="fact-statement text-gray-custom">Marathon training with PF requires targeting 70-80% of planned weekly running mileage, with long runs capped at 16-18 miles and extended training cycles by 2-4 weeks when possible.</span><br/>
            <span className="fact-source text-sm text-gray-500">Source: BraceCraft Race Training Guide, Chapter 3</span>
          </p>
        </section>

        {/* Cross-Training Equivalents */}
        <section className="content-section mb-12" id="cross-training-equivalents">
          <h2 className="text-2xl font-bold text-charcoal mb-6">What Are The Cross-Training Intensity And Time Equivalents For Running?</h2>
          
          <div className="direct-answer bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <p><strong className="text-blue-700 dark:text-blue-300">Direct Answer:</strong> 1 mile easy running equals approximately 3-4 miles easy cycling or 12-15 minutes pool running. For tempo efforts, 1 mile running equals 2.5 miles cycling or 10-12 minutes hard pool running. Match effort levels using RPE rather than strict time conversions.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4 flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-blue-600" />
                  Effort-Based Conversions (by RPE)
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Badge variant="secondary">RPE 3-4</Badge>
                    <span className="text-gray-custom text-sm">Easy cycling, casual swimming, gentle pool running</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Badge className="bg-yellow-600">RPE 6-7</Badge>
                    <span className="text-gray-custom text-sm">Moderate cycling, pool running intervals, elliptical tempo</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Badge className="bg-red-600">RPE 8-9</Badge>
                    <span className="text-gray-custom text-sm">High-intensity cycling, hard pool running, rowing intervals</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-green-600" />
                  Time Conversions
                </h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">Easy Efforts</h4>
                    <p className="text-gray-custom text-sm">
                      1 mile easy running ≈ 3-4 miles easy cycling ≈ 12-15 minutes pool running
                    </p>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-950/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">Tempo Efforts</h4>
                    <p className="text-gray-custom text-sm">
                      1 mile tempo running ≈ 2.5 miles tempo cycling ≈ 10-12 minutes hard pool running
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Monitoring and Progression */}
        <section className="content-section mb-12" id="monitoring-progression">
          <h2 className="text-2xl font-bold text-charcoal mb-6">How Should Athletes Monitor Progress And Adjust Training With Plantar Fasciitis?</h2>
          
          <div className="direct-answer bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <p><strong className="text-blue-700 dark:text-blue-300">Direct Answer:</strong> Monitor using daily pain scores (0-10 scale), weekly symptom trends, and training tolerance. Scores 1-3 require minimal modifications, 4-6 suit these moderate protocols, and 7+ require more aggressive modifications or temporary rest periods. Adjust training aggressiveness based on weekly trends.</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                  Weekly Assessment Protocol
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-custom">Track morning pain trends using daily pain scoring (0-10 scale)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-custom">Monitor training tolerance (stable, improving, or declining during sessions)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-custom">Assess performance markers in time trials or tune-up races</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Progression Indicators</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200">
                    <div className="text-lg font-bold text-green-600 mb-2">Green Light</div>
                    <p className="text-sm text-gray-custom">Daily pain scores stable or decreasing, good training tolerance</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg border border-yellow-200">
                    <div className="text-lg font-bold text-yellow-600 mb-2">Yellow Light</div>
                    <p className="text-sm text-gray-custom">Fluctuating pain scores, some training sessions feel harder</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200">
                    <div className="text-lg font-bold text-red-600 mb-2">Red Light</div>
                    <p className="text-sm text-gray-custom">Increasing pain scores, consistent training discomfort</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="key-takeaways bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-5 my-8">
            <h3 className="text-green-700 dark:text-green-300 font-semibold mb-4">Key Takeaways</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-custom"><strong>Race distance determines strategy:</strong> 5K maintains 95-100% performance through cross-training, marathon requires 70-80% volume reduction</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-custom"><strong>Cross-training equivalents:</strong> 1 mile easy running = 3-4 miles cycling = 12-15 minutes pool running</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-custom"><strong>Surface optimization is critical:</strong> Maximum use of soft surfaces in early training, gradual race surface introduction</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-custom"><strong>Pain score monitoring guides modifications:</strong> Scores 1-3 minimal changes, 4-6 moderate protocols, 7+ aggressive modifications</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Next Chapter Preview */}
        <section className="mb-8">
          <Card className="border-2 border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-charcoal mb-3 flex items-center">
                <Target className="w-5 h-5 mr-2 text-blue-600" />
                Coming Next: Training Modifications
              </h3>
              <p className="text-gray-custom mb-4">
                Now that you understand race-specific modifications, Chapter 4 will dive deeper into surface strategy, 
                cross-training hierarchy, and strength training adaptations that support your plantar fasciitis 
                management while maintaining performance across all distances.
              </p>
              <Link href="/plantar-fasciitis/race-training/training-modifications">
                <Button className="w-full">
                  Continue to Chapter 4: Training Modifications
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </ChapterTemplate>
    </>
  );
}