import {  Container, Grid, Typography } from '@material-ui/core';
import styles from '../styles/header.module.scss';

export default function Header() {
    return(
        <div className={styles.header}>
            <Container fixed>
                <Grid container justify="center" alignItems="center" spacing={5}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h3" className={styles.header_title}>Conversor de Temperatura</Typography>
                        <Typography>
                            Com essa aplicação, você poderá converter uma temperatura de Grau Celsius(°C) para Fahrenheit(°F) ou para Kelvin(K)
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <img src="images/temperature.png" alt="temperature.pgn" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );

};