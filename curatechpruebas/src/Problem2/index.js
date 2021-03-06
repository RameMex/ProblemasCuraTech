import React,{useState} from 'react'
import CountingValleys from './CountingValleys'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
const Problem2 = () =>{
    const [FormData, setFormData] = useState({
        Steps: '',
        StringPath: ''
    })
    const [valles, setValles] = useState(0)
    const funs = (e) =>{
        e.preventDefault();
       setValles(CountingValleys(FormData.Steps,FormData.StringPath));
    }
    const handleChange = (e) =>{
        setFormData({
            ...FormData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <Grid container justify = "center" >
                    <h2>Problema 2</h2>
            </Grid>
            <Grid container justify = "center" spacing={3}>
                <br/>
                <Grid item xs={4}>
                    <Paper elevation={3}>
                        <form onSubmit={funs} noValidate autoComplete="off">
                            <div>
                                <TextField id="outlined-basic" label="Cantidad de pasos" variant="outlined" type='text' name='Steps' onChange={handleChange} />
                                <TextField id="outlined-basic" label="U o D" variant="outlined" type='text' name='StringPath' onChange={handleChange} />
                            </div>
                            <br/>
                            <Button type='submit' variant="contained" justify = "center" color="secondary">Subir</Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
            <Grid justify = "center" item xs={6}>
                <Paper elevation = {5} justify = "center">
                    <h1>Resultado</h1>
                    <h2>{valles}</h2>
                </Paper>
            </Grid>
        </div>
    )
}
export default Problem2;