import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const VisualizaNoticia = () => {
    const { id } = useParams()
    const [noticia, setNoticia] = useState({})
    const url = `http://localhost:3000/noticias/${id}`

    useEffect(() => {
        const fetchNoticia = async () => {
            try {
                const response = await axios.get(url)
                setNoticia(response.data)
            } catch (error) {
                console.error("Erro ao buscar a notícia:", error)
            }
        }
        fetchNoticia()
    }, [id])

    //return (
    //    <div>
    //        <h1>{noticia.titulo}</h1>
    //        <p>{noticia.texto}</p>
    //    </div>
    //)
    if (!noticia) {
        return <CircularProgress />
    }

    const formattedDate = new Date(noticia.dataCadastro).toLocaleString()

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h3" gutterBottom>{noticia.titulo}</Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
                Data e Hora: {formattedDate}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
                {noticia.texto}
            </Typography>
        </Box>
    )
}


export default VisualizaNoticia