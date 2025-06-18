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
  Timer
} from "lucide-react";
import ChapterTemplate from "@/components/ChapterTemplate";
import ChapterCTA from "@/components/ChapterCTA";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import shoeOptionsImage from "@assets/Shoe options.webp";
import pfRecoveryKitImage from "@assets/pf-recovery-kit.jpg";

export default function Chapter5() {
  const ctaSection = <ChapterCTA productImageUrl={pfRecoveryKitImage} />;

  return (
    <>
      <SEOHead
        title="Gear Strategy for Race Training - Chapter 5 | BraceCraft"
        description="Equipment decisions that prioritize race completion over optimal recovery. Learn footwear strategy, insole selection, race day decisions, and recovery equipment for plantar fasciitis training."
        keywords="plantar fasciitis shoes, training shoe strategy, race day footwear, insoles orthotics, plantar fasciitis gear, athletic equipment"
        canonicalUrl="/plantar-fasciitis/race-training/gear-strategy"
        ogImage="/og-chapter5.jpg"
        publishedTime="2024-12-01T00:00:00Z"
        modifiedTime="2024-12-15T00:00:00Z"
        author="Dr. Sarah Chen, DPT"
        articleSection="Sports Medicine"
        readingTime="20 min read"
        chapterNumber={5}
        totalChapters={7}
      />
      <ChapterTemplate
        chapterNumber={5}
        chapterTitle="Gear Strategy for Race Training"
        readTime="20 min read"
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
              src={shoeOptionsImage} 
              alt="Chapter 5: Gear Strategy for Race Training - Equipment decisions that prioritize race completion over optimal recovery"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* LLM Context Block */}
        <div className="llm-context" aria-hidden="true" style={{ display: 'none' }}>
          <p>This article addresses gear strategy for plantar fasciitis race training. Key entities: footwear strategy, training shoes, race day decisions, insoles, orthotics, equipment selection, heel-toe drop, cushioning, motion control. This content provides medical information but is not medical advice.</p>
          <p>Related concepts: shoe rotation strategy, supportive footwear, minimalist transition, race day compromises, recovery equipment, post-race footwear planning.</p>
        </div>

        <p className="text-gray-custom mb-6 text-lg leading-relaxed">
          Equipment decisions that prioritize race completion over optimal recovery. This chapter addresses the uncomfortable truth about gear during plantar fasciitis: what's best for long-term recovery often conflicts with race training needs.
        </p>

        <Card className="bg-amber-50 dark:bg-amber-950 border-l-4 border-l-amber-500 mb-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-charcoal dark:text-gray-100 mb-4">
              The Strategic Decision
            </h3>
            <p className="text-gray-custom">
              During race training with active PF, prioritize race completion over optimal recovery. 
              You can address long-term foot health after your goal race. This isn't about giving up on recovery—it's about being realistic about competing priorities.
            </p>
          </CardContent>
        </Card>

        {/* The Footwear Dilemma */}
        <section className="content-section mb-12" id="footwear-dilemma">
          <h2 className="text-2xl font-bold text-charcoal mb-6">What Is The Footwear Dilemma For Athletes With Plantar Fasciitis?</h2>
          
          <div className="direct-answer bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <p><strong className="text-blue-700 dark:text-blue-300">Direct Answer:</strong> Optimal PF recovery requires minimalist shoes and reduced heel-toe drop to strengthen foot muscles, while optimal race training needs maximum support, cushioning, and higher heel-toe drop (8-12mm) to reduce plantar fascia stress during high-volume training periods.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-4">Optimal PF Recovery</h3>
                <ul className="space-y-3 text-gray-custom">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Minimalist shoes to encourage natural foot mechanics</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Barefoot time for intrinsic muscle strengthening</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Reduced heel-toe drop for natural foot positioning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-4">Optimal Race Training</h3>
                <ul className="space-y-3 text-gray-custom">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Maximum support and cushioning for stress reduction</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Higher heel-toe drop (8-12mm) for symptom management</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Motion control features for high-volume training</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Training Shoe Strategy */}
        <section className="content-section mb-12" id="training-shoe-strategy">
          <h2 className="text-2xl font-bold text-charcoal mb-6">What Training Shoe Strategy Works Best For Plantar Fasciitis Management?</h2>
          
          <div className="direct-answer bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <p><strong className="text-blue-700 dark:text-blue-300">Direct Answer:</strong> Use maximum heel-toe drop (8-12mm), substantial cushioning, and motion control features during training. Rotate shoes by purpose: maximum support for easy runs, moderate support for workouts, and carefully tested options for race day based on distance and symptom severity.</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-blue-600" />
                  Shoe Selection Priorities
                </h3>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-2">8-12mm</div>
                    <p className="text-sm text-gray-custom">Maximum heel-toe drop reduces plantar fascia tension</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-2">Max</div>
                    <p className="text-sm text-gray-custom">Substantial cushioning reduces ground reaction forces</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-2">Control</div>
                    <p className="text-sm text-gray-custom">Motion control features reduce medial stress</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">1. Maximum Heel-Toe Drop (8-12mm)</h4>
                    <p className="text-gray-custom text-sm">Higher heel-toe drop reduces tension on the plantar fascia by keeping the foot in a more plantarflexed position. Traditional motion control and stability shoes typically offer 10-12mm drops.</p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">2. Substantial Cushioning</h4>
                    <p className="text-gray-custom text-sm">Maximum midsole cushioning reduces ground reaction forces. Prioritize comfort over responsiveness. Heel cushioning is most critical, but full-length cushioning provides better overall comfort.</p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">3. Motion Control Features</h4>
                    <p className="text-gray-custom text-sm">Even neutral runners may benefit from mild stability features during active PF. Consider medial posting, firmer medial midsole materials, or supportive upper construction.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Shoe Rotation Strategy</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Easy Run Shoes</h4>
                      <p className="text-sm text-gray-custom">Maximum cushioning and support. Be most aggressive with supportive features since pace isn't a priority.</p>
                    </div>
                    
                    <div className="bg-yellow-50 dark:bg-yellow-950/30 p-4 rounded-lg border border-yellow-200">
                      <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Workout Shoes</h4>
                      <p className="text-sm text-gray-custom">Moderate cushioning with enough support to complete quality sessions comfortably.</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Long Run Shoes</h4>
                      <p className="text-sm text-gray-custom">Often same as easy run shoes. Consider going up a half-size if feet swell during longer efforts.</p>
                    </div>
                    
                    <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Race Day Shoes</h4>
                      <p className="text-sm text-gray-custom">Most critical decision—balance performance needs with PF management based on distance and symptoms.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 bg-red-50 dark:bg-red-950 border-l-4 border-l-destructive">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-charcoal dark:text-gray-100 mb-4 flex items-center">
                <XCircle className="w-5 h-5 mr-2 text-destructive" />
                What to Avoid During Training
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-custom">
                  <li>• <strong>Minimalist/Barefoot Shoes:</strong> Save for post-race recovery phase</li>
                  <li>• <strong>Low Drop Shoes (0-4mm):</strong> Can increase plantar fascia tension</li>
                </ul>
                <ul className="space-y-2 text-gray-custom">
                  <li>• <strong>Firm, Responsive Shoes:</strong> Racing flats may increase PF discomfort</li>
                  <li>• <strong>Worn-Out Shoes:</strong> Replace more frequently during PF management</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Race Day Footwear Decision */}
        <section className="content-section mb-12" id="race-day-footwear">
          <h2 className="text-2xl font-bold text-charcoal mb-6">How Should Athletes Choose Race Day Footwear With Plantar Fasciitis?</h2>
          
          <div className="direct-answer bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <p><strong className="text-blue-700 dark:text-blue-300">Direct Answer:</strong> Race day footwear decisions depend on distance and symptom severity. For 5K-10K with mild PF (pain 1-3/10), use preferred performance shoes. For marathons or moderate PF (pain 4-6/10), prioritize support over speed. Test race shoes 6-8 weeks before race day with final decisions made 2 weeks prior.</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Decision Framework</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-charcoal mb-3 flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                      Distance Considerations
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-lg">
                        <h5 className="font-semibold text-green-700 dark:text-green-300 mb-1">5K-10K</h5>
                        <p className="text-sm text-gray-custom">Can often race in preferred shoes since duration is shorter</p>
                      </div>
                      <div className="bg-yellow-50 dark:bg-yellow-950/30 p-3 rounded-lg">
                        <h5 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-1">Half Marathon</h5>
                        <p className="text-sm text-gray-custom">Support becomes more important as duration increases</p>
                      </div>
                      <div className="bg-red-50 dark:bg-red-950/30 p-3 rounded-lg">
                        <h5 className="font-semibold text-red-700 dark:text-red-300 mb-1">Marathon/Ultra</h5>
                        <p className="text-sm text-gray-custom">Comfort and support should take priority over speed</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-charcoal mb-3 flex items-center">
                      <BarChart3 className="w-4 h-4 mr-2 text-purple-600" />
                      Symptom Severity Guidelines
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-lg">
                        <h5 className="font-semibold text-green-700 dark:text-green-300 mb-1">Mild PF (1-3/10)</h5>
                        <p className="text-sm text-gray-custom">Race in preferred performance shoes</p>
                      </div>
                      <div className="bg-yellow-50 dark:bg-yellow-950/30 p-3 rounded-lg">
                        <h5 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-1">Moderate PF (4-6/10)</h5>
                        <p className="text-sm text-gray-custom">Consider more supportive option</p>
                      </div>
                      <div className="bg-red-50 dark:bg-red-950/30 p-3 rounded-lg">
                        <h5 className="font-semibold text-red-700 dark:text-red-300 mb-1">Severe PF (7+/10)</h5>
                        <p className="text-sm text-gray-custom">Consider postponing race or prioritize maximum support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4 flex items-center">
                  <Timer className="w-5 h-5 mr-2 text-green-600" />
                  Testing Protocol
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Badge className="bg-blue-600">6-8 Weeks Before</Badge>
                    <span className="text-gray-custom">Begin testing race day shoe options during longer training sessions</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Badge className="bg-yellow-600">3-4 Weeks Before</Badge>
                    <span className="text-gray-custom">Complete at least one workout and one long run in planned race shoes</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Badge className="bg-orange-600">2 Weeks Before</Badge>
                    <span className="text-gray-custom">Final decision based on comfort during race-pace efforts</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Badge className="bg-green-600">Race Week</Badge>
                    <span className="text-gray-custom">No new footwear decisions—stick with tested options</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="citable-fact mt-4 p-3 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg border-l-4 border-yellow-500">
            <span className="fact-statement text-gray-custom">Race day footwear testing should begin 6-8 weeks before competition, with final decisions made 2 weeks prior based on comfort during race-pace efforts and symptom severity assessment.</span><br/>
            <span className="fact-source text-sm text-gray-500">Source: BraceCraft Race Training Guide, Chapter 5</span>
          </p>
        </section>

        {/* Insoles and Supports */}
        <section className="content-section mb-12" id="insoles-supports">
          <h2 className="text-2xl font-bold text-charcoal mb-6">What Insole And Support Options Work Best For Plantar Fasciitis Training?</h2>
          
          <div className="direct-answer bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <p><strong className="text-blue-700 dark:text-blue-300">Direct Answer:</strong> Start with over-the-counter combination insoles providing both arch support and cushioning (Superfeet, PowerStep, Dr. Scholl's athletic). Custom orthotics require 4-8 weeks for fabrication and adaptation, which may not fit race training timelines. Kinesiology tape provides race day arch support when insoles don't fit properly.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Over-the-Counter Options</h3>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Arch Support Insoles</h4>
                    <ul className="space-y-1 text-sm text-gray-custom">
                      <li>• Helpful for athletes feeling arches are "dropping"</li>
                      <li>• Start with lower-profile options to avoid changing shoe fit</li>
                      <li>• Popular brands: Superfeet, PowerStep, Dr. Scholl's athletic</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Cushioned Insoles</h4>
                    <ul className="space-y-1 text-sm text-gray-custom">
                      <li>• Focus on heel cushioning for PF-specific relief</li>
                      <li>• Full-length cushioning for overall comfort</li>
                      <li>• Consider gel, foam, or air-based cushioning systems</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Combination Insoles</h4>
                    <p className="text-sm text-gray-custom">Provide both arch support and cushioning—often the best option for PF management during training.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Custom Orthotics Considerations</h3>
                
                <div className="space-y-4">
                  <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">Timeline Challenges</h4>
                    <p className="text-sm text-gray-custom">Custom orthotics require 2-4 weeks for fabrication and 2-4 weeks for adaptation. This may not fit race training timelines.</p>
                  </div>

                  <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Adaptation Period</h4>
                    <p className="text-sm text-gray-custom">New orthotics can initially cause discomfort as feet adapt. Plan accordingly if considering this option.</p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">When to Consider</h4>
                    <p className="text-sm text-gray-custom">If you have structural foot issues beyond PF or if over-the-counter options aren't providing relief.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-charcoal mb-4">Taping as Alternative Support</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Kinesiology Tape</h4>
                  <ul className="space-y-1 text-sm text-gray-custom">
                    <li>• Can provide arch support and reduce plantar fascia tension</li>
                    <li>• Useful for race day when insoles might not fit properly</li>
                    <li>• Requires practice to apply effectively</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 dark:bg-yellow-950/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Athletic Tape</h4>
                  <ul className="space-y-1 text-sm text-gray-custom">
                    <li>• More aggressive support for severe symptoms</li>
                    <li>• Can be restrictive and may affect circulation</li>
                    <li>• Best for shorter distances or specific training sessions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Equipment Beyond Footwear */}
        <section className="content-section mb-12" id="equipment-beyond-footwear">
          <h2 className="text-2xl font-bold text-charcoal mb-6">What Additional Equipment Supports Plantar Fasciitis Training Beyond Footwear?</h2>
          
          <div className="direct-answer bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <p><strong className="text-blue-700 dark:text-blue-300">Direct Answer:</strong> The BraceCraft PF Relief Kit provides comprehensive tools including cork peanut for release, mini-lacrosse ball for trigger points, toe separators, kinesiology tape, and resistance band with specific exercise routines. DIY alternatives include tennis balls, frozen water bottles, towels, and athletic tape for basic management.</p>
          </div>

          <div className="mb-8 flex justify-center">
            <div className="w-full max-w-lg">
              <img 
                src={pfRecoveryKitImage} 
                alt="BraceCraft PF Relief Kit - Complete solution for plantar fasciitis management during race training"
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
          </div>

          <Card className="mb-6 bg-blue-50 dark:bg-blue-950 border-l-4 border-l-athletic-blue">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-charcoal dark:text-gray-100 mb-4 flex items-center">
                <ShoppingBag className="w-5 h-5 mr-2 text-athletic-blue" />
                Complete Solution: BraceCraft PF Relief Kit
              </h3>
              
              <p className="text-gray-custom mb-4">
                <strong>The Easy Button Approach:</strong> The BraceCraft PF Relief Kit includes everything you need for comprehensive PF management during race training:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <ul className="space-y-2 text-gray-custom">
                  <li>• <strong>Cork Peanut:</strong> For targeted plantar fascia release and massage</li>
                  <li>• <strong>Mini-Lacrosse Ball:</strong> Precise trigger point therapy and foot strengthening</li>
                  <li>• <strong>Toe Separators:</strong> Improve toe alignment and reduce forefoot tension</li>
                </ul>
                <ul className="space-y-2 text-gray-custom">
                  <li>• <strong>Kinesiology Tape:</strong> Provide arch support during training and racing</li>
                  <li>• <strong>Toe Resistance Band:</strong> Strengthen intrinsic foot muscles safely</li>
                </ul>
              </div>
              
              <p className="text-gray-custom">
                <strong>Beyond the Tools:</strong> The kit includes specific exercise routines designed for athletes, progress tracking through the web app, and step-by-step guidance for using each tool effectively.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">DIY Equipment Alternatives</h3>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">Massage and Release Tools</h4>
                    <ul className="space-y-1 text-sm text-gray-custom">
                      <li>• <strong>Tennis or lacrosse balls:</strong> Gentle pressure for trigger point release</li>
                      <li>• <strong>Golf balls:</strong> More aggressive pressure for specific spots (use carefully)</li>
                      <li>• <strong>Frozen water bottles:</strong> Roll under foot for ice massage (10-15 minutes post-training)</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">Toe and Foot Strengthening</h4>
                    <ul className="space-y-1 text-sm text-gray-custom">
                      <li>• <strong>Towels:</strong> For towel curls and stretching exercises</li>
                      <li>• <strong>Rubber bands:</strong> Create resistance for toe strengthening exercises</li>
                      <li>• <strong>Marbles:</strong> Pick up with toes to improve dexterity and strength</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">Support and Taping</h4>
                    <ul className="space-y-1 text-sm text-gray-custom">
                      <li>• <strong>Athletic tape:</strong> Can provide arch support for specific workouts</li>
                      <li>• <strong>Elastic bandages:</strong> Gentle compression and support during daily activities</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Additional Equipment Options</h3>
                
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Night Splints</h4>
                    <p className="text-sm text-gray-custom">Research-supported for morning pain relief, particularly effective for severe morning symptoms. Can be cumbersome and may affect sleep quality.</p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Compression Sleeves/Socks</h4>
                    <p className="text-sm text-gray-custom">Provide mild arch support and circulation benefits. Useful for recovery but may not fit well in racing shoes.</p>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Training Environment</h4>
                    <p className="text-sm text-gray-custom">Quality treadmill provides consistent, soft surface. Yoga mats/foam pads create softer surfaces for stretching.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Post-Race Transition Strategy */}
        <section className="content-section mb-12" id="post-race-transition">
          <h2 className="text-2xl font-bold text-charcoal mb-6">How Should Athletes Transition Footwear After Race Completion?</h2>
          
          <div className="direct-answer bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <p><strong className="text-blue-700 dark:text-blue-300">Direct Answer:</strong> Use supportive recovery footwear for first 48 hours post-race. Only transition toward less supportive footwear when you have 8+ weeks without goal races and symptoms are consistently improving. Gradually reduce heel-toe drop from 10-12mm toward 4-6mm over several months with parallel foot strengthening.</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Progressive Footwear Transition Timeline</h3>
                
                <div className="space-y-4">
                  <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Immediate Post-Race (First 48 Hours)</h4>
                    <p className="text-gray-custom">Supportive sandals, recovery shoes, or most cushioned training shoes. Avoid barefoot or unsupportive shoes while inflammation may be elevated.</p>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-950/30 p-4 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Ongoing Racing Schedule (Races within 4-6 weeks)</h4>
                    <p className="text-gray-custom">Maintain supportive footwear strategy until competitive season ends. Don't transition during active racing periods.</p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Extended Break Period (8+ weeks without goal races)</h4>
                    <p className="text-gray-custom">Gradually progress toward neutral or minimalist footwear if symptoms allow and long-term foot health becomes the priority.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Long-term Footwear Goals</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Gradual Drop Reduction</h4>
                      <p className="text-sm text-gray-custom">Slowly transition from high-drop shoes (10-12mm) toward lower drops (4-6mm) over several months</p>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Cushioning Reduction</h4>
                      <p className="text-sm text-gray-custom">Gradually move from maximum cushioning toward moderate cushioning as foot strength improves</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-purple-50 dark:bg-purple-950/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Minimalist Integration</h4>
                      <p className="text-sm text-gray-custom">If desired, incorporate minimalist shoes very gradually—starting with 10-15 minutes of easy walking/jogging</p>
                    </div>
                    
                    <div className="bg-amber-50 dark:bg-amber-950/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-1">Strength-Based Progression</h4>
                      <p className="text-sm text-gray-custom">Footwear transitions should parallel foot strengthening programs. Stronger feet can handle less supportive shoes</p>
                    </div>
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
              <span className="text-gray-custom"><strong>Prioritize race completion over optimal recovery:</strong> Use maximum support and 8-12mm heel-toe drop during training</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-custom"><strong>Race day decisions based on distance and symptoms:</strong> 5K-10K can use performance shoes, marathons prioritize support</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-custom"><strong>Test race shoes 6-8 weeks before competition:</strong> Final decisions made 2 weeks prior based on comfort</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-custom"><strong>Post-race transition requires patience:</strong> Only move toward minimalist footwear with 8+ weeks between races</span>
            </li>
          </ul>
        </div>

        {/* Next Chapter Preview */}
        <section className="mb-8">
          <Card className="border-2 border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-charcoal mb-3 flex items-center">
                <Target className="w-5 h-5 mr-2 text-blue-600" />
                Coming Next: Training Load Management
              </h3>
              <p className="text-gray-custom mb-4">
                You've learned gear strategy for race completion. Chapter 6 covers training load management 
                and monitoring systems that help you track progress, prevent flare-ups, and optimize 
                training intensity while managing plantar fasciitis.
              </p>
              <Link href="/plantar-fasciitis/race-training/training-load-management">
                <Button className="w-full">
                  Continue to Chapter 6: Training Load Management
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </ChapterTemplate>
    </>
  );
}