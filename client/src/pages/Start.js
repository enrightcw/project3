import React from "react";
import SignIn from "../components/SignIn";
import Jumbotron from "../components/Jumbotron";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';



function Home() {
  return (
    <div>
        <Jumbotron />
        <Grid container spacing ={2} >
          <Grid item xs={12} >
        <Container fluid={true} maxWidth="sm">
                
                    <h2>Welcome to Grubble, allow us to take the "I don't know" out of your night out!</h2> 
                    <SignIn
                    style={{
                      textAlign: 'center'
                    }}
                    />
          </Container>
            </Grid>
            </Grid>
      
    </div>
  );
}

export default Home;
