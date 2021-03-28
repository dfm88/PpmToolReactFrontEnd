import { Grid, Paper } from "@material-ui/core";
import React from "react";
import ButtonsGroupManage from "./ButtonsGroupManage";
import { useSelector, useDispatch } from "react-redux";
//import { connect } from "react-redux";
import Actions from "../../../redux/actions/index";

const Project = (props) => {
  const progetti = useSelector((state) => state.projectsReducer);
  console.log("PROGETTI1", progetti);
  console.log("PROGETTI2", props.projectsReducer);
  const dispatch = useDispatch();

  dispatch(Actions.PROJECTS.loadProjectAction());

  return (
    <>
      <Paper elevation={2} style={{ backgroundColor: "#dae5ed" }}>
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

/*
const mapStateToPros = ({
  loadingReducer,
  projectsReducer,
  errorsReducer,
}) => ({
  loadingReducer,
  projectsReducer,
  errorsReducer,
});

export default connect(mapStateToPros, null)(Project);
*/
export default Project;
