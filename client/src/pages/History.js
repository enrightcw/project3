import React from "react";
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const restaurants = ["Noble Fair" , "The Olde Pink House", "Vic's On The River" , "The Grey" , "Husk Savannah"]

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
   
function History() {
  const classes = useStyles();

  return (
    <div>
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
                  <List dense className={classes.root} >
      {restaurants.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem key={value} button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${value + 1}`}
                src={`https://www.flaticon.com/svg/static/icons/svg/857/857681.svg`}
              />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={`${value}`} />
            <ListItemSecondaryAction>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<ThumbUpIcon />}
              >
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
            
          </Container>
        </Grid>
      </Grid>
      <Footer />
    </div>
    
  );
}

export default History;
