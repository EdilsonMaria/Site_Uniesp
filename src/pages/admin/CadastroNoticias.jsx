import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Button, TextField, Typography, Box, Grid } from '@mui/material'

const url = "http://localhost:3000/noticias"

const CadastroNoticia = () => {
  const [titulo, setTitulo] = useState('')
  const [subtitulo, setSubtitulo] = useState('')
  const [texto, setTexto] = useState('')
  const [dataCadastro, setDataCadastro] = useState('')
  const navigate = useNavigate()

  const cadastrarNoticia = async (e) => {
    e.preventDefault()
    try {
      await axios.post(url, { titulo, subtitulo, texto, dataCadastro })
      navigate('/admin-noticias')
    } catch (error) {
      console.error('Erro ao cadastrar a notícia: ', error)
    }
  }

  return (
    <Box 
      component="form" 
      onSubmit={cadastrarNoticia} 
      noValidate 
      sx={{ mt: 3, p: 4, backgroundColor: '#f9f9f9', borderRadius: '8px' }}
    >
      <Typography variant="h4" gutterBottom>Cadastrar Notícia</Typography>
      
      <TextField 
        label="Título" 
        fullWidth 
        margin="normal" 
        value={titulo} 
        onChange={(e) => setTitulo(e.target.value)} 
      />
      
      <TextField 
        label="Subtítulo" 
        fullWidth 
        margin="normal" 
        value={subtitulo} 
        onChange={(e) => setSubtitulo(e.target.value)} 
      />
      
      <TextField 
        label="Texto" 
        fullWidth 
        multiline 
        rows={4} 
        margin="normal" 
        value={texto} 
        onChange={(e) => setTexto(e.target.value)} 
      />
      
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={6}>
          <TextField 
            label="Data de Cadastro" 
            type="date" 
            fullWidth 
            InputLabelProps={{ shrink: true }} 
            value={dataCadastro} 
            onChange={(e) => setDataCadastro(e.target.value)} 
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
            label="Hora de Cadastro" 
            type="time" 
            fullWidth 
            InputLabelProps={{ shrink: true }} 
            value={dataCadastro.split('T')[1] || ''} 
            onChange={(e) => setDataCadastro(`${dataCadastro.split('T')[0] || ''}T${e.target.value}`)} 
          />
        </Grid>
      </Grid>
      
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
        Cadastrar
      </Button>
    </Box>
  )
}

export default CadastroNoticia
