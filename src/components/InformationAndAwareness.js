import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Security as SecurityIcon,
  Notifications as NotificationsIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Warning as WarningIcon,
} from '@mui/icons-material';

const safetyTips = [
  {
    title: 'Stay Alert',
    description: 'Always be aware of your surroundings and trust your instincts.',
    icon: <SecurityIcon color="primary" />,
  },
  {
    title: 'Share Location',
    description: 'Let trusted contacts know your location when traveling alone.',
    icon: <LocationIcon color="primary" />,
  },
  {
    title: 'Emergency Contacts',
    description: 'Keep emergency numbers readily available on speed dial.',
    icon: <PhoneIcon color="primary" />,
  },
  {
    title: 'Safe Routes',
    description: 'Plan your route in advance and stick to well-lit, populated areas.',
    icon: <LocationIcon color="primary" />,
  },
];

const emergencyAlerts = [
  {
    title: 'Weather Alert',
    description: 'Heavy rainfall expected in the evening. Plan your travel accordingly.',
    severity: 'warning',
  },
  {
    title: 'Safety Advisory',
    description: 'Increased incidents reported in downtown area. Stay vigilant.',
    severity: 'error',
  },
];

const InformationAndAwareness = () => {
  return (
    <Box sx={{ py: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Safety Information & Awareness
      </Typography>

      {/* Emergency Alerts Section */}
      <Paper sx={{ p: 3, mb: 3, bgcolor: '#fff3e0' }}>
        <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
          <NotificationsIcon sx={{ mr: 1 }} color="warning" />
          Current Alerts
        </Typography>
        {emergencyAlerts.map((alert, index) => (
          <Card key={index} sx={{ mb: 2, bgcolor: alert.severity === 'error' ? '#ffebee' : '#fff3e0' }}>
            <CardContent>
              <Typography variant="h6" color="error" sx={{ display: 'flex', alignItems: 'center' }}>
                <WarningIcon sx={{ mr: 1 }} />
                {alert.title}
              </Typography>
              <Typography variant="body1">{alert.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Paper>

      {/* Safety Tips Section */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {safetyTips.map((tip, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                  {tip.icon}
                  <Box sx={{ ml: 1 }}>{tip.title}</Box>
                </Typography>
                <Typography variant="body1">{tip.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Safety Resources Section */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Safety Resources
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random/800x400/?safety"
                alt="Safety awareness"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Personal Safety Guide
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Download our comprehensive guide on personal safety and security measures.
                </Typography>
                <Button variant="contained" color="primary">
                  Download Guide
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Emergency Numbers
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <PhoneIcon color="error" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Emergency Services" 
                      secondary="911"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <PhoneIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Police Non-Emergency" 
                      secondary="Local Police Number"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <PhoneIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="24/7 Helpline" 
                      secondary="1-800-SAFE-NOW"
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default InformationAndAwareness;
