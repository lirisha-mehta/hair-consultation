import React from "react";
import { Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

const treatments = [
  {
    title: "GFC (Growth Factor Concentrate)",
    description:
      "A non-surgical, advanced therapy using your own blood-derived growth factors to stimulate follicle regeneration, improve thickness & scalp health. Typically requires 3–4 sessions with minimal downtime." +
      "\n\nBenefits include natural results, safety, and boosted efficacy compared to PRP." +
      "\n\nProcess: blood draw → centrifuge → injection into scalp." +
      " :contentReference[oaicite:1]{index=1}",
    image: "", // Replace with local path
  },
  {
    title: "OPD Consultation",
    description:
      "Visit our outpatient department (OPD) for a detailed scalp and hair analysis, expert diagnosis, and personalized treatment planning—all in a single clinic visit.",
    image: "/opd-consultation.jpg", // Replace with local path
  },
  {
    title: "UR-FUE Hair Transplant",
    description:
      "Minimally invasive hair transplant technique delivering natural-looking results with quick recovery.",
    image: "/ur-fue.jpg",
  },
  {
    title: "PRP Therapy",
    description:
      "Platelet-Rich Plasma injections to revitalize hair follicles and encourage regrowth using your own plasma.",
    image: "/prp-therapy.jpg",
  },
];

export default function ServicesSection() {
  return (
    <Container sx={{ py: 8 }} id="services">
      <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
        Our Treatments
      </Typography>
      <Grid container spacing={4}>
        {treatments.map((t, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card
              elevation={4}
              sx={{
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={t.image}
                alt={t.title}
              />
              <CardContent>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {t.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: "pre-line" }}>
                  {t.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
