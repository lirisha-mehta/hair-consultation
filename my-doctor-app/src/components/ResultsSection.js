import React from 'react';
import { Container, Typography, Grid, Card, CardMedia } from '@mui/material';

const sampleImages = ['/results1.jpg', '/results2.jpg', '/results3.jpg'];

export default function ResultsSection() {
  return (
    <Container id="results" sx={{ py: 8 }}>
      <Typography variant="h4" fontWeight={600} align="center" gutterBottom>Before & After Results</Typography>
      <Grid container spacing={4}>
        {sampleImages.map((img, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card elevation={4}>
              <CardMedia component="img" image={img} alt={`Result ${idx+1}`} sx={{ height: 240, objectFit: 'cover' }} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}