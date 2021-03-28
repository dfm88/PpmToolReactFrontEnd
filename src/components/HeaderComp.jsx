import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Hidden,
  MenuItem,
} from "@material-ui/core";
import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import MenuIcon from "@material-ui/icons/Menu";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiIconButton-colorSecondary": {
      color: "white",
    },
  },
}));

const HeaderComp = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleFunction = () => {
    setOpenDrawer(!openDrawer);
  };
  const drawerItems = [
    {
      text: "Login",
      icon: <VpnKeyIcon />,
    },
    {
      text: "Signup",
      icon: <AccountCircleIcon />,
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <MenuItem component={Link} to="dashboard">
            <Hidden xsDown={true}>
              <Typography variant="h6">
                Personal Project Management Tool&ensp;&ensp;
              </Typography>
            </Hidden>
            <Hidden smUp={true}>
              <Typography variant="h6">PPM Tool&ensp;&ensp;</Typography>
            </Hidden>
            <Typography variant="subtitle1">Dashboard</Typography>
          </MenuItem>

          <Box flexGrow={1} />
          <Hidden smDown={true}>
            <Button color="inherit" className={classes.title}>
              Sign Up
            </Button>
            <Button component={Link} to="/login" color="inherit">
              Login
            </Button>
          </Hidden>
          <Hidden mdUp={true}>
            <IconButton onClick={toggleFunction} color="secondary">
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
        <Drawer
          open={openDrawer}
          anchor="top"
          variant="temporary"
          onClose={toggleFunction}
        >
          <List>
            {drawerItems.map((item) => (
              <ListItem button key={item.text}>
                <ListItemIcon>{item.icon}</ListItemIcon>

                <ListItemText>{item.text}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </AppBar>
    </div>
  );
};

export default HeaderComp;
