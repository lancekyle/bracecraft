import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Create output directory
const outputDir = path.join(__dirname, 'ssg-build');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Template for HTML pages
const createHTML = (title, description, content, canonicalUrl) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="${canonicalUrl}">
  
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="${canonicalUrl}">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  
  <style>
    body { font-family: Inter, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; }
    .container { max-width: 800px; margin: 0 auto; }
    h1 { color: #2563eb; }
    h2 { color: #1e40af; margin-top: 2rem; }
    h3 { color: #3b82f6; }
    .meta { color: #666; font-size: 0.9rem; margin-bottom: 2rem; }
    .content { line-height: 1.8; }
    .faq { background: #f8fafc; padding: 1rem; border-radius: 8px; margin: 1rem 0; }
  </style>
</head>
<body>
  <div class="container">
    ${content}
  </div>
</body>
</html>`;

// Generate pages
const pages = [
  {
    path: 'index.html',
    title: 'BraceCraft - Athletic Injury Prevention & Recovery Authority',
    description: 'Expert athletic injury prevention and recovery guidance. Don\'t let injury sideline your goals with BraceCraft\'s comprehensive injury guides and exercise videos.',
    content: `
      <h1>BraceCraft - Athletic Injury Prevention & Recovery</h1>
      <p>Expert athletic injury prevention and recovery guidance for competitive athletes.</p>
      <h2>Featured Guide: Race Training with Plantar Fasciitis</h2>
      <p>A comprehensive 9-chapter guide for athletes who refuse to let plantar fasciitis derail their race goals.</p>
      <ul>
        <li><a href="/plantar-fasciitis/race-training/introduction/">Introduction</a></li>
        <li><a href="/plantar-fasciitis/race-training/why-standard-advice-fails/">Chapter 1: Why Standard Advice Fails</a></li>
        <li><a href="/plantar-fasciitis/race-training/know-what-youre-dealing-with/">Chapter 2: Know What You're Dealing With</a></li>
        <li><a href="/plantar-fasciitis/race-training/race-distance-modifications/">Chapter 3: Race Distance Modifications</a></li>
      </ul>
    `,
    canonicalUrl: 'https://staging.bracecraft.com/'
  },
  {
    path: 'plantar-fasciitis/race-training/introduction/index.html',
    title: 'Introduction: Race Training with Plantar Fasciitis - Complete Guide | BraceCraft',
    description: 'Master race training with plantar fasciitis. Evidence-based strategies for competitive athletes who refuse to stop training. Get back to racing pain-free.',
    content: `
      <h1>Introduction: Your Path Forward</h1>
      <div class="meta">By Dr. Lance Kyle | 8 min read | Updated June 18, 2025</div>
      
      <div class="faq">
        <h3>Medical Disclaimer</h3>
        <p>This guide provides educational information and should not replace professional medical advice. Always consult with qualified healthcare providers for diagnosis and treatment decisions.</p>
      </div>

      <h2>About the Author</h2>
      <p><strong>Dr. Lance Kyle</strong> is a sports medicine specialist with over 15 years of experience treating competitive athletes. As a former collegiate runner and current triathlete, he understands the psychological and physical challenges of training through injury.</p>

      <h2>Why This Guide Exists</h2>
      <p>If you're reading this, you're likely facing one of the most frustrating scenarios in athletics: plantar fasciitis threatening to derail your race goals. You've probably been told to "rest until it heals" or "just take some time off." For competitive athletes, this advice feels impossible and, frankly, inadequate.</p>

      <h2>What Makes This Different</h2>
      <p>Unlike generic plantar fasciitis advice that assumes you'll simply stop all activity, this guide acknowledges your reality as a competitive athlete. Every recommendation considers your upcoming race schedule, training commitments, and psychological needs.</p>

      <h2>Your Journey Through This Guide</h2>
      <p>This comprehensive guide contains 7 core chapters, each building on the previous to create a complete training and recovery system for competitive athletes with plantar fasciitis.</p>
    `,
    canonicalUrl: 'https://staging.bracecraft.com/plantar-fasciitis/race-training/introduction/'
  },
  {
    path: 'plantar-fasciitis/race-training/why-standard-advice-fails/index.html',
    title: 'Why Standard Advice Fails Athletes - Chapter 1 | BraceCraft',
    description: 'Discover why generic plantar fasciitis advice fails competitive athletes and learn evidence-based approaches that actually work for serious training.',
    content: `
      <h1>Chapter 1: Why Standard Advice Fails Athletes</h1>
      <div class="meta">By Dr. Lance Kyle | 12 min read | Updated June 18, 2025</div>

      <p>"Just rest until it heals." If you're a competitive athlete with plantar fasciitis, you've heard this advice countless times. Here's why it's not just inadequate—it's counterproductive for serious athletes.</p>

      <h2>The Standard Medical Model vs. Athletic Reality</h2>
      <p>Traditional plantar fasciitis treatment assumes patients can completely stop aggravating activities. For competitive athletes with training schedules, race commitments, and performance goals, this approach creates more problems than it solves.</p>

      <div class="faq">
        <h3>Why doesn't rest work for competitive athletes with plantar fasciitis?</h3>
        <p>Complete rest often leads to deconditioning, psychological stress, and doesn't address the underlying biomechanical issues that caused plantar fasciitis in competitive athletes.</p>
      </div>

      <h2>Why Complete Rest Backfires for Athletes</h2>
      <h3>1. Deconditioning Cascade</h3>
      <p>When competitive athletes stop training completely, they experience rapid deconditioning affecting cardiovascular, musculoskeletal, and neuromuscular systems within days to weeks.</p>

      <h3>2. Psychological Burden</h3>
      <p>Research shows that athletes forced into complete rest experience increased anxiety and depression scores within 2 weeks, along with loss of athletic identity and self-efficacy.</p>

      <h3>3. Biomechanical Deterioration</h3>
      <p>Plantar fasciitis in athletes is rarely just about the plantar fascia—it's typically a symptom of broader biomechanical dysfunction that complete rest doesn't address.</p>

      <h2>Evidence-Based Reality: What Actually Works for Athletes</h2>
      <p>Recent research consistently shows that graduated, progressive loading protocols produce better outcomes for athletic populations than complete rest approaches.</p>
    `,
    canonicalUrl: 'https://staging.bracecraft.com/plantar-fasciitis/race-training/why-standard-advice-fails/'
  },
  {
    path: 'plantar-fasciitis/race-training/know-what-youre-dealing-with/index.html',
    title: 'Know What You\'re Dealing With - Chapter 2 | BraceCraft',
    description: 'Complete athletic assessment for plantar fasciitis. Learn evidence-based diagnostic tools and evaluation methods designed specifically for competitive athletes.',
    content: `
      <h1>Chapter 2: Know What You're Dealing With</h1>
      <div class="meta">By Dr. Lance Kyle | 15 min read | Updated June 18, 2025</div>

      <p>Before you can effectively treat plantar fasciitis as a competitive athlete, you need to understand exactly what you're dealing with. This chapter provides comprehensive assessment tools designed specifically for athletic populations.</p>

      <h2>Athletic Plantar Fasciitis: Beyond Basic Diagnosis</h2>
      <p>Athletic plantar fasciitis is rarely just about the plantar fascia. It's typically part of a broader kinetic chain dysfunction that requires comprehensive assessment to address effectively.</p>

      <div class="faq">
        <h3>How do I know if my heel pain is actually plantar fasciitis?</h3>
        <p>Athletic plantar fasciitis typically presents with morning heel pain that improves with movement, pain after periods of rest, and specific tender points along the plantar fascia insertion.</p>
      </div>

      <div class="faq">
        <h3>What assessments should competitive athletes use for plantar fasciitis?</h3>
        <p>Athletes need sport-specific assessments including loading tolerance tests, biomechanical analysis, training load evaluation, and functional movement screening.</p>
      </div>

      <h2>Comprehensive Athletic Assessment Protocol</h2>
      <h3>Phase 1: Pain and Function Assessment</h3>
      <p>The Athletic Pain Scale (APS) rates pain scenarios from 0-10 across different training intensities and timeframes specific to competitive athletes.</p>

      <h3>Phase 2: Biomechanical Assessment</h3>
      <p>Single leg loading tests assess plantar fascia tolerance to athletic loading patterns, including calf raise tolerance, hop testing, and windlass mechanism assessment.</p>

      <h3>Phase 3: Training Load Analysis</h3>
      <p>Systematic evaluation of recent training load changes, including volume increases, intensity modifications, surface changes, and equipment variations.</p>

      <h2>Creating Your Athletic Profile</h2>
      <p>Based on assessment results, athletes fall into specific plantar fasciitis profiles that guide targeted treatment approaches in subsequent chapters.</p>
    `,
    canonicalUrl: 'https://staging.bracecraft.com/plantar-fasciitis/race-training/know-what-youre-dealing-with/'
  },
  {
    path: 'plantar-fasciitis/race-training/race-distance-modifications/index.html',
    title: 'Race Distance Training Modifications - Chapter 3 | BraceCraft',
    description: 'Distance-specific training modifications for plantar fasciitis. From 5K to ultra-marathon, learn how to adapt your training for each race distance while managing heel pain.',
    content: `
      <h1>Chapter 3: Race Distance Training Modifications</h1>
      <div class="meta">By Dr. Lance Kyle | 18 min read | Updated June 18, 2025</div>

      <p>Your race distance determines everything about your training approach—and this becomes even more critical when managing plantar fasciitis. This chapter provides distance-specific modifications that maintain race readiness while promoting healing.</p>

      <h2>Understanding Distance-Specific Demands</h2>
      <p>Different race distances place unique stresses on the plantar fascia. Effective training modifications must account for these specific demands while maintaining the physiological adaptations needed for race performance.</p>

      <div class="faq">
        <h3>How should I modify marathon training with plantar fasciitis?</h3>
        <p>Marathon training with plantar fasciitis requires reducing weekly volume by 15-20%, incorporating more cross-training, and modifying long run progression to manage tissue loading.</p>
      </div>

      <div class="faq">
        <h3>Can I still train for a 5K with plantar fasciitis?</h3>
        <p>Yes, 5K training is often manageable with plantar fasciitis. Focus on reducing training volume, emphasizing quality over quantity, and incorporating proper warm-up protocols.</p>
      </div>

      <h2>5K Training Modifications</h2>
      <p>5K training is often the most manageable distance for athletes with plantar fasciitis. The lower weekly volume and emphasis on quality over quantity align well with tissue healing requirements.</p>

      <h2>Half Marathon Training Modifications</h2>
      <p>Half marathon training presents unique challenges, requiring careful progression management due to the combination of moderate volume and sustained pace demands.</p>

      <h2>Marathon Training Modifications</h2>
      <p>Marathon training with active plantar fasciitis is challenging but not impossible. Success requires significant program modifications and careful monitoring of tissue response.</p>

      <h2>Ultra-Marathon Considerations</h2>
      <p>Ultra-marathon training with plantar fasciitis requires a fundamentally different approach, emphasizing time-on-feet demands over traditional volume-based training.</p>
    `,
    canonicalUrl: 'https://staging.bracecraft.com/plantar-fasciitis/race-training/race-distance-modifications/'
  }
];

// Create directory structure and generate HTML files
pages.forEach(page => {
  const filePath = path.join(outputDir, page.path);
  const dir = path.dirname(filePath);
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  const html = createHTML(page.title, page.description, page.content, page.canonicalUrl);
  fs.writeFileSync(filePath, html);
  console.log(`Generated: ${page.path}`);
});

console.log('Static site generation completed successfully!');