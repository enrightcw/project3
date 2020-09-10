import React from "react";
import Footer from '../components/Footer';
import Jumbotron from "../components/Jumbotron";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function Home() {
  return (
    <div>
        <Jumbotron />
        <Grid container spacing = {2}>
        <Grid item xs={12}>
          <Container 
          fluid={true} 
          maxWidth="sm" 
          style={{
            backgroundColor: 'white',
            height: '350px',
            }}>
          
          <p>
            The profile page will allow the user to see their preferences and update them at will.
          </p>

          </Container>
        </Grid>
      </Grid>
        
        <Footer />
    </div>
  );
}

export default Home;
