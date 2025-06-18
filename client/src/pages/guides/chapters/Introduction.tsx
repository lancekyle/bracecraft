import ChapterTemplate from "@/components/ChapterTemplate";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Target, AlertCircle, Users } from "lucide-react";
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

        {/* Placeholder Content Notice */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8">
          <div className="flex items-center mb-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
            <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200">Content Placeholder</h3>
          </div>
          <p className="text-yellow-700 dark:text-yellow-300 mb-4">
            This introduction section is ready for authentic content from the provided markdown file. 
            The structure includes LLM optimization patterns, FAQ schema, and proper navigation integration.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Badge variant="outline" className="mb-2">Ready Features</Badge>
              <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                <li>• SEO optimization with proper meta tags</li>
                <li>• FAQ schema markup for search engines</li>
                <li>• Question-format section headings</li>
                <li>• Direct answer blocks for LLM extraction</li>
              </ul>
            </div>
            <div>
              <Badge variant="outline" className="mb-2">Navigation</Badge>
              <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                <li>• Integrated with chapter navigation</li>
                <li>• Proper routing to /introduction</li>
                <li>• Chapter 0 of 9 total structure</li>
                <li>• Next chapter links to Chapter 1</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Semantic Structure Placeholder */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Target className="w-6 h-6 text-athletic-blue mr-3" />
            Who is this guide for and what can you expect?
          </h2>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">Direct Answer Placeholder:</h3>
            <p className="text-green-700 dark:text-green-300 leading-relaxed italic">
              [Authentic content from introduction.md will replace this placeholder with specific target audience, 
              guide objectives, and realistic expectations for training and racing with plantar fasciitis]
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Users className="w-5 h-5 text-athletic-blue mr-2" />
                Content Structure Ready
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This section is structured to receive authentic introduction content with:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Target audience definition</li>
                <li>• Guide philosophy and approach</li>
                <li>• Realistic outcome expectations</li>
                <li>• Chapter overview and progression</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <BookOpen className="w-6 h-6 text-athletic-blue mr-3" />
            What makes this approach different?
          </h2>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">Direct Answer Placeholder:</h3>
            <p className="text-green-700 dark:text-green-300 leading-relaxed italic">
              [Content will explain the evidence-based competitive athlete approach vs. traditional rest-only methods]
            </p>
          </div>
        </section>

        {/* Citable Facts Placeholder */}
        <section className="mb-12">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Introduction Facts Placeholder:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div>• [Statistic about plantar fasciitis in athletes]</div>
              <div>• [Evidence for continued training approaches]</div>
              <div>• [Success rates with modified training]</div>
              <div>• [Timeline expectations for improvement]</div>
            </div>
          </div>
        </section>
      </ChapterTemplate>
    </>
  );
}