import Head from 'next/head'
import Header from '../../../client/src/components/Header'
import Footer from '../../../client/src/components/Footer'
import ChapterTemplate from '../../../client/src/components/ChapterTemplate'

export default function Chapter3() {
  return (
    <>
      <Head>
        <title>Race Distance Training Modifications - Chapter 3 | BraceCraft</title>
        <meta name="description" content="Distance-specific training modifications for plantar fasciitis. From 5K to ultra-marathon, learn how to adapt your training for each race distance while managing heel pain." />
        <meta name="keywords" content="marathon training plantar fasciitis, 5K training modifications, ultra marathon heel pain, distance running injury" />
        <link rel="canonical" href="https://staging.bracecraft.com/plantar-fasciitis/race-training/race-distance-modifications/" />
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How should I modify marathon training with plantar fasciitis?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Marathon training with plantar fasciitis requires reducing weekly volume by 15-20%, incorporating more cross-training, and modifying long run progression to manage tissue loading."
                }
              },
              {
                "@type": "Question",
                "name": "Can I still train for a 5K with plantar fasciitis?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, 5K training is often manageable with plantar fasciitis. Focus on reducing training volume, emphasizing quality over quantity, and incorporating proper warm-up protocols."
                }
              }
            ]
          })
        }} />
      </Head>

      <div className="min-h-screen bg-background">
        <Header />
        <ChapterTemplate
          chapterNumber={3}
          chapterTitle="Race Distance Training Modifications"
          readTime="18 min read"
          author="Dr. Lance Kyle"
          lastUpdated="June 18, 2025"
          guideSlug="race-training"
          totalChapters={9}
        >
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Your race distance determines everything about your training approach—and this becomes even more critical when managing plantar fasciitis. This chapter provides distance-specific modifications that maintain race readiness while promoting healing.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Distance-Specific Demands</h2>
            
            <div className="bg-medical-light/20 border-l-4 border-athletic-blue p-6 mb-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-athletic-blue mb-2">Key Principle</h3>
              <p className="text-gray-700">
                Different race distances place unique stresses on the plantar fascia. Effective training modifications must account for these specific demands while maintaining the physiological adaptations needed for race performance.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Short Distance (5K-10K)</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• High-intensity, low-volume</li>
                  <li>• Significant anaerobic component</li>
                  <li>• Rapid force development</li>
                  <li>• Minimal structural loading</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Middle Distance (Half Marathon)</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Balanced intensity/volume</li>
                  <li>• Aerobic-anaerobic transition</li>
                  <li>• Moderate structural loading</li>
                  <li>• Tempo-focused training</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Long Distance (Marathon+)</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• High-volume, moderate intensity</li>
                  <li>• Primarily aerobic</li>
                  <li>• Significant structural loading</li>
                  <li>• Endurance-focused adaptations</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5K Training Modifications</h2>

            <h3 className="text-xl font-semibold text-athletic-blue mb-3">The 5K Advantage</h3>
            <p>
              5K training is often the most manageable distance for athletes with plantar fasciitis. The lower weekly volume and emphasis on quality over quantity align well with tissue healing requirements.
            </p>

            <div className="bg-success-green/10 border border-success-green/20 rounded-lg p-6 my-6">
              <h4 className="text-lg font-semibold text-success-green mb-3">Modified 5K Training Framework</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Standard 5K Program</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 5-6 days/week running</li>
                    <li>• 30-40 miles/week</li>
                    <li>• 2-3 high-intensity sessions</li>
                    <li>• Minimal cross-training</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-success-green mb-2">PF-Modified Program</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 4-5 days/week running</li>
                    <li>• 20-30 miles/week</li>
                    <li>• 2 high-intensity sessions</li>
                    <li>• 2-3 cross-training sessions</li>
                  </ul>
                </div>
              </div>
            </div>

            <h4 className="text-lg font-semibold text-gray-900 mb-3">Weekly Structure Example</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold">Day</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold">Workout</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold">Intensity</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold">PF Considerations</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-t">
                    <td className="px-4 py-2">Monday</td>
                    <td className="px-4 py-2">Easy Run + Strength</td>
                    <td className="px-4 py-2">Zone 1-2</td>
                    <td className="px-4 py-2">Soft surface, thorough warm-up</td>
                  </tr>
                  <tr className="border-t bg-gray-50">
                    <td className="px-4 py-2">Tuesday</td>
                    <td className="px-4 py-2">Interval Training</td>
                    <td className="px-4 py-2">Zone 4-5</td>
                    <td className="px-4 py-2">Track/treadmill, shorter recoveries</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Wednesday</td>
                    <td className="px-4 py-2">Cross-Training</td>
                    <td className="px-4 py-2">Zone 2-3</td>
                    <td className="px-4 py-2">Cycling/swimming/elliptical</td>
                  </tr>
                  <tr className="border-t bg-gray-50">
                    <td className="px-4 py-2">Thursday</td>
                    <td className="px-4 py-2">Tempo Run</td>
                    <td className="px-4 py-2">Zone 3-4</td>
                    <td className="px-4 py-2">Reduced volume, monitor pain</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Friday</td>
                    <td className="px-4 py-2">Rest or Easy Cross</td>
                    <td className="px-4 py-2">Recovery</td>
                    <td className="px-4 py-2">Focus on mobility/recovery</td>
                  </tr>
                  <tr className="border-t bg-gray-50">
                    <td className="px-4 py-2">Saturday</td>
                    <td className="px-4 py-2">Easy Run</td>
                    <td className="px-4 py-2">Zone 1-2</td>
                    <td className="px-4 py-2">Preferred surface/shoes</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Sunday</td>
                    <td className="px-4 py-2">Long Run (Short)</td>
                    <td className="px-4 py-2">Zone 2</td>
                    <td className="px-4 py-2">60-75 min max, soft surface</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">10K Training Modifications</h2>

            <p>
              10K training strikes a balance between the speed demands of 5K and the endurance requirements of longer distances. This makes it an excellent target race for athletes managing plantar fasciitis.
            </p>

            <h3 className="text-xl font-semibold text-athletic-blue mb-3">Key Modifications for 10K</h3>

            <div className="space-y-4 my-6">
              <div className="border-l-4 border-athletic-blue bg-athletic-blue/5 pl-4 py-3">
                <h4 className="font-semibold text-gray-900 mb-2">Volume Adjustment</h4>
                <p className="text-sm text-gray-700">
                  Reduce weekly mileage by 20-25% from standard 10K programs. Focus on maintaining workout intensity while decreasing easy run volume.
                </p>
              </div>
              
              <div className="border-l-4 border-athletic-blue bg-athletic-blue/5 pl-4 py-3">
                <h4 className="font-semibold text-gray-900 mb-2">Workout Frequency</h4>
                <p className="text-sm text-gray-700">
                  Limit to 2 high-intensity sessions per week, with at least 48 hours between quality sessions. Replace the third workout with cross-training.
                </p>
              </div>
              
              <div className="border-l-4 border-athletic-blue bg-athletic-blue/5 pl-4 py-3">
                <h4 className="font-semibold text-gray-900 mb-2">Long Run Strategy</h4>
                <p className="text-sm text-gray-700">
                  Cap long runs at 90 minutes regardless of pace. Use time-based rather than distance-based progression to reduce pressure on healing tissue.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Half Marathon Training Modifications</h2>

            <h3 className="text-xl font-semibold text-athletic-blue mb-3">The Half Marathon Challenge</h3>
            <p>
              Half marathon training presents unique challenges for athletes with plantar fasciitis. The combination of moderate volume and sustained pace demands requires careful progression management.
            </p>

            <div className="bg-warning-orange/10 border border-warning-orange/20 rounded-lg p-6 my-6">
              <h4 className="text-lg font-semibold text-warning-orange mb-3">Critical Considerations</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Long runs become significant tissue stressors (90+ minutes)</li>
                <li>• Tempo work requires sustained loading at race pace</li>
                <li>• Weekly volume typically 40-50+ miles in standard programs</li>
                <li>• Recovery demands increase substantially</li>
              </ul>
            </div>

            <h4 className="text-lg font-semibold text-gray-900 mb-3">Modified Half Marathon Approach</h4>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-3">Traditional Program</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 6 runs/week</li>
                  <li>• Peak 45-55 miles/week</li>
                  <li>• Long runs to 18-20 miles</li>
                  <li>• 3 quality sessions/week</li>
                  <li>• Minimal cross-training</li>
                </ul>
              </div>
              
              <div className="bg-athletic-blue/10 p-6 rounded-lg">
                <h5 className="font-semibold text-athletic-blue mb-3">PF-Modified Program</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 4-5 runs/week</li>
                  <li>• Peak 35-40 miles/week</li>
                  <li>• Long runs to 15-16 miles</li>
                  <li>• 2 quality sessions/week</li>
                  <li>• 3 cross-training sessions</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Marathon Training Modifications</h2>

            <h3 className="text-xl font-semibold text-athletic-blue mb-3">The Marathon Reality Check</h3>
            <p>
              Marathon training with active plantar fasciitis is challenging but not impossible. Success requires significant program modifications and careful monitoring of tissue response.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
              <h4 className="text-lg font-semibold text-red-700 mb-3">Honest Assessment Required</h4>
              <p className="text-red-700 mb-3">
                Marathon training may not be appropriate for all athletes with plantar fasciitis. Consider these factors:
              </p>
              <ul className="text-red-700 space-y-1">
                <li>• Severity of current symptoms (APS score >25 = high risk)</li>
                <li>• Time until race day (minimum 16 weeks recommended)</li>
                <li>• Previous marathon experience</li>
                <li>• Access to alternative training methods</li>
              </ul>
            </div>

            <h4 className="text-lg font-semibold text-gray-900 mb-3">Modified Marathon Framework</h4>

            <div className="space-y-4 my-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h5 className="font-semibold text-athletic-blue mb-2">Volume Management</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Peak weekly volume: 60-70% of traditional programs</li>
                  <li>• Focus on aerobic efficiency rather than total volume</li>
                  <li>• Use cross-training to maintain aerobic base</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h5 className="font-semibold text-athletic-blue mb-2">Long Run Strategy</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Peak long run: 18-20 miles (not 22-24)</li>
                  <li>• Run/walk intervals for runs >90 minutes</li>
                  <li>• Every 3rd long run on soft surface</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h5 className="font-semibold text-athletic-blue mb-2">Recovery Protocols</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Mandatory rest day after each long run</li>
                  <li>• Ice/elevation routine post-workout</li>
                  <li>• Weekly massage or soft tissue work</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ultra-Marathon Considerations</h2>

            <h3 className="text-xl font-semibold text-athletic-blue mb-3">Ultra Training with Plantar Fasciitis</h3>
            <p>
              Ultra-marathon training with plantar fasciitis requires a fundamentally different approach. The time-on-feet demands make traditional volume-based training impractical.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
              <h4 className="text-lg font-semibold text-yellow-700 mb-3">Ultra-Specific Modifications</h4>
              <ul className="text-yellow-700 space-y-2">
                <li>• Emphasize hiking/power walking in training</li>
                <li>• Use trekking poles for long training sessions</li>
                <li>• Focus on back-to-back training days rather than single long efforts</li>
                <li>• Incorporate overnight recovery protocols</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Progression Guidelines for All Distances</h2>

            <h3 className="text-xl font-semibold text-athletic-blue mb-3">The 10% Rule Modification</h3>
            <p>
              The standard "10% weekly increase" rule needs modification for athletes with plantar fasciitis. Use these guidelines instead:
            </p>

            <div className="grid gap-4 my-6">
              <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-2">Mild Symptoms (APS 0-15)</h4>
                <p className="text-sm text-green-700">
                  5-7% weekly increases, with step-back weeks every 3rd week
                </p>
              </div>
              
              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-r-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Moderate Symptoms (APS 16-30)</h4>
                <p className="text-sm text-yellow-700">
                  3-5% weekly increases, with step-back weeks every 2nd week
                </p>
              </div>
              
              <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg">
                <h4 className="font-semibold text-red-800 mb-2">Severe Symptoms (APS 31+)</h4>
                <p className="text-sm text-red-700">
                  Maintain current volume until symptoms improve, focus on cross-training
                </p>
              </div>
            </div>

            <div className="bg-athletic-blue/10 border border-athletic-blue/20 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-athletic-blue mb-3">Distance-Specific Success Formula</h3>
              <p className="text-gray-700">
                Regardless of your target race distance, success comes from matching your training modifications to both your plantar fasciitis severity and the specific demands of your race. Chapter 4 will show you how to further customize these approaches based on your specific sport and training environment.
              </p>
            </div>
          </div>
        </ChapterTemplate>
        <Footer />
      </div>
    </>
  )
}