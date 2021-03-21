import { Divider } from "@material-ui/core";
import { Button, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React from "react";

function LandingPage() {
  return (
    <>
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={2}
        direction="column"
      >
        <Grid item xs={12}>
          <Typography variant="h4" style={{ textAlign: "center" }}>
            Personal Project Management
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" style={{ textAlign: "center" }}>
            Create your account to join active projects or start you own
          </Typography>
        </Grid>
        <Grid container item spacing={2} justify="center">
          <Grid item>
            <Button variant="contained" color="primary">
              Sign Up
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="default">
              Login
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default LandingPage;
