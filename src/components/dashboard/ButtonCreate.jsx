import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const ButtonCreate = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to="addproject"
    >
      Create a Project
    </Button>
  );
};

export default ButtonCreate;
