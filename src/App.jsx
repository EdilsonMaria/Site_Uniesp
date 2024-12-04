import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box, Container, CssBaseline } from '@mui/material'
import BannerAd from './components/BannerAd'
import Navbar from './components/Navbar'
import Inicial from './pages/Inicial'
import Faculdade from './pages/Faculdade'
import DpoLgpd from './pages/DpoLgpd'
import Noticias from './pages/Noticias'
import VizualizaNoticia from './pages/VizualizaNoticia'
import AdminNoticias from './pages/admin/AdminNoticias'
import CadastroNoticia from './pages/admin/CadastroNoticias'
import EditarNoticia from './pages/admin/EditarNoticia'

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline></CssBaseline>
      <Container maxWidth='lg' sx={{ backgroundColor: '#f7f7f7', minHeight: '100vh', padding: '16px', borderRadius: '8px' }}>
        <Box display="flex" alignItems="center" justifyContent="space-between" 
        p={2} sx={{backgroundColor: '#fff', borderRadius: '8px', boxShadow: 1}} >
          <Navbar></Navbar>
        </Box>

        <Box mt={4}>
          <BannerAd></BannerAd>
        </Box>

        <Box mt={4}>
          <Routes>
            <Route path="/" element={<Inicial/>}></Route>
            <Route path="/a-faculdade" element={<Faculdade/>}></Route>
            <Route path="/dpo-lgpd" element={<DpoLgpd/>}></Route>
            <Route path="/noticias" element={<Noticias/>}></Route>
            <Route path="/vizualiza-noticia/:id" element={<VizualizaNoticia/>}></Route>
            <Route path="/admin-noticias" element={<AdminNoticias/>}></Route>
            <Route path="/cadastrar-noticia" element={<CadastroNoticia/>}></Route>
            <Route path="/editar-noticia/:id" element={<EditarNoticia/>}></Route>
          </Routes>
        </Box>

      </Container>
    </BrowserRouter>
  )
}

export default App