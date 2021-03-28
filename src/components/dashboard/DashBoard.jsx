import { Divider, Grid, Typography } from "@material-ui/core";
import React from "react";
import ButtonCreate from "./ButtonCreate";

import Project from "./project/Project";

const Dashboard = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h3" style={{ textAlign: "center" }}>
          Projects
        </Typography>
      </Grid>
      <Grid container direction="column" spacing={3}>
        <Grid
          item
          container
          xs={12}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <ButtonCreate />
        </Grid>
        <Divider />
        <Grid item xs={12}>
          <Project />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
