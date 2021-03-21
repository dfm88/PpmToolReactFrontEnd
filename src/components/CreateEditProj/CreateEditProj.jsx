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
  projName: "",
  projId: "",
  projDescr: "",
  startDate: new Date().toISOString().slice(0, 10),
  endDate: "",
};

const VALIDATION_SCHEMA = Yup.object({
  projName: Yup.string().required("Campo Obbligatorio"),
  projId: Yup.string().required("Campo Obbligatorio").max(5).min(5),
  projDescr: Yup.string().required("Campo Obbligatorio"),
  startDate: Yup.date().required("Campo Obbligatorio"),
  endDate: Yup.date(),
});

function CreateEditProj() {
  return (
    <>
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
                    Create / Edit Project form
                  </Typography>
                </Grid>

                <Grid item sm={2} xs={0}></Grid>
                <Grid item sm={8} xs={12}>
                  <MyTextField
                    name="projName"
                    label="Project Name"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item sm={2} xs={0}></Grid>

                <Grid item sm={2} xs={0}></Grid>
                <Grid item sm={8} xs={12}>
                  <MyTextField
                    name="projId"
                    label="Unique Project ID"
                    fullWidth={true}
                    disabled={true}
                    style={{ backgroundColor: "#e4e8eb" }}
                  />
                </Grid>
                <Grid item sm={2} xs={0}></Grid>

                <Grid item sm={2} xs={0}></Grid>
                <Grid item sm={8} xs={12}>
                  <MyTextField
                    name="projDescr"
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
                    name="startDate"
                    label="Start Date"
                  />
                </Grid>
                <Grid item sm={2} xs={0}></Grid>

                <Grid item sm={2} xs={0}></Grid>
                <Grid item sm={8} xs={12}>
                  <MyDateTimeField
                    type="date"
                    name="endDate"
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
