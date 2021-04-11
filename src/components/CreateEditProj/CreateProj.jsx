import { Typography, Divider } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Grid } from "@material-ui/core";
import React from "react";
import MyTextField from "../FormsCompPersonalized/MyTextField";
import MySubmitButton from "../FormsCompPersonalized/MySubmitButton";
import MyDateTimeField from "../FormsCompPersonalized/MyDateTimeField";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import Actions from "../../redux/actions/index";

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

function CreateProj(props) {
  const dispatch = useDispatch();
  const handleAddProject = (values, history) => {
    dispatch(Actions.PROJECTS.addProjectAction(values, history));
  };

  const errori = useSelector((state) => state.errorsReducer);
  console.log("errori", errori);
  if (Object.keys(errori).length !== 0) {
    console.log("errori2", errori);
  }

  return (
    <>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={VALIDATION_SCHEMA}
        onSubmit={(values) => {
          console.log("PREOJ", values);

          handleAddProject(values, props.history);
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
                spacing={2}
              >
                <Grid item xs={12}>
                  <Typography variant="h3" style={{ textAlign: "center" }}>
                    Create Project form
                  </Typography>
                </Grid>

                <Grid item md={3} sm={2} xs={false} />
                <Grid item md={6} sm={8} xs={12}>
                  <Divider />
                </Grid>
                <Grid item md={3} sm={2} xs={false} />

                <Grid item md={3} sm={2} xs={false} />
                <Grid item md={6} sm={8} xs={12}>
                  <MyTextField
                    name="projectName"
                    label="Project Name"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={3} sm={2} xs={false} />

                <Grid item md={3} sm={2} xs={false} />
                <Grid item md={6} sm={8} xs={12}>
                  <MyTextField
                    name="projectIdentifier"
                    label="Unique Project ID"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={3} sm={2} xs={false} />
                <Grid item md={3} sm={2} xs={false} />

                <Grid item md={6} sm={8} xs={12}>
                  <MyTextField
                    name="description"
                    multiline
                    rows={2}
                    rowsMax={4}
                    label="Project Description"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={3} sm={2} xs={false} />
                <Grid item md={3} sm={2} xs={false} />

                <Grid item md={6} sm={8} xs={12}>
                  <MyDateTimeField
                    type="date"
                    name="start_date"
                    label="Start Date"
                  />
                </Grid>
                <Grid item md={3} sm={2} xs={false} />
                <Grid item md={3} sm={2} xs={false} />

                <Grid item md={6} sm={8} xs={12}>
                  <MyDateTimeField
                    type="date"
                    name="end_date"
                    label="Estimated End Date"
                  />
                </Grid>
                <Grid item md={3} sm={2} xs={false} />
                <Grid item md={3} sm={2} xs={false} />

                <Grid item md={6} sm={8} xs={12}>
                  <MySubmitButton
                    variant="contained"
                    color="primary"
                    fullWidth={true}
                    size="big"
                  >
                    Submit
                  </MySubmitButton>
                </Grid>
                <Grid item md={3} sm={2} xs={false} />
                <Grid item>
                  {Object.keys(errori).length === 0 ? (
                    <div></div>
                  ) : (
                    <Alert severity="warning">
                      {JSON.stringify(errori)}
                      ff
                    </Alert>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default CreateProj;
