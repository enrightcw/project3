import React from 'react';
// import {BrowserRouter as Router, Route } from 'react-router-dom'; 
// import Container from '@material-ui/core/Container';
// import Box from '@material-ui/core/Box';
import './App.css';

// import axios from 'axios';

import Footer from './components/Footer';
import Display from './pages/Display';


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
      <div>
        <Display />
        <Footer />
      </div>
    );
  }
 
}

export default App;

