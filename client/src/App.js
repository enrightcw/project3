import React from 'react';
// import {BrowserRouter as Router, Route } from 'react-router-dom'; 
// import Container from '@material-ui/core/Container';
// import Box from '@material-ui/core/Box';
import './App.css';

// import axios from 'axios';

import Display from './pages/Display';

import GoogleBtn from './components/GoogleBtn';



// const styles = {
//   stickToBottom: {
//     width: '100%',
//     position: 'fixed',
//     bottom: 0,
//   },
// };

class App extends React.Component {

  render(){
    return (
      <div>
        <Display />
        <GoogleBtn/>
      </div>
    );
  }
 
}

export default App;

