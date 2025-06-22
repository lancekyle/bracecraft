import Head from 'next/head'
import Header from '../../../client/src/components/Header'
import Footer from '../../../client/src/components/Footer'
import ChapterTemplate from '../../../client/src/components/ChapterTemplate'

export default function Chapter2() {
  return (
    <>
      <Head>
        <title>Know What You're Dealing With - Chapter 2 | BraceCraft</title>
        <meta name="description" content="Complete athletic assessment for plantar fasciitis. Learn evidence-based diagnostic tools and evaluation methods designed specifically for competitive athletes." />
        <meta name="keywords" content="plantar fasciitis diagnosis, athletic assessment, competitive athlete evaluation" />
        <link rel="canonical" href="https://staging.bracecraft.com/plantar-fasciitis/race-training/know-what-youre-dealing-with/" />
        
        <meta property="og:title" content="Know What You're Dealing With - Chapter 2" />
        <meta property="og:description" content="Complete athletic assessment for plantar fasciitis. Evidence-based diagnostic tools for competitive athletes." />
        <meta property="og:type" content="article" />
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I know if my heel pain is actually plantar fasciitis?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Athletic plantar fasciitis typically presents with morning heel pain that improves with movement, pain after periods of rest, and specific tender points along the plantar fascia insertion."
                }
              },
              {
                "@type": "Question",
                "name": "What assessments should competitive athletes use for plantar fasciitis?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Athletes need sport-specific assessments including loading tolerance tests, biomechanical analysis, training load evaluation, and functional movement screening."
                }
              }
            ]
          })
        }} />
      </Head>

      <div className="min-h-screen bg-background">
        <Header />
        <ChapterTemplate
          chapterNumber={2}
          chapterTitle="Know What You're Dealing With"
          readTime="15 min read"
          author="Dr. Lance Kyle"
          lastUpdated="June 18, 2025"
          guideSlug="race-training"
          totalChapters={9}
        >
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Before you can effectively treat plantar fasciitis as a competitive athlete, you need to understand exactly what you're dealing with. This chapter provides comprehensive assessment tools designed specifically for athletic populations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Athletic Plantar Fasciitis: Beyond Basic Diagnosis</h2>
            
            <div className="bg-medical-light/20 border-l-4 border-athletic-blue p-6 mb-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-athletic-blue mb-2">Key Insight</h3>
              <p className="text-gray-700">
                Athletic plantar fasciitis is rarely just about the plantar fascia. It's typically part of a broader kinetic chain dysfunction that requires comprehensive assessment to address effectively.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-athletic-blue mb-3">Clinical Presentation in Athletes vs. General Population</h3>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">General Population</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Morning pain that improves with walking</li>
                  <li>• Pain after prolonged sitting</li>
                  <li>• Gradual onset over weeks to months</li>
                  <li>• Usually unilateral</li>
                </ul>
              </div>
              
              <div className="bg-athletic-blue/10 p-6 rounded-lg">
                <h4 className="font-semibold text-athletic-blue mb-3">Competitive Athletes</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Pain during/after high-intensity training</li>
                  <li>• Variable response to warm-up</li>
                  <li>• Often bilateral or alternating</li>
                  <li>• Associated with training load changes</li>
                  <li>• May present with minimal morning stiffness</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Athletic Assessment Protocol</h2>

            <h3 className="text-xl font-semibold text-athletic-blue mb-3">Phase 1: Pain and Function Assessment</h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Athletic Pain Scale (APS)</h4>
              <p className="text-sm text-gray-600 mb-4">Rate each scenario from 0-10 (0 = no pain, 10 = unable to continue activity)</p>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">First steps in the morning</span>
                  <div className="flex space-x-1">
                    {[0,1,2,3,4,5,6,7,8,9,10].map(num => (
                      <div key={num} className="w-6 h-6 border border-gray-300 rounded text-xs flex items-center justify-center">
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Easy training pace</span>
                  <div className="flex space-x-1">
                    {[0,1,2,3,4,5,6,7,8,9,10].map(num => (
                      <div key={num} className="w-6 h-6 border border-gray-300 rounded text-xs flex items-center justify-center">
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Threshold/tempo efforts</span>
                  <div className="flex space-x-1">
                    {[0,1,2,3,4,5,6,7,8,9,10].map(num => (
                      <div key={num} className="w-6 h-6 border border-gray-300 rounded text-xs flex items-center justify-center">
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">High-intensity intervals</span>
                  <div className="flex space-x-1">
                    {[0,1,2,3,4,5,6,7,8,9,10].map(num => (
                      <div key={num} className="w-6 h-6 border border-gray-300 rounded text-xs flex items-center justify-center">
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">24 hours post-training</span>
                  <div className="flex space-x-1">
                    {[0,1,2,3,4,5,6,7,8,9,10].map(num => (
                      <div key={num} className="w-6 h-6 border border-gray-300 rounded text-xs flex items-center justify-center">
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-gray-600">
                <strong>Scoring:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• 0-15 total: Mild - continue training with modifications</li>
                  <li>• 16-30 total: Moderate - significant training modifications needed</li>
                  <li>• 31-50 total: Severe - comprehensive treatment protocol required</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-athletic-blue mb-3">Phase 2: Biomechanical Assessment</h3>

            <h4 className="text-lg font-semibold text-gray-900 mb-3">Single Leg Loading Test</h4>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-yellow-800">
                <strong>Purpose:</strong> Assess plantar fascia tolerance to athletic loading patterns
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-athletic-blue pl-4">
                <h5 className="font-semibold">Test 1: Single Leg Calf Raise Tolerance</h5>
                <ol className="text-sm mt-2 space-y-1">
                  <li>1. Stand on one foot on the edge of a step</li>
                  <li>2. Perform slow, controlled calf raises</li>
                  <li>3. Record number completed before pain forces stopping</li>
                  <li>4. Note pain location and quality</li>
                </ol>
                <p className="text-xs text-gray-600 mt-2">
                  <strong>Normal:</strong> 25+ repetitions pain-free | <strong>Impaired:</strong> <15 repetitions or significant pain
                </p>
              </div>
              
              <div className="border-l-4 border-athletic-blue pl-4">
                <h5 className="font-semibold">Test 2: Single Leg Hop Testing</h5>
                <ol className="text-sm mt-2 space-y-1">
                  <li>1. Single leg forward hop for distance</li>
                  <li>2. Single leg lateral hop</li>
                  <li>3. Single leg vertical hop</li>
                  <li>4. Compare affected vs unaffected side</li>
                </ol>
                <p className="text-xs text-gray-600 mt-2">
                  <strong>Significant:</strong> >10% difference between sides or reproduction of training pain
                </p>
              </div>
              
              <div className="border-l-4 border-athletic-blue pl-4">
                <h5 className="font-semibold">Test 3: Windlass Mechanism Assessment</h5>
                <ol className="text-sm mt-2 space-y-1">
                  <li>1. Passively extend the great toe while weight-bearing</li>
                  <li>2. Assess arch height change and pain response</li>
                  <li>3. Test both passive and active toe extension</li>
                </ol>
                <p className="text-xs text-gray-600 mt-2">
                  <strong>Positive:</strong> Pain reproduction or inability to maintain arch height with toe extension
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-athletic-blue mb-3">Phase 3: Training Load Analysis</h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Training Load Risk Assessment</h4>
              
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Weekly training volume (last 4 weeks)</label>
                  <div className="grid grid-cols-4 gap-2 text-sm">
                    <input type="number" placeholder="Week 4" className="border rounded px-2 py-1" />
                    <input type="number" placeholder="Week 3" className="border rounded px-2 py-1" />
                    <input type="number" placeholder="Week 2" className="border rounded px-2 py-1" />
                    <input type="number" placeholder="Week 1" className="border rounded px-2 py-1" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Acute training changes in past 2 weeks</label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="checkbox" className="rounded" />
                      <span>Increased weekly volume >10%</span>
                    </label>
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="checkbox" className="rounded" />
                      <span>Added new high-intensity sessions</span>
                    </label>
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="checkbox" className="rounded" />
                      <span>Changed training surface significantly</span>
                    </label>
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="checkbox" className="rounded" />
                      <span>New footwear or equipment</span>
                    </label>
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="checkbox" className="rounded" />
                      <span>Return from training break >1 week</span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-warning-orange/10 border border-warning-orange/20 rounded">
                <p className="text-sm text-warning-orange font-medium">
                  Risk Factors: 3+ checked items indicate high probability that training load contributed to plantar fasciitis onset
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Differential Diagnosis for Athletes</h2>

            <p>
              Athletic heel pain isn't always plantar fasciitis. Competitive athletes need to rule out other conditions 
              that can present similarly:
            </p>

            <div className="grid gap-4 my-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Calcaneal Stress Fracture</h4>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Key Differentiators:</strong> Deep, aching pain that worsens with impact activities; 
                  tenderness on calcaneal squeeze test
                </p>
                <p className="text-xs text-red-600">
                  <strong>Red Flag:</strong> Requires immediate activity modification and imaging
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Tarsal Tunnel Syndrome</h4>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Key Differentiators:</strong> Burning, numbness, or tingling; positive Tinel's sign; 
                  nighttime symptoms
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Fat Pad Syndrome</h4>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Key Differentiators:</strong> Central heel pain; worse on hard surfaces; 
                  positive fat pad compression test
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Calcaneal Apophysitis (Young Athletes)</h4>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Key Differentiators:</strong> Posterior heel pain; growth plate tenderness; 
                  ages 8-15; improves with activity
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Creating Your Athletic Profile</h2>

            <p>
              Based on your assessment results, you'll fall into one of several athletic plantar fasciitis profiles. 
              Understanding your specific profile is crucial for selecting the most effective treatment approach in subsequent chapters.
            </p>

            <div className="grid gap-4 my-6">
              <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-2">Profile A: Load-Responsive (Mild)</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• APS score 0-15</li>
                  <li>• Minimal functional deficits</li>
                  <li>• Recent training load increase identified</li>
                  <li>• Good response to warm-up</li>
                </ul>
                <p className="text-xs text-green-600 mt-2 font-medium">
                  Prognosis: Excellent with training modifications
                </p>
              </div>
              
              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-r-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Profile B: Biomechanically-Driven (Moderate)</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• APS score 16-30</li>
                  <li>• Significant hop test deficits</li>
                  <li>• Multiple training variables involved</li>
                  <li>• Variable response to activity</li>
                </ul>
                <p className="text-xs text-yellow-600 mt-2 font-medium">
                  Prognosis: Good with comprehensive approach
                </p>
              </div>
              
              <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg">
                <h4 className="font-semibold text-red-800 mb-2">Profile C: Complex/Chronic (Severe)</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• APS score 31-50</li>
                  <li>• Multiple failed treatment attempts</li>
                  <li>• Significant functional limitations</li>
                  <li>• Bilateral or recurrent presentation</li>
                </ul>
                <p className="text-xs text-red-600 mt-2 font-medium">
                  Prognosis: Guarded; requires intensive intervention
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps: Tailored Treatment Planning</h2>

            <p>
              Now that you understand your specific presentation and risk factors, the following chapters will provide 
              targeted interventions based on your athletic profile and sport-specific demands.
            </p>

            <div className="bg-athletic-blue/10 border border-athletic-blue/20 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-athletic-blue mb-3">Assessment Complete</h3>
              <p className="text-gray-700 mb-4">
                You now have a comprehensive understanding of your plantar fasciitis presentation and contributing factors. 
                Chapter 3 will help you modify your training approach based on your specific race distance and goals.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Remember:</strong> Keep your assessment results handy as you progress through the remaining chapters—
                they'll guide your treatment selections and modifications.
              </p>
            </div>
          </div>
        </ChapterTemplate>
        <Footer />
      </div>
    </>
  )
}