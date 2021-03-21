import { Button, Grid, Card, Paper, CardContent } from "@material-ui/core";
import React from "react";
import ButtonsGroupManage from "./ButtonsGroupManage";

const Project = () => {
  return (
    <>
   
      <Paper elevation={2} style={{backgroundColor:'#dae5ed'}}>
        <Grid
          style={{ padding: "15px 15px 15px 15px" }}
          container
          spacing={3}
          justify="space-between"
        >
          <Grid item md={4}>
            1
          </Grid>
          <Grid item md={4}>
            Titolo
          </Grid>
          <Grid item md={4}>
            <ButtonsGroupManage />
          </Grid>
        </Grid>
        </Paper>
      
    </>
  );
};

export default Project;
