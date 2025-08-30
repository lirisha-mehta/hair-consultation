import React from "react";
import Slider from "react-slick";
import { Box, Typography, Button } from "@mui/material";

const heroImages = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
];

export default function HeroSection() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
  };

  return (
    <Box sx={{ position: "relative", height: { xs: 450, md: 550 } }}>
      {/* Slider with background images */}
      <Slider {...settings}>
        {heroImages.map((img, idx) => (
          <Box
            key={idx}
            sx={{
              height: { xs: 450, md: 550 },
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </Slider>

      {/* Gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "linear-gradient(to bottom, rgba(44,62,80,0.75) 20%, rgba(59,90,125,0.55) 60%, rgba(75,117,162,0.35) 100%)",
          zIndex: 1,
        }}
      />

      {/* Text + CTA */}
      <Box
        sx={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          color: "white",
          zIndex: 2,
          px: 3,
        }}
      >
        <Typography
          variant="h2"
          fontWeight={700}
          sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
        >
          Expert Hair Restoration & Scalp Care
        </Typography>
        <Typography
          variant="h6"
          sx={{ mt: 2, fontWeight: 400, maxWidth: 700, lineHeight: 1.6 }}
        >
          Scientifically proven treatments, tailored consultations, and advanced solutions to help you regain your natural hair and confidence.
        </Typography>
        
      </Box>
    </Box>
  );
}
