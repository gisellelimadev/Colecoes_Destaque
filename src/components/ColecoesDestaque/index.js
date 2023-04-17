// import './style.css';
// import { Avatar, Container, Grid } from '@mui/material';

// import blusa from "./img/blusa.svg";
// import fone from "./img/fone.svg";
// import tenis from "./img/tenis.svg";
// import calça from "./img/calça.svg";
// import boné from "./img/boné.png";
// import tenis02 from "./img/tenis02.png";
// import Produto from '../Produto';


// export default function ColecoesDestaque (){

//     const roupas = [
//         { nome: "Camisetas", imagem: blusa },
//         { nome: "Bonés", imagem: boné },
//         { nome: "Calças", imagem: calça },
//         { nome: "Headphones", imagem: fone },
//         { nome: "Tênis", imagem: tenis },
//     ];

//     const Sections = () => {
//         return roupas.map((cada, index) => {
//             return (

//                 <Grid key={index} item>
//                     <Avatar sx={{bgcolor:"white", height:"104px", width: "104px"}}>
//                         <img src={cada.imagem}></img>
//                     </Avatar>
//                     <p>{cada.nome}</p>
//                 </Grid>
//             );
//         });
//     }

//     return (
//         <>
//         <div className="bg">
//             <Container>
//                 <h3>Coleções em destaque </h3>
//                 <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
//                     <Sections/>
//                 </Grid>
//             </Container>
//         </div>
//     </>
//     )
// }

//     <Container>
//          <Grid container spacing={3}>

//             <Grid item xs={3}>
//                 <Produto />
//             </Grid>
                
//              <Grid item md={3}>
//                 <Produto/>
//              </Grid>
            
//              <Grid item md={3}>
//                 <Produto/>
//              </Grid>
                
//              <Grid item md={3}> 
//                 <Produto/>
//              </Grid>

//              <Grid item md={3}> 
//                 <Produto/>
//              </Grid>

//              <Grid item md={3}> 
//                 <Produto/>
//              </Grid>

//              <Grid item md={3}> 
//                 <Produto/>
//              </Grid>

//              <Grid item md={3}> 
//                 <Produto/>
//              </Grid>

//         </Grid>
//     </Container>

import { Avatar, Container, Grid } from "@mui/material";
import "./style.css";
import camiseta from "./img/camiseta.svg";
import calça from "./img/calça.svg";
import bone from "./img/bone.svg";
import tenis from "./img/tenis.svg";
import fone from "./img/fone.svg";
import camisetaROSA from "./img/camisetaROSA.svg";
import calcaROSA from "./img/calcaROSA.svg";
import boneROSA from "./img/boneROSA.svg";
import tenisROSA from "./img/tenisROSA.svg";
import foneROSA from "./img/foneROSA.svg";
import { Link } from "react-router-dom";
import React from "react";

export default function ColecoesDestaqueIcones (){

    const [ativo,setAtivo] = React.useState(0)

    const colecoes = [
  { nome: "Camisetas", imagem: camiseta, imagemAtiva: camisetaROSA},
  { nome: "Calças", imagem: calça, imagemAtiva: calcaROSA },
  { nome: "Bonés", imagem: bone, imagemAtiva: boneROSA },
  { nome: "Headphones", imagem: fone, imagemAtiva: foneROSA},
  { nome: "Tênis", imagem: tenis, imagemAtiva: tenisROSA },
];

const Sections = () => {
    return colecoes.map((cada, posicao) => {
        return (

            <Grid item className="iconeslinks" onClick={() => setAtivo(posicao)}>
                <Avatar sx={{ bgcolor: "white", height: "104px", width: "104px" }}>
                        <img src={(posicao === ativo) ? cada.imagemAtiva : cada.imagem}></img>
                </Avatar>
                <Link to="">{cada.nome}</Link>
            </Grid>
        );
    }); 
}

    return (
        <>
          <div className="bgGray">
             <Container>
                    <h3 className="h3dest">Coleções em destaque</h3>
                    <Grid container  direction="row" justifyContent="center" alignItems="center"  spacing={2}> 
                        <Sections/>
                    </Grid>
             </Container>
          </div>
          
        </>
    )
}