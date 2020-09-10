import React from "react";
import Friendslist from "../components/Friendslist";
import Footer from '../components/Footer';
import Jumbotron from "../components/Jumbotron";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';





function Friends() {
  return (
    <div >
      <Jumbotron />
      <Grid container spacing = {2}>
        <Grid item xs={12}>
          <Container 
          fluid={true} 
          maxWidth="sm" 
          style={{
            backgroundColor: 'white',
            height: '150px',
            }}>
          <Friendslist />
          </Container>
        </Grid>
      </Grid>
      
      <Footer />
    </div>
  );
}

export default Friends;
