import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { useMemo } from "react"
import CssBaseline from "@mui/material/CssBaseline";
import { themeSettings } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./pages/navbar";
import Dashboard from "./pages/dashboard";
import Predictions from "./pages/predictions";
function App() {
  const theme =useMemo(() => createTheme(themeSettings), []);  
  return (
      <div className="app">
       <BrowserRouter>
       <ThemeProvider theme={theme}>
          <CssBaseline />
         <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
                <Navbar />
          <Routes >
              <Route path="/" element={<Dashboard></Dashboard>} />
              <Route path="/predictions" element={<Predictions></Predictions>}/>
            </Routes>
          </Box>
        </ThemeProvider>
       </BrowserRouter>
      </div>
  )
}
export default App

