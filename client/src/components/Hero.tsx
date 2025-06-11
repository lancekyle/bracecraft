import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-brand-teal to-athletic-blue text-white">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Don't Let Injury Sideline Your Goals
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-gray-100">
            Expert-backed injury prevention and recovery guidance to keep you
            performing at your peak. From plantar fasciitis to muscle strains,
            we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/guides/plantar-fasciitis">
              <Button
                size="lg"
                className="bg-warm-orange text-white hover:bg-warm-orange/90 transform hover:scale-105 transition-all duration-200 text-lg font-semibold px-8 py-4"
              >
                Browse Injury Guides
              </Button>
            </Link>
            <Link href="/videos">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-teal transition-all duration-200 text-lg font-semibold px-8 py-4"
              >
                Watch Videos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
