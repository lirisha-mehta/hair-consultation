import React from "react";
import { Box, Typography, Grid, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", mt: 8, pt: 6, pb: 3 }}>
      <Grid container spacing={4} sx={{ maxWidth: "1200px", mx: "auto", px: 3 }}>
        
        {/* About */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom fontWeight={600}>
            Hair Consultation Clinic
          </Typography>
          <Typography variant="body2">
            Delivering advanced hair restoration and scalp care solutions
            with expertise and compassion.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom fontWeight={600}>
            Quick Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Link href="#" color="inherit" underline="hover">Home</Link>
            <Link href="#about" color="inherit" underline="hover">About</Link>
            <Link href="#services" color="inherit" underline="hover">Treatments</Link>
            <Link href="#results" color="inherit" underline="hover">Results</Link>
            <Link href="#doctor" color="inherit" underline="hover">Doctor</Link>
            <Link href="/contact" color="inherit" underline="hover">Contact</Link>
          </Box>
        </Grid>

        {/* Contact & Socials */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom fontWeight={600}>
            Contact Us
          </Typography>
          <Typography variant="body2">📍 123, Clinic Street, New Delhi</Typography>
          <Typography variant="body2">📞 +91 9876543210</Typography>
          <Typography variant="body2">✉️ info@hairclinic.com</Typography>

          <Box sx={{ mt: 2 }}>
            <IconButton href="https://facebook.com" target="_blank" sx={{ color: "white" }}>
              <Facebook />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank" sx={{ color: "white" }}>
              <Instagram />
            </IconButton>
            <IconButton href="https://linkedin.com" target="_blank" sx={{ color: "white" }}>
              <LinkedIn />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" sx={{ color: "white" }}>
              <Twitter />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom line */}
      <Box sx={{ textAlign: "center", mt: 4, pt: 2, borderTop: "1px solid rgba(255,255,255,0.2)" }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Hair Consultation Clinic. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
