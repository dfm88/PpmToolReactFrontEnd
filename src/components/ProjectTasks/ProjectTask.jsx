import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { Grid, CardActions } from "@material-ui/core";
import React from "react";

function ProjectTask(props) {
  const backGroundCol =
    props.priority === "high"
      ? "#eb534b"
      : props.priority === "medium"
      ? "#eba34b"
      : "#ebde4b";

  console.log("PRIORITA?", props.priority);

  return (
    <Grid item>
      <Card>
        <CardHeader title="header" style={{ backgroundColor: backGroundCol }} />
        <CardContent>
          <Typography variant="h6">content</Typography>
          <Typography variant="p">desciption</Typography>
        </CardContent>
        <CardActions>
          <ButtonGroup size="small">
            <Button color="primary">View / Update</Button>
            <Button color="secondary">Delete</Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ProjectTask;
