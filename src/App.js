import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navigation from './components/Navigation';
import SafetyRoutePlanner from './components/SafetyRoutePlanner';
import VoiceActivatedEmergencyAlarm from './components/VoiceActivatedEmergencyAlarm';
import InformationAndAwareness from './components/InformationAndAwareness';
import EducationalTools from './components/EducationalTools';
import HelplineCounseling from './components/HelplineCounseling';

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    emergency: {
      main: '#ff3b30',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<InformationAndAwareness />} />
          <Route path="/route-planner" element={<SafetyRoutePlanner />} />
          <Route path="/emergency-alarm" element={<VoiceActivatedEmergencyAlarm />} />
          <Route path="/information" element={<InformationAndAwareness />} />
          <Route path="/educational" element={<EducationalTools />} />
          <Route path="/helpline" element={<HelplineCounseling />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
