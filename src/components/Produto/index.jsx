import { Paper, Stack, Chip, Grid } from "@mui/material";
import React from "react";
import tenis02 from './tenis02.png';
import "./index.css";


export default function Produto ()
{
    return (
    <>
    <Stack>
        <Paper elevation={2}>
            <img src={tenis02} alt='tenis02.png'/>
        </Paper>

        <h6>Tênis</h6>
        <span>K-Swiss V8 - Masculino</span>
        <div className="price"> <h4>$200</h4> <b>$100</b> </div>

    </Stack>
     </>
    );
}
