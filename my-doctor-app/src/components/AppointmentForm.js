import React, { useState } from "react";
import { Container, TextField, Button, Typography, Grid, Box, Alert } from "@mui/material";
export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const appointmentDetails = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      service: form.service,
      date: form.date,
    };

    // Send the form data to the backend
    try {
      const response = await fetch("https://hair-consultation.onrender.com/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentDetails),
      });

      if (response.ok) {
        setSuccess(true); // Show success message
      } else {
        alert("There was an error submitting your appointment.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error in submitting form. Please try again.");
    }
  };

  return (
    <Container id="appointment" sx={{ py: 8 }}>
      <Typography variant="h4" fontWeight={600} align="center" gutterBottom>
        Book Your Appointment
      </Typography>
      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Your appointment request has been submitted!
        </Alert>
      )}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 4,
          maxWidth: 600,
          mx: "auto",
          p: 4,
          borderRadius: 3,
          boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
          bgcolor: "white",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Service Interested In"
              name="service"
              value={form.service}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Preferred Date"
              name="date"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={form.date}
              onChange={handleChange}
              required
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ mt: 4, py: 1.5, fontWeight: 600, borderRadius: "30px" }}
        >
          Submit Appointment
        </Button>
      </Box>
    </Container>
  );
}
