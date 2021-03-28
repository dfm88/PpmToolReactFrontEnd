import { Grid, Typography } from "@material-ui/core";
import React from "react";
import MyTextField from "../FormsCompPersonalized/MyTextField";
import MySubmitButton from "../FormsCompPersonalized/MySubmitButton";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
  passwordConf: "",
};

const VALIDATION_SCHEMA = Yup.object({
  name: Yup.string().required("Campo Obbligatorio"),
  email: Yup.string().required("Campo Obbligatorio").email(),
  password: Yup.string().required("Campo Obbligatorio"),
  passwordConf: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

function Submit() {
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, errors, isValid, meta }) => (
        <Form>
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
          >
            <Grid
              item
              container
              justify="center"
              alignItems="stretch"
              spacing={1}
            >
              <Grid item xs={12}>
                <Typography variant="h3" style={{ textAlign: "center" }}>
                  Sign Up
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" style={{ textAlign: "center" }}>
                  Create Your Account
                </Typography>
              </Grid>

              <Grid item sm={2} xs={0}></Grid>
              <Grid item sm={8} xs={12}>
                <MyTextField name="name" label="Name" fullWidth={true} />
              </Grid>
              <Grid item sm={2} xs={0}></Grid>

              <Grid item sm={2} xs={0}></Grid>
              <Grid item sm={8} xs={12}>
                <MyTextField
                  name="email"
                  label="Email Address"
                  fullWidth={true}
                />
              </Grid>
              <Grid item sm={2} xs={0}></Grid>
              <Grid item sm={2} xs={0}></Grid>
              <Grid item sm={8} xs={12}>
                <MyTextField
                  name="password"
                  label="Password"
                  fullWidth={true}
                />
              </Grid>
              <Grid item sm={2} xs={0}></Grid>
              <Grid item sm={2} xs={0}></Grid>
              <Grid item sm={8} xs={12}>
                <MyTextField
                  name="passwordConf"
                  label="Confirm Password"
                  fullWidth={true}
                />
              </Grid>
              <Grid item sm={2} xs={0}></Grid>

              <Grid item sm={2} xs={0}></Grid>
              <Grid item sm={8} xs={12}>
                <MySubmitButton
                  variant="contained"
                  color="primary"
                  fullWidth={true}
                >
                  Submit
                </MySubmitButton>
              </Grid>
              <Grid item sm={2} xs={0}></Grid>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default Submit;
