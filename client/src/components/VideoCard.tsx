import { Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface VideoCardProps {
  title: string;
  description: string;
  duration: string;
  views: string;
  instructor: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  onPlay?: () => void;
}

export default function VideoCard({
  title,
  description,
  duration,
  views,
  instructor,
  thumbnailUrl,
  thumbnailAlt,
  onPlay,
}: VideoCardProps) {
  return (
    <Card className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      <div className="relative aspect-video bg-gray-200 overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={thumbnailAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <Button
            size="icon"
            onClick={onPlay}
            className="opacity-0 group-hover:opacity-100 bg-white rounded-full hover:bg-white/90 transition-all duration-200"
          >
            <Play className="w-6 h-6 text-brand-teal ml-0.5" fill="currentColor" />
          </Button>
        </div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
          {duration}
        </div>
      </div>
      <CardContent className="p-4">
        <h4 className="font-semibold text-charcoal mb-2">{title}</h4>
        <p className="text-gray-custom text-sm mb-2">{description}</p>
        <div className="flex items-center justify-between text-xs text-gray-custom">
          <span>{views}</span>
          <span>{instructor}</span>
        </div>
      </CardContent>
    </Card>
  );
}
