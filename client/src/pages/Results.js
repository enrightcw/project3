import React from "react";
import Footer from '../components/Footer';
import Jumbotron from "../components/Jumbotron";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Corleone from "../assets/images/Corleone.png";


function Results() {
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
            height: '400px',
            }}>
            <h3>You should eat at:    </h3>
            
            <a href="https://www.tripadvisor.com/Restaurant_Review-g60814-d655704-Reviews-Corleone_s_Trattoria-Savannah_Georgia.html">Corleone's Trattoria</a>

            <img className = "Corleone" src={Corleone} alt="Food" />

            <h3>Enjoy your night!</h3>
          </Container>
        </Grid>
      </Grid>
      
      <Footer />
      
    </div>
  );
}

export default Results;