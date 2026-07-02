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
