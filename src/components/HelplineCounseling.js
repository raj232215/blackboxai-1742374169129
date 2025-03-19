import React, { useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Alert,
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Chat as ChatIcon,
  Schedule as ScheduleIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Emergency as EmergencyIcon,
} from '@mui/icons-material';

const emergencyContacts = [
  {
    name: "Emergency Services",
    number: "911",
    description: "For immediate emergency assistance",
    icon: <EmergencyIcon color="error" />,
    isEmergency: true,
  },
  {
    name: "24/7 Crisis Helpline",
    number: "1-800-273-8255",
    description: "Available 24 hours for crisis support",
    icon: <PhoneIcon color="primary" />,
    isEmergency: false,
  },
  {
    name: "Domestic Violence Hotline",
    number: "1-800-799-7233",
    description: "24/7 support for domestic violence situations",
    icon: <PhoneIcon color="primary" />,
    isEmergency: false,
  },
];

const counselingServices = [
  {
    name: "Online Counseling",
    description: "Connect with licensed counselors online",
    availability: "24/7",
    type: "chat",
  },
  {
    name: "Phone Counseling",
    description: "Speak directly with a counselor",
    availability: "9 AM - 9 PM",
    type: "phone",
  },
  {
    name: "In-Person Counseling",
    description: "Schedule face-to-face sessions",
    availability: "By appointment",
    type: "location",
  },
];

const HelplineCounseling = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setSubmitted(true);
    setTimeout(() => {
      handleDialogClose();
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredDate: '',
        message: '',
      });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <Box sx={{ py: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        24/7 Helpline & Counseling
      </Typography>

      {/* Emergency Contacts Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom color="error" sx={{ display: 'flex', alignItems: 'center' }}>
          <EmergencyIcon sx={{ mr: 1 }} />
          Emergency Contacts
        </Typography>
        <List>
          {emergencyContacts.map((contact, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemIcon>
                  {contact.icon}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant={contact.isEmergency ? "h6" : "body1"} color={contact.isEmergency ? "error" : "textPrimary"}>
                      {contact.name}: <strong>{contact.number}</strong>
                    </Typography>
                  }
                  secondary={contact.description}
                />
                <Button
                  variant="contained"
                  color={contact.isEmergency ? "error" : "primary"}
                  startIcon={<PhoneIcon />}
                  href={`tel:${contact.number.replace(/[-\s]/g, '')}`}
                >
                  Call Now
                </Button>
              </ListItem>
              {index < emergencyContacts.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>

      {/* Counseling Services Section */}
      <Grid container spacing={3}>
        {counselingServices.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {service.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {service.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Availability: {service.availability}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={
                    service.type === 'chat' ? <ChatIcon /> :
                    service.type === 'phone' ? <PhoneIcon /> :
                    <LocationIcon />
                  }
                  fullWidth
                  onClick={handleDialogOpen}
                >
                  {service.type === 'chat' ? 'Start Chat' :
                   service.type === 'phone' ? 'Request Call' :
                   'Schedule Visit'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Counseling Request Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="sm" fullWidth>
        <DialogTitle>Request Counseling Session</DialogTitle>
        <DialogContent>
          {submitted ? (
            <Alert severity="success" sx={{ mt: 2 }}>
              Your request has been submitted successfully. We'll contact you shortly.
            </Alert>
          ) : (
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                margin="normal"
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                margin="normal"
              />
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                margin="normal"
              />
              <TextField
                fullWidth
                label="Preferred Date"
                name="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={handleInputChange}
                required
                margin="normal"
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                margin="normal"
              />
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button 
            type="submit" 
            variant="contained" 
            color="primary"
            onClick={handleSubmit}
            disabled={submitted}
          >
            Submit Request
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default HelplineCounseling;
