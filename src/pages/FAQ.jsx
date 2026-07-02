import { useState } from 'react'
import { motion } from 'framer-motion'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { faqs, buildWhatsAppLink } from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function FAQ() {
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Box>
      <Box sx={{ textAlign: 'center', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ mb: 2, fontSize: { xs: '2.2rem', md: '3rem' } }}>
            Frequently Asked <span className="gradient-text">Questions</span>
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Everything you need to know about our study material service
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
        {faqs.map((faq, i) => (
          <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: (i % 10) * 0.05 }}>
            <Accordion
              expanded={expanded === `panel${i}`}
              onChange={handleChange(`panel${i}`)}
              sx={{
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'rgba(108,99,255,0.15)',
                mb: 1.5,
                '&:before': { display: 'none' },
                '&.Mui-expanded': { borderColor: 'primary.main' },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}>
                <Typography sx={{ fontWeight: 600, fontSize: '1.05rem' }}>{faq.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">{faq.a}</Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </Container>

      <Box sx={{ bgcolor: 'background.paper', py: { xs: 6, md: 8 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>Still have questions?</Typography>
          <Typography color="text.secondary" sx={{ mb: 4 }}>Send us a message on WhatsApp and we will respond within 1 hour.</Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href={buildWhatsAppLink('Hi! I have a question about StudyAI.')}
            target="_blank"
            rel="noopener"
          >
            Contact Us on WhatsApp
          </Button>
        </Container>
      </Box>
    </Box>
  )
}
