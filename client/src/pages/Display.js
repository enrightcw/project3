import React, { Component } from "react";
import {BrowserRouter as Router, Route } from 'react-router-dom'; 
import Container from '@material-ui/core/Container';

// import axios from 'axios';

import Home from './Home';
import Quiz from './Quiz';
import Search from './Search';
import Results from './Results';
import Friends from './Friends';
import Profile from './Profile';
import History from './History';


class Display extends Component {
    state = {
        currentPage: "Home"
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
    
    render(){
        return(
            <div>
                <Router>
                <h1>Display Page!</h1> 
                <Container className="p-0 container" fluid={true}>         
                    
                    <Route path="/" exact render={()=> <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
                    <Route path="/search" exact render={()=> <Search title={this.state.search.title} />} />
                    <Route path="/results" exact render={()=> <Results title={this.state.results.title}/>} />
                    <Route path="/profile" exact render={()=> <Profile title={this.state.profile.title}/>} />
                    <Route path="/friends" exact render={()=> <Friends title={this.state.friends.title}/>} />
                    <Route path="/quiz" exact render={()=> <Quiz title={this.state.quiz.title}/>} />
                    <Route path="/history" exact render={()=> <History title={this.state.history.title}/>} />
                    
                    
                    {/* <Link className="nav-link" to ="/">Home </Link>
                    <Link className="nav-link" to ="/food">Food</Link>
                    <Link className="nav-link" to ="/entertainment">Entertainment</Link>
                    <Link className="nav-link" to ="/friends">Friends</Link> */}
                </Container>
                
                </Router>
            </div>
        )
    };
};

export default Display;


