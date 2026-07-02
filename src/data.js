export const WHATSAPP_NUMBER = '1234567890';
export const PAYONEER_LINK = 'https://payoneer.com/pay/studyai';

export const services = [
  {
    id: 'flashcards',
    name: 'Flashcard Decks',
    emoji: '📚',
    price: 49,
    description: 'Convert any YouTube video, PDF or article into 50-100 interactive flashcards perfect for memorization and exam preparation.',
    whatYouGet: ['50-100 Q&A flashcards', 'Organized by topic', 'CSV + PDF format', 'Answer key included'],
    bestFor: 'Students, exam preparation, language learning, professional certifications',
  },
  {
    id: 'mindmap',
    name: 'Mind Maps',
    emoji: '🗺️',
    price: 49,
    description: 'Transform complex content into a beautiful visual mind map that shows connections between ideas at a glance.',
    whatYouGet: ['High resolution mind map PNG', 'Color coded branches', 'All key concepts included', 'Zoom-ready quality'],
    bestFor: 'Visual learners, project planning, content creators, researchers',
  },
  {
    id: 'studyguide',
    name: 'Study Guides',
    emoji: '📝',
    price: 49,
    description: 'Get a comprehensive study guide with quiz questions, essay prompts, glossary of key terms and answer key.',
    whatYouGet: ['10 quiz questions with answers', '5 essay questions', 'Full glossary', 'Organized chapters'],
    bestFor: 'Students, teachers, course creators, self-learners',
  },
  {
    id: 'quiz',
    name: 'Quizzes',
    emoji: '🎯',
    price: 49,
    description: 'Test your knowledge with a professionally formatted 10-20 question quiz generated directly from your content.',
    whatYouGet: ['10-20 questions', 'Multiple choice + short answer', 'Answer key', 'PDF format'],
    bestFor: 'Teachers, trainers, students, corporate training teams',
  },
  {
    id: 'audio',
    name: 'Audio Summaries',
    emoji: '🎧',
    price: 69,
    description: 'Get a podcast-style audio overview of your content — perfect for learning on the go during commute or exercise.',
    whatYouGet: ['5-10 minute MP3 audio file', 'Professional narration', 'Key points covered', 'Downloadable file'],
    bestFor: 'Busy professionals, commuters, audiobook lovers, time-pressed students',
  },
  {
    id: 'briefing',
    name: 'Briefing Documents',
    emoji: '📋',
    price: 59,
    description: 'A concise professional briefing document summarizing key insights, data points and actionable takeaways.',
    whatYouGet: ['2-3 page PDF briefing', 'Key insights highlighted', 'Data points extracted', 'Executive summary'],
    bestFor: 'Business professionals, researchers, executives, consultants',
  },
  {
    id: 'video',
    name: 'Video Overviews',
    emoji: '🎬',
    price: 79,
    description: 'An animated video summary bringing your content to life with visuals, narration and key concept animations.',
    whatYouGet: ['3-5 minute MP4 video', 'Animated visuals', 'Professional narration', 'Downloadable file'],
    bestFor: 'Course creators, educators, content marketers, YouTube creators',
  },
  {
    id: 'slides',
    name: 'Slide Decks',
    emoji: '📊',
    price: 69,
    description: 'Professional presentation slides summarizing your content — ready to present to your audience immediately.',
    whatYouGet: ['10-15 slides', 'Professional design', 'Speaker notes included', 'PowerPoint + PDF format'],
    bestFor: 'Teachers, business presenters, course creators, conference speakers',
  },
  {
    id: 'infographic',
    name: 'Infographics',
    emoji: '📈',
    price: 59,
    description: 'A visually stunning infographic presenting your content data and key points in an eye-catching format.',
    whatYouGet: ['High resolution PNG infographic', 'Color coded sections', 'Shareable format', 'Print ready'],
    bestFor: 'Content marketers, social media managers, educators, bloggers',
  },
  {
    id: 'datatable',
    name: 'Data Tables',
    emoji: '📉',
    price: 49,
    description: 'Extract and organize all data, statistics and structured information from your content into clean tables.',
    whatYouGet: ['Organized data tables', 'CSV + PDF format', 'Categorized columns', 'Easy to filter'],
    bestFor: 'Researchers, analysts, students, data professionals',
  },
];

export const bundles = [
  {
    name: 'Starter Pack',
    price: 99,
    includes: ['Flashcards', 'Study Guide', 'Quiz'],
    savings: 48,
  },
  {
    name: 'Creator Pack',
    price: 149,
    includes: ['Mind Map', 'Slide Deck', 'Infographic'],
    savings: 58,
  },
  {
    name: 'Complete Pack',
    price: 199,
    includes: ['All 10 formats from one source'],
    savings: 290,
  },
];

export const demos = [
  {
    title: 'YouTube Video → 50 Flashcards',
    source: 'Stanford University Startup Lecture (YouTube)',
    output: '50 Q&A flashcards covering all key concepts',
    highlight: 'Delivered as CSV + PDF — import into any flashcard app',
  },
  {
    title: 'Python Tutorial → Study Guide',
    source: 'Microsoft Python Programming Course (YouTube)',
    output: 'Full study guide with 10 quiz questions, glossary, essay prompts',
    highlight: 'Comprehensive 8-page study guide PDF',
  },
  {
    title: 'Marketing Article → Mind Map',
    source: 'HubSpot Digital Marketing Guide (Website)',
    output: 'Full color visual mind map of all marketing concepts',
    highlight: 'High resolution PNG — print or use digitally',
  },
  {
    title: 'Health Article → 10-Question Quiz',
    source: 'Healthline Exercise Benefits Article',
    output: 'Professional 10-question quiz with answer key',
    highlight: 'Perfect for teachers and trainers',
  },
  {
    title: 'Business Article → Audio Summary',
    source: 'Forbes Entrepreneurship Guide',
    output: '8-minute podcast-style MP3 audio overview',
    highlight: 'Listen during commute — learn hands free',
  },
  {
    title: 'Finance Article → Briefing Document',
    source: 'Business Insider Investing Guide',
    output: '3-page professional briefing document',
    highlight: 'Executive-ready format with key insights',
  },
  {
    title: 'Diet Article → Animated Video',
    source: 'Healthline Mediterranean Diet Guide',
    output: '4-minute animated explainer video',
    highlight: 'Engaging video with narration and visuals',
  },
  {
    title: 'Business Guide → Slide Deck',
    source: 'HubSpot How to Start a Business Guide',
    output: '12-slide professional presentation',
    highlight: 'Ready to present — includes speaker notes',
  },
  {
    title: 'Crypto Article → Infographic',
    source: 'Forbes Cryptocurrency Guide',
    output: 'Visual infographic of crypto concepts',
    highlight: 'Shareable high resolution PNG',
  },
  {
    title: 'Startup Guide → Data Table',
    source: 'Entrepreneur Startup Playbook',
    output: 'Structured data table of startup requirements',
    highlight: 'Organized CSV + PDF format',
  },
];

export const faqs = [
  {
    q: 'What types of content can you process?',
    a: 'We can process YouTube videos (with captions), PDF documents, website articles, podcast transcripts, Google Docs and plain text files.',
  },
  {
    q: 'How long does delivery take?',
    a: 'All orders are delivered within 24 hours. Most orders are completed within 12 hours.',
  },
  {
    q: 'What file formats do I receive?',
    a: 'Flashcards: CSV + PDF. Mind Maps: PNG (high resolution). Study Guides: PDF. Quizzes: PDF. Audio: MP3. Videos: MP4. Slide Decks: PDF + PowerPoint. Infographics: PNG. Data Tables: CSV + PDF. Briefing Docs: PDF.',
  },
  {
    q: 'How do I send you my content?',
    a: 'Simply message us on WhatsApp with your YouTube link, PDF file or article URL. We will take it from there.',
  },
  {
    q: 'How do I pay?',
    a: 'We accept Payoneer for international payments. Payment is made after you confirm your order details.',
  },
  {
    q: 'Can you process content in languages other than English?',
    a: 'Currently we specialize in English content. Contact us for other languages.',
  },
  {
    q: 'What if I am not happy with the results?',
    a: 'We offer free revisions on every order. If you are not satisfied we will redo your materials at no extra cost.',
  },
  {
    q: 'Can I order multiple formats from the same content?',
    a: 'Yes! Our bundle packages let you get multiple formats from the same source at a discounted price.',
  },
  {
    q: 'Do you keep my content private?',
    a: 'Absolutely. Your content is processed privately and never shared with anyone.',
  },
  {
    q: 'How do I get started?',
    a: 'Click the Order Now button, send us a WhatsApp message with your content and chosen service. We will confirm and send payment details within 1 hour.',
  },
];

export function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
