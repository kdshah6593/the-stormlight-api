import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Introduction from './overviewPages/Introduction';
import CurrentVersion from './overviewPages/CurrentVersion';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
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
        <Tab label="Introduction" {...a11yProps(0)} />
        <Tab label="Current Version" {...a11yProps(1)} />
        <Tab label="Authentication" {...a11yProps(2)} />
        <Tab label="Pagination" {...a11yProps(3)} />
        <Tab label="Rate Limiting" {...a11yProps(4)} />
        <Tab label="Caching" {...a11yProps(5)} />
        <Tab label="Versioning" {...a11yProps(6)} />
      </Tabs>

      {/* <div style={{display: 'flex', flexDirection: 'column', padding: 20}}>
        <Introduction />
        <CurrentVersion />
      </div> */}

      <TabPanel value={value} index={0}>
        <Introduction />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CurrentVersion />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Authentication
      </TabPanel>
      <TabPanel value={value} index={3}>
        Pagination
      </TabPanel>
      <TabPanel value={value} index={4}>
        Rate Limiting
      </TabPanel>
      <TabPanel value={value} index={5}>
        Caching
      </TabPanel>
      <TabPanel value={value} index={6}>
        Versioning
      </TabPanel>
    </div>
  );
}

export default OverviewPage;