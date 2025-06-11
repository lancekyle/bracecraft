import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Heart, Target, Shield, BookOpen } from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      title: "Sports Medicine Physician & Co-Founder",
      credentials: "MD, Sports Medicine Fellowship",
      experience: "15+ years",
      imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      bio: "Dr. Chen specializes in sports medicine and has worked with Olympic athletes. She founded BraceCraft to make expert injury prevention accessible to everyone.",
      expertise: ["Sports Medicine", "Injury Prevention", "Performance Optimization"]
    },
    {
      name: "Dr. Mike Rodriguez",
      title: "Physical Therapist & Clinical Director",
      credentials: "DPT, OCS",
      experience: "12+ years",
      imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      bio: "Dr. Rodriguez has extensive experience in orthopedic physical therapy and has worked with professional sports teams.",
      expertise: ["Orthopedic PT", "Manual Therapy", "Sports Rehabilitation"]
    },
    {
      name: "Dr. Lisa Park",
      title: "Certified Athletic Trainer & Exercise Physiologist",
      credentials: "ATC, CSCS",
      experience: "10+ years",
      imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      bio: "Dr. Park brings her expertise from NCAA Division I athletics to help athletes at all levels prevent and recover from injuries.",
      expertise: ["Athletic Training", "Exercise Physiology", "Injury Prevention"]
    },
    {
      name: "Dr. James Miller",
      title: "Orthopedic Surgeon & Medical Advisor",
      credentials: "MD, Orthopedic Surgery",
      experience: "20+ years",
      imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      bio: "Dr. Miller provides surgical expertise and ensures our content meets the highest medical standards.",
      expertise: ["Orthopedic Surgery", "Sports Medicine", "Joint Replacement"]
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Patient-Centered Care",
      description: "Every piece of content is created with the patient's best interests in mind, focusing on safe, effective, and evidence-based treatments."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Medical Excellence",
      description: "All our content is reviewed by licensed medical professionals and based on the latest research in sports medicine and rehabilitation."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Education First",
      description: "We believe that educated patients make better decisions about their health. Our goal is to empower you with knowledge."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Practical Solutions",
      description: "We focus on providing actionable advice and exercises that you can implement immediately to see real results."
    }
  ];

  const achievements = [
    {
      number: "500K+",
      label: "Athletes Helped",
      description: "Successful injury prevention and recovery stories"
    },
    {
      number: "98%",
      label: "Success Rate",
      description: "Users report improved outcomes following our programs"
    },
    {
      number: "15+",
      label: "Medical Experts",
      description: "Licensed professionals on our advisory board"
    },
    {
      number: "1M+",
      label: "Video Views",
      description: "Exercise videos watched by athletes worldwide"
    }
  ];

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-brand-teal to-athletic-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About BraceCraft
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-100">
              We're on a mission to keep athletes healthy, active, and performing at their best through 
              expert-backed injury prevention and recovery guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-warm-orange text-white hover:bg-warm-orange/90">
                Meet Our Team
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-teal">
                Our Mission
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-gray-custom">
              <p className="text-xl leading-relaxed mb-6">
                BraceCraft was born from a simple frustration: too many athletes were getting injured due to 
                lack of proper guidance, and too many were struggling to recover because they didn't have 
                access to expert advice.
              </p>
              <p className="leading-relaxed mb-6">
                Dr. Sarah Chen, our co-founder, noticed this pattern while working with Olympic athletes. 
                The same injuries that could sideline a recreational runner for months could be prevented 
                or treated quickly with the right knowledge and exercises. The problem wasn't lack of 
                effective treatments—it was lack of access to expert guidance.
              </p>
              <p className="leading-relaxed mb-6">
                That's when the idea for BraceCraft was born: What if we could make expert sports medicine 
                knowledge accessible to everyone? What if a weekend warrior could access the same quality 
                injury prevention strategies used by professional athletes?
              </p>
              <p className="leading-relaxed">
                Today, BraceCraft combines the expertise of licensed physical therapists, sports medicine 
                doctors, and certified athletic trainers to provide comprehensive, evidence-based guidance 
                for injury prevention and recovery. Our content is created by experts, reviewed by medical 
                professionals, and designed to be actionable for athletes at every level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-custom max-w-3xl mx-auto">
              These core principles guide everything we do at BraceCraft.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-athletic-blue mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-custom">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-custom max-w-3xl mx-auto">
              We're proud of the positive impact we've made in the athletic community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-warm-orange mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold text-charcoal mb-1">
                  {achievement.label}
                </div>
                <div className="text-gray-custom">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Meet Our Medical Team
            </h2>
            <p className="text-xl text-gray-custom max-w-3xl mx-auto">
              Our content is created and reviewed by licensed medical professionals with extensive 
              experience in sports medicine and rehabilitation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-charcoal">
                          {member.name}
                        </h3>
                        <Badge variant="outline" className="ml-2">
                          {member.experience}
                        </Badge>
                      </div>
                      <p className="text-athletic-blue font-semibold mb-1">
                        {member.title}
                      </p>
                      <p className="text-sm text-gray-custom mb-3">
                        {member.credentials}
                      </p>
                      <p className="text-gray-custom mb-4">
                        {member.bio}
                      </p>
                      <div>
                        <p className="text-sm font-semibold text-charcoal mb-2">
                          Expertise:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {member.expertise.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 lg:py-24 bg-brand-teal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            Our Mission
          </h2>
          <p className="text-xl lg:text-2xl mb-8 leading-relaxed">
            To democratize access to expert sports medicine knowledge, empowering athletes at every level 
            to prevent injuries, recover faster, and perform at their best through evidence-based guidance 
            and personalized care.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-100">
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              For Everyone
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 mr-2" />
              Expert-Backed
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Evidence-Based
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-custom mb-8">
            Join thousands of athletes who trust BraceCraft for their injury prevention and recovery needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-athletic-blue text-white hover:bg-athletic-blue/90 transform hover:scale-105 transition-all duration-200 text-lg font-semibold px-8 py-4"
            >
              Browse Injury Guides
            </Button>
            <Button
              size="lg"
              className="bg-warm-orange text-white hover:bg-warm-orange/90 text-lg font-semibold px-8 py-4"
            >
              Schedule Consultation
            </Button>
          </div>
          <p className="text-sm text-gray-custom mt-4">
            Trusted by 500K+ athletes • Expert-reviewed content • Free resources available
          </p>
        </div>
      </section>
    </div>
  );
}
