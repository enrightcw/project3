import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HistoryIcon from '@material-ui/icons/History';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ContactsIcon from '@material-ui/icons/Contacts';


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
      >
        <BottomNavigationAction component={Link} to='/friends' label="Friends" icon={<ContactsIcon />} />
        <BottomNavigationAction component={Link} to='/history' label="History" icon={<HistoryIcon />} />
        <BottomNavigationAction component={Link} to='/profile' label="Profile" icon={<AccountBoxIcon />} />
      </BottomNavigation>
          {/* <Link className="nav-link" to ="/">Home </Link>
          <Link className="nav-link" to ="/">Food</Link>
          <Link className="nav-link" to ="/entertainment">Entertainment</Link>
          <Link className="nav-link" to ="/friends">Friends</Link> */}
   
    </footer>
  );
}
