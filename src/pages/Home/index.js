import React from 'react';
import Menu from '../../components/Menu';
import Navbar from '../../components/Navbar';
import Carousel from '../../components/Carousel';
import ColecoesDestaque from '../../components/ColecoesDestaque';
import ProdutoOFF from '../../components/ProdutoOFF';
import { Container, Grid, Avatar } from '@mui/material';
import  Produto  from '../../components/Produto';
import Footer from '../../components/Footer';
import './styles.css'
import line from './Line.png';
export default function Home()
{
    return(
 <>
            <Navbar/>
            <Menu/>
            <Carousel/>  
            <ColecoesDestaque/>

        <Container>
            <div className='produtos'>
                <h2>Produtos em Alta</h2>


                <div className='arrow'>
                    <p>Ver todos</p> < img src={line} alt='Line.png'/>
                </div>   
            </div>


            <Grid container spacing={3}>
                <Grid item md={3}>
                    <ProdutoOFF/>
                </Grid>

                <Grid item md={3}>
                    <ProdutoOFF />
                </Grid>

                <Grid item md={3}>
                    <Produto />
                </Grid>

                <Grid item md={3}>
                    <Produto />
                </Grid>

                <Grid item md={3}>
                    <Produto />
                </Grid>

                <Grid item md={3}>
                    <Produto />
                </Grid>
                
                <Grid item md={3}>
                    <Produto />
                </Grid>
                
                <Grid item md={3}>
                    <Produto />
                </Grid>
                
            </Grid> 
        </Container>
<Footer />
 </>

    );
}
