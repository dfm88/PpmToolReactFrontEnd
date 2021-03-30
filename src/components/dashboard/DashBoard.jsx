import { Divider, Grid, Typography } from "@material-ui/core";
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
  const progetti = useSelector((state) => state.projectsReducer);
  const isLoading = useSelector((state) => state.loadingReducer);
  console.log("PROGETTI1", progetti.lenght);
  console.log("PROGETTI2", props.projectsReducer);
  const dispatch = useDispatch();

  //SIMULO RITARDO DEL SERVER
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(Actions.PROJECTS.loadProjectAction());
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Grid container direction="row" className={classes.root}>
        <Hidden smDown>
          <Grid item xs={1}></Grid>
        </Hidden>
        <Grid item xs={10} container direction="column" spacing={4}>
          <Grid item>
            <Typography variant="h3" style={{ textAlign: "center" }}>
              Projects
            </Typography>
          </Grid>

          <Grid item>
            <ButtonCreate />
          </Grid>

          <Grid item container direction="column" spacing={2}>
            {progetti.length === 0 ? (
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
            ) : (
              progetti.map((item, index) => {
                return (
                  <Grid item key={index}>
                    <Project progetti={item} />
                  </Grid>
                );
              })
            )}
          </Grid>
        </Grid>
        <Hidden smDown>
          <Grid item xs={1}></Grid>
        </Hidden>
      </Grid>
      {/*FINE*/}
    </>
  );
};

export default Dashboard;
