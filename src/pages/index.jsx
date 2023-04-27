import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Hero from '../components/Hero';

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});

export default function indexPage() {
  return(
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Hero />
    </ThemeProvider>
  );
}