import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


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
        <LinkTab label="Root" href="#" {...a11yProps(0)} className={classes.tab} />
        <LinkTab label="Books" href="#" {...a11yProps(1)} className={classes.tab} />
        <LinkTab label="Characters" href="#" {...a11yProps(2)} className={classes.tab} />
        <LinkTab label="Essences" href="#" {...a11yProps(3)} className={classes.tab} />
        <LinkTab label="Surges" href="#" {...a11yProps(4)} className={classes.tab} />
        <LinkTab label="Order of the Knights Radiant" href="#" {...a11yProps(5)} className={classes.tab} />
        <LinkTab label="Heralds" href="#" {...a11yProps(6)} className={classes.tab} />
        <LinkTab label="Nations" href="#" {...a11yProps(7)} className={classes.tab} />
        <LinkTab label="Races" href="#" {...a11yProps(8)} className={classes.tab} />
      </Tabs>

      <div className={classes.sections}>

      </div>
    </div>
  );
}

export default ResourcesPage;