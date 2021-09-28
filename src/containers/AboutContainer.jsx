import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import Header from '../components/Header'
import Footer from '../components/Footer';
import ComputerIcon from '@material-ui/icons/Computer';
import BackgroundImage2 from '../images/kaladin-stormlight.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        backgroundColor: "#ffefdd",
    },
    container: {
        marginLeft: '25%',
        marginTop: '2%',
        width: "50%",
        display: "flex",
        flexDirection: "column",
        paddingBottom: '3%',
    },
    headerContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: theme.spacing(8,0,5,0),
        backgroundImage: `url(${BackgroundImage2})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
    },
    header: {
        fontSize: '60px',
        fontFamily: "'Oswald', sans-serif",
        fontWeight: "400",
        letterSpacing: "5px",
        margin: theme.spacing(2,0,2,0),
        color: "#fff",
    },
    subHeader: {
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: '400',
        fontSize: '30px',
        color: "#fff",
        marginLeft: "27%",
        marginRight: "23%",
        // alignText: "center",
    },
    subTitle: {
        fontSize: '40px',
        fontFamily: "'Oswald', sans-serif",
        letterSpacing: "5px",
        margin: theme.spacing(2,0,2,0),
    },
    techList: {
        display: 'flex',
        flexDirection: 'column',
    },
    techListItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    content: {
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: '500',
        fontSize: '20px',
    }
}));

const AboutContainer = () => {

    const classes = useStyles();

    return (
        <div>
            <Header/>
            <div className={classes.root}>
                <div className={classes.headerContainer}>
                    <h1 className={classes.header}>About The Stormlight API</h1>
                    <p className={classes.subHeader}>This API is a source for structured data from the Stormlight Archive universe. I give you access to data about all the Books, Characters, and more in an easy to use JSON format.</p>
                </div>
                <div className={classes.container}>
                    <h2 className={classes.subTitle}>Who am I?</h2>
                    <p className={classes.content}>I'm Kunal and I am a full stack web developer. My friend introduced to me to this series and I loved immersing myself in this world. Inspired by <Link href="https://anapioficeandfire.com/" target="_blank" rel="noopener" color="error">An API of Ice and Fire</Link>, the popular Game of Thrones API, I wanted to build this for other developers that enjoy the Stormlight Archive. If you have questions or thoughts on how to improve this API, please send me an email.</p>

                    <h2 className={classes.subTitle}>Technologies</h2>
                    <p className={classes.content}>This API was built using various technologies.</p>
                    <div className={classes.techList}>
                        <div className={classes.techListItem}><ComputerIcon style={{marginRight: '10px'}}/><p className={classes.content}><strong>Ruby on Rails</strong> - The framework that the API/backend was built on.</p></div>
                        <div className={classes.techListItem}><ComputerIcon style={{marginRight: '10px'}}/><p className={classes.content}><strong>PostgreSQL</strong> - The object-relational database system used to manage all the data.</p></div>
                        <div className={classes.techListItem}><ComputerIcon style={{marginRight: '10px'}}/><p className={classes.content}><strong>React.js</strong> - JavaScript library used to build the frontend.</p></div>
                        <div className={classes.techListItem}><ComputerIcon style={{marginRight: '10px'}}/><p className={classes.content}><strong>Material-UI</strong> - React UI Framework used to design the frontend.</p></div>
                        <div className={classes.techListItem}><ComputerIcon style={{marginRight: '10px'}}/><p className={classes.content}><strong>Firebase</strong> - hosts the frontend page that are interacting with.</p></div>
                    </div>

                    <h2 className={classes.subTitle}>Can You Contribute?</h2>
                    <p className={classes.content}>Yes, I need the help! If you click here: Add/Edit, it will direct you to a form page to add new data or edit preexisting data.</p>
                    <p className={classes.content}>The world of Roshar is huge and constantly needs updating. If you add or edit data, I ask that you please contribute with relevant information. Currently, I am the only one managing it and I don't always have time to review that all the information is correct. Currently, since I am trying to grow the database, I am allowing anyone to add or edit the data without review. There may be developers that use this information for their own projects, so I ask that do not purposefully put false data in the database. I am in the process of creating the ability to sign up as a verified contributor to eliminate the possibility of incorrect data being added.</p>
                    <p className={classes.content}>If you want to help with the actual frontend or backend of the website, check out the Github documentation's contributing page for instructions.</p>

                    <h2 className={classes.subTitle}>Copyright</h2>
                    <p className={classes.content}>
                        The Stormlight Archive series and its data is the property of <Link href="https://www.brandonsanderson.com/" target="_blank" rel="noopener" color="error">Brandon Sanderson</Link>. The data in this API is used without claim of ownership. All of the data has been collected from open free sources such as <Link href="https://stormlightarchive.fandom.com/wiki/Stormlight_Archive_Wiki" target="_blank" rel="noopener" color="error">Stormlight Archive Wiki</Link> and <Link href="https://coppermind.net/wiki/The_Stormlight_Archive" target="_blank" rel="noopener" color="error">The Coppermind</Link>.
                    </p>
                    <p className={classes.content}>This project uses a MIT license.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutContainer;