import { useMemo } from "react";
import { themeSettings } from "./theme.js";
import {createTheme} from '@mui/material/styles';
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./scenes/navbar/index.js";
import  Dashboard  from "./scenes/dashboard/index.js";
import Predictions from "@/scenes/predictions";

function App() {
const theme = useMemo(()=>createTheme(themeSettings),[])

  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme ={theme}>
        <CssBaseline/>
        <Box width ="100%" height="100%" padding="1rem 2rem 4rem 2rem">
        <Navbar/>
        <Routes>
          <Route path="/" element ={<Dashboard/>}></Route>
          <Route path="/predictions" element={<Predictions/>}></Route>
          
        </Routes>
        </Box>
      </ThemeProvider>
      </BrowserRouter>

    </div>

       
  )
}

export default App
