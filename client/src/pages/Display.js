// This page has been commented out since it was moved to app.js. I am keeping the code here in case we need to make any changes again. 
//***DELETE PRIOR TO PRODUCTION DEPLOYMENT  */


// import React, { Component } from "react";
// import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
// import Container from '@material-ui/core/Container';
// // import Switch from '@material-ui/core/Switch'; this makes the toggle button

// // import axios from 'axios';

// import Home from './Home';
// import Quiz from './Quiz';
// import Search from './Search';
// import Results from './Results';
// import Friends from './Friends';
// import Profile from './Profile';
// import History from './History';
// import Footer from '../components/Footer';
// import GoogleBtn from '../components/GoogleBtn';


// class Display extends Component {
//     state= {
//         title: 'Grubble',
//         headerLinks: [
//           {title: 'Home', path: '/'},
//           {title: 'Quiz', path: '/quiz'},
//           {title: 'Search', path: '/search'},
//           {title: 'Results', path: '/results'},
//           {title: 'Friends', path: '/friends'}
//         ],
//         home: {
//           title: 'Grubble', 
//           subTitle: 'Take the arguing out of going out',
//           text:'Checkout my progress'
//         },
//         history: {
//           title: 'History', 
//         },
//         profile: {
//           title: 'Profile', 
//         },
//         friends: {
//           title: 'Find Your Friends', 
//         }
//     }

//     handlePageChange = page => {
//         this.setState({ currentPage: page });
//     };
    
//     render(){
//         return(
//             <div>
//                 <Router>
//                     <h1>Main Display</h1> 
//                     <Container className="p-0 container" fluid={true}>     
//                     <GoogleBtn/>  
//                         {/* <Switch> */}
//                             <Route exact path="/"  render={()=> <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
//                             <Route exact path="/friends"  render={()=> <Friends title={this.state.friends.title}/>} />
//                             <Route exact path="/profile"  render={()=> <Profile title={this.state.profile.title}/>} />
//                             <Route exact path="/history"  render={()=> <History title={this.state.history.title}/>} />
//                             <Route exact path="/search"  render={()=> <Search title={this.state.search.title} />} />
//                             <Route exact path="/results"  render={()=> <Results title={this.state.results.title}/>} />
//                             <Route exact path="/quiz"  render={()=> <Quiz title={this.state.quiz.title}/>} />
//                         {/* </Switch> */}
//                     </Container>
//                     <Footer />
//                 </Router>
                
//             </div>
//         )
//     };
// };

// export default Display;

