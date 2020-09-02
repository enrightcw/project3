import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Container from '@material-ui/core/Container';

// import axios from 'axios';

import Home from './Home';
import Quiz from './Quiz';
import Search from './Search';
import Results from './Results';
import Friends from './Friends';
import Profile from './Profile';
import History from './History';
import Footer from '../components/Footer';


class Display extends Component {
    state= {
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

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
    
    render(){
        return(
            <div>
                <Router>
                    <h1>Main Display</h1> 
                    <Container className="p-0 container" fluid={true}>         
                        <Switch>
                            <Route exact path="/"  render={()=> <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
                            <Route exact path="/search"  render={()=> <Search title={this.state.search.title} />} />
                            <Route exact path="/results"  render={()=> <Results title={this.state.results.title}/>} />
                            <Route exact path="/profile"  render={()=> <Profile title={this.state.profile.title}/>} />
                            <Route exact path="/friends"  component = {Friends} />
                            <Route exact path="/quiz"  render={()=> <Quiz title={this.state.quiz.title}/>} />
                            <Route exact path="/history"  render={()=> <History title={this.state.history.title}/>} />
                        </Switch>
                    </Container>
                    <Footer />
                </Router>
                
            </div>
        )
    };
};

export default Display;


