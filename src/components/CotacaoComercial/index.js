import React from 'react';
import Grid from '@material-ui/core/Grid';
import chart from '../../assets/chart.svg';
import ValueCard from "../ValueCard";

function CotacaoComercial() {
    return (
        <>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={6}>
                   <img src={chart}/>
                </Grid>
                <Grid item xs={6}>
                    <ValueCard/>
                </Grid>
            </Grid>


            </>
    );
}

export default CotacaoComercial;