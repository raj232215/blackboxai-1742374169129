import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  CircularProgress,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const SafetyRoutePlanner = () => {
  const [startLocation, setStartLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Default center coordinates (can be updated based on user's location)
  const defaultCenter = [51.505, -0.09];
  
  const handlePlanRoute = async (e) => {
    e.preventDefault();
    if (!startLocation || !destination) {
      setError('Please enter both start location and destination');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      // Here you would typically make an API call to a routing service
      // For demo purposes, we'll just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Handle the route planning logic here
      // You would typically:
      // 1. Geocode the addresses to get coordinates
      // 2. Call a routing API to get the safest route
      // 3. Update the map with the route
      
    } catch (err) {
      setError('Failed to plan route. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ py: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Safety Route Planner
      </Typography>
      
      <Paper sx={{ p: 3, mb: 3 }}>
        <form onSubmit={handlePlanRoute}>
          <TextField
            fullWidth
            label="Start Location"
            value={startLocation}
            onChange={(e) => setStartLocation(e.target.value)}
            margin="normal"
            variant="outlined"
            placeholder="Enter your starting point"
          />
          
          <TextField
            fullWidth
            label="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            margin="normal"
            variant="outlined"
            placeholder="Enter your destination"
          />
          
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
          
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SearchIcon />}
            disabled={loading}
            sx={{ mt: 2 }}
            fullWidth
          >
            {loading ? 'Planning Route...' : 'Plan Safe Route'}
          </Button>
        </form>
      </Paper>
      
      <Paper sx={{ height: 400, overflow: 'hidden' }}>
        <MapContainer
          center={defaultCenter}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Markers and route will be added here based on the route planning result */}
        </MapContainer>
      </Paper>
      
      <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
        This route planner helps you find the safest path to your destination. 
        It considers factors like well-lit streets, populated areas, and known safe zones.
      </Typography>
    </Box>
  );
};

export default SafetyRoutePlanner;
