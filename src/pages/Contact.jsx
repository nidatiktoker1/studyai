import { useState } from 'react'
import { motion } from 'framer-motion'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import InputAdornment from '@mui/material/InputAdornment'
import EmailIcon from '@mui/icons-material/Email'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { services, buildWhatsAppLink } from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export default function Contact() {
  const [content, setContent] = useState('')
  const [service, setService] = useState('')
  const [instructions, setInstructions] = useState('')

  const buildMessage = () => {
    const msg = `Hi! I want to order study materials from StudyAI.\nService: ${service || '[choose service]'}\nMy content: ${content || '[link]'}\nSpecial instructions: ${instructions || 'none'}\nPlease send payment details.`
    return buildWhatsAppLink(msg)
  }

  return (
    <Box>
      <Box sx={{ textAlign: 'center', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ mb: 2, fontSize: { xs: '2.2rem', md: '3rem' } }}>
            Order Your <span className="gradient-text">Study Materials</span>
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Fill in the details below and we will get back to you within 1 hour
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
        <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.5 }}>
          <Card sx={{ p: { xs: 3, md: 5 }, border: '1px solid', borderColor: 'rgba(108,99,255,0.15)' }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700 }}>What is your content?</Typography>
              <TextField
                fullWidth
                placeholder="YouTube link / PDF / Article URL"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                variant="outlined"
              />
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700 }}>What format do you want?</Typography>
              <TextField
                select
                fullWidth
                value={service}
                onChange={(e) => setService(e.target.value)}
                variant="outlined"
                placeholder="Choose a service"
              >
                <MenuItem value="" disabled>Select a service</MenuItem>
                {services.map((s) => (
                  <MenuItem key={s.id} value={s.name}>
                    {s.emoji} {s.name} — ${s.price}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box sx={{ mb: 4 }}>
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700 }}>Any special instructions?</Typography>
              <TextField
                fullWidth
                multiline
                rows={3}
                placeholder="Tell us any specific requirements..."
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                variant="outlined"
              />
            </Box>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              fullWidth
              href={buildMessage()}
              target="_blank"
              rel="noopener"
              startIcon={<WhatsAppIcon />}
              sx={{ py: 1.5, fontSize: '1.05rem' }}
            >
              Send Order via WhatsApp →
            </Button>
          </Card>
        </motion.div>
      </Container>

      {/* INFO CARDS */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ p: 3, textAlign: 'center', height: '100%', border: '1px solid', borderColor: 'rgba(108,99,255,0.15)' }}>
              <Typography sx={{ fontSize: '2rem', mb: 1 }}>⏱️</Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>Response Time</Typography>
              <Typography variant="body2" color="text.secondary">Within 1 hour</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ p: 3, textAlign: 'center', height: '100%', border: '1px solid', borderColor: 'rgba(108,99,255,0.15)' }}>
              <Typography sx={{ fontSize: '2rem', mb: 1 }}>📦</Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>Delivery Time</Typography>
              <Typography variant="body2" color="text.secondary">Within 24 hours</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ p: 3, textAlign: 'center', height: '100%', border: '1px solid', borderColor: 'rgba(108,99,255,0.15)' }}>
              <Typography sx={{ fontSize: '2rem', mb: 1 }}>💳</Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>Payment</Typography>
              <Typography variant="body2" color="text.secondary">Via Payoneer after confirmation</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ p: 3, textAlign: 'center', height: '100%', border: '1px solid', borderColor: 'rgba(108,99,255,0.15)' }}>
              <EmailIcon sx={{ fontSize: '2rem', mb: 1, color: 'primary.main' }} />
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>Email</Typography>
              <Typography variant="body2" color="text.secondary">hello@studyai.com</Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
