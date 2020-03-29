import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import USA_circle from '../../assets/usa_circle.svg';
import BR_circle from '../../assets/br_circle.svg';
import Grid from '@material-ui/core/Grid';
import arrowGray from '../../assets/arrows_gray.svg'
import {ValueDiv} from "./styles";

function ValueCard() {
    return (
        <ValueDiv>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                spacing={1}
            >
                <Grid item xs={3}>
                    <Card className='value-card'>
                        <div className='country-logo'>
                            <img src={USA_circle}/>
                            <span className='country-name'>
                                USD
                            </span>
                        </div>
                        <div className='value'>
                            U$ 1,00
                        </div>
                    </Card>
                </Grid>

                <Grid item xs={1}>
                    <img src={arrowGray}/>
                </Grid>

                <Grid item xs={3}>
                    <Card className='value-card'>
                        <div className='country-logo'>
                            <img src={BR_circle}/>
                            <span className='country-name'>
                                BRL
                            </span>
                        </div>
                        <div className='value'>
                            R$ 5,12
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </ValueDiv>
    );
}

export default ValueCard;