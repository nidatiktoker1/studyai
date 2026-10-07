import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import SchoolIcon from '@mui/icons-material/School'

const footerLinks = [
  { label: 'FAQ', path: '/faq' },
  { label: 'Write for Us', path: '/contact' },
]

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'rgba(108,99,255,0.15)',
        mt: 10,
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <SchoolIcon sx={{ color: 'primary.main', fontSize: 28 }} />
              <Typography variant="h5" sx={{ fontWeight: 800 }}>
                Study<span style={{ color: '#6C63FF' }}>AI</span>
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Free guides on study techniques that research actually supports
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Helping students and professionals learn smarter worldwide
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 700 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {footerLinks.map((link) => (
                <Typography
                  key={link.path}
                  component={Link}
                  to={link.path}
                  color="text.secondary"
                  sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' }, fontSize: '0.9rem' }}
                >
                  {link.label}
                </Typography>
              ))}
              <Typography component="a" href="/blog/" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' }, fontSize: '0.9rem' }}>
                Study Guides (Blog)
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 700 }}>
              Popular Guides
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {[
                { label: 'Active Recall', href: '/blog/active-recall/' },
                { label: 'Spaced Repetition', href: '/blog/spaced-repetition/' },
                { label: 'How to Make Flashcards', href: '/blog/how-to-make-flashcards/' },
                { label: 'Feynman Technique', href: '/blog/feynman-technique/' },
                { label: 'Cornell Notes', href: '/blog/cornell-notes/' },
              ].map((g) => (
                <Typography key={g.href} component="a" href={g.href} color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' }, fontSize: '0.9rem' }}>
                  {g.label}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 5, pt: 3, borderTop: '1px solid', borderColor: 'rgba(255,255,255,0.06)' }}>
          <Typography variant="body2" color="text.secondary" align="center">
            © 2026 StudyAI. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
