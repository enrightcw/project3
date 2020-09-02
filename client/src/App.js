import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'; 
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

// import Navbar from '@material-ui/core/Navbar';
// import Nav from '@material-ui/core/Nav';
import './App.css';
import axios from 'axios';

import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import Home from './pages/Home';
import Food from './pages/Food';
import Entertainment from './pages/Entertainment';
import Friends from './pages/Friends';

import GoogleBtn from './GoogleBtn';

function App() {
  return (
    <div>
      ...
      <GoogleBtn/>
    </div>
  );
}

// const styles = {
//   stickToBottom: {
//     width: '100%',
//     position: 'fixed',
//     bottom: 0,
//   },
// };

class App extends React.Component {

constructor(props) {
  super(props);
    this.state= {
      title: 'Grubble',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'Food', path: '/food'},
        {title: 'Entertainment', path: '/entertainment'},
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
            Grubble
          </Jumbotron>
          {/* <Navbar className= "border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Grubble</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to ="/">Home </Link>
                <Link className="nav-link" to ="/food">Food</Link>
                <Link className="nav-link" to ="/entertainment">Entertainment</Link>
                <Link className="nav-link" to ="/friends">Friends</Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar> */}
          
          <Route path="/" exact render={()=> <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/food" exact render={()=> <Food title={this.state.food.title} />} />
          <Route path="/entertainment" exact render={()=> <Entertainment title={this.state.entertainment.title}/>} />
          <Route path="/friends" exact render={()=> <Friends title={this.state.friends.title}/>} />
          </Box>
          <Footer position="fixed"/>

        </Container>
      </Router>
      );
  }
 
}

export default App;

