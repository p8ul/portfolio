'use client';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';
import "@fontsource/nunito-sans";
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const colors = {
  primary: {
    main: '#2f373d', // Custom primary color
    light: '#63a4ff',
    dark: '#004ba0',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#ff4081',
    light: '#ff79b0',
    dark: '#c60055',
    contrastText: '#000000',
  },
  text: {
    primary: '#212121', // Default text color
    secondary: '#757575', // Muted text color
  },
  background: {
    default: '#f4f4f4',
    paper: '#ffffff',
  },
}

const theme = createTheme({
  palette: colors,
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  typography: {
    fontFamily: "'Nunito Sans', sans-serif", 
  },
  components: {
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: '1rem', // Change text size
          fontWeight: '500', // Make text bold
          color: colors.primary.main, // Custom text color (blue)
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: 'info' },
              style: {
                backgroundColor: '#60a5fa',
              },
            },
          ],
        },
      },
    },
  },
});

export default theme;
