import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

interface InjuryGuideCardProps {
  title: string;
  description: string;
  readTime: string;
  imageUrl: string;
  imageAlt: string;
  isPopular?: boolean;
  href?: string;
}

export default function InjuryGuideCard({
  title,
  description,
  readTime,
  imageUrl,
  imageAlt,
  isPopular = false,
  href = "#",
}: InjuryGuideCardProps) {
  return (
    <Card className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <CardContent className="p-6">
        {isPopular && (
          <div className="flex items-center mb-2">
            <Badge className="bg-warm-orange text-white">MOST POPULAR</Badge>
          </div>
        )}
        <h3 className="text-xl font-semibold text-charcoal mb-3">{title}</h3>
        <p className="text-gray-custom mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-custom">
            <Clock className="w-4 h-4 mr-1" />
            {readTime}
          </div>
          <Button
            variant="link"
            className="text-athletic-blue hover:text-brand-teal font-medium transition-colors duration-200 p-0"
          >
            Read Guide →
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
