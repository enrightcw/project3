import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
  const [value, setValue] = React.useState(0);

  return (
    <footer className ={classes.footer}>
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Friends" icon={<ContactsIcon />} />
      <BottomNavigationAction label="History" icon={<HistoryIcon />} />
      <BottomNavigationAction label="Profile" icon={<AccountBoxIcon />} />
    </BottomNavigation>
    </footer>
  );
}
