import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ResultsSection from '../components/ResultsSection';
import ServicesSection from '../components/ServicesSection';
import DoctorSection from '../components/DoctorSection';
import BookingCTA from '../components/BookingCTA';
import AppointmentForm from '../components/AppointmentForm';
import Footer from '../components/Footer';
// import ChatbotWidget from '../components/ChatbotWidget';
import AppointmentSection from '../components/AppointmentSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <AppointmentSection/>
      <HeroSection />
      <AboutSection />
      <DoctorSection />
      <ResultsSection />
      <ServicesSection />

      {/* 🔹 Doctor section is rendered here */}
      
{/* 
      <BookingCTA /> */}
      <Footer />

      {/* 🔹 Chatbot widget is mounted globally (floating button bottom-right) */}
      {/* <ChatbotWidget /> */}
    </>
  );
}
