import React,{useState} from 'react';
import Logica from './Logica';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
const Problem3 = () =>{
    const [Result, setResult] = useState([])
    // setResult(Logica());
    const su = ()=>{
        setResult(Logica());

    }
    return(
        <div>
            <Grid container justify = "center" >
                    <h2>Problema 3</h2>
            </Grid>
            <Grid container justify = "center" spacing={3}>
                <br/>
                <Grid item xs={4}>
                    <Paper elevation={3}>
                        <Button variant="contained" justify = "center" color="secondary" onClick={su}>Mostrar</Button>
                    </Paper>
                </Grid>
            </Grid>
            <h1>Resultado</h1>
            <ul>
                { Result.map( (x) => { return <li>{x} </li> }) }
            </ul>
        </div>
    )
}
export default Problem3;