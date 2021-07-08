import { useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import { FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import CalculationF from '../components/CalculationF';
import CalculationK from '../components/CalculationK';
import styles from '../styles/converter.module.scss';

export default function Converter() {
    const [state, setState] = useState({
        F: true,
        K: false
    });

    const handleChangeF = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            F: true,
            K: false,
        });
    };

    const handleChangeK = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            F: false,
            K: true
        });
    };

    return(
        <div className={styles.converter_area}>
            <Container maxWidth="xs">
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <FormControl>
                            <FormLabel component="legend">Converter Grau Celsius para:</FormLabel>
                            <FormGroup row>
                                <FormControlLabel 
                                    control={<Checkbox color="primary" checked={state.F} onChange={handleChangeF} name="fahrenheit" />}
                                    label="Fahrenheit"
                                />
                                <FormControlLabel 
                                    control={<Checkbox color="primary" checked={state.K} onChange={handleChangeK} name="kelvin" />}
                                    label="Kelvin"
                                />
                            </FormGroup>
                        </FormControl>
                    </Grid>

                    <Grid item>
                        {state.F ? (
                            <CalculationF />
                        ) : (
                            <CalculationK />
                        )}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );

};