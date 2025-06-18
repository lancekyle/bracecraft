import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  User, 
  ArrowLeft,
  BookmarkPlus,
  Share2,
  Printer
} from "lucide-react";
import { Link } from "wouter";
import ChapterNavigation from "./ChapterNavigation";

interface ChapterTemplateProps {
  chapterNumber: number;
  chapterTitle: string;
  readTime: string;
  author: string;
  lastUpdated: string;
  guideSlug: string;
  totalChapters: number;
  children: ReactNode;
  ctaSection?: ReactNode;
}

export default function ChapterTemplate({
  chapterNumber,
  chapterTitle,
  readTime,
  author,
  lastUpdated,
  guideSlug,
  totalChapters,
  children,
  ctaSection
}: ChapterTemplateProps) {

  const handleBookmark = () => {
    // Add to bookmarks in localStorage
    const bookmarks = JSON.parse(localStorage.getItem('pf-guide-bookmarks') || '[]');
    const bookmark = {
      guideSlug,
      chapterNumber,
      chapterTitle,
      timestamp: new Date().toISOString()
    };
    
    const existingIndex = bookmarks.findIndex((b: any) => 
      b.guideSlug === guideSlug && b.chapterNumber === chapterNumber
    );
    
    if (existingIndex === -1) {
      bookmarks.push(bookmark);
      localStorage.setItem('pf-guide-bookmarks', JSON.stringify(bookmarks));
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${chapterTitle} - BraceCraft`,
          text: `Check out this helpful chapter on plantar fasciitis training`,
          url: window.location.href
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-light-gray">
      <ChapterNavigation 
        currentChapter={chapterNumber}
        totalChapters={totalChapters}
        guideSlug={guideSlug}
      />

      {/* Chapter Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href={`/guides/plantar-fasciitis/${guideSlug}`}>
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Guide Overview
            </Button>
          </Link>
          
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline">Chapter {chapterNumber}</Badge>
            <Badge className="bg-athletic-blue text-white">Race Training Guide</Badge>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            {chapterTitle}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-custom mb-6">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {readTime}
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {author}
            </div>
            <div>
              Updated {lastUpdated}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleBookmark}
              className="text-gray-600 hover:text-charcoal"
            >
              <BookmarkPlus className="w-4 h-4 mr-2" />
              Bookmark
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleShare}
              className="text-gray-600 hover:text-charcoal"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.print()}
              className="text-gray-600 hover:text-charcoal"
            >
              <Printer className="w-4 h-4 mr-2" />
              Print
            </Button>
          </div>
        </div>
      </div>

      {/* Chapter Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {children}
        </div>

        {/* CTA Section */}
        {ctaSection && (
          <div className="mt-12">
            {ctaSection}
          </div>
        )}

        {/* Chapter Navigation Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {chapterNumber > 1 ? (
              <Link href={chapterNumber === 2 ? "/plantar-fasciitis/race-training/why-standard-advice-fails" : chapterNumber === 3 ? "/plantar-fasciitis/race-training/know-what-youre-dealing-with" : chapterNumber === 4 ? "/plantar-fasciitis/race-training/race-distance-modifications" : chapterNumber === 5 ? "/plantar-fasciitis/race-training/sport-specific-protocols" : chapterNumber === 6 ? "/plantar-fasciitis/race-training/gear-strategy" : chapterNumber === 7 ? "/plantar-fasciitis/race-training/training-load-management" : `/guides/plantar-fasciitis/${guideSlug}/chapter-${chapterNumber - 1}`}>
                <Button variant="outline" className="w-full sm:w-auto">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous Chapter
                </Button>
              </Link>
            ) : (
              <div></div>
            )}

            <div className="text-center">
              <p className="text-sm text-gray-custom">
                Chapter {chapterNumber} of {totalChapters}
              </p>
            </div>

            {chapterNumber < totalChapters ? (
              <Link href={chapterNumber === 1 ? "/plantar-fasciitis/race-training/know-what-youre-dealing-with" : chapterNumber === 2 ? "/plantar-fasciitis/race-training/race-distance-modifications" : chapterNumber === 3 ? "/plantar-fasciitis/race-training/sport-specific-protocols" : chapterNumber === 4 ? "/plantar-fasciitis/race-training/gear-strategy" : chapterNumber === 5 ? "/plantar-fasciitis/race-training/training-load-management" : chapterNumber === 6 ? "/plantar-fasciitis/race-training/race-day-strategy" : `/guides/plantar-fasciitis/${guideSlug}/chapter-${chapterNumber + 1}`}>
                <Button className="w-full sm:w-auto bg-athletic-blue hover:bg-athletic-blue/90">
                  Next Chapter
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </Button>
              </Link>
            ) : (
              <Link href={`/guides/plantar-fasciitis/${guideSlug}`}>
                <Button className="w-full sm:w-auto bg-success-green hover:bg-success-green/90">
                  Complete Guide
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}