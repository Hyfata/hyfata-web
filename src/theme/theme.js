
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00bcd4', // Base aqua color
    },
    secondary: {
      main: '#4dd0e1', // Lighter aqua
    },
    background: {
      default: '#001f29', // Dark cyan background
      paper: 'rgba(255, 255, 255, 0.05)', // For glassmorphism cards
    },
    text: {
      primary: '#ffffff',
      secondary: '#e0e0e0',
    },
    // Gradient for use in sx props
    gradient: 'linear-gradient(45deg, #00bcd4 30%, #4dd0e1 90%)',
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h2: {
      background: 'linear-gradient(45deg, #00bcd4 30%, #4dd0e1 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h4: {
      background: 'linear-gradient(45deg, #00bcd4 30%, #4dd0e1 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }
  },
});

export default theme;
