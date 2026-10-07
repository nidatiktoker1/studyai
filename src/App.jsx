import { useEffect } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}


const SITE = 'https://studyai10.vercel.app'
const SEO = {
  '/': { title: 'StudyAI — Study Smarter: Active Recall, Spaced Repetition, Flashcards & Note-Taking Guides', description: 'Free science-backed study guides: active recall, spaced repetition, the Feynman technique, Cornell notes and how to make flashcards that actually work.' },
  '/faq': { title: 'FAQ — Study Techniques, Flashcards & Note-Taking | StudyAI', description: 'Answers on active recall, spaced repetition, flashcard design, the Feynman technique and Cornell notes, plus what StudyAI publishes now.' },
  '/contact': { title: 'Write for Us & Contact — StudyAI', description: 'Guest contributions on education, study skills and edtech, plus how to contact the StudyAI editorial team.' },
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
          <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
