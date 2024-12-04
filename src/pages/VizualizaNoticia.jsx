import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Typography, CircularProgress } from '@mui/material';

const VisualizaNoticia = () => {
    const { id } = useParams()
    const [noticia, setNoticia] = useState(null)
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const url = `http://localhost:3000/noticias/${id}`

    useEffect(() => {
        const fetchNoticia = async () => {
            try {
                console.log(`Fetching notícia from: ${url}`)
                const response = await axios.get(url)
                console.log('Notícia fetched:', response.data)
                setNoticia(response.data)
            } catch (err) {
                console.error("Erro ao buscar detalhes da notícia:", error)
                setError(true)
            }
        }
        fetchNoticia();
    }, [id])

    if (isLoading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        );
    }

    if (error || !noticia) {
        return (
            <Box textAlign="center" mt={4}>
                <Typography variant="h6" color="error">
                    Erro ao carregar a notícia. Tente novamente mais tarde.
                </Typography>
            </Box>
        );
    }

    const formattedDate = new Date(noticia.dataCadastro).toLocaleString()

    return (
        <Box p={4}>
            <Typography variant="h4" gutterBottom>
                {noticia.titulo}
            </Typography>
            <Typography variant="body1" paragraph>
                {noticia.texto}
            </Typography>
            <Typography variant="caption" color="textSecondary">
                {noticia.formattedDate}
            </Typography>
        </Box>
    );
};

export default VisualizaNoticia