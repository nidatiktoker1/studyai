import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import SchoolIcon from '@mui/icons-material/School'
import { buildWhatsAppLink } from '../data'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Demos', path: '/demos' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const orderMsg = 'Hi! I want to order study materials from StudyAI. Please send me the details.';

  const drawer = (
    <Box sx={{ width: 260, bgcolor: 'background.paper', height: '100%' }}>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.path} disablePadding>
            <ListItemButton component={Link} to={link.path}>
              <ListItemText primary={link.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton component="a" href={buildWhatsAppLink(orderMsg)} target="_blank" rel="noopener">
            <ListItemText primary="Order Now" sx={{ color: 'secondary.main' }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: scrolled ? 'rgba(10,10,15,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'all 0.3s ease',
          borderBottom: scrolled ? '1px solid' : 'none',
          borderColor: 'rgba(108,99,255,0.15)',
        }}
      >
        <Toolbar sx={{ maxWidth: 1280, width: '100%', mx: 'auto' }}>
          <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
            <SchoolIcon sx={{ color: 'primary.main', fontSize: 32 }} />
            <Typography variant="h5" sx={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
              Study<span style={{ color: '#6C63FF' }}>AI</span>
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            {navLinks.map((link) => (
              <Button
                key={link.path}
                component={Link}
                to={link.path}
                sx={{
                  color: location.pathname === link.path ? 'primary.main' : 'text.secondary',
                  fontWeight: 500,
                  '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
                }}
              >
                {link.label}
              </Button>
            ))}
            <Button
              variant="contained"
              color="secondary"
              href={buildWhatsAppLink(orderMsg)}
              target="_blank"
              rel="noopener"
              sx={{ ml: 1 }}
            >
              Order Now
            </Button>
          </Box>
          <IconButton
            sx={{ display: { md: 'none' }, color: 'white' }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
        {drawer}
      </Drawer>
      <Box sx={{ height: 72 }} />
    </>
  )
}
