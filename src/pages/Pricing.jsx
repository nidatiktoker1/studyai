import { motion } from 'framer-motion'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableHead'
import Paper from '@mui/material/Paper'
import { services, bundles, buildWhatsAppLink, PAYONEER_LINK } from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

const paySteps = [
  'Choose your service',
  'Click Order Now',
  'Pay via Payoneer',
  'Receive in 24 hours',
]

export default function Pricing() {
  return (
    <Box>
      <Box sx={{ textAlign: 'center', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ mb: 2, fontSize: { xs: '2.2rem', md: '3rem' } }}>
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </Typography>
          <Typography variant="h6" color="text.secondary">
            No hidden fees. Pay once, receive your materials in 24 hours.
          </Typography>
        </Container>
      </Box>

      {/* INDIVIDUAL SERVICES TABLE */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 700 }}>Individual Services</Typography>
        <TableContainer component={Paper} sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'rgba(108,99,255,0.15)' }}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: 'rgba(108,99,255,0.1)' }}>
                <TableCell sx={{ fontWeight: 700, color: 'primary.main' }}>Service</TableCell>
                <TableCell sx={{ fontWeight: 700, color: 'primary.main' }}>Description</TableCell>
                <TableCell align="right" sx={{ fontWeight: 700, color: 'primary.main' }}>Price</TableCell>
                <TableCell align="right" sx={{ fontWeight: 700, color: 'primary.main' }}>Order</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {services.map((s) => (
                <TableRow key={s.id} sx={{ '&:hover': { bgcolor: 'rgba(108,99,255,0.05)' } }}>
                  <TableCell sx={{ fontWeight: 600 }}>{s.emoji} {s.name}</TableCell>
                  <TableCell color="text.secondary">{s.description.split('.')[0]}.</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 700, color: 'secondary.main' }}>${s.price}</TableCell>
                  <TableCell align="right">
                    <Button
                      size="small"
                      variant="outlined"
                      color="secondary"
                      href={buildWhatsAppLink(`Hi! I want to order ${s.name} from StudyAI. My content: [link]. Please send payment details.`)}
                      target="_blank"
                      rel="noopener"
                    >
                      Order
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      {/* BUNDLES */}
      <Box sx={{ bgcolor: 'background.paper', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 700 }}>Bundle Pricing</Typography>
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

      {/* PAYMENT */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography variant="h4" align="center" sx={{ mb: 2, fontWeight: 700 }}>How to Pay</Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
          We accept Payoneer for fast, secure international payments
        </Typography>
        <Grid container spacing={2} sx={{ maxWidth: 800, mx: 'auto' }}>
          {paySteps.map((step, i) => (
            <Grid item xs={6} md={3} key={step}>
              <Card sx={{ p: 3, textAlign: 'center', height: '100%', border: '1px solid', borderColor: 'rgba(108,99,255,0.15)' }}>
                <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 900, opacity: 0.4, mb: 1 }}>{i + 1}</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>{step}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button variant="outlined" color="primary" href={PAYONEER_LINK} target="_blank" rel="noopener">
            Payoneer Payment Portal
          </Button>
        </Box>
      </Container>

      {/* GUARANTEE */}
      <Box sx={{ bgcolor: 'background.paper', py: { xs: 6, md: 8 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography sx={{ fontSize: '3rem', mb: 1 }}>🛡️</Typography>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>100% Satisfaction Guarantee</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>
            If you are not happy with your study materials we will redo them for free — no questions asked
          </Typography>
        </Container>
      </Box>

      {/* ORDER CTA */}
      <Box sx={{ py: { xs: 8, md: 10 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ mb: 4, fontWeight: 800 }}>Ready to Order?</Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href={buildWhatsAppLink('Hi! I want to order study materials from StudyAI. Service: [service name]. My content: [link]. Please send payment details.')}
            target="_blank"
            rel="noopener"
            sx={{ fontSize: '1.1rem', py: 2, px: 5 }}
          >
            Order Now via WhatsApp
          </Button>
        </Container>
      </Box>
    </Box>
  )
}
