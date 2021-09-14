import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import OverviewPage from './OverviewPage';
import ResourcesPage from './ResourcesPage';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={1}>
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



const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: '#00838f',
    color: "#fff"
  },
  tab: {
    fontFamily: "'Oswald', sans-serif",
    letterSpacing: "3px",
  }
});

const DocumentationPage = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                // indicatorColor="#e57373"
                textColor="#000"
                centered
                TabIndicatorProps={{style: {backgroundColor: "#e57373", height: "5px"}}}
            >
                <Tab label="Overview Page" className={classes.tab} />
                <Tab label="Resource Page" className={classes.tab} />
            </Tabs>
        </Paper>

        <TabPanel value={value} index={0}>
            <OverviewPage />
        </TabPanel>
        <TabPanel value={value} index={1}>
            <ResourcesPage />
        </TabPanel>
    </div>
  );
}

export default DocumentationPage;