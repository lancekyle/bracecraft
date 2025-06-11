import { useState } from "react";
import VideoCard from "@/components/VideoCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Play, Search, Filter } from "lucide-react";

export default function VideoLibrary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Stretching", "Strengthening", "Rehabilitation", "Prevention"];

  const videos = [
    {
      id: 1,
      title: "Complete Plantar Fasciitis Stretching Routine",
      description: "Follow along with Dr. Sarah Chen as she demonstrates the most effective stretches for plantar fasciitis relief and prevention.",
      duration: "15:32",
      views: "127K views",
      instructor: "Dr. Sarah Chen",
      thumbnailUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225",
      thumbnailAlt: "Physical therapist demonstrating plantar fasciitis stretches",
      category: "Stretching",
      featured: true
    },
    {
      id: 2,
      title: "Ankle Strengthening Basics",
      description: "Essential exercises to build ankle stability and prevent sprains.",
      duration: "8:45",
      views: "45K views",
      instructor: "Dr. Mike Rodriguez",
      thumbnailUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225",
      thumbnailAlt: "Ankle strengthening exercise demonstration",
      category: "Strengthening"
    },
    {
      id: 3,
      title: "Shoulder Mobility Flow",
      description: "Improve shoulder range of motion and prevent impingement.",
      duration: "12:30",
      views: "67K views",
      instructor: "Dr. Lisa Park",
      thumbnailUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225",
      thumbnailAlt: "Shoulder mobility exercise demonstration",
      category: "Stretching"
    },
    {
      id: 4,
      title: "IT Band Release Techniques",
      description: "Effective stretches to relieve IT band tightness and pain.",
      duration: "10:15",
      views: "89K views",
      instructor: "Dr. James Miller",
      thumbnailUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225",
      thumbnailAlt: "IT band stretching routine demonstration",
      category: "Rehabilitation"
    },
    {
      id: 5,
      title: "Core Stability for Runners",
      description: "Build a strong foundation to prevent running injuries.",
      duration: "14:20",
      views: "32K views",
      instructor: "Dr. Sarah Chen",
      thumbnailUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225",
      thumbnailAlt: "Core strengthening exercises for runners",
      category: "Strengthening"
    },
    {
      id: 6,
      title: "Hip Flexor Stretches",
      description: "Release tight hip flexors and improve hip mobility.",
      duration: "9:45",
      views: "56K views",
      instructor: "Dr. Mike Rodriguez",
      thumbnailUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225",
      thumbnailAlt: "Hip flexor stretching demonstration",
      category: "Stretching"
    },
    {
      id: 7,
      title: "Knee Injury Prevention Routine",
      description: "Daily exercises to keep your knees healthy and strong.",
      duration: "11:30",
      views: "43K views",
      instructor: "Dr. Lisa Park",
      thumbnailUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225",
      thumbnailAlt: "Knee injury prevention exercises",
      category: "Prevention"
    },
    {
      id: 8,
      title: "Lower Back Pain Relief",
      description: "Gentle movements to alleviate lower back discomfort.",
      duration: "13:15",
      views: "78K views",
      instructor: "Dr. James Miller",
      thumbnailUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225",
      thumbnailAlt: "Lower back pain relief exercises",
      category: "Rehabilitation"
    },
    {
      id: 9,
      title: "Wrist and Elbow Mobility",
      description: "Prevent overuse injuries in your upper extremities.",
      duration: "7:30",
      views: "29K views",
      instructor: "Dr. Sarah Chen",
      thumbnailUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225",
      thumbnailAlt: "Wrist and elbow mobility exercises",
      category: "Prevention"
    }
  ];

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredVideo = videos.find(video => video.featured);
  const regularVideos = filteredVideos.filter(video => !video.featured);

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Exercise Video Library
          </h1>
          <p className="text-xl text-gray-custom max-w-3xl">
            Follow along with our expert-led exercise videos designed for injury prevention and recovery.
            All videos are created by licensed physical therapists and sports medicine professionals.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-custom">Filter:</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-athletic-blue hover:bg-athletic-blue/90" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Video */}
        {featuredVideo && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-charcoal mb-6">Featured Video</h2>
            <Card className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
              <div className="relative aspect-video bg-gray-800 flex items-center justify-center">
                <img
                  src={featuredVideo.thumbnailUrl}
                  alt={featuredVideo.thumbnailAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <Button
                    size="icon"
                    className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 transform hover:scale-105 transition-all duration-200"
                  >
                    <Play className="w-12 h-12 text-brand-teal ml-1" fill="currentColor" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
                  {featuredVideo.duration}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-success-green text-white">FEATURED</Badge>
                  <Badge variant="outline">{featuredVideo.category}</Badge>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {featuredVideo.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {featuredVideo.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-400 text-sm">{featuredVideo.views}</span>
                    <span className="text-gray-400 text-sm">{featuredVideo.instructor}</span>
                  </div>
                  <Button
                    variant="link"
                    className="text-warm-orange hover:text-white transition-colors duration-200"
                  >
                    Add to Playlist
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Video Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-charcoal">
              All Videos ({regularVideos.length})
            </h2>
            <div className="text-sm text-gray-custom">
              Showing {regularVideos.length} of {videos.length - (featuredVideo ? 1 : 0)} videos
            </div>
          </div>

          {regularVideos.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularVideos.map((video) => (
                <VideoCard
                  key={video.id}
                  title={video.title}
                  description={video.description}
                  duration={video.duration}
                  views={video.views}
                  instructor={video.instructor}
                  thumbnailUrl={video.thumbnailUrl}
                  thumbnailAlt={video.thumbnailAlt}
                  onPlay={() => console.log(`Playing video: ${video.title}`)}
                />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <h3 className="text-xl font-semibold text-charcoal mb-2">No videos found</h3>
                <p className="text-gray-custom mb-4">
                  Try adjusting your search terms or filter criteria.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="bg-athletic-blue hover:bg-athletic-blue/90"
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Call to Action */}
        <Card className="mt-16 bg-brand-teal text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h3>
            <p className="mb-6">
              Request a specific exercise video or schedule a consultation with our physical therapists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-warm-orange text-white hover:bg-warm-orange/90">
                Request a Video
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-teal">
                Schedule Consultation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
