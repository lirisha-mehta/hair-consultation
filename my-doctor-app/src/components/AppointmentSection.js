import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Card,
  CardMedia,
} from "@mui/material";
import Slider from "react-slick";
import AppointmentForm from "./AppointmentForm";
import HeroSection from "./HeroSection";

const carouselImages = ["/clinic1.jpg", "/clinic2.jpg", "/clinic3.jpg"];

export default function AppointmentSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment submitted:", form);
    alert("Your appointment request has been submitted!");
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
  };

  return (
    <Grid container id="appointment" >
        <Grid item xs={12} md={6} >
            <AppointmentForm/>
        </Grid>
        <Grid item xs={12} md={6} >
            <HeroSection/>
        </Grid>
    </Grid>
  );
}
