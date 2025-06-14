import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import fs from "fs";
import path from "path";

// Schema markup templates for different chapter pages
const getSchemaMarkup = (chapterNumber?: number) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": chapterNumber === 2 ? "Know What You're Dealing With" : "Race Training with Plantar Fasciitis",
    "description": chapterNumber === 2 ? 
      "Learn to accurately diagnose plantar fasciitis with self-assessment tools, recognize red flags requiring medical attention, and understand severity grading for proper treatment." :
      "Complete guide for athletes training with plantar fasciitis",
    "author": {
      "@type": "Person",
      "name": "Dr. Sarah Chen, DPT"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BraceCraft",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bracecraft.com/logo.png"
      }
    },
    "datePublished": "2024-12-01",
    "dateModified": "2024-12-15T00:00:00Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": chapterNumber === 2 ? 
        "https://bracecraft.com/plantar-fasciitis/race-training/know-what-youre-dealing-with" :
        "https://bracecraft.com/plantar-fasciitis/race-training"
    },
    "articleSection": "Sports Medicine",
    "keywords": "plantar fasciitis, athletic training, sports medicine, heel pain, running injuries"
  };

  if (chapterNumber === 2) {
    // Add FAQ schema for Chapter 2
    return [baseSchema, {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "Why is accurate diagnosis critical for athletes with heel pain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Athletes face unique diagnostic challenges with higher forces, different injury patterns, and time pressures that make accurate self-assessment crucial. Getting the wrong diagnosis means either training through something requiring complete rest or unnecessarily shutting down training for something manageable."
        }
      },
      {
        "@type": "Question", 
        "name": "How can athletes self-assess for plantar fasciitis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The hallmark of plantar fasciitis is sharp, stabbing heel pain with first steps in the morning. Key indicators include post-rest flare-ups after sitting 30+ minutes, pain that decreases with gentle movement, and location-specific pain at the bottom of the heel."
        }
      },
      {
        "@type": "Question",
        "name": "When should athletes stop self-treatment and seek professional help?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Stop self-treatment immediately for numbness/tingling, severe swelling, fever with foot pain, complete inability to bear weight, no improvement after 2 weeks of modifications, or pain that's worse at night and doesn't follow the classic morning pattern."
        }
      },
      {
        "@type": "Question",
        "name": "How can athletes distinguish plantar fasciitis from similar conditions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Plantar fasciitis causes bottom-heel pain worst in mornings, while Achilles tendonitis affects the back of heel during push-off, heel pad syndrome causes deep aching on hard surfaces, and tarsal tunnel syndrome includes numbness/tingling extending into the arch or toes."
        }
      }]
    }];
  }

  return baseSchema;
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Server-side schema injection for specific routes
  app.get('/plantar-fasciitis/race-training/know-what-youre-dealing-with', (req, res, next) => {
    // Read the base HTML file
    const htmlPath = path.join(process.cwd(), 'client', 'index.html');
    let html = fs.readFileSync(htmlPath, 'utf8');
    
    // Generate schema markup for Chapter 2
    const schema = getSchemaMarkup(2);
    const schemaScript = `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
    
    // Update meta tags for Chapter 2
    const chapter2Title = "Know What You're Dealing With - Chapter 2 | BraceCraft";
    const chapter2Description = "Learn to accurately diagnose plantar fasciitis with self-assessment tools, recognize red flags requiring medical attention, and understand severity grading for proper treatment.";
    const canonicalUrl = "https://bracecraft.com/plantar-fasciitis/race-training/know-what-youre-dealing-with";
    
    // Replace title and meta tags
    html = html.replace(/<title>.*?<\/title>/, `<title>${chapter2Title}</title>`);
    html = html.replace(/(<meta name="description" content=")[^"]*(")/g, `$1${chapter2Description}$2`);
    
    // Add canonical link
    const canonicalLink = `<link rel="canonical" href="${canonicalUrl}" />`;
    
    // Add Open Graph tags
    const ogTags = `
    <meta property="og:title" content="${chapter2Title}" />
    <meta property="og:description" content="${chapter2Description}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:type" content="article" />
    <meta property="og:image" content="https://bracecraft.com/og-chapter2.jpg" />
    <meta property="article:published_time" content="2024-12-01T00:00:00Z" />
    <meta property="article:modified_time" content="2024-12-15T00:00:00Z" />
    <meta property="article:author" content="Dr. Sarah Chen, DPT" />
    <meta property="article:section" content="Sports Medicine" />`;
    
    // Insert all tags before closing </head>
    html = html.replace('</head>', `    ${canonicalLink}\n    ${ogTags}\n    ${schemaScript}\n  </head>`);
    
    res.send(html);
  });

  // Chapter 1 route with schema
  app.get('/plantar-fasciitis/race-training/why-standard-advice-fails', (req, res, next) => {
    const htmlPath = path.join(process.cwd(), 'client', 'index.html');
    let html = fs.readFileSync(htmlPath, 'utf8');
    
    const schema = getSchemaMarkup(1);
    const schemaScript = `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
    
    const chapter1Title = "Why Standard Advice Fails - Chapter 1 | BraceCraft";
    const chapter1Description = "Discover why conventional plantar fasciitis advice fails athletes and learn the key differences in athletic treatment approaches for continued training success.";
    
    html = html.replace(/<title>.*?<\/title>/, `<title>${chapter1Title}</title>`);
    html = html.replace(/(<meta name="description" content=")[^"]*(")/g, `$1${chapter1Description}$2`);
    html = html.replace('</head>', `    ${schemaScript}\n  </head>`);
    
    res.send(html);
  });

  const httpServer = createServer(app);

  return httpServer;
}
