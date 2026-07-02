import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6C63FF',
      light: '#8B83FF',
      dark: '#4A42D9',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#4CAF50',
      light: '#6FBE73',
      dark: '#3A8C3E',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#FF6B6B',
    },
    background: {
      default: '#0A0A0F',
      paper: '#13131A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#A0A0B0',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    h1: { fontWeight: 800, fontSize: '3.5rem', letterSpacing: '-0.02em' },
    h2: { fontWeight: 800, fontSize: '2.5rem', letterSpacing: '-0.02em' },
    h3: { fontWeight: 700, fontSize: '2rem', letterSpacing: '-0.01em' },
    h4: { fontWeight: 700, fontSize: '1.5rem' },
    h5: { fontWeight: 600, fontSize: '1.25rem' },
    h6: { fontWeight: 600, fontSize: '1.1rem' },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '10px 24px',
          fontWeight: 600,
        },
        containedSizeLarge: {
          padding: '14px 32px',
          fontSize: '1.05rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
