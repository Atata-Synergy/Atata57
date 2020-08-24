import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import img1 from "../Images/cart_order.png";
import { Button } from 'antd';
import OpenOrder from "../orders/OpenOrder"
import ClosedOrder from "../orders/ClosedOrder"

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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    
  },
}));

export default function Orders() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color='secondary:green'>
        <Tabs value={value} onChange={handleChange} aria-label="order tabs"
        >
        
          <Tab label="All Order" {...a11yProps(0)} />
          <Tab label="Opened Order" {...a11yProps(1)} />
          <Tab label="Closed Order" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <center><TabPanel value={value} index={0}>
      <img src={img1} style={{height:'10%', width:'10%'}}/>
        <h2>You have placed no orders yet!</h2>
        <p>
        All your orders will be saved here for you to access their state anytime.
        </p>
        <p>
            <a href='to_cart'><Button type='secondary'>Continue Shopping</Button></a>
        </p>
      </TabPanel></center>
      <TabPanel value={value} index={1}>
      <div>
      <OpenOrder/>
      </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div>
        <OpenOrder/>
        </div>
      </TabPanel>
      
    </div>

  );
}