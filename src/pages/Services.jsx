import { motion } from 'framer-motion'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { services, bundles, buildWhatsAppLink } from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export default function Services() {
  return (
    <Box>
      <Box sx={{ textAlign: 'center', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ mb: 2, fontSize: { xs: '2.2rem', md: '3rem' } }}>
            Our Services — Everything You Need to <span className="gradient-text">Study Smarter</span>
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Choose one or combine multiple formats for maximum learning impact
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={4}>
          {services.map((s, i) => (
            <Grid item xs={12} md={6} key={s.id}>
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: (i % 2) * 0.1 }}>
                <Card sx={{ height: '100%', p: 4, border: '1px solid', borderColor: 'rgba(108,99,255,0.15)', '&:hover': { borderColor: 'primary.main' }, transition: 'all 0.3s' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                    <Typography sx={{ fontSize: '2.5rem' }}>{s.emoji}</Typography>
                    <Typography variant="h5" sx={{ fontWeight: 700, flexGrow: 1 }}>{s.name}</Typography>
                    <Typography variant="h5" sx={{ color: 'secondary.main', fontWeight: 800 }}>${s.price}</Typography>
                  </Box>
                  <Typography color="text.secondary" sx={{ mb: 3 }}>{s.description}</Typography>
                  <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700 }}>What you get:</Typography>
                  <Box sx={{ mb: 3 }}>
                    {s.whatYouGet.map((item) => (
                      <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                        <CheckCircleIcon sx={{ color: 'secondary.main', fontSize: 18 }} />
                        <Typography variant="body2" color="text.secondary">{item}</Typography>
                      </Box>
                    ))}
                  </Box>
                  <Typography variant="subtitle2" sx={{ mb: 0.5, fontWeight: 700 }}>Best for:</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>{s.bestFor}</Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    href={buildWhatsAppLink(`Hi! I want to order ${s.name} from StudyAI. Service: ${s.name}. My content: [link]. Please send payment details.`)}
                    target="_blank"
                    rel="noopener"
                  >
                    Order Now — ${s.price}
                  </Button>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* BUNDLES */}
      <Box sx={{ bgcolor: 'background.paper', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" sx={{ mb: 2 }}>Save More With Bundles</Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>Get multiple formats from one source at a discount</Typography>
          <Grid container spacing={4}>
            {bundles.map((b, i) => (
              <Grid item xs={12} md={4} key={b.name}>
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.15 }}>
                  <Card sx={{ height: '100%', p: 4, textAlign: 'center', border: i === 2 ? '2px solid' : '1px solid', borderColor: i === 2 ? 'primary.main' : 'rgba(108,99,255,0.15)' }}>
                    {i === 2 && <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700 }}>BEST VALUE</Typography>}
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>{b.name}</Typography>
                    <Typography variant="h3" sx={{ fontWeight: 900, mb: 1, color: 'secondary.main' }}>${b.price}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>Save ${b.savings}</Typography>
                    <Box sx={{ mb: 3 }}>
                      {b.includes.map((item) => (
                        <Typography key={item} variant="body2" sx={{ mb: 0.5 }}>✓ {item}</Typography>
                      ))}
                    </Box>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      href={buildWhatsAppLink(`Hi! I want to order the ${b.name} from StudyAI. My content: [link]. Please send payment details.`)}
                      target="_blank"
                      rel="noopener"
                    >
                      Order {b.name}
                    </Button>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}
