import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Footer from '../components/Footer';
import Jumbotron from "../components/Jumbotron";
import { Grid } from "@material-ui/core";
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const foods = [ "Italian", "Chinese", "Mexican", "Japanese" ];
const activities = [ "Hiking", "Concerts", "Drinking", "Falling Down" ];
const dietRestrictions = [ "Gluten-Free", "Vegan", "Nut Allergies", "Shellfish" ];

export default function CheckboxListSecondary() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

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
    <List dense className={classes.root}>
      <h3>Favorite Foods</h3> 
      {foods.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem key={value} button >
            <ListItemText id={labelId} primary={`${value}`} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
    <List dense className={classes.root}>
      <h3>Favorite Activities</h3> 
      {activities.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          
          <ListItem key={value} button>
            
            <ListItemText id={labelId} primary={`${value}`} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
    <List dense className={classes.root}>
      <h3>Dietary Restrictions</h3> 
      {dietRestrictions.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          
          <ListItem key={value} button>
            
            <ListItemText id={labelId} primary={`${value}`} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
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