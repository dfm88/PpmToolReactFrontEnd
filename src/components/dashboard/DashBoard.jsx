import { Paper, Grid, Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { React, useEffect } from "react";

import ButtonCreate from "./ButtonCreate";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Project from "./project/Project";
import Actions from "../../../src/redux/actions/index";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
}));

const Dashboard = (props) => {
  const classes = useStyles();
  const progetti = useSelector((state) => state.projectsReducer.projects);
  const isLoading = useSelector((state) => state.loadingReducer);
  //const isLoading = true;
  console.log("PROGETTI1", progetti);
  console.log("PROGETTI2", props.projectsReducer);
  const dispatch = useDispatch();

  //SIMULO RITARDO DEL SERVER
  useEffect(() => {
    dispatch(Actions.PROJECTS.loadProjectAction());
  }, []);

  return (
    <>
      <Grid container direction="row" className={classes.root}>
        <Hidden xsDown>
          <Grid item sm={1} />
        </Hidden>
        <Grid item xs={12} sm={10} container direction="column" spacing={4}>
          <Grid item>
            <Typography variant="h3" style={{ textAlign: "center" }}>
              Projects
            </Typography>
          </Grid>

          <Grid item>
            <ButtonCreate />
          </Grid>
          <Grid item container direction="column" spacing={2}>
            {isLoading ? (
              <>
                <Grid item>
                  <Skeleton variant="rect" height={190} />
                </Grid>
                <Grid item>
                  <Skeleton variant="rect" height={190} />
                </Grid>
                <Grid item>
                  <Skeleton variant="rect" height={190} />
                </Grid>
              </>
            ) : progetti.length === 0 ? (
              <div>Nessun Progetto</div>
            ) : (
              progetti.map((proj, index) => {
                return (
                  <Grid item key={index}>
                    <Project progetto={proj} />;
                  </Grid>
                );
              })
            )}
          </Grid>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={1} />
        </Hidden>
      </Grid>
      {/*FINE*/}
    </>
  );
};

export default Dashboard;
