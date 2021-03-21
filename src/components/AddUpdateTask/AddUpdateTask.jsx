import { Divider, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React from "react";
import MyTextField from "./../FormsCompPersonalized/MyTextField";
import MySubmitButton from "./../FormsCompPersonalized/MySubmitButton";
import MyDateTimeField from "./../FormsCompPersonalized/MyDateTimeField";
import MySelectField from "./../FormsCompPersonalized/MySelectField";
import { Form, Formik, useField, useFormikContext } from "formik";
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

const priorityList = ["High", "Medium", "Low"];

const statusList = ["TO DO", "IN PROGRESS", "LOW"];

function AddUpdateTask() {
  return (
    <>
      <Button style={{ color: "grey" }}>{`< Back to Project Board`}</Button>
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
                    Add /Update Project Task
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" style={{ textAlign: "center" }}>
                    Project Name + Project Code
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
                    name="name"
                    multiline
                    rows={3}
                    rowsMax={5}
                    label="Note"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item sm={2} xs={0}></Grid>

                <Grid item sm={2} xs={0}></Grid>
                <Grid item sm={8} xs={12}>
                  <MyDateTimeField
                    type="date"
                    name="date"
                    label="Data Segnalazione"
                  />
                </Grid>
                <Grid item sm={2} xs={0}></Grid>

                <Grid item sm={2} xs={0}></Grid>
                <Grid item sm={8} xs={12}>
                  <MySelectField
                    name="caller"
                    listToBeRendered={priorityList}
                    label="Select Priority"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item sm={2} xs={0}></Grid>

                <Grid item sm={2} xs={0}></Grid>
                <Grid item sm={8} xs={12}>
                  <MySelectField
                    name="caller"
                    listToBeRendered={statusList}
                    label="Select Status"
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
    </>
  );
}

export default AddUpdateTask;
