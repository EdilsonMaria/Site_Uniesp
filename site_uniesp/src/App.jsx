import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box, Container, CssBaseLine } from '@mui/material'
import BannerAd from './components/BannerAd'
import Navbar from './components/Navbar'
import Inicial from './pages/Inicial'

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseLine></CssBaseLine>
      <Container maxWidth='lg' sx={{ backgroundColor: '#f7f7f7', minHeight: '100vh', padding: '16px', borderRadius: '8px' }}>
        <Box display="flex" alignItems="center" justifyContent="space-between" 
        p={2} sx={{backgroundColor: '#fff', borderRadius: '8px', boxShadow: 1}} >
          <Navbar/>
        </Box>

        <BannerAd/>

        <Box mt={4}>
          <Routes>
            <Route path="/" element={<Inicial/>}></Route>
          </Routes>
        </Box>

      </Container>
    </BrowserRouter>
  )
}

export default App