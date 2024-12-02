import React from 'react'
import{ Box, Typography, Grid, Paper } from '@mui/material'

const Inicial = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <Typography variant='h3' gutterBottom>
            Bem-vindo à Faculdade UNIESP
        </Typography>
        <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: '#ffffff', borderRadius: '8px' }}>
            <Typography variant='h5' gutterBottom>
                A busca por uma educação de qualidade e pelo desenvolvimento profissional de nossos alunos é a meta que permeia todas as nossas atividades.
                Colocadas diante de nós desde a fundação, em 8 de Setembro 1998, esses objetivos se refletem em uma estrutura física atraente e completa, 
                com oito grandes blocos repletos de salas de aulas amplas e climatizadas; auditórios e laboratórios para as discussões práticas da vida acadêmica; 
                biblioteca com um dos melhores acervos da Paraíba; além de espaço de vivência com praça de alimentação e internet wi-fi.
            </Typography>
            <Typography variant='body1'>
                A faculdade UNIESP é uma instituição de Ensino Superior...
            </Typography>
        </Paper>
        <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{ p: 3, backgroundColor: '#ffffff', borderRadius: '8px' }}>
                    <Typography variant='h5' gutterBottom>
                        Noticias
                    </Typography>
                    <Typography variant='body1'>
                        Fique atualizado com as últimas noticías e eventos...
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{ p: 3, backgroundColor: '#ffffff', borderRadius: '8px' }}>
                <Typography variant='h5' gutterBottom>
                        Área Administrativa
                    </Typography>
                    <Typography variant='body1'>
                        Acesse a área administrativa para gerenciar noticias...
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Inicial