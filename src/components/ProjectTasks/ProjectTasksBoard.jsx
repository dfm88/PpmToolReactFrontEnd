import { Paper } from "@material-ui/core";
import { Typography, Button } from "@material-ui/core";
import { Grid, Hidden } from "@material-ui/core";
import React from "react";
import ProjectTask from "./ProjectTask";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import { Divider } from "@material-ui/core";

function ProjectTasksBoard() {
  return (
    <>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Button
            startIcon={<AddCircleRoundedIcon />}
            color="primary"
            variant="outlined"
          >
            Create Project Task
          </Button>
        </Grid>

        <Grid item>
          <Divider />
        </Grid>

        <Grid
          container
          item
          spacing={5}
          style={{ padding: "15px 15px 15px 15px" }}
        >
          <Hidden smDown>
            <Grid item md={1} xs={0}></Grid>
          </Hidden>

          <Grid
            item
            container
            direction="column"
            spacing={3}
            md={3}
            sm={4}
            xs={12}
          >
            <Paper
              style={{
                textAlign: "center",
                backgroundColor: "#acb7bf",
                padding: "15px 15px 15px 15px",
              }}
            >
              <Typography variant="h5">TO DO</Typography>
            </Paper>
            <ProjectTask priority="high" />
          </Grid>

          <Grid
            item
            container
            direction="column"
            spacing={3}
            md={3}
            sm={4}
            xs={12}
          >
            <Paper
              style={{
                textAlign: "center",
                backgroundColor: "#4a88b5",
                padding: "15px 15px 15px 15px",
                color: "white",
              }}
            >
              <Typography variant="h5">IN PROGESS</Typography>
            </Paper>
            <ProjectTask priority="medium" />
          </Grid>

          <Grid
            container
            direction="column"
            spacing={3}
            item
            md={3}
            sm={4}
            xs={12}
          >
            <Paper
              style={{
                textAlign: "center",
                backgroundColor: "#5bc288",
                padding: "15px 15px 15px 15px",
              }}
            >
              <Typography variant="h5"> DONE</Typography>
            </Paper>
            <ProjectTask priority="low" />
          </Grid>
          <Hidden smDown>
            <Grid item md={1} xs={0}></Grid>
          </Hidden>
        </Grid>
      </Grid>
    </>
  );
}

export default ProjectTasksBoard;
