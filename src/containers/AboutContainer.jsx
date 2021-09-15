import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import Header from '../components/Header'
import Footer from '../components/Footer';

const useStyles = makeStyles((theme) => ({
    container: {
        marginLeft: '25%',
        marginTop: '2%',
        width: "50%",
        display: "flex",
        flexDirection: "column",
        paddingBottom: '3%',
    },
    header: {
        fontSize: '50px',
        fontFamily: "'Cinzel Decorative', cursive",
        letterSpacing: "5px",
        margin: theme.spacing(2,0,2,0),
    },
    subHeader: {
        fontSize: '40px',
        fontFamily: "'Cinzel Decorative', cursive",
        letterSpacing: "5px",
        margin: theme.spacing(2,0,2,0),
    }
}));

const AboutContainer = () => {

    const classes = useStyles();

    return (
        <div>
            <Header/>
            <div className={classes.container}>
                <h1 className={classes.header}>About The Stormlight API</h1>
                <p>This API is a source for structured data from the Stormlight Archive universe. I give you access to data about all the Books, Characters, and more in an easy to use JSON format.</p>

                <h2 className={classes.subHeader}>Who am I?</h2>
                <p>I'm Kunal and I am a full stack web developer. My friend introduced to me to this series and I loved immersing myself in this world. Inspired by the The Game of Thrones API, I wanted to built this for other developers that enjoy the Stormlight Archive. If you have questions or thoughts on how to improve this API, please send me an email.</p>

                <h2 className={classes.subHeader}>Technologies</h2>
                <ul>
                    <li>Rails API</li>
                    <li>React.js</li>
                </ul>

                <h2 className={classes.subHeader}>Can You Contribute?</h2>
                <p>Yes, I need the help! If you create a username and password, you will be able to add or edit data. After making 5 contributions, you will gain full editing access that doesn't require review by me.</p>
                <p>If you want to help with the actual frontend or backend of the website, check out the contributing page for instructions.</p>

                <h2 className={classes.subHeader}>Copyright</h2>
                <p>
                    The Stormlight Archive series and its data is the property of <Link href="https://www.brandonsanderson.com/" target="_blank" rel="noopener" color="error">Brandon Sanderson</Link>. The data in this API is used without claim of ownership. All of the data has been collected from open free sources such as <Link href="https://stormlightarchive.fandom.com/wiki/Stormlight_Archive_Wiki" target="_blank" rel="noopener" color="error">Stormlight Archive Wiki</Link> and <Link href="https://coppermind.net/wiki/The_Stormlight_Archive" target="_blank" rel="noopener" color="error">The Coppermind</Link>.
                </p>
                <p>This project uses a MIT license.</p>
            </div>
            <Footer />
        </div>
    )
}

export default AboutContainer;