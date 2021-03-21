import { Paper } from "@material-ui/core";
import { Grid, Hidden } from "@material-ui/core";
import React from "react";
import ProjectTask from "./ProjectTask";

function ProjectTasksBoard() {
  return (
    <Grid container spacing={2} style={{ padding: "15px 15px 15px 15px" }}>
      <Hidden smDown>
        <Grid item md={1} xs={0}></Grid>
      </Hidden>

      <Grid item md={3} sm={4} xs={12}>
        <Paper
          style={{
            textAlign: "center",
            backgroundColor: "#acb7bf",
            padding: "15px 15px 15px 15px",
          }}
        >
          TO DO
        </Paper>
        <ProjectTask />
      </Grid>

      <Grid item md={3} sm={4} xs={12}>
        <Paper
          style={{
            textAlign: "center",
            backgroundColor: "#4a88b5",
            padding: "15px 15px 15px 15px",
            color: "white",
          }}
        >
          IN PROGESS
        </Paper>
        <ProjectTask />
      </Grid>

      <Grid item md={3} sm={4} xs={12}>
        <Paper
          style={{
            textAlign: "center",
            backgroundColor: "#5bc288",
            padding: "15px 15px 15px 15px",
          }}
        >
          DONE
        </Paper>
        <ProjectTask />
      </Grid>
      <Hidden smDown>
        <Grid item md={1} xs={0}></Grid>
      </Hidden>
    </Grid>
  );
}

export default ProjectTasksBoard;
