import { Grid, Paper, Typography } from "@material-ui/core";
import { React, useEffect } from "react";
import ButtonsGroupManage from "./ButtonsGroupManage";
//import { connect } from "react-redux";

const Project = (props) => {
  const { progetti } = props;
  return (
    <>
      <Grid
        style={{ padding: "15px 15px 15px 15px", backgroundColor: "#dae5ed" }}
        item
        container
        spacing={5}
        component={Paper}
      >
        <Grid item md={4}>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            {progetti.projectIdentifier}
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Typography variant="h6">{progetti.projectName}</Typography>
          <Typography variant="subtitle1" style={{ color: "gray" }}>
            {progetti.description}
          </Typography>
        </Grid>
        <Grid item md={4}>
          <ButtonsGroupManage />
        </Grid>
      </Grid>
    </>
  );
};

//const mapStateToPros = ({
//  loadingReducer,
// projectsReducer,
//  errorsReducer,
//}) => ({
// loadingReducer,
//  projectsReducer,
// errorsReducer,
//});

//export default connect(mapStateToPros, null)(Project);

export default Project;
