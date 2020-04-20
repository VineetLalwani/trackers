import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import coronaImage2 from '../../images/image2.jpg';

import styles from './Cards.module.css';

const Cards = ({ data : { confirmed, recovered, deaths , lastUpdate }}) => {
   // console.log(confirmed);
    if(!confirmed)
    {
        return'Loading.......';
    }
    //console.log(props);

    return(
        <div className={styles.container}>
            <Grid container spacing= {4} justify="center" >
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                <CardContent>
                    <Typography  color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant ="h5">
                        <CountUp start={0} end={confirmed.value} duration={2.5} seperator=","/>
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of cases of COVID-19</Typography>
                </CardContent>
            </Grid>

            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                <CardContent>
                    <Typography  color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant ="h5">
                        <CountUp start={0} end={recovered.value} duration={2.5} seperator=","/>
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of recoveries due to COVID-19</Typography>
                </CardContent>
            </Grid>

            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                <CardContent>
                    <Typography  color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant ="h5">
                        <CountUp start={0} end={deaths.value} duration={2.5} seperator=","/>
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of Deaths caused by COVID-19</Typography>
                </CardContent>
            </Grid>
         
            </Grid>
            
        </div>
    )
}

export default Cards;