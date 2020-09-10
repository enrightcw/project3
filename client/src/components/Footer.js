import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HistoryIcon from '@material-ui/icons/History';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ContactsIcon from '@material-ui/icons/Contacts';
import HomeIcon from '@material-ui/icons/Home';


const useStyles = makeStyles({
  footer: {
      position: "fixed",
      left: 0,
      bottom: 0,
      color: "white",
      textAlign: "center !important",
      width: "100%"
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const pathname = window.location.pathname; // in case user visits the path directly. The BottomNavBar is able to follow suit.
  const [value, setValue] = React.useState(pathname);
  const handleChange = (event, newValue) => {
    console.log("change handled")
    setValue(newValue);
  }

  return (
    <footer className ={classes.footer}>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        showLabels
        className={classes.root}
        style={{
          backgroundColor: '#3fa9f5'
        }}
      >
        <BottomNavigationAction component={Link} to='/home'  label="Home" style={{color: 'white'}} icon={<HomeIcon style={{color: 'white'}}/>} />    
        <BottomNavigationAction component={Link} to='/friends' label="Friends" style={{color: 'white'}}  icon={<ContactsIcon style={{color: 'white'}}/>} />
        <BottomNavigationAction component={Link} to='/history' label="History" style={{color: 'white'}} icon={<HistoryIcon style={{color: 'white'}}/>} />
        <BottomNavigationAction component={Link} to='/profile' label="Profile" style={{color: 'white'}} icon={<AccountBoxIcon style={{color: 'white'}}/>} />
      </BottomNavigation>
   
    </footer>
  );
}
