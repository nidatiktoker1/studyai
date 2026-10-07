import { motion } from 'framer-motion'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const guides = [
  { slug: 'active-recall', tag: 'Study Techniques', title: 'Active Recall: The Study Technique That Actually Works', desc: 'Why testing yourself beats re-reading, five recall methods, and a 30-minute session plan.' },
  { slug: 'spaced-repetition', tag: 'Study Techniques', title: 'Spaced Repetition: Review Less, Remember More', desc: 'The review schedule that defeats the forgetting curve: 1 day, 3 days, 1 week, 2 weeks, 1 month.' },
  { slug: 'how-to-make-flashcards', tag: 'Flashcards', title: 'How to Make Flashcards That Actually Work', desc: 'Ten rules for cards that test real recall — one idea per card, question-first design, honest grading.' },
  { slug: 'feynman-technique', tag: 'Study Techniques', title: 'The Feynman Technique: Learn Anything in 4 Steps', desc: 'Teach it simply or you do not know it: the four steps, a worked example, and when to use it.' },
  { slug: 'cornell-notes', tag: 'Note-Taking', title: 'Cornell Notes: The Method Explained', desc: 'The page layout that turns your notes into a self-test, the 5 Rs, and a worked example.' },
]

const principles = [
  { emoji: '🧠', title: 'Test, Don’t Re-Read', desc: 'Retrieving answers from memory builds exam-ready knowledge. Recognition is not recall.' },
  { emoji: '📅', title: 'Space Your Reviews', desc: 'Short reviews at expanding intervals beat one long cramming session, every time.' },
  { emoji: '🗣️', title: 'Explain It Simply', desc: 'If you can teach a concept in plain words, you understand it. If you can’t, you’ve found the gap.' },
  { emoji: '📝', title: 'Notes That Quiz You', desc: 'Note formats like Cornell turn revision into self-testing instead of passive scanning.' },
]

const stats = ['Science-Backed Methods', 'Free Study Guides', 'No Sign-Up Needed', 'New Guides Monthly']
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }

export default function Home() {
  return (
    <Box>
      <Box className="hero-gradient" sx={{ position: 'relative', overflow: 'hidden', py: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6 }}>
            <Typography variant="h1" align="center" sx={{ maxWidth: 900, mx: 'auto', mb: 3, fontSize: { xs: '2.5rem', md: '3.75rem' } }}>
              Study Smarter, <span className="gradient-text">Not Longer</span>
            </Typography>
          </motion.div>
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
            <Typography variant="h5" align="center" color="text.secondary" sx={{ maxWidth: 750, mx: 'auto', mb: 5, fontWeight: 400, fontSize: { xs: '1.1rem', md: '1.35rem' } }}>
              Free guides on the study techniques research actually supports — active recall, spaced repetition, the Feynman technique, Cornell notes and flashcards that work.
            </Typography>
          </motion.div>
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6, delay: 0.3 }}>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 2 }}>
              <Button variant="contained" color="primary" size="large" component="a" href="/blog/" endIcon={<ArrowForwardIcon />}>
                Read the Study Guides
              </Button>
              <Button variant="outlined" color="primary" size="large" component="a" href="/blog/active-recall/">
                Start With Active Recall
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      <Box sx={{ bgcolor: 'primary.main', py: 3 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: { xs: 2, md: 5 } }}>
            {stats.map((stat) => (
              <Typography key={stat} sx={{ color: 'white', fontWeight: 700, fontSize: { xs: '0.85rem', md: '1rem' } }}>{stat}</Typography>
            ))}
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography variant="h2" align="center" sx={{ mb: 2 }}>Featured Study Guides</Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>Plain-English, step-by-step — no fluff, no sign-up</Typography>
        <Grid container spacing={3}>
          {guides.map((g, i) => (
            <Grid item xs={12} md={6} key={g.slug}>
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: (i % 2) * 0.12 }} style={{ height: '100%' }}>
                <Card component="a" href={`/blog/${g.slug}/`} sx={{ display: 'block', height: '100%', p: 1, textDecoration: 'none', border: '1px solid', borderColor: 'rgba(108,99,255,0.15)', '&:hover': { borderColor: 'primary.main', transform: 'translateY(-4px)' }, transition: 'all 0.3s' }}>
                  <CardContent>
                    <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 700 }}>{g.tag.toUpperCase()}</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700, my: 1 }}>{g.title}</Typography>
                    <Typography color="text.secondary" variant="body2">{g.desc}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'background.paper', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" sx={{ mb: 2 }}>The Four Principles Behind Every Guide</Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>What decades of learning research keeps confirming</Typography>
          <Grid container spacing={4}>
            {principles.map((item, i) => (
              <Grid item xs={12} sm={6} md={3} key={item.title}>
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}>
                  <Card sx={{ height: '100%', p: 3, textAlign: 'center', border: '1px solid', borderColor: 'rgba(108,99,255,0.15)' }}>
                    <Typography sx={{ fontSize: '2.5rem', mb: 1 }}>{item.emoji}</Typography>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>{item.title}</Typography>
                    <Typography color="text.secondary" variant="body2">{item.desc}</Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Typography variant="h4" align="center" sx={{ mb: 4 }}>Quick Answers</Typography>
        <Grid container spacing={2}>
          {[
            { q: 'What is the most effective study technique?', a: 'Active recall — testing yourself instead of re-reading — combined with spaced repetition.' },
            { q: 'How do I remember what I study for longer?', a: 'Review on an expanding schedule: after 1 day, 3 days, 1 week, 2 weeks and 1 month.' },
            { q: 'Are flashcards actually effective?', a: 'Yes, when each card asks a specific question and you answer before flipping. Design matters more than quantity.' },
            { q: 'What note-taking method is best for revision?', a: 'Cornell notes, because the cue column turns your notes into a built-in self-test.' },
          ].map((item) => (
            <Grid item xs={12} md={6} key={item.q}>
              <Card sx={{ p: 2.5, border: '1px solid', borderColor: 'rgba(108,99,255,0.1)' }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>{item.q}</Typography>
                <Typography variant="body2" color="text.secondary">{item.a}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'background.paper', py: { xs: 8, md: 12 }, borderTop: '1px solid', borderColor: 'rgba(108,99,255,0.15)' }}>
        <Container maxWidth="md">
          <Typography variant="h2" align="center" sx={{ mb: 2 }}>Your Next Study Session Can Be Different</Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 5 }}>
            Pick one technique, try it for a week, and compare how much you still remember.
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Button variant="contained" color="secondary" size="large" component="a" href="/blog/" endIcon={<ArrowForwardIcon />}>
              Browse All Guides
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
