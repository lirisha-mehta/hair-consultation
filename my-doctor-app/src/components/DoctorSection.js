import React from "react";
import { Container, Grid, Typography, Box, Button } from "@mui/material";

export default function DoctorSection() {
  return (
    <Container id="doctor" sx={{ py: 8 }}>
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={5}>
          <Box component="img" src="/doctor.jpg" alt="Doctor" sx={{ width: "100%", borderRadius: "16px", boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }} />
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography variant="h4" fontWeight={700} gutterBottom>Dr. Rajesh Sharma</Typography>
          <Typography variant="h6" color="primary" gutterBottom>MBBS, MD (Trichology & Hair Transplant Specialist)</Typography>
          <Typography variant="body1" paragraph>
            With over 15 years of expertise in advanced hair restoration and scalp health, Dr. Sharma has successfully performed more than 5000+ hair transplants and PRP procedures.
          </Typography>
          <Typography variant="body1" paragraph>
            Known for a patient-centric approach, Dr. Sharma combines innovative techniques with personalized care to ensure natural-looking, lasting results.
          </Typography>
          <Button variant="contained" color="secondary" sx={{ mt: 2, px: 4, borderRadius: "30px" }} href="#booking">
            Book Appointment with Dr. Sharma
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}