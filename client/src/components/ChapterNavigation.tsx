import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import { Link } from "wouter";

interface Chapter {
  id: number;
  title: string;
  slug: string;
}

interface ChapterNavigationProps {
  currentChapter: number;
  totalChapters: number;
  guideSlug: string;
  onProgressUpdate?: (chapterId: number, completed: boolean) => void;
}

export default function ChapterNavigation({ 
  currentChapter, 
  totalChapters, 
  guideSlug,
  onProgressUpdate 
}: ChapterNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [progress, setProgress] = useState<{[key: string]: boolean}>({});

  const chapters: Chapter[] = [
    { id: 1, title: "Why Standard Advice Fails Athletes", slug: "why-standard-advice-fails" },
    { id: 2, title: "Know What You're Dealing With", slug: "know-what-youre-dealing-with" },
    { id: 3, title: "Race Distance Training Modifications", slug: "race-modifications" },
    { id: 4, title: "Training Modifications", slug: "training-modifications" },
    { id: 5, title: "Gear Strategy for Race Training", slug: "gear-strategy" },
    { id: 6, title: "Training Load Management", slug: "load-management" },
    { id: 7, title: "Race Day Strategy", slug: "race-day" }
  ];

  useEffect(() => {
    const savedProgress = localStorage.getItem(`${guideSlug}-progress`);
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, [guideSlug]);

  const completedChapters = Object.values(progress).filter(Boolean).length;
  const progressPercentage = (completedChapters / totalChapters) * 100;

  const markChapterComplete = (chapterId: number) => {
    const newProgress = { ...progress, [`chapter-${chapterId}`]: true };
    setProgress(newProgress);
    localStorage.setItem(`${guideSlug}-progress`, JSON.stringify(newProgress));
    if (onProgressUpdate) {
      onProgressUpdate(chapterId, true);
    }
  };

  const previousChapter = currentChapter > 1 ? currentChapter - 1 : null;
  const nextChapter = currentChapter < totalChapters ? currentChapter + 1 : null;

  return (
    <>
      {/* Sticky Navigation Bar */}
      <div className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            {/* Progress */}
            <div className="flex items-center space-x-4 flex-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden"
              >
                <Menu className="w-4 h-4" />
              </Button>
              
              <div className="hidden lg:flex items-center space-x-2 text-sm text-gray-custom">
                <BookOpen className="w-4 h-4" />
                <span>Chapter {currentChapter} of {totalChapters}</span>
              </div>
              
              <div className="flex-1 max-w-xs">
                <Progress value={progressPercentage} className="h-2" />
              </div>
              
              <span className="text-xs text-gray-custom hidden sm:block">
                {completedChapters}/{totalChapters}
              </span>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center space-x-2 ml-4">
              {previousChapter && (
                <Link href={`/plantar-fasciitis/race-training/${chapters.find(c => c.id === previousChapter)?.slug}`}>
                  <Button variant="outline" size="sm">
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    <span className="hidden sm:inline">Previous</span>
                  </Button>
                </Link>
              )}
              
              {nextChapter && (
                <Link href={`/plantar-fasciitis/race-training/${chapters.find(c => c.id === nextChapter)?.slug}`}>
                  <Button size="sm" className="bg-athletic-blue hover:bg-athletic-blue/90">
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              )}
              
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => markChapterComplete(currentChapter)}
                className="text-success-green hover:bg-success-green/10"
              >
                <CheckCircle2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Chapter Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-white shadow-xl">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-charcoal">Guide Chapters</h3>
                <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(false)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="p-4 space-y-2 overflow-y-auto">
              {chapters.map((chapter) => (
                <Link key={chapter.id} href={`/plantar-fasciitis/race-training/${chapter.slug}`}>
                  <Card 
                    className={`cursor-pointer transition-all duration-200 ${
                      currentChapter === chapter.id ? 'ring-2 ring-athletic-blue' : ''
                    } ${progress[`chapter-${chapter.id}`] ? 'bg-success-green/10' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <CardContent className="p-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          progress[`chapter-${chapter.id}`] 
                            ? 'bg-success-green text-white' 
                            : currentChapter === chapter.id
                            ? 'bg-athletic-blue text-white'
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {progress[`chapter-${chapter.id}`] ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : (
                            chapter.id
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-charcoal">
                            Chapter {chapter.id}
                          </div>
                          <div className="text-xs text-gray-custom">
                            {chapter.title}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}