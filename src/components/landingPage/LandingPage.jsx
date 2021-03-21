import { Divider } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import React from 'react'

function LandingPage() {
    return (
        <>
        <Grid container justify='center' alignItems='center' spacing= {2} direction='column'>
            <h1>Personal Project Management</h1>
            <h4>Create your account to join active projects or start you own</h4>
           
            <Grid container item spacing={2}  justify='center'>
            <Grid item>
                <Button variant="contained" color="primary" >Sign Up</Button>
            </Grid>
            <Grid item  >
                <Button variant="contained" color="default">Login</Button>
            </Grid>
            </Grid>
        </Grid>
        
        </>
    )   
}

export default LandingPage
