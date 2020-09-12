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
          
          <h3>Profile Page Under Development</h3>

          </Container>
        </Grid>
        </Grid>
        
        <Footer />
    </div>
  );
}

export default Home;
