import { Divider } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import React from 'react'

function Login() {
    return (
        <>
        <Grid container justify='center' alignItems='center' spacing= {2} >
            <h1>Log In</h1>           
            <Grid item xs={12}>
            
            </Grid>
            <Grid item xs={12}>
                
            </Grid>
            <Grid item container xs={12} >
                <Grid item md={2} xs={1}>
                </Grid>
                <Grid item md={8} xs={10}>
                <Button variant="contained" color="primary" fullWidth={true}>Submit</Button>
                </Grid>
                <Grid item md={2} xs={1}>
                </Grid>
            </Grid>
        </Grid>
      
        
        </>
    )   
}

export default Login
