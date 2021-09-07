import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Introduction from './overviewPages/Introduction';
import CurrentVersion from './overviewPages/CurrentVersion';
import Authentication from './overviewPages/Authentication';
import Pagination from './overviewPages/Pagination';
import RateLimiting from './overviewPages/RateLimiting';
import Caching from './overviewPages/Caching';
import Versioning from './overviewPages/Versioning';


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
    borderRight: `1px solid ${theme.palette.divider}`,
    overflow: 'visible',
  },
}));

const OverviewPage = () => {
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
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <LinkTab label="Introduction" href="#intro" {...a11yProps(0)} />
        <LinkTab label="Current Version" href="#currentVersion" {...a11yProps(1)} />
        <LinkTab label="Authentication" href="#authentication" {...a11yProps(2)} />
        <LinkTab label="Pagination" href="#pagination" {...a11yProps(3)} />
        <LinkTab label="Rate Limiting" href="#rateLimiting" {...a11yProps(4)} />
        <LinkTab label="Caching" href="#caching" {...a11yProps(5)} />
        <LinkTab label="Versioning" href="#versioning" {...a11yProps(6)} />
      </Tabs>

      <div style={{display: 'flex', flexDirection: 'column', padding: 20}}>
        <a href="#authentication">Jump To Version</a>
        <Introduction id="intro" />
        <CurrentVersion id="currentVersion" />
        <Authentication id="authentication" />
        <Pagination id="pagination" />
        <RateLimiting id="rateLimiting" />
        <Caching id="caching" />
        <Versioning id="versioning" />
      </div>
    </div>
  );
}

export default OverviewPage;