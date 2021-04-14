import { Button, ButtonGroup, Typhography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Typography } from "@material-ui/core";
import { Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Actions from "../../../redux/actions/index";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "start",
  },
}));

const ButtonsGroupManage = (props) => {
  const classes = useStyles();
  const { project } = props;
  const { projectIdentifier } = project;

  const dispatch = useDispatch();

  const handleDeleteProject = () => {
    if (window.confirm("Are you sure to DELETE the whole project??")) {
      dispatch(Actions.PROJECTS.deleteProjectAction(projectIdentifier));
    }
  };

  return (
    <>
      <ButtonGroup orientation="vertical" style={{ backgroundColor: "white" }}>
        <Button
          startIcon={<DeveloperBoardIcon />}
          color="default"
          variant="outlined"
          className={classes.root}
        >
          <Hidden xsDown={true}>
            <Typography> Project Board</Typography>
          </Hidden>
        </Button>
        <Button
          className={classes.root}
          startIcon={<EditIcon />}
          color="primary"
          variant="outlined"
          component={Link}
          to={{
            pathname: `/editproject/${project.projectIdentifier}`,

            state: {
              projectIdentifier,
            },
          }}
        >
          <Hidden xsDown={true}>
            <Typography> Update Info</Typography>
          </Hidden>
        </Button>
        <Button
          className={classes.root}
          startIcon={<DeleteForeverIcon />}
          color="secondary"
          variant="outlined"
          onClick={handleDeleteProject}
        >
          <Hidden xsDown={true}>
            <Typography> Delete Project</Typography>
          </Hidden>
        </Button>
      </ButtonGroup>
    </>
  );
};

export default ButtonsGroupManage;
