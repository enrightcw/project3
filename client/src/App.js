import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'; 
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import './App.css';
<<<<<<< HEAD

import axios from 'axios';
=======
>>>>>>> master

import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Search from './pages/Search';
import Results from './pages/Results';
import Friends from './pages/Friends';

class App extends React.Component {

constructor(props) {
  super(props);
    this.state= {
      title: 'Grubble',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'Quiz', path: '/quiz'},
        {title: 'Search', path: '/search'},
        {title: 'Results', path: '/results'},
        {title: 'Friends', path: '/friends'}
      ],
      home: {
        title: 'Grubble', 
        subTitle: 'Take the arguing out of going out',
        text:'Checkout my progress'
      },
      food: {
        title: 'Food', 
      },
      entertainment: {
        title: 'Entertainment', 
      },
      friends: {
        title: 'Find Your Friends', 
      }
    }
  }


  render(){
    return (
      <Router>
        <Container className="p-0 container" fluid={true}>
        <Box component="span" m={1} container
          direction="column"
          justify="flex-end"
          alignItems="center">
          <Jumbotron>
            <h1 className="title">Grubble</h1>
          </Jumbotron>
          
          <Route path="/" exact render={()=> <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/search" exact render={()=> <Search title={this.state.search.title} />} />
          <Route path="/results" exact render={()=> <Results title={this.state.results.title}/>} />
          <Route path="/friends" exact render={()=> <Friends title={this.state.friends.title}/>} />
          <Route path="/quiz" exact render={()=> <Quiz title={this.state.quiz.title}/>} />
          </Box>
          <Footer />
          {/* <Link className="nav-link" to ="/">Home </Link>
          <Link className="nav-link" to ="/food">Food</Link>
          <Link className="nav-link" to ="/entertainment">Entertainment</Link>
          <Link className="nav-link" to ="/friends">Friends</Link> */}


        </Container>
      </Router>
    );
  }
 
}

export default App;

