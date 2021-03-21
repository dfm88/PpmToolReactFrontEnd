import { Button, ButtonGroup, Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "start"
  }
}));

const ButtonsGroupManage = () => {
  const classes = useStyles();
  return (
    <>
      <ButtonGroup orientation="vertical" style={{backgroundColor:'white'}} >
        <Button
          startIcon={<DeveloperBoardIcon />}
          color="default"
          variant="outlined"
          className={classes.root}
        >
          Project Board
        </Button>
        <Button
          className={classes.root}
          startIcon={<EditIcon />}
          color="primary"
          variant="outlined"
        >
          Update Project Info
        </Button>
        <Button
          className={classes.root}
          startIcon={<DeleteForeverIcon />}
          color="secondary"
          variant="outlined"
        >
          Delete Project
        </Button>
      </ButtonGroup>
    </>
  );
};

export default ButtonsGroupManage;
