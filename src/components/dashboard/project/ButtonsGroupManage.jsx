import { Button, ButtonGroup, Typhography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Typography } from "@material-ui/core";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "start",
  },
}));

const ButtonsGroupManage = () => {
  const classes = useStyles();
  return (
    <>
      <ButtonGroup orientation="vertical" style={{ backgroundColor: "white" }}>
        <Button
          startIcon={<DeveloperBoardIcon />}
          color="default"
          variant="outlined"
          className={classes.root}
        >
          <Hidden smDown={true}>
            <Typography> Project Board</Typography>
          </Hidden>
        </Button>
        <Button
          className={classes.root}
          startIcon={<EditIcon />}
          color="primary"
          variant="outlined"
        >
          <Hidden smDown={true}>
            <Typography> Update Project Info</Typography>
          </Hidden>
        </Button>
        <Button
          className={classes.root}
          startIcon={<DeleteForeverIcon />}
          color="secondary"
          variant="outlined"
        >
          <Hidden smDown={true}>
            <Typography> Delete Project</Typography>
          </Hidden>
        </Button>
      </ButtonGroup>
    </>
  );
};

export default ButtonsGroupManage;
