import React from "react";
import ReactDOM from "react-dom/client"; import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles"; import CssBaseline from "@mui/material/CssBaseline";
const theme=createTheme({typography:{fontFamily:"Inter, Arial"},palette:{primary:{main:"#2c3e50"},secondary:{main:"#4A90E2"}}});
ReactDOM.createRoot(document.getElementById("root")).render(<ThemeProvider theme={theme}><CssBaseline/><App/></ThemeProvider>);
