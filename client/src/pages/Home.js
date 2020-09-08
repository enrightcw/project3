import React from "react";
import Footer from '../components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button  display="inline" variant="contained" color="primary" component={Link} to='/search'>
        Food
      </Button>
      <Button  display="inline" variant="contained" color="secondary" component={Link} to='/search'>
        Activities
      </Button>
      <Footer />
    </div>
    
  );
}

export default Home;
