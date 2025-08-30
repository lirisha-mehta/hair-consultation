import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight={700}>Hair Consultation Clinic</Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          {["About", "Results", "Services", "Doctor"].map((item) => (
            <Button key={item} color="inherit" component="a" href={`#${item.toLowerCase()}`}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}