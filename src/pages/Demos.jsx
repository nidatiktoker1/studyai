import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import { demos, buildWhatsAppLink } from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export default function Demos() {
  return (
    <Box>
      <Box sx={{ textAlign: 'center', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ mb: 2, fontSize: { xs: '2.2rem', md: '3rem' } }}>
            Real Examples of <span className="gradient-text">Our Work</span>
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Every demo below was created from a real YouTube video or article — exactly what you will receive
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={4}>
          {demos.map((demo, i) => (
            <Grid item xs={12} md={6} key={demo.title}>
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: (i % 2) * 0.1 }}>
                <Card sx={{ height: '100%', p: 4, border: '1px solid', borderColor: 'rgba(108,99,255,0.15)' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Box sx={{ bgcolor: 'primary.main', color: 'white', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem' }}>
                      {i + 1}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>{demo.title}</Typography>
                  </Box>
                  <Box sx={{ bgcolor: 'rgba(108,99,255,0.08)', borderRadius: 2, p: 2, mb: 2 }}>
                    <Typography variant="overline" color="text.secondary">SOURCE</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>{demo.source}</Typography>
                  </Box>
                  <Typography align="center" sx={{ mb: 1, color: 'primary.main' }}>↓</Typography>
                  <Box sx={{ bgcolor: 'rgba(76,175,80,0.08)', borderRadius: 2, p: 2, mb: 2 }}>
                    <Typography variant="overline" color="secondary.main">OUTPUT</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>{demo.output}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, bgcolor: 'rgba(255,107,107,0.1)', borderRadius: 2, p: 1.5 }}>
                    <Typography variant="caption" sx={{ color: 'error.main', fontWeight: 700 }}>★ THIS IS WHAT YOU RECEIVE</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 2, fontStyle: 'italic' }}>
                    {demo.highlight}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA */}
      <Box sx={{ bgcolor: 'background.paper', py: { xs: 8, md: 12 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ mb: 2, fontWeight: 800 }}>Impressed? Order Your Custom Study Materials Today</Typography>
          <Button variant="contained" color="secondary" size="large" component={Link} to="/pricing" sx={{ mt: 2 }}>
            Order Now
          </Button>
        </Container>
      </Box>
    </Box>
  )
}
