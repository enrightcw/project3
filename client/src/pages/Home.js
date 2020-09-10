import React from "react";
import Footer from '../components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Jumbotron from "../components/Jumbotron";
import { Grid } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';

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
      <Jumbotron/>
      <Grid container spacing = {2}>
        <Grid item xs={12}>
          <Container 
            fluid={true} 
            maxWidth="sm" 
            style={{
              height: '150px',
              textAlign: 'center',
              paddingTop: '50px'
            }}
            >
          <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical outlined primary button group"
          >
          <Button  
              display="inline" 
              variant="contained" 
              color="primary" 
              component={Link} 
              to='/search'
              style={{
                backgroundColor: '#f7931e', 
                marginBottom: "20px",
                height: '100px',
                width: '150px'
              }}
              >
                <FastfoodIcon/>
              Food
            </Button>
            <Button  
              display="inline" 
              variant="contained" 
              color="secondary" 
              component={Link} 
              to='/search'
              style={{
                backgroundColor: '#3fa9f5',
                height: '100px',
                width: '150px'
              }}
              >
                <LocalActivityIcon/>
              Activities
            </Button>
          </ButtonGroup>
         
          </Container>
        </Grid>
      </Grid>
      <Footer />
    </div>
    
  );
}

export default Home;
