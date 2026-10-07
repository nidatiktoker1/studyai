import { motion } from 'framer-motion'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const topics = [
  'Study techniques and exam preparation (active recall, spaced repetition, revision strategies)',
  'Note-taking methods and student productivity',
  'AI tools for students and teachers — honest reviews and workflows',
  'Online learning, courses and edtech platforms',
  'Flashcards, quizzes and learning apps',
  'Student life skills: focus, memory, time management',
]

const rules = [
  'Original and unpublished — no spun or AI-mass-produced content',
  '1,200+ words with real examples, steps or data, not generic advice',
  'Written for students and teachers first; promotional content is not accepted',
  'A maximum of one contextual link to a genuinely relevant resource',
]

export default function Contact() {
  return (
    <Box>
      <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 } }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Typography variant="h1" align="center" sx={{ mb: 2, fontSize: { xs: '2.2rem', md: '3rem' } }}>
            Write for <span className="gradient-text">StudyAI</span>
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6, fontWeight: 400 }}>
            StudyAI is now a free study-guides publication. We are preparing a guest contributor programme for writers who know learning, teaching and edtech from the inside.
          </Typography>
        </motion.div>

        <Card sx={{ p: { xs: 3, md: 4 }, mb: 4, border: '1px solid', borderColor: 'rgba(108,99,255,0.15)' }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>Topics we will cover</Typography>
          {topics.map((t) => (
            <Typography key={t} color="text.secondary" sx={{ mb: 1 }}>• {t}</Typography>
          ))}
        </Card>

        <Card sx={{ p: { xs: 3, md: 4 }, mb: 4, border: '1px solid', borderColor: 'rgba(108,99,255,0.15)' }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>Contributor guidelines</Typography>
          {rules.map((t) => (
            <Typography key={t} color="text.secondary" sx={{ mb: 1 }}>• {t}</Typography>
          ))}
          <Typography color="text.secondary" sx={{ mt: 3 }}>
            The contributor programme opens shortly. Until then, the best way to see the standard we publish at is to read our guides.
          </Typography>
        </Card>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button variant="contained" color="primary" size="large" component="a" href="/blog/" endIcon={<ArrowForwardIcon />}>
            Read the Study Guides
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
