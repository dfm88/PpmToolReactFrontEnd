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
  projectName: "",
  projectIdentifier: "",
  description: "",
  start_date: new Date().toISOString().slice(0, 10),
  end_date: "",
};

const VALIDATION_SCHEMA = Yup.object({
  projectName: Yup.string().required("Campo Obbligatorio"),
  projectIdentifier: Yup.string().required("Campo Obbligatorio").max(5).min(5),
  description: Yup.string().required("Campo Obbligatorio"),
  start_date: Yup.date().required("Campo Obbligatorio"),
  end_date: Yup.date().when(
    "startDate",
    (start_date, yup) =>
      start_date && yup.min(start_date, "End date cannot be before start date")
  ),
});

const createProject = (values) => ({
  projectName: values.projectName,
  projectIdentifier: values.projectIdentifier,
  description: values.description,
  start_date: values.start_date,
  end_date: values.end_date,
});

function CreateEditProj() {
  return (
    <>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={VALIDATION_SCHEMA}
        onSubmit={(values) => {
          console.log(values);
          const proj = createProject(values);
          console.log("PREOJ", proj);
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
                    Create / Edit Project form
                  </Typography>
                </Grid>

                <Grid item sm={2} xs={0}></Grid>
                <Grid item sm={8} xs={12}>
                  <MyTextField
                    name="projectName"
                    label="Project Name"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item sm={2} xs={0}></Grid>

                <Grid item sm={2} xs={0}></Grid>
                <Grid item sm={8} xs={12}>
                  <MyTextField
                    name="projectIdentifier"
                    label="Unique Project ID"
                    fullWidth={true}
                    disabled={false}
                    style={{ backgroundColor: "#e4e8eb" }}
                  />
                </Grid>
                <Grid item sm={2} xs={0}></Grid>

                <Grid item sm={2} xs={0}></Grid>
                <Grid item sm={8} xs={12}>
                  <MyTextField
                    name="description"
                    multiline
                    rows={2}
                    rowsMax={4}
                    label="Project Description"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item sm={2} xs={0}></Grid>

                <Grid item sm={2} xs={0}></Grid>
                <Grid item sm={8} xs={12}>
                  <MyDateTimeField
                    type="date"
                    name="start_date"
                    label="Start Date"
                  />
                </Grid>
                <Grid item sm={2} xs={0}></Grid>

                <Grid item sm={2} xs={0}></Grid>
                <Grid item sm={8} xs={12}>
                  <MyDateTimeField
                    type="date"
                    name="end_date"
                    label="Estimated End Date"
                  />
                </Grid>
                <Grid item sm={2} xs={0}></Grid>

                <Grid item sm={2} xs={0}></Grid>
                <Grid item sm={8} xs={12}>
                  <MySubmitButton
                    variant="contained"
                    color="primary"
                    fullWidth={true}
                    size="big"
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

export default CreateEditProj;
