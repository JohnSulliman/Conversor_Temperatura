import { useState } from 'react';
import { Container, Grid, TextField, Button, Typography } from '@material-ui/core';
import styles from '../styles/converter.module.scss';

export default function CalculationK() {
    const [valor, setValor] = useState(0);
    const [resultK, setResultK] = useState(0);

    function ResultK() {
        const result = valor + 273.15

        setResultK(Number(result))
    };

    return(
        <div className={styles.calculator_area}>
            <Container maxWidth="xs">
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                    <TextField 
                            label="Kelvin"
                            variant="filled"
                            fullWidth
                            type="number"
                            onChange={ ({ target }) => setValor(Number(target.value)) }
                        />
                    </Grid>

                    <Grid item>
                    {!valor ? (
                            <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            Calcular
                        </Button>
                        ) : (
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={() => ResultK()}
                            >
                                Calcular
                            </Button>
                        )}
                    </Grid>

                    <div className={styles.result}>
                        {!resultK ? ("") : (

                            <Typography>
                                Resultado: {resultK} K
                            </Typography>
                        )}
                    </div>
                </Grid>
            </Container>
        </div>
    );

};