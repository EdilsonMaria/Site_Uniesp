import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const Noticias = () => {
    const [noticias, setNoticias] = useState([]);
    const url = "http://localhost:3000/noticias";

    useEffect(() => {
        const fetchNoticias = async () => {
            try {
                const response = await axios.get(url);
                setNoticias(response.data);
            } catch (error) {
                console.error("Erro ao buscar noticias", error);
            }
        };
        fetchNoticias();
    }, []);

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h3" gutterBottom>Notícias</Typography>
            <Grid container spacing={4}>
                {noticias.map((noticia) => (
                    <Grid item xs={12} sm={6} md={4} key={noticia.id}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={noticia.imagem || "https://via.placeholder.com/300x140.png?text=Sem+Imagem"}
                                alt={`Imagem de ${noticia.titulo}`}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {noticia.titulo}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                    {noticia.resumo || "Clique para ler mais sobre esta notícia."}
                                </Typography>
                                <Link to={`/visualiza-noticia/${noticia.id}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
                                    <Typography variant="body1" color="primary">
                                        Ler mais
                                    </Typography>
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Noticias;
