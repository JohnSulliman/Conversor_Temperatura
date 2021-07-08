import { useState } from 'react';
import { Container, Grid, TextField, Button, Typography } from '@material-ui/core';
import styles from '../styles/converter.module.scss';

export default function CalculationF() {
    const [valor, setValor] = useState(0);
    const [resultF, setResultF] = useState(0);

    function ResultF() {
        const result = ( valor * 1.8 ) + 32 

        setResultF(Number(result))
    };

    return(
        <div className={styles.calculator_area}>
            <Container maxWidth="xs">
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                    <TextField 
                            label="Fahrenheit"
                            variant="filled"
                            fullWidth
                            type="number"
                            onChange={ ({ target }) => setValor(Number(target.value)) }
                        />
                    </Grid>

                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={() => ResultF()}
                        >
                            Calcular
                        </Button>
                    </Grid>

                    <div className={styles.result}>
                        {!resultF ? ("") : (

                        <Typography>
                            Resultado: {resultF} °F
                        </Typography>
                        )}
                    </div>
                </Grid>
            </Container>
        </div>
    );

};