import ChapterTemplate from "@/components/ChapterTemplate";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Target, AlertCircle, Users, CheckCircle } from "lucide-react";
import ChapterCTA from "@/components/ChapterCTA";

export default function Introduction() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is this race training guide for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This guide is designed for competitive athletes dealing with plantar fasciitis who want to continue training and racing while managing their condition safely and effectively."
        }
      },
      {
        "@type": "Question",
        "name": "What makes this approach different from standard plantar fasciitis advice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike generic rest-based approaches, this guide provides sport-specific strategies that allow continued training and racing while actively managing plantar fasciitis symptoms."
        }
      },
      {
        "@type": "Question",
        "name": "Can I really train and race with plantar fasciitis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, with proper modification strategies, load management, and realistic expectations, many athletes successfully continue training and competing while managing plantar fasciitis."
        }
      },
      {
        "@type": "Question",
        "name": "What should I expect from this training guide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Expect practical, evidence-based strategies for race distance modifications, sport-specific protocols, gear optimization, training load management, and race day execution with plantar fasciitis."
        }
      }
    ]
  };

  return (
    <>
      <SEOHead 
        title="Introduction: Race Training with Plantar Fasciitis - Complete Guide"
        description="Learn how to continue competitive training and racing with plantar fasciitis. Evidence-based strategies for athletes who refuse to let foot pain derail their racing goals."
        keywords="plantar fasciitis training, racing with plantar fasciitis, athletic foot pain, competitive training plantar fasciitis"
        canonicalUrl="https://bracecrft.com/plantar-fasciitis/race-training/introduction"
        ogImage="https://bracecrft.com/images/introduction-race-training.webp"
        publishedTime="2025-06-18"
        modifiedTime="2025-06-18"
        author="BraceCraft Medical Team"
        articleSection="Athletic Injury Management"
        readingTime="8 min"
        chapterNumber={0}
        totalChapters={9}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ChapterTemplate
        chapterNumber={0}
        chapterTitle="Introduction"
        readTime="8 min read"
        author="BraceCraft Medical Team"
        lastUpdated="June 18, 2025"
        guideSlug="race-training"
        totalChapters={9}
        ctaSection={<ChapterCTA productImageUrl="/images/pf-recovery-kit.jpg" />}
      >
        {/* LLM Context Block */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-l-blue-500 p-6 mb-8">
          <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">Introduction LLM Context</h2>
          <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">
            This introduction establishes the foundation for race training with plantar fasciitis. 
            Covers target audience, guide philosophy, expected outcomes, and sets realistic expectations 
            for athletes who want to continue competing while managing foot pain. Emphasizes evidence-based 
            approach over generic rest recommendations.
          </p>
        </div>

        {/* Introduction Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            You've trained for months. Your race is approaching. And then it hits—that sharp, stabbing pain 
            in your heel that makes you wonder if your race goals are about to disappear.
          </p>
          
          <p className="text-lg font-semibold text-athletic-blue dark:text-blue-300 my-6">
            You're not alone, and you don't have to give up.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Most plantar fasciitis advice treats you like someone who can simply "take a break" from running. 
            Rest until it feels better. Avoid high-impact activities. Maybe try some gentle stretching. This 
            approach ignores a fundamental reality: competitive runners don't have the luxury of indefinite rest.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            You have races on the calendar. Training partners counting on you. Personal goals that matter. 
            The standard advice—while well-intentioned—doesn't account for athletes who need to maintain 
            fitness and race readiness while managing plantar fasciitis.
          </p>

          <div className="bg-athletic-blue/10 border-l-4 border-l-athletic-blue p-6 my-8">
            <p className="text-athletic-blue dark:text-blue-300 font-semibold mb-2">This guide is different.</p>
            <p className="text-gray-700 dark:text-gray-300">
              It's written specifically for runners who refuse to let plantar fasciitis derail their competitive goals. 
              You'll learn how to modify your training intelligently, maintain race fitness, and execute your race 
              plans while managing symptoms effectively.
            </p>
          </div>

          <div className="bg-success-green/10 border-l-4 border-l-success-green p-6 my-8">
            <p className="text-success-green font-semibold mb-2">The core principle is simple: Smart training beats stopped training.</p>
            <p className="text-gray-700 dark:text-gray-300">
              Every modification, every strategy, and every recommendation in this guide serves one purpose: 
              keeping you race-ready while respecting your foot's current limitations. You don't have to choose 
              between your plantar fasciitis and your race goals—you just need to be strategic about pursuing both.
            </p>
          </div>
        </div>

        {/* Section 1: Who is this guide for and what can you expect? */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Target className="w-6 h-6 text-athletic-blue mr-3" />
            Who is this guide for and what can you expect?
          </h2>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">Direct Answer:</h3>
            <p className="text-green-700 dark:text-green-300 leading-relaxed">
              This guide is designed for competitive runners who refuse to let plantar fasciitis derail their 
              racing goals. You'll learn intelligent training modifications, race fitness maintenance strategies, 
              and race execution tactics while managing symptoms effectively. The core principle: smart training 
              beats stopped training.
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <BookOpen className="w-5 h-5 text-athletic-blue mr-2" />
                What You'll Learn
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start space-x-3">
                  <Target className="w-4 h-4 text-success-green mt-1 flex-shrink-0" />
                  <span>Why standard plantar fasciitis advice fails athletes and what to do instead</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Target className="w-4 h-4 text-success-green mt-1 flex-shrink-0" />
                  <span>How to assess your condition and make intelligent training decisions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Target className="w-4 h-4 text-success-green mt-1 flex-shrink-0" />
                  <span>Race distance-specific training modifications that maintain fitness</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Target className="w-4 h-4 text-success-green mt-1 flex-shrink-0" />
                  <span>Smart cross-training and surface strategies that reduce plantar fascia stress</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Target className="w-4 h-4 text-success-green mt-1 flex-shrink-0" />
                  <span>Gear decisions that prioritize race completion over optimal recovery</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Target className="w-4 h-4 text-success-green mt-1 flex-shrink-0" />
                  <span>Data-driven training load management that prevents setbacks</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Target className="w-4 h-4 text-success-green mt-1 flex-shrink-0" />
                  <span>Race day execution tactics for competing with plantar fasciitis</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Section 2: What makes this approach different? */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Users className="w-6 h-6 text-athletic-blue mr-3" />
            What makes this approach different?
          </h2>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">Direct Answer:</h3>
            <p className="text-green-700 dark:text-green-300 leading-relaxed">
              Unlike generic rest-based approaches that ignore competitive demands, this guide provides evidence-based 
              strategies that allow continued training and racing. We focus on intelligent modifications rather than 
              complete cessation, recognizing that competitive runners need to maintain fitness and race readiness 
              while managing plantar fasciitis symptoms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-red-700 dark:text-red-300 mb-4">Traditional Approach</h3>
                <ul className="space-y-2 text-red-600 dark:text-red-400">
                  <li>• Complete rest until symptoms resolve</li>
                  <li>• Avoid all high-impact activities</li>
                  <li>• Generic stretching and ice recommendations</li>
                  <li>• No consideration for athletic goals</li>
                  <li>• One-size-fits-all recovery timeline</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-4">Athletic Approach</h3>
                <ul className="space-y-2 text-green-600 dark:text-green-400">
                  <li>• Intelligent training modifications</li>
                  <li>• Maintain race fitness through adaptation</li>
                  <li>• Sport-specific management strategies</li>
                  <li>• Goal-oriented recovery planning</li>
                  <li>• Personalized progression frameworks</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 3: Medical Disclaimer and Author Background */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Important Information
          </h2>

          <div className="space-y-6">
            <Card className="bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-4 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Medical Disclaimer
                </h3>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm leading-relaxed">
                  We're here to guide you on your path to recovery, but we are not your doctor. The information 
                  in this guide is for educational purposes only and is not a substitute for professional medical 
                  advice, diagnosis, or treatment. Before starting any new exercise or treatment plan, consult 
                  with a qualified healthcare provider—especially if you have underlying health conditions or 
                  persistent pain. If something doesn't feel right, listen to your body and seek medical attention.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">About BraceCraft</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  After years of battling the frustration and pain of trying to run marathons and compete in 
                  triathlons with plantar fasciitis, our founder reached a breaking point. Determined to find 
                  a solution, they sought out the best treatment practices and found an approach that worked.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  That experience inspired the team to collaborate with leading doctors and physical therapists. 
                  Together, we founded BraceCraft—an approach built on over a decade of clinical experience, 
                  the latest scientific research, and real-world athletic application. We know this program works, 
                  and we're confident it can work for you too.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Message and Citable Facts */}
        <section className="mb-12">
          <div className="bg-athletic-blue/10 border-l-4 border-l-athletic-blue p-6 mb-6">
            <p className="text-athletic-blue dark:text-blue-300 font-semibold mb-2">
              This isn't about managing a limitation—it's about executing an intelligent approach that gets you to the finish line healthy and strong.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Your race goals don't have to wait. Let's get you there.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Guide Principles:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div>• Smart training beats stopped training for competitive athletes</div>
              <div>• Intelligent modifications maintain race fitness while managing symptoms</div>
              <div>• Evidence-based strategies prioritize athletic goals alongside recovery</div>
              <div>• Sport-specific approaches outperform generic rest recommendations</div>
              <div>• Goal-oriented planning enables continued competitive participation</div>
              <div>• BraceCraft approach built on decade of clinical experience and research</div>
            </div>
          </div>
        </section>
      </ChapterTemplate>
    </>
  );
}