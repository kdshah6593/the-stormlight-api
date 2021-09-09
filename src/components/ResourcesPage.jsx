import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Root from './resourcePages/Root';
import Books from './resourcePages/Books';
import Characters from './resourcePages/Characters';
import Essences from './resourcePages/Essences';
import Surges from './resourcePages/Surges';
import OrdersOfTheKnightsRadiant from './resourcePages/OrdersOfTheKnightsRadiant';
import Heralds from './resourcePages/Heralds';
import Nations from './resourcePages/Nations';
import Races from './resourcePages/Races';


function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    // borderRight: `1px solid ${theme.palette.divider}`,
    overflow: 'visible',
    width: '200px',
    position: 'fixed',
    // zIndex: 1,
    // overflowX: 'hidden',
  },
  sections: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 20,
    marginLeft: '200px',
  },
  tab: {
    border: `1px solid ${theme.palette.divider}`,
    fontFamily: "'Oswald', sans-serif",
    letterSpacing: "1px",
  }
}));

const ResourcesPage = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        indicatorColor="#fff"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <LinkTab label="Root" href="#root" {...a11yProps(0)} className={classes.tab} />
        <LinkTab label="Books" href="#books" {...a11yProps(1)} className={classes.tab} />
        <LinkTab label="Characters" href="#characters" {...a11yProps(2)} className={classes.tab} />
        <LinkTab label="Essences" href="#essences" {...a11yProps(3)} className={classes.tab} />
        <LinkTab label="Surges" href="#surges" {...a11yProps(4)} className={classes.tab} />
        <LinkTab label="Orders of the Knights Radiant" href="#ordersOfTheKnightsRadiant" {...a11yProps(5)} className={classes.tab} />
        <LinkTab label="Heralds" href="#heralds" {...a11yProps(6)} className={classes.tab} />
        <LinkTab label="Nations" href="#nations" {...a11yProps(7)} className={classes.tab} />
        <LinkTab label="Races" href="#races" {...a11yProps(8)} className={classes.tab} />
      </Tabs>

      <div className={classes.sections}>
        <Root id="root" />
        <Books id="books" />
        <Characters id="characters" />
        <Essences id="essences" />
        <Surges id="surges" />
        <OrdersOfTheKnightsRadiant id="ordersOfTheKnightsRadiant" />
        <Heralds id="heralds" />
        <Nations id="nations" />
        <Races id="races" />
      </div>
    </div>
  );
}

export default ResourcesPage;