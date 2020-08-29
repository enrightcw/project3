import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'; 
import Container from '@material-ui/core/Container';
// import Navbar from '@material-ui/core/Navbar';
// import Nav from '@material-ui/core/Nav';
import './App.css';
import axios from 'axios';

import Footer from './components/Footer';
import Home from './pages/Home';
import Food from './pages/Food';
import Entertainment from './pages/Entertainment';
import Friends from './pages/Friends';
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
        <Container className="p-0" fluid={true}>

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

          <Footer/>
        </Container>
      </Router>
      );
  }
 
}

export default App;

