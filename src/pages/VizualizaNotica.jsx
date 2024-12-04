import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Typography, CircularProgress } from '@mui/material';

const VisualizaNoticia = () => {
    const { id } = useParams()
    const [noticia, setNoticia] = useState(null)
    const [error, setError] = useState(false)
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

    const formattedDate = new Date(noticia.dataCadastro).toLocaleString();

    return (
        <div>
            <h1>{noticia.titulo}</h1>
            <p>{noticia.texto}</p>
        </div>
    )
};

export default VisualizaNoticia;
