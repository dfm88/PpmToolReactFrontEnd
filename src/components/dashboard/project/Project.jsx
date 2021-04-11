import { Grid, Paper, Typography } from "@material-ui/core";
import { React, useEffect } from "react";
import ButtonsGroupManage from "./ButtonsGroupManage";
//import { connect } from "react-redux";

const Project = (props) => {
  const { progetto } = props;
  return (
    <Grid item>
      <Grid
        style={{ padding: "15px 15px 15px 15px", backgroundColor: "#dae5ed" }}
        container
        item
        spacing={5}
      >
        <Grid item xs={2} sm={2}>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            {progetto.projectIdentifier}
          </Typography>
        </Grid>
        <Grid item xs={8} sm={6}>
          <Typography variant="h6">{progetto.projectName}</Typography>
          <Typography variant="subtitle1" style={{ color: "gray" }}>
            {progetto.description}
          </Typography>
        </Grid>
        <Grid item xs={2} sm={4}>
          <ButtonsGroupManage project={progetto} />
        </Grid>
      </Grid>
    </Grid>
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
