import React from 'react';
import { Avatar, 
  Grid2 as Grid, 
  Button, 
  Box, 
  CssBaseline, 
  TextField, 
  FormControlLabel, 
  Checkbox, 
  Link,
  Container,
  Typography
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function App() {
  const initFromValues = {
    email : "",
    password : "",
    firstName: "",
    lastName: "",
    username: "",
    passwordc: "",
    telephone: ""
  }

  const validationScheme = Yup.object({
    email: Yup.string()
      .email("Не вірний формат пошти")
      .required("Поле обов'язкове"),
    password: Yup.string()
      .min(6, "Пароль повинен містити мінімум 6 символів")
      .required("Поле обов'язкове"),
    passwordc: Yup.string()
      .oneOf([Yup.ref('password'), null], "Паролі мають співпадати")
      .required("Поле обов'язкове")
  })

  function SubmitHandler(values){
    const json = JSON.stringify(values);
    localStorage.setItem("reg", json);
  }

  const formik = useFormik({
    initialValues:initFromValues,
    onSubmit: SubmitHandler,
    validationSchema: validationScheme
  })

  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div >
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
      </Box>

        <Typography component="h1" variant="h5"  sx={{textAlign: "center"}}>
          Sign up
        </Typography>
        <form noValidate onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={formik.values.firstName}
                onChange={formik.handleChange}
                sx={{ width: '175%' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                sx={{ width: '175%' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="username"
                label="Username"
                id="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                sx={{ width: '175%' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{ width: '175%' }}
              />
              {formik.touched.email && formik.errors.email ? (
                <div style={{color: "red"}}>{formik.errors.email}</div>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{ width: '175%' }}password confirmation
              />
              {formik.touched.password && formik.errors.password ? (
                <div style={{color: "red"}}>{formik.errors.password}</div>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="passwordc"
                label="Password confirmation"
                type="password"
                id="passwordc"
                value={formik.values.passwordc}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{ width: '175%' }}
              />
              {formik.touched.passwordc && formik.errors.passwordc ? (
                <div style={{color: "red"}}>{formik.errors.passwordc}</div>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="telephone"
                label="Telephone"
                type="telephone"
                id="telephone"
                value={formik.values.telephone}
                onChange={formik.handleChange}
                sx={{ width: '175%' }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
          disabled={!(formik.isValid && formik.dirty)}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default App;
