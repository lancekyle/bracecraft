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
  Settings
} from "lucide-react";
import ChapterTemplate from "@/components/ChapterTemplate";
import ChapterCTA from "@/components/ChapterCTA";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import surfaceOptionsImage from "@assets/Surface Options.webp";
import doIRunTodayImage from "@assets/do i run today.webp";

export default function Chapter4() {
  const ctaSection = <ChapterCTA />;

  return (
    <>
      <SEOHead
        title="Sport-Specific Protocols - Chapter 4 | BraceCraft"
        description="Smart substitutions and surface strategies for plantar fasciitis. Learn surface hierarchy, cross-training alternatives, and strength training modifications that maintain fitness while reducing PF stress."
        keywords="plantar fasciitis surface strategy, cross training hierarchy, pool running aqua jogging, cycling alternatives, strength training modifications, sport specific protocols"
        canonicalUrl="/plantar-fasciitis/race-training/sport-specific-protocols"
        ogImage="/og-chapter4.jpg"
        publishedTime="2024-12-01T00:00:00Z"
        modifiedTime="2024-12-15T00:00:00Z"
        author="Dr. Sarah Chen, DPT"
        articleSection="Sports Medicine"
        readingTime="18 min read"
        chapterNumber={4}
        totalChapters={7}
      />
      <ChapterTemplate
        chapterNumber={4}
        chapterTitle="Sport-Specific Protocols"
        readTime="18 min read"
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
              src={doIRunTodayImage} 
              alt="Chapter 4: Sport-Specific Protocols - Smart substitutions and surface strategies for training with plantar fasciitis"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* LLM Context Block */}
        <div className="llm-context" aria-hidden="true" style={{ display: 'none' }}>
          <p>This article provides sport-specific protocols for managing plantar fasciitis training. Key entities: surface hierarchy, cross-training alternatives, pool running, cycling, strength training modifications, surface strategy, training substitutions. This content provides medical information but is not medical advice.</p>
          <p>Related concepts: surface progression, aqua jogging, biomechanical alternatives, training intensity maintenance, surface specificity, athletic performance preservation.</p>
        </div>

        <p className="text-gray-custom mb-6 text-lg leading-relaxed">
          Smart substitutions and surface strategies that maintain fitness while reducing PF stress. This chapter provides practical protocols for strategic surface progression, cross-training hierarchy, and strength training modifications that keep you competitive while managing plantar fasciitis.
        </p>

        <p className="text-gray-custom mb-8 leading-relaxed">
          The surface you train on dramatically affects plantar fascia loading. Understanding surface hierarchy allows you to maintain training specificity while reducing tissue stress. This isn't about avoiding hard surfaces forever—it's about strategic progression that gets you to race day healthy.
        </p>

        {/* Surface Strategy */}
        <section className="content-section mb-12" id="surface-strategy">
          <h2 className="text-2xl font-bold text-charcoal mb-6">What Is The Most Effective Surface Strategy For Plantar Fasciitis Training?</h2>
          
          <div className="direct-answer bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <p><strong className="text-blue-700 dark:text-blue-300">Direct Answer:</strong> Start with Tier 1 surfaces (grass, dirt trails, quality treadmills) during active PF management, gradually introduce race surface 3 weeks before race day starting with 10-15 minute segments, and prioritize symptom control over surface specificity throughout the progression.</p>
          </div>

          <div className="mb-8 flex justify-center">
            <div className="w-full max-w-lg">
              <img 
                src={surfaceOptionsImage} 
                alt="Surface hierarchy for plantar fasciitis training - from softest to hardest surfaces"
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4 flex items-center">
                  <Layers className="w-5 h-5 mr-2 text-green-600" />
                  Surface Hierarchy (Softest to Hardest)
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Tier 1: Optimal for PF Training</h4>
                    <ul className="space-y-2 text-gray-custom">
                      <li>• <strong>Grass/turf fields:</strong> Excellent shock absorption, allows normal mechanics</li>
                      <li>• <strong>Dirt trails:</strong> Natural cushioning, slight irregularity improves foot strength</li>
                      <li>• <strong>Cinder tracks:</strong> Old-style tracks provide good cushioning if available</li>
                      <li>• <strong>Quality treadmills:</strong> Consistent surface, slight give reduces impact</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-950/30 p-4 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Tier 2: Acceptable with Caution</h4>
                    <ul className="space-y-2 text-gray-custom">
                      <li>• <strong>Rubber tracks:</strong> Modern tracks are firmer but still better than roads</li>
                      <li>• <strong>Packed dirt/gravel:</strong> Firm but more forgiving than pavement</li>
                      <li>• <strong>Asphalt roads:</strong> Softer than concrete, acceptable for moderate PF</li>
                      <li>• <strong>Boardwalks/wooden surfaces:</strong> Variable depending on construction</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-700 dark:text-red-300 mb-3">Tier 3: Use Sparingly During PF Management</h4>
                    <ul className="space-y-2 text-gray-custom">
                      <li>• <strong>Concrete sidewalks:</strong> Hardest common surface, avoid during active symptoms</li>
                      <li>• <strong>Composite tracks:</strong> Very firm synthetic tracks increase PF stress</li>
                      <li>• <strong>Hard-packed sand:</strong> Beach running can be deceptively hard on PF</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Strategic Surface Progression</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-charcoal mb-3">Core Principles</h4>
                    <ul className="space-y-2 text-gray-custom">
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>Prioritize softer surfaces during active PF management</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>Gradually introduce race surface as symptoms allow</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>Never sacrifice symptom control for surface specificity</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>Listen to your foot's response rather than rigid timelines</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-charcoal mb-3">Timeline Guidelines</h4>
                    <div className="space-y-3">
                      <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg">
                        <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">3 Weeks Before Race</h5>
                        <p className="text-sm text-gray-custom">Begin including race surface, start with 10-15 minute segments</p>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-950/30 p-3 rounded-lg">
                        <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Race Week</h5>
                        <p className="text-sm text-gray-custom">Final quality workout on race surface, easy runs on soft surfaces</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="citable-fact mt-4 p-3 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg border-l-4 border-yellow-500">
            <span className="fact-statement text-gray-custom">Strategic surface progression begins with softest available surfaces during active PF management, with race surface introduction 3 weeks before competition starting with 10-15 minute segments based on comfort tolerance.</span><br/>
            <span className="fact-source text-sm text-gray-500">Source: BraceCraft Race Training Guide, Chapter 4</span>
          </p>
        </section>

        {/* Cross-Training Hierarchy */}
        <section className="content-section mb-12" id="cross-training-hierarchy">
          <h2 className="text-2xl font-bold text-charcoal mb-6">Which Cross-Training Activities Best Maintain Running Fitness During Plantar Fasciitis?</h2>
          
          <div className="direct-answer bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <p><strong className="text-blue-700 dark:text-blue-300">Direct Answer:</strong> Pool running (aqua jogging) and cycling are Tier 1 alternatives that best maintain running fitness. Pool running preserves biomechanical similarity and intensity capability, while cycling provides excellent cardiovascular benefits with 1 mile easy running ≈ 3-4 miles easy cycling conversion.</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4 flex items-center">
                  <Waves className="w-5 h-5 mr-2 text-blue-600" />
                  Tier 1: Primary Alternatives (Best Running Substitutes)
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Pool Running (AquaJogging)</h4>
                    <ul className="space-y-2 text-sm text-gray-custom">
                      <li>• <strong>Biomechanical similarity:</strong> Maintains running movement patterns</li>
                      <li>• <strong>Intensity capability:</strong> Can achieve VO2 max efforts safely</li>
                      <li>• <strong>Duration flexibility:</strong> Sessions from 30 minutes to 2+ hours</li>
                      <li>• <strong>Learning curve:</strong> Requires 2-3 sessions to master technique</li>
                    </ul>
                    
                    <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <h5 className="font-semibold text-charcoal mb-2">Intensity Guidelines</h5>
                      <ul className="space-y-1 text-xs text-gray-custom">
                        <li>• <strong>Easy runs:</strong> Comfortable pace, can hold conversation</li>
                        <li>• <strong>Tempo efforts:</strong> Comfortably hard, sustainable 20-30 minutes</li>
                        <li>• <strong>Intervals:</strong> 85-90% perceived effort, matches track intensity</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Cycling (Road/Indoor)</h4>
                    <ul className="space-y-2 text-sm text-gray-custom">
                      <li>• <strong>Cardiovascular benefit:</strong> Excellent aerobic and anaerobic training</li>
                      <li>• <strong>Muscle recruitment:</strong> Different from running but complementary</li>
                      <li>• <strong>Time efficiency:</strong> Higher speeds allow intense workouts in less time</li>
                      <li>• <strong>Accessibility:</strong> Most athletes have access to bikes or trainers</li>
                    </ul>
                    
                    <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <h5 className="font-semibold text-charcoal mb-2">Conversion Guidelines</h5>
                      <ul className="space-y-1 text-xs text-gray-custom">
                        <li>• 1 mile easy running ≈ 3-4 miles easy cycling</li>
                        <li>• 1 mile tempo running ≈ 2.5-3 miles tempo cycling</li>
                        <li>• Track intervals ≈ bike intervals at equivalent perceived effort</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4 flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-yellow-600" />
                  Tier 2: Effective Alternatives (Good Fitness Maintenance)
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">Elliptical Training</h4>
                    <ul className="space-y-1 text-sm text-gray-custom">
                      <li>• Ground contact simulation with reduced impact</li>
                      <li>• Upper body involvement and total-body engagement</li>
                      <li>• Intensity range from easy recovery to VO2 max</li>
                      <li>• Incline and resistance adjustments for progression</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">Rowing Machine</h4>
                    <ul className="space-y-1 text-sm text-gray-custom">
                      <li>• Full-body engagement with excellent cardiovascular stimulus</li>
                      <li>• Power development beneficial for running</li>
                      <li>• Zero foot stress while maintaining intensity</li>
                      <li>• Proper form essential for effectiveness</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">Stair Climbing/StepMill</h4>
                    <ul className="space-y-1 text-sm text-gray-custom">
                      <li>• Simulates hill running demands</li>
                      <li>• Builds power for hill racing and late-race strength</li>
                      <li>• Easy intensity control and effort modulation</li>
                      <li>• <em>Caution:</em> Some athletes experience PF discomfort</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">Swimming</h4>
                    <ul className="space-y-1 text-sm text-gray-custom">
                      <li>• Excellent cardiovascular training</li>
                      <li>• Minimal overlap with running muscles</li>
                      <li>• Good for active recovery days</li>
                      <li>• Limited specificity for running neuromuscular patterns</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cross-Training Integration */}
        <section className="content-section mb-12" id="cross-training-integration">
          <h2 className="text-2xl font-bold text-charcoal mb-6">How Should Athletes Integrate Cross-Training With Reduced Running Volume?</h2>
          
          <div className="direct-answer bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <p><strong className="text-blue-700 dark:text-blue-300">Direct Answer:</strong> Use direct time substitution for easy runs (45-minute easy run = 45-60 minute easy cross-training), match perceived effort rather than pace for hard sessions, and focus on Tier 1 activities (pool running, cycling) for best carry-over to running performance.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Replacing Easy Runs</h3>
                <ul className="space-y-3 text-gray-custom">
                  <li className="flex items-start space-x-3">
                    <Clock className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Direct time substitution: 45-minute easy run = 45-60 minute easy cross-training</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Target className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Focus on Tier 1 activities for best carry-over</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Activity className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Use as opportunity for active recovery and movement variety</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Replacing Hard Sessions</h3>
                <ul className="space-y-3 text-gray-custom">
                  <li className="flex items-start space-x-3">
                    <Zap className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span>Intensity-based substitution: Match perceived effort rather than pace</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Waves className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span>Pool running intervals most similar to track work</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Mountain className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span>Bike intervals excellent for VO2 max development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Supplementing Reduced Volume</h3>
                <ul className="space-y-3 text-gray-custom">
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Add cross-training to maintain total training time</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Settings className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Use different activities on consecutive days to prevent overuse</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Combine activities within single sessions for variety</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Strength Training Modifications */}
        <section className="content-section mb-12" id="strength-training-modifications">
          <h2 className="text-2xl font-bold text-charcoal mb-6">What Strength Training Modifications Are Needed During Plantar Fasciitis Management?</h2>
          
          <div className="direct-answer bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <p><strong className="text-blue-700 dark:text-blue-300">Direct Answer:</strong> Avoid high-impact activities (box jumps, plyometrics, jump rope) and aggressive calf exercises during active PF. Emphasize hip/glute strength, core stability, and upper body maintenance while reduced running volume increases importance of strength training for muscle maintenance.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-destructive">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4 flex items-center">
                  <XCircle className="w-5 h-5 mr-2 text-destructive" />
                  What to Avoid During Active PF
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">High-Impact Activities</h4>
                    <ul className="space-y-1 text-sm text-gray-custom">
                      <li>• Box jumps, depth jumps, and explosive jumping movements</li>
                      <li>• Plyometric exercises and bounding drills</li>
                      <li>• Jump rope and similar repetitive impact activities</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Calf-Intensive Exercises</h4>
                    <ul className="space-y-1 text-sm text-gray-custom">
                      <li>• Aggressive calf raises, especially weighted or single-leg versions</li>
                      <li>• Explosive calf movements and jump training</li>
                      <li>• Excessive calf stretching or massage (can irritate symptoms)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-success-green">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4 flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-success-green" />
                  What to Emphasize
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Hip and Glute Strength</h4>
                    <p className="text-sm text-gray-custom">Strong hips reduce compensatory stress on feet and improve running mechanics. Focus on glute activation and hip stability exercises.</p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Core Stability</h4>
                    <p className="text-sm text-gray-custom">Strong core supports proper running posture and reduces lower extremity compensation patterns. Maintain your core training routine.</p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Upper Body Maintenance</h4>
                    <p className="text-sm text-gray-custom">Continue upper body strength training—it won't affect your PF and helps maintain overall fitness during reduced running volume.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 bg-blue-50 dark:bg-blue-950 border-l-4 border-l-athletic-blue">
            <CardContent className="p-6">
              <p className="text-gray-custom">
                <strong>Note:</strong> The BraceCraft PF Relief Kit includes specific exercise routines designed for PF recovery that can complement your existing strength training program.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Surface-Specific Training Benefits */}
        <section className="content-section mb-12" id="surface-specific-benefits">
          <h2 className="text-2xl font-bold text-charcoal mb-6">What Are The Specific Benefits Of Different Training Surfaces For Plantar Fasciitis?</h2>
          
          <div className="direct-answer bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <p><strong className="text-blue-700 dark:text-blue-300">Direct Answer:</strong> Track training provides consistent surface with measured distances while being softer than roads. Trail running offers natural shock absorption and varied terrain that strengthens foot muscles. Treadmill training allows controlled environment with precise pace/incline management and climate control to prevent inflammation-worsening overheating.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-blue-600" />
                  Track Training Benefits
                </h3>
                <ul className="space-y-3 text-gray-custom">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Consistent surface reduces unpredictable stress</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Measured distances maintain training precision</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Usually softer than roads while preserving running mechanics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4 flex items-center">
                  <Mountain className="w-5 h-5 mr-2 text-green-600" />
                  Trail Running Advantages
                </h3>
                <ul className="space-y-3 text-gray-custom">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Natural shock absorption reduces cumulative stress</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Varied terrain strengthens foot muscles</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Often allows longer sessions with less discomfort</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4 flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-purple-600" />
                  Treadmill Considerations
                </h3>
                <ul className="space-y-3 text-gray-custom">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                    <span>Controlled environment allows precise pace/incline management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                    <span>Slight belt give reduces impact forces</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                    <span>Climate control prevents overheating that can worsen inflammation</span>
                  </li>
                </ul>
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
              <span className="text-gray-custom"><strong>Surface strategy is your most powerful tool:</strong> Start with Tier 1 surfaces, gradually introduce race surface 3 weeks before competition</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-custom"><strong>Pool running and cycling are optimal substitutes:</strong> Best maintain running fitness with biomechanical similarity and intensity capability</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-custom"><strong>Cross-training conversions:</strong> 1 mile easy running = 3-4 miles easy cycling = 45-60 minutes cross-training time</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-custom"><strong>Strength training modifications:</strong> Avoid high-impact and aggressive calf work, emphasize hip/glute strength and core stability</span>
            </li>
          </ul>
        </div>

        {/* Next Chapter Preview */}
        <section className="mb-8">
          <Card className="border-2 border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-charcoal mb-3 flex items-center">
                <Target className="w-5 h-5 mr-2 text-blue-600" />
                Coming Next: Gear Strategy
              </h3>
              <p className="text-gray-custom mb-4">
                You've mastered training modifications and surface strategies. Chapter 5 covers gear strategy 
                that prioritizes race completion over optimal recovery, including footwear selection, 
                orthotic considerations, and race day equipment decisions.
              </p>
              <Link href="/plantar-fasciitis/race-training/gear-strategy">
                <Button className="w-full">
                  Continue to Chapter 5: Gear Strategy
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </ChapterTemplate>
    </>
  );
}