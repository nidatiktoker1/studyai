import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { services, buildWhatsAppLink } from '../data'

const stats = ['500+ Projects Delivered', '24hr Turnaround', '10 Output Formats', '100% Satisfaction']

const howItWorks = [
  { num: '01', title: 'Send Us Your Content', desc: 'YouTube link, PDF file, podcast URL or article' },
  { num: '02', title: 'We Process & Create', desc: 'We generate your chosen study materials within 24 hours' },
  { num: '03', title: 'Receive & Study', desc: 'Get professional PDF deliverables directly to your email' },
]

const whyChoose = [
  { emoji: '⚡', title: '24 Hour Delivery', desc: 'Fast turnaround on every order' },
  { emoji: '💰', title: 'Affordable Pricing', desc: 'Starting at just $49 per project' },
  { emoji: '🎯', title: '10 Output Formats', desc: 'More formats than any competitor' },
  { emoji: '🌍', title: 'Any Content Type', desc: 'YouTube, PDF, podcast, article, course' },
]

const demoPreviews = [
  { title: 'YouTube Video → 50 Flashcards', source: 'Stanford Lecture', output: '50 Q&A flashcards' },
  { title: 'Article → Mind Map', source: 'HubSpot Guide', output: 'Visual mind map' },
  { title: 'Course → Study Guide', source: 'Python Course', output: '8-page study guide' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export default function Home() {
  return (
    <Box>
      {/* HERO */}
      <Box className="hero-gradient" sx={{ position: 'relative', overflow: 'hidden', py: { xs: 8, md: 14 } }}>
        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(108,99,255,0.25) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '10%',
            right: '5%',
            width: 350,
            height: 350,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,107,107,0.2) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6 }}>
            <Typography variant="h1" align="center" sx={{ maxWidth: 900, mx: 'auto', mb: 3, fontSize: { xs: '2.5rem', md: '3.75rem' } }}>
              Turn Any Video or PDF Into <span className="gradient-text">Powerful Study Materials</span>
            </Typography>
          </motion.div>
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
            <Typography variant="h5" align="center" color="text.secondary" sx={{ maxWidth: 750, mx: 'auto', mb: 5, fontWeight: 400, fontSize: { xs: '1.1rem', md: '1.35rem' } }}>
              We convert your YouTube courses, PDFs, podcasts and articles into flashcards, mind maps, quizzes, audio summaries and more — delivered in 24 hours
            </Typography>
          </motion.div>
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6, delay: 0.3 }}>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 6 }}>
              <Button variant="contained" color="primary" size="large" component={Link} to="/demos" endIcon={<ArrowForwardIcon />}>
                See Demo Examples
              </Button>
              <Button variant="contained" color="secondary" size="large" component={Link} to="/pricing">
                Order Now — Starting $49
              </Button>
            </Box>
          </motion.div>

          {/* Flow Diagram */}
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6, delay: 0.45 }}>
            <Card sx={{ bgcolor: 'background.paper', p: { xs: 2, md: 4 }, maxWidth: 900, mx: 'auto' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
                <Box sx={{ textAlign: 'center' }}>
                  {['YouTube', 'PDF', 'Podcast'].map((s) => (
                    <Box key={s} sx={{ bgcolor: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.3)', borderRadius: 2, px: 2, py: 1, mb: 1, fontSize: '0.85rem', fontWeight: 600 }}>
                      {s}
                    </Box>
                  ))}
                </Box>
                <ArrowForwardIcon sx={{ color: 'primary.main' }} />
                <Box sx={{ textAlign: 'center', px: 3, py: 2, bgcolor: 'primary.main', borderRadius: 3, color: 'white', fontWeight: 800, fontSize: '1.1rem' }}>
                  StudyAI
                </Box>
                <ArrowForwardIcon sx={{ color: 'primary.main' }} />
                <Box sx={{ textAlign: 'center' }}>
                  {['Flashcards', 'Mind Map', 'Quiz', 'Audio'].map((s) => (
                    <Box key={s} sx={{ bgcolor: 'rgba(76,175,80,0.1)', border: '1px solid rgba(76,175,80,0.3)', borderRadius: 2, px: 2, py: 1, mb: 1, fontSize: '0.85rem', fontWeight: 600, color: 'secondary.main' }}>
                      {s}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Card>
          </motion.div>
        </Container>
      </Box>

      {/* STATS BAR */}
      <Box sx={{ bgcolor: 'primary.main', py: 3 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: { xs: 2, md: 5 } }}>
            {stats.map((stat) => (
              <Typography key={stat} sx={{ color: 'white', fontWeight: 700, fontSize: { xs: '0.85rem', md: '1rem' } }}>
                {stat}
              </Typography>
            ))}
          </Box>
        </Container>
      </Box>

      {/* HOW IT WORKS */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography variant="h2" align="center" sx={{ mb: 2 }}>How It Works — 3 Simple Steps</Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>From content to study materials in 24 hours</Typography>
        <Grid container spacing={4}>
          {howItWorks.map((step, i) => (
            <Grid item xs={12} md={4} key={step.num}>
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.15 }}>
                <Card sx={{ height: '100%', p: 4, textAlign: 'center', border: '1px solid', borderColor: 'rgba(108,99,255,0.15)' }}>
                  <Typography variant="h2" sx={{ color: 'primary.main', fontWeight: 900, mb: 2, opacity: 0.5 }}>{step.num}</Typography>
                  <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>{step.title}</Typography>
                  <Typography color="text.secondary">{step.desc}</Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* SERVICES PREVIEW */}
      <Box sx={{ bgcolor: 'background.paper', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" sx={{ mb: 2 }}>10 Ways We Transform Your Content</Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>Choose any format or combine multiple for maximum impact</Typography>
          <Grid container spacing={2}>
            {services.map((s, i) => (
              <Grid item xs={6} md={2.4} key={s.id} sx={{ flexBasis: { xs: '50%', sm: '33.33%', md: '20%' } }}>
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: (i % 5) * 0.1 }}>
                  <Card sx={{ height: '100%', p: 2.5, textAlign: 'center', border: '1px solid', borderColor: 'rgba(108,99,255,0.1)', '&:hover': { borderColor: 'primary.main', transform: 'translateY(-4px)' }, transition: 'all 0.3s' }}>
                    <Typography sx={{ fontSize: '2rem', mb: 1 }}>{s.emoji}</Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>{s.name}</Typography>
                    <Typography variant="caption" color="text.secondary">{s.description.split('.')[0]}.</Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button variant="outlined" color="primary" component={Link} to="/services" endIcon={<ArrowForwardIcon />}>
              View All Services
            </Button>
          </Box>
        </Container>
      </Box>

      {/* WHY CHOOSE US */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography variant="h2" align="center" sx={{ mb: 2 }}>Why Thousands Choose StudyAI</Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>The fastest, most affordable study material service</Typography>
        <Grid container spacing={4}>
          {whyChoose.map((item, i) => (
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

      {/* DEMO PREVIEW */}
      <Box sx={{ bgcolor: 'background.paper', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" sx={{ mb: 2 }}>See Real Examples of Our Work</Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>Every demo was created from real content</Typography>
          <Grid container spacing={4}>
            {demoPreviews.map((demo, i) => (
              <Grid item xs={12} md={4} key={demo.title}>
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.15 }}>
                  <Card sx={{ height: '100%', p: 3, border: '1px solid', borderColor: 'rgba(108,99,255,0.15)' }}>
                    <Box sx={{ bgcolor: 'rgba(108,99,255,0.1)', borderRadius: 2, p: 2, mb: 2, textAlign: 'center' }}>
                      <Typography variant="caption" color="text.secondary">BEFORE</Typography>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>{demo.source}</Typography>
                    </Box>
                    <Typography align="center" sx={{ mb: 1 }}>↓</Typography>
                    <Box sx={{ bgcolor: 'rgba(76,175,80,0.1)', borderRadius: 2, p: 2, textAlign: 'center' }}>
                      <Typography variant="caption" color="secondary.main">AFTER</Typography>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>{demo.output}</Typography>
                    </Box>
                    <Typography variant="h6" align="center" sx={{ mt: 2, fontWeight: 700, fontSize: '1rem' }}>{demo.title}</Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button variant="contained" color="primary" size="large" component={Link} to="/demos" endIcon={<ArrowForwardIcon />}>
              See All 10 Demo Examples
            </Button>
          </Box>
        </Container>
      </Box>

      {/* AEO SECTION */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Typography variant="h4" align="center" sx={{ mb: 4 }}>Frequently Asked</Typography>
        <Grid container spacing={2}>
          {[
            { q: 'What is StudyAI?', a: 'A professional service that converts YouTube videos, PDFs and articles into study materials' },
            { q: 'How much does flashcard creation cost?', a: 'Starting at $49 per project' },
            { q: 'How long to convert YouTube to flashcards?', a: 'Delivered within 24 hours' },
            { q: 'What formats does StudyAI support?', a: '10 formats including flashcards, mind maps, quizzes, audio, video, slides, infographics, briefing docs, study guides and data tables' },
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

      {/* CTA */}
      <Box sx={{ bgcolor: 'background.paper', py: { xs: 8, md: 12 }, borderTop: '1px solid', borderColor: 'rgba(108,99,255,0.15)' }}>
        <Container maxWidth="md">
          <Typography variant="h2" align="center" sx={{ mb: 2 }}>Ready to Transform Your Learning?</Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 5 }}>
            Join students, educators and professionals who save hours every week
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Button variant="contained" color="secondary" size="large" href={buildWhatsAppLink('Hi! I want to order study materials from StudyAI.')} target="_blank" rel="noopener">
              Get Started — Order Now
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
