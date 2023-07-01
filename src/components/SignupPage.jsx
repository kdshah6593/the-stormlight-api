import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import Footer from "./Footer";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Button from "@material-ui/core/Button";
import BackgroundImage3 from "../images/radiant-symbols.jpg";
import Grid from "@material-ui/core/Grid";
import { Link as RouteLink } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, firestore } from "../utils/firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: `url(${BackgroundImage3})`,
    backgroundRepeat: "repeat",
    backgroundSize: "20%",
  },
  signupContainer: {
    width: "30%",
    height: "65vh",
    marginTop: "12vh",
    marginBottom: "13vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  signupForm: {
    display: "flex",
    flexDirection: "column",
    width: "75%",
    alignItems: "center",
    marginBottom: "3vh",
  },
  signupHeader: {
    marginTop: "5vh",
    fontFamily: "'Oswald', sans-serif",
    letterSpacing: "1px",
    fontSize: "40px",
  },
  btn: {
    backgroundColor: "#fff",
    color: "#00838f",
    width: "30%",
    padding: theme.spacing(3, 1, 3, 0),
    borderRadius: "25px",
    border: "2px solid #00838f",
    cursor: "pointer",
    margin: theme.spacing(3, 5, 0, 5),
    "&:hover": {
      backgroundColor: "#00838f",
      color: "#fff",
    },
  },
  loginLink: {
    textDecoration: "none",
    fontFamily: "'Oswald', sans-serif",
    color: "#000",
    "&:hover": {
      color: "#00838f",
    },
  },
}));

const SignupPage = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  /* Sign Up Function */
  const signUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await addDoc(collection(firestore, "users"), {
        uid: user.uid,
        email: user.email,
      });
      return true;
    } catch (error) {
      return { error: error.message };
    }
  };

  const handleSubmit = (e) => {
    console.log("Sign Up Form Submitted");
    // add a check that password and confirm password equal each other
    signUp();
  };

  return (
    <div>
      <Header />
      <Container maxWidth="false" className={classes.root}>
        <Paper elevation={0} className={classes.signupContainer}>
          <Typography className={classes.signupHeader}>
            Create An Account
          </Typography>
          <form className={classes.signupForm} onSubmit={handleSubmit}>
            <TextField
              id="email"
              label="Email"
              name="email"
              type="email"
              variant="filled"
              required
              fullWidth
              margin="normal"
              onChange={handleEmail}
              value={email}
            />
            <TextField
              id="password"
              label="Password"
              name="username"
              type="password"
              variant="filled"
              required
              fullWidth
              margin="normal"
              onChange={handlePassword}
              value={password}
            />
            <TextField
              id="password-confirmation"
              label="Confirm Password"
              name="password-confirmation"
              type="password"
              variant="filled"
              required
              fullWidth
              margin="normal"
              onChange={handleConfirmPassword}
              value={confirmPassword}
            />
            <Button
              variant="contained"
              disableElevation
              type="submit"
              className={classes.btn}
              endIcon={<ArrowForwardIcon style={{ fontSize: 40 }} />}
            />
          </form>

          <Grid container justify="center">
            <Grid item>
              <RouteLink to={`/login`} className={classes.loginLink}>
                {"Already Have An Account? Log In"}
              </RouteLink>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <Footer />
    </div>
  );
};

export default SignupPage;
