import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Demos from './pages/Demos'
import Pricing from './pages/Pricing'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}


const SITE = 'https://studyai10.vercel.app'
const SEO = {
  '/': { title: 'StudyAI — Convert YouTube Videos & PDFs Into Flashcards, Mind Maps & Study Materials', description: 'Turn any YouTube video, PDF, podcast or article into flashcards, mind maps, quizzes, audio summaries and study guides in 24 hours. Starting at $49.' },
  '/services': { title: 'Services — Flashcards, Mind Maps, Quizzes & More | StudyAI', description: '10 study material formats from your YouTube videos, PDFs and articles: flashcard decks, mind maps, study guides, quizzes, audio summaries, slides and infographics.' },
  '/demos': { title: 'Demos — See Study Materials Made From Real Content | StudyAI', description: 'Real examples: YouTube lectures turned into 50 flashcards, articles into mind maps, courses into full study guides with quizzes and glossaries.' },
  '/pricing': { title: 'Pricing — Study Material Creation From $49 | StudyAI', description: 'Simple pricing: single formats from $49, Starter Pack $99, Creator Pack $149, Complete Pack $199. All 10 formats from one source, delivered in 24 hours.' },
  '/faq': { title: 'FAQ — How StudyAI Works, Delivery & Payment | StudyAI', description: 'How long delivery takes, what file formats you receive, how to send your content and how to pay for StudyAI study material creation.' },
  '/contact': { title: 'Contact & Order — StudyAI', description: 'Send your YouTube link, PDF or article and get flashcards, mind maps, quizzes or a study guide within 24 hours. Order StudyAI on WhatsApp.' },
}
function useSeo(pathname) {
  useEffect(() => {
    const s = SEO[pathname] || SEO['/']
    document.title = s.title
    const setMeta = (name, content) => { let el = document.querySelector(`meta[name="${name}"]`); if (!el) { el = document.createElement('meta'); el.setAttribute('name', name); document.head.appendChild(el) } el.setAttribute('content', content) }
    setMeta('description', s.description)
    let link = document.querySelector('link[rel="canonical"]'); if (!link) { link = document.createElement('link'); link.setAttribute('rel', 'canonical'); document.head.appendChild(link) }
    link.setAttribute('href', SITE + (pathname === '/' ? '/' : pathname))
  }, [pathname])
}

function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()
  useSeo(location.pathname)
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="/demos" element={<PageWrapper><Demos /></PageWrapper>} />
          <Route path="/pricing" element={<PageWrapper><Pricing /></PageWrapper>} />
          <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
