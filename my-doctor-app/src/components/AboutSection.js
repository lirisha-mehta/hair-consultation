import React from 'react';
import { Container, Typography, Box } from '@mui/material';

export default function AboutSection() {
  return (
    <Container id="about" sx={{ py: 8 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          About Our Clinic
        </Typography>
        <Typography variant="body1" paragraph>
          We specialize in premium-quality hair restoration using advanced techniques and personalized care.
          Our mission is to restore confidence with natural-looking results.
        </Typography>
      </Box>
    </Container>
  );
}