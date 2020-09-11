import React from "react";
import SearchFunction from '../components/Search';
import Footer from '../components/Footer';
import Jumbotron from "../components/Jumbotron";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

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
            height: '100px',
            }}>
          <SearchFunction/>
          </Container>
        </Grid>
      </Grid>
      
      <Footer />
      
    </div>
  );
}

export default Search;