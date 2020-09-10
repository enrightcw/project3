import React from "react";
import Footer from '../components/Footer';
import Jumbotron from "../components/Jumbotron";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


function History() {
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
            }}
          >
          <p>We're going to list out the confirmed search results here, by that I mean the user will be able to click a "thumb's up" button on the location we tell them to go and we're saving that information to their history results.</p>
          </Container>
        </Grid>
      </Grid>
      
      
      <Footer />
    </div>
    
  );
}

export default History;
