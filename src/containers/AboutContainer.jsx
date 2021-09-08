import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header'

const useStyles = makeStyles((theme) => ({
    container: {
        marginLeft: '25%',
        marginTop: '5%',
        width: "50%",
        display: "flex",
        flexDirection: "column",
    }
}));

const AboutContainer = () => {

    const classes = useStyles();

    return (
        <div>
            <Header/>
            <div className={classes.container}>
                <h1>About The Stormlight API</h1>
                <p>This API is a source for structured data from the Stormlight Archive universe. I give you access to data about all the Books, Characters, and more in an easy to use JSON format.</p>

                <h2>Who am I?</h2>
                <p>I'm Kunal and I am a full stack web developer. I built this site as a project for myself and because I loved immersing myself in this series. If you have questions or thoughts on how to improve this API, please send me an email.</p>

                <h2>Can I Contribute?</h2>
                <p>Yes, I need the help! If you create a username and password, you will be able to add or edit data. After making 5 contributions, you will gain full editing access that doesn't require review by me.</p>
                <p>If you want to help with the actual frontend or backend of the website, check out the contributing page for instructions.</p>

                <h2>Copyright</h2>
                <p>The Stormlight Archive series and its data is the property of Brandon Sanderson. The data in this API is used without claim of ownership. All of the data has been collected from open free sources such as XXXX and XXXX.</p>
                <p>This project uses a MIT license.</p>
            </div>


        </div>
    )
}

export default AboutContainer;