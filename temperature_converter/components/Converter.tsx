import { useState } from 'react';
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core';
import styles from '../styles/converter.module.scss';

export default function Converter() {

    return(
        <div className={styles.converter_area}>
            <Container maxWidth="xs">
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        
                    </Grid>

                    <Grid item>

                    </Grid>

                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            Calcular
                        </Button>
                    </Grid>

                    <div className={styles.result}>
                        
                    </div>
                </Grid>
            </Container>
        </div>
    );

};