import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function BookingCTA() {
  return (
    <Box id="booking" sx={{ bgcolor: 'primary.main', color: 'white', textAlign: 'center', py: 6 }}>
      <Typography variant="h4" fontWeight={600}>Ready to Restore Your Hair?</Typography>
      <Button variant="contained" color="secondary" href="/book" sx={{ mt: 3, px: 6, py: 1.5, borderRadius: '30px' }}>
        Book Your Consultation
      </Button>
    </Box>
  );
}