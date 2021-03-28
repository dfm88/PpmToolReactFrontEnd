import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React from "react";
import MyTextField from "./../FormsCompPersonalized/MyTextField";
import MySubmitButton from "./../FormsCompPersonalized/MySubmitButton";
import MyDateTimeField from "./../FormsCompPersonalized/MyDateTimeField";
import MySelectField from "./../FormsCompPersonalized/MySelectField";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const INITIAL_VALUES = {
  projTaskSummary: "",
  acceptance: "",
  date: "",
  priority: "",
  status: "",
};

const VALIDATION_SCHEMA = Yup.object({
  projTaskSummary: Yup.string().required("Campo Obbligatorio"),
  date: Yup.date().required("Campo Obbligatorio"),
  priority: Yup.string().required("Campo Obbligatorio"),
  status: Yup.string().required("Campo Obbligatorio"),
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
                  <MyTextField
                    name="projTaskSummary"
                    label="Project Task Summary"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item sm={2} xs={0}></Grid>

                <Grid item sm={2} xs={0}></Grid>
                <Grid item sm={8} xs={12}>
                  <MyTextField
                    name="acceptance"
                    multiline
                    rows={3}
                    rowsMax={5}
                    label="Acceptance Criteria"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item sm={2} xs={0}></Grid>

                <Grid item sm={2} xs={0}></Grid>
                <Grid item sm={8} xs={12}>
                  <MyDateTimeField type="date" name="date" label="Due Date" />
                </Grid>
                <Grid item sm={2} xs={0}></Grid>

                <Grid item sm={2} xs={0}></Grid>
                <Grid item sm={8} xs={12}>
                  <MySelectField
                    name="priority"
                    listToBeRendered={priorityList}
                    label="Select Priority"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item sm={2} xs={0}></Grid>

                <Grid item sm={2} xs={0}></Grid>
                <Grid item sm={8} xs={12}>
                  <MySelectField
                    name="status"
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
