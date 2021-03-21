import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { Grid, CardActions } from "@material-ui/core";
import React from "react";

function ProjectTask() {
  return (
    <Grid direction="column" spacing={1}>
      <Card>
        <CardHeader title="header" />
        <CardContent>content</CardContent>
        <CardActions>actions</CardActions>
      </Card>
    </Grid>
  );
}

export default ProjectTask;
