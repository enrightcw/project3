import React from "react";
import Friendslist from "../components/Friendslist";
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid } from "@material-ui/core";
import Container from '@material-ui/core/Container';


const friendList = ["Tony Stark", "Diana Prince", "Corbin Dallas"];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
   
function Friends() {
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
      {friendList.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem key={value} button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${value + 1}`}
                src={`https://i.pinimg.com/474x/0c/a8/7e/0ca87e6e7612afd3b4e4da2ed6332b51.jpg`}
              />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={`${value}`} />
            <ListItemSecondaryAction>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
    <br/>
            <Friendslist/>

          </Container>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Friends;
