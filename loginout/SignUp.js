import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
import {Avatar,Button,CssBaseline,TextField,Typography,Container,Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <PersonIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Form Informaiton
      </Typography>
      <form className={classes.form} noValidate onSubmit ={handleSignUp}>   
          <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                  <TextField 
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="fname"
                      label="First Name"
                      name="fname"
                      autoComplete="fname"
                      autoFocus
                  />
              </Grid>
              <Grid item xs={12} sm={6}>
                  <TextField 
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="lname"
                      label="Last Name"
                      name="lname"
                      autoComplete="lname"
                      autoFocus
                  />
              </Grid>
          </Grid>
        <TextField 
          variant="outlined"
          margin="normal"
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField 
          variant="outlined"
          margin="normal"
          fullWidth
          name="password"
          label="Password"
          id="password"
          type ="password"
          autoFocus
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Submit
        </Button>
      </form>
    </div>
  </Container>
  );
};

export default withRouter(SignUp);