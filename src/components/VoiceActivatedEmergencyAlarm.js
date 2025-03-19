import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Typography,
  Paper,
  Alert,
  CircularProgress,
  Switch,
  FormControlLabel,
} from '@mui/material';
import { Mic as MicIcon, VolumeUp as VolumeUpIcon } from '@mui/icons-material';

const VoiceActivatedEmergencyAlarm = () => {
  const [isListening, setIsListening] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [error, setError] = useState('');
  const [recognition, setRecognition] = useState(null);

  // Emergency trigger words
  const triggerWords = ['help', 'emergency', 'danger', 'sos'];

  useEffect(() => {
    // Check if browser supports speech recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      
      recognitionInstance.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0].transcript.toLowerCase())
          .join('');

        // Check if any trigger word is spoken
        if (triggerWords.some(word => transcript.includes(word))) {
          triggerEmergencyAlarm();
        }
      };

      recognitionInstance.onerror = (event) => {
        setError('Error with voice recognition: ' + event.error);
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
    } else {
      setError('Voice recognition is not supported in your browser');
    }

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, []);

  const toggleVoiceRecognition = () => {
    if (!recognition) {
      setError('Voice recognition is not supported');
      return;
    }

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);
      setError('');
    }
  };

  const triggerEmergencyAlarm = () => {
    // Play emergency sound
    const audio = new Audio('/emergency-alarm.mp3');
    audio.play().catch(err => {
      setError('Failed to play emergency sound');
    });

    // Here you would typically:
    // 1. Send emergency notifications
    // 2. Contact emergency services
    // 3. Alert emergency contacts
    // 4. Get user's location
  };

  const handleManualTrigger = () => {
    triggerEmergencyAlarm();
  };

  return (
    <Box sx={{ py: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Emergency Alarm
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <FormControlLabel
          control={
            <Switch
              checked={voiceEnabled}
              onChange={(e) => setVoiceEnabled(e.target.checked)}
              color="primary"
            />
          }
          label="Enable Voice Activation"
        />

        {voiceEnabled && (
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color={isListening ? 'secondary' : 'primary'}
              startIcon={isListening ? <CircularProgress size={20} color="inherit" /> : <MicIcon />}
              onClick={toggleVoiceRecognition}
              sx={{ mb: 2 }}
            >
              {isListening ? 'Stop Listening' : 'Start Listening'}
            </Button>

            {isListening && (
              <Alert severity="info" sx={{ mb: 2 }}>
                Listening for emergency trigger words...
              </Alert>
            )}
          </Box>
        )}

        <Button
          variant="contained"
          color="error"
          size="large"
          startIcon={<VolumeUpIcon />}
          onClick={handleManualTrigger}
          className={`emergency-button ${isListening ? 'pulse' : ''}`}
          sx={{
            width: '100%',
            height: '120px',
            borderRadius: '60px',
            fontSize: '1.5rem',
            mt: 2
          }}
        >
          EMERGENCY
        </Button>

        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
      </Paper>

      <Typography variant="body2" color="textSecondary">
        In case of emergency:
        <ul>
          <li>Press the emergency button or say "help" to activate the alarm</li>
          <li>The alarm will alert emergency services and your emergency contacts</li>
          <li>Your location will be shared with emergency responders</li>
          <li>Stay calm and find a safe location if possible</li>
        </ul>
      </Typography>
    </Box>
  );
};

export default VoiceActivatedEmergencyAlarm;
