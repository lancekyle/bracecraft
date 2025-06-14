import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Target,
  TrendingUp,
  Shield,
  Zap,
  Calendar,
  MapPin,
  Award
} from "lucide-react";
import { Link } from "wouter";

interface ChapterProgress {
  [key: string]: boolean;
}

export default function TrainingGuide() {
  const [progress, setProgress] = useState<ChapterProgress>({});
  const [currentChapter, setCurrentChapter] = useState<number>(0);

  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem('pf-training-guide-progress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  const chapters = [
    {
      id: 1,
      title: "The Athletic Difference",
      description: "Why standard PF advice fails athletes and the performance maintenance strategy",
      duration: "8 min read",
      icon: <Target className="w-6 h-6" />,
      topics: ["Training vs daily demands", "Modify vs rest decisions", "Athletic psychology"]
    },
    {
      id: 2,
      title: "Know What You're Dealing With",
      description: "Self-assessment, red flags, and severity grading for competitive athletes",
      duration: "12 min read",
      icon: <Shield className="w-6 h-6" />,
      topics: ["Self-assessment quiz", "Medical red flags", "Progressive monitoring"]
    },
    {
      id: 3,
      title: "Race Distance Training Modifications",
      description: "Specific training adaptations for 5K through ultra distances",
      duration: "15 min read",
      icon: <TrendingUp className="w-6 h-6" />,
      topics: ["5K-Ultra modifications", "Cross-training hierarchy", "Progression guidelines"]
    },
    {
      id: 4,
      title: "Training Modifications",
      description: "Surface strategy, cross-training hierarchy, and strength training",
      duration: "10 min read",
      icon: <Zap className="w-6 h-6" />,
      topics: ["Surface progression", "Cross-training options", "Strength adaptations"]
    },
    {
      id: 5,
      title: "Gear Strategy for Race Training",
      description: "Footwear decisions, insoles, and the BraceCraft PF Relief Kit",
      duration: "8 min read",
      icon: <Award className="w-6 h-6" />,
      topics: ["Training vs race shoes", "Support strategies", "Gear transitions"]
    },
    {
      id: 6,
      title: "Training Load Management",
      description: "Daily monitoring, decision frameworks, and setback protocols",
      duration: "12 min read",
      icon: <Calendar className="w-6 h-6" />,
      topics: ["Daily assessment", "Traffic light system", "Technology tools"]
    },
    {
      id: 7,
      title: "Race Day Strategy",
      description: "48-hour protocol, race morning routine, and distance-specific management",
      duration: "10 min read",
      icon: <MapPin className="w-6 h-6" />,
      topics: ["Pre-race protocol", "During-race management", "Post-race care"]
    }
  ];

  const completedChapters = Object.values(progress).filter(Boolean).length;
  const progressPercentage = (completedChapters / chapters.length) * 100;

  const handleChapterClick = (chapterId: number) => {
    setCurrentChapter(chapterId);
  };

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-gradient-to-br from-brand-teal to-athletic-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-6">
            <Link href="/guides/plantar-fasciitis">
              <Button variant="ghost" className="text-white hover:bg-white/10 mb-4">
                ← Back to Plantar Fasciitis Guides
              </Button>
            </Link>
            <Badge className="bg-warm-orange text-white mb-4">COMPREHENSIVE GUIDE</Badge>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Race Training with Plantar Fasciitis
          </h1>
          <p className="text-xl text-gray-100 mb-6">
            Complete runner's guide to maintaining competitive training while managing plantar fasciitis
          </p>
          
          <div className="bg-white/10 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Your Progress</span>
              <span className="text-sm">{completedChapters}/{chapters.length} chapters</span>
            </div>
            <Progress value={progressPercentage} className="bg-white/20" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center text-sm">
              <Clock className="w-4 h-4 mr-2" />
              ~75 min total
            </div>
            <div className="flex items-center text-sm">
              <BookOpen className="w-4 h-4 mr-2" />
              7 chapters
            </div>
            <div className="flex items-center text-sm">
              <Target className="w-4 h-4 mr-2" />
              Race-focused
            </div>
          </div>
        </div>
      </div>

      {/* Core Principle Highlight */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-charcoal mb-2">Core Principle</h2>
            <p className="text-xl text-athletic-blue font-semibold">
              "Smart training beats stopped training"
            </p>
            <p className="text-gray-custom mt-2">
              For competitive athletes with race goals who refuse to let plantar fasciitis derail their performance
            </p>
          </div>
        </div>
      </section>

      {/* Chapter Navigation */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-charcoal mb-4">Guide Chapters</h2>
            <p className="text-gray-custom">
              Navigate through each chapter at your own pace. Your progress is automatically saved.
            </p>
          </div>

          <div className="space-y-4">
            {chapters.map((chapter, index) => (
              <Card 
                key={chapter.id} 
                className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                  progress[`chapter-${chapter.id}`] ? 'ring-2 ring-success-green' : ''
                }`}
                onClick={() => handleChapterClick(chapter.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`p-3 rounded-lg ${
                        progress[`chapter-${chapter.id}`] 
                          ? 'bg-success-green text-white' 
                          : 'bg-athletic-blue text-white'
                      }`}>
                        {progress[`chapter-${chapter.id}`] ? (
                          <CheckCircle2 className="w-6 h-6" />
                        ) : (
                          chapter.icon
                        )}
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-charcoal">
                          Chapter {chapter.id}: {chapter.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-custom">
                          <Clock className="w-4 h-4 mr-1" />
                          {chapter.duration}
                        </div>
                      </div>
                      
                      <p className="text-gray-custom mb-3">
                        {chapter.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {chapter.topics.map((topic, topicIndex) => (
                          <Badge key={topicIndex} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {progress[`chapter-${chapter.id}`] ? (
                            <span className="text-success-green text-sm font-medium">
                              ✓ Completed
                            </span>
                          ) : (
                            <span className="text-gray-custom text-sm">
                              Not started
                            </span>
                          )}
                        </div>
                        
                        <Link href={chapter.id === 1 ? "/plantar-fasciitis/race-training/why-standard-advice-fails" : chapter.id === 2 ? "/plantar-fasciitis/race-training/know-what-youre-dealing-with" : `/guides/plantar-fasciitis/training-guide/chapter-${chapter.id}`}>
                          <Button 
                            variant={progress[`chapter-${chapter.id}`] ? "outline" : "default"}
                            className={progress[`chapter-${chapter.id}`] ? "" : "bg-athletic-blue hover:bg-athletic-blue/90"}
                          >
                            {progress[`chapter-${chapter.id}`] ? "Review" : "Start"} Chapter
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-brand-teal text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Training Smart?</h3>
              <p className="text-gray-100 mb-6">
                Begin with Chapter 1 to understand why conventional plantar fasciitis advice fails athletes, 
                or jump directly to the chapter most relevant to your current situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/guides/plantar-fasciitis/training-guide/chapter-1">
                  <Button className="bg-warm-orange hover:bg-warm-orange/90 text-white">
                    Start Chapter 1
                  </Button>
                </Link>
                <Link href="/guides/plantar-fasciitis/training-guide/chapter-2">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-teal">
                    Take Assessment First
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}