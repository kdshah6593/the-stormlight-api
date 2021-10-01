import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Footer from './Footer';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';
import BackgroundImage3 from '../images/radiant-symbols.jpg'
import Grid from '@material-ui/core/Grid';
import { Link as RouteLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundImage: `url(${BackgroundImage3})`,
      backgroundRepeat: 'repeat',
      backgroundSize: '20%',
    //   backgroundColor: "#ffefdd",
    },
    loginContainer: {
        width: "30%",
        height: "60vh",
        marginTop: "15vh",
        marginBottom: "15vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    loginForm: {
        display: "flex",
        flexDirection: "column",
        width: "75%",
        alignItems: "center",
        marginTop: "5vh",
        marginBottom: "5vh",
    },
    loginHeader: {
        marginTop:"5vh",
        fontFamily: "'Oswald', sans-serif",
        letterSpacing: "1px",
        fontSize: "40px"
    },
    btn: {
        backgroundColor: "#fff",
        color: "#00838f",
        width: "30%",
        padding: theme.spacing(3,1,3,0),
        borderRadius: "25px",
        border: "2px solid #00838f",
        cursor: "pointer",
        margin: theme.spacing(5,5,0,5),
        '&:hover': {
            backgroundColor: "#00838f",
            color: "#fff"
        }
    },
}));

// NOTES: HAVE THE BUTTON CHANGE TO FILLED (HOVER CURRENTLY) WHEN PASSWORD FIELD CHANGES FROM EMPTY TO SOMETHING

const LoginPage = () => {
    const classes = useStyles();

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsername = (event) => {
        setUsername(event.target.value)
      }
    
      const handlePassword = (event) => {
        setPassword(event.target.value)
      }
    
    const handleSubmit = (e) => {
        console.log("Login Form Submitted")
    }
    
    return (
        <div>
            <Header />
            <Container maxWidth="false" className={classes.root}>
                <Paper elevation={0} className={classes.loginContainer}>
                    <Typography className={classes.loginHeader}>Sign In</Typography>

                    <form className={classes.loginForm} onSubmit={handleSubmit}>
                        <TextField
                            id="username"
                            label="Username"
                            name="username"
                            variant="filled"
                            required
                            fullWidth
                            margin="normal"
                            onChange = {handleUsername}
                            value = {username}
                            inputProps={{
                                style: { fontFamily: "'Oswald', sans-serif" }
                            }}
                            InputProps={{
                                disableUnderline: true,
                            }}
                            InputLabelProps={{
                                style: { 
                                    color: '#000',
                                    fontFamily: "'Oswald', sans-serif",
                                }
                            }}
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
                            onChange = {handlePassword}
                            value = {password}
                            inputProps={{
                                style: { fontFamily: "'Oswald', sans-serif" }
                            }}
                            InputProps={{
                                disableUnderline: true,
                            }}
                            InputLabelProps={{
                                style: { 
                                    color: '#000',
                                    fontFamily: "'Oswald', sans-serif",
                                }
                            }}
                        />
                        <Button variant="contained" disableElevation type="submit" className={classes.btn} endIcon={<ArrowForwardIcon style={{ fontSize: 40 }}/>} />
                    </form>

                    <Grid container justify="center">
                        <Grid item>
                            <RouteLink to={`/signup`} variant="body2">
                            {"Don't have an account? Sign Up"}
                            </RouteLink>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
            <Footer />
        </div>
    )
}

export default LoginPage