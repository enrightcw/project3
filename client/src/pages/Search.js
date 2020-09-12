import React from "react";
import Footer from '../components/Footer';
import Jumbotron from "../components/Jumbotron";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


function Search() {
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
            height: '150px',
            }}>
              
              <Button  
              display="inline" 
              variant="contained" 
              color="primary" 
              component={Link} 
              to='/results'
              style={{
                backgroundColor: '#f7931e', 
                marginTop: "20px",
                marginBottom: "20px",
                height: '100px',
                width: '350px'
              }}
              >
              Search for [Italian Food] in [Savannah]
            </Button>
          </Container>
        </Grid>
      </Grid>
      
      <Footer />
      
    </div>
  );
}

export default Search;