import './App.css';

// import axios from 'axios';

import React, { Component } from "react";
import {BrowserRouter as Router, Route } from 'react-router-dom'; 
import Container from '@material-ui/core/Container';

// import axios from 'axios';

import Start from './pages/Start';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Search from './pages/Search';
import Results from './pages/Results';
import Friends from './pages/Friends';
import Profile from './pages/Profile';
import History from './pages/History';
import Footer from './components/Footer';

class App extends Component {
    state= {
        title: 'Grubble',
        headerLinks: [
          {title: 'Start', path: '/'},
          {title: 'Home', path: '/home'},
          {title: 'Quiz', path: '/quiz'},
          {title: 'Search', path: '/search'},
          {title: 'Results', path: '/results'},
          {title: 'Friends', path: '/friends'}
        ],
        start: {
          title: 'Grubble', 
          subTitle: 'Take the arguing out of going out',
          text:'Checkout my progress'
        },
        home: {
          title: 'Home', 
        },
        history: {
          title: 'History', 
        },
        profile: {
          title: 'Profile', 
        },
        friends: {
          title: 'Find Your Friends', 
        },
        quiz: {
          title: 'Establish Your Preferences', 
        }
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
    
    render(){
        return(
            <div>
                <Router>
                    <h1>Main Display</h1> 
                    <Container className="p-0 container" fluid={true}>     
                            <Route exact path="/"  render={()=> <Start title={this.state.start.title} subTitle={this.state.start.subTitle} text={this.state.start.text} />} />
                            <Route exact path="/home"  render={()=> <Home title={this.state.home.title}/>} />
                            <Route exact path="/friends"  render={()=> <Friends title={this.state.friends.title}/>} />
                            <Route exact path="/profile"  render={()=> <Profile title={this.state.profile.title}/>} />
                            <Route exact path="/history"  render={()=> <History title={this.state.history.title}/>} />
                            <Route exact path="/search"  render={()=> <Search title={this.state.search.title} />} />
                            <Route exact path="/results"  render={()=> <Results title={this.state.results.title}/>} />
                            <Route exact path="/quiz"  render={()=> <Quiz title={this.state.quiz.title}/>} />
                    </Container>
                    <Footer />
                </Router>
                
            </div>
        )
    };
};

export default App;


