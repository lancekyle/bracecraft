import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  articleSection?: string;
  readingTime?: string;
  chapterNumber?: number;
  totalChapters?: number;
}

export default function SEOHead({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "/og-default.jpg",
  ogType = "article",
  publishedTime,
  modifiedTime,
  author,
  articleSection,
  readingTime,
  chapterNumber,
  totalChapters
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Create or update meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement("meta");
        if (property) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Update or create canonical link
    const updateCanonical = () => {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = `${window.location.origin}${canonicalUrl}`;
    };

    // Basic SEO meta tags
    updateMetaTag("description", description);
    if (keywords) updateMetaTag("keywords", keywords);
    updateMetaTag("author", author || "BraceCraft");

    // Open Graph meta tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", ogType, true);
    updateMetaTag("og:url", `${window.location.origin}${canonicalUrl}`, true);
    updateMetaTag("og:image", `${window.location.origin}${ogImage}`, true);
    updateMetaTag("og:site_name", "BraceCraft", true);

    // Twitter Card meta tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", `${window.location.origin}${ogImage}`);

    // Article specific meta tags
    if (publishedTime) {
      updateMetaTag("article:published_time", publishedTime, true);
    }
    if (modifiedTime) {
      updateMetaTag("article:modified_time", modifiedTime, true);
    }
    if (author) {
      updateMetaTag("article:author", author, true);
    }
    if (articleSection) {
      updateMetaTag("article:section", articleSection, true);
    }

    // Update canonical URL
    updateCanonical();

    // Create schema markup
    const createSchemaMarkup = () => {
      const schemaId = "schema-markup";
      let schemaScript = document.getElementById(schemaId);
      
      if (schemaScript) {
        schemaScript.remove();
      }

      schemaScript = document.createElement("script");
      schemaScript.id = schemaId;
      schemaScript.setAttribute("type", "application/ld+json");

      const baseSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "author": {
          "@type": "Person",
          "name": author || "Dr. Sarah Chen, DPT"
        },
        "publisher": {
          "@type": "Organization",
          "name": "BraceCraft",
          "logo": {
            "@type": "ImageObject",
            "url": `${window.location.origin}/logo.png`
          }
        },
        "url": `${window.location.origin}${canonicalUrl}`,
        "image": `${window.location.origin}${ogImage}`,
        "datePublished": publishedTime || "2024-12-01",
        "dateModified": modifiedTime || new Date().toISOString(),
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `${window.location.origin}${canonicalUrl}`
        },
        "articleSection": articleSection || "Health & Fitness",
        "keywords": keywords || "plantar fasciitis, athletic training, sports medicine",
        ...(chapterNumber && totalChapters && {
          "isPartOf": {
            "@type": "CreativeWorkSeries",
            "name": "Race Training with Plantar Fasciitis Guide",
            "description": "Complete guide for athletes training with plantar fasciitis"
          },
          "position": chapterNumber
        }),
        ...(readingTime && {
          "timeRequired": readingTime
        })
      };

      // Add FAQ schema for Chapter 1 and Chapter 2
      const schema = chapterNumber === 1 ? [baseSchema, {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
          "@type": "Question",
          "name": "Why does standard plantar fasciitis advice fail athletes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard plantar fasciitis treatment assumes complete rest is acceptable, but athletes face unique physiological demands (2-3x body weight forces), timeline pressures (training cycles), and performance requirements that standard protocols don't address. Complete rest creates fitness losses requiring 6+ months to recover."
          }
        },
        {
          "@type": "Question", 
          "name": "How do athletic training demands differ from daily activities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Athletic training generates forces 2-3 times body weight through the plantar fascia, repeated thousands of times per session. A 150-pound runner produces 300-450 pounds of force per foot strike, creating mechanical stress that exceeds daily living demands by orders of magnitude."
          }
        },
        {
          "@type": "Question",
          "name": "How can athletes maintain performance while healing from plantar fasciitis?",
          "acceptedAnswer": {
            "@type": "Answer", 
            "text": "Athletes can maintain performance through intelligent load management that reduces initial training volume by 40-60%, increases recovery time 2-3x between sessions, and progressively increases volume based on tissue response rather than eliminating all stress on the plantar fascia."
          }
        }]
      }] : chapterNumber === 2 ? [baseSchema, {
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
            "text": "The hallmark of plantar fasciitis is sharp, stabbing heel pain with first steps in the morning. Key indicators include post-rest flare-ups, pain that decreases with gentle movement, and location-specific pain at the bottom of the heel."
          }
        },
        {
          "@type": "Question",
          "name": "When should athletes stop self-treatment and seek professional help?",
          "acceptedAnswer": {
            "@type": "Answer", 
            "text": "Seek professional help for numbness/tingling, severe swelling, fever with foot pain, inability to bear weight, no improvement after 2 weeks, or pain that's worse at night and doesn't follow the classic morning pattern."
          }
        },
        {
          "@type": "Question",
          "name": "How can athletes distinguish plantar fasciitis from similar conditions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Plantar fasciitis causes bottom-heel pain worst in mornings, while Achilles tendonitis affects the back of heel, heel pad syndrome causes deep aching on hard surfaces, and tarsal tunnel syndrome includes numbness/tingling extending into the arch."
          }
        }]
      }] : baseSchema;

      schemaScript.textContent = JSON.stringify(schema);
      document.head.appendChild(schemaScript);
    };

    createSchemaMarkup();

    // Cleanup function
    return () => {
      // Optional: Clean up meta tags when component unmounts
      // Not usually necessary in SPA, but available if needed
    };
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, publishedTime, modifiedTime, author, articleSection, readingTime, chapterNumber, totalChapters]);

  return null; // This component doesn't render anything
}