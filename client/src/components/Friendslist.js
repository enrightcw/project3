import React, { Component } from "react";
import Friend from './Friend'

// input route API below
const FriendsRoute = "";

class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = { friends: [] };
  }

  componentDidMount(){
    fetch(FriendsRoute)
    .then(res => res.json())
    .then(response => {
      console.log(response)
      this.setState({friends: response})
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    var name = this.refs.name.value;
    var friendsTemp = this.state.friends;

    fetch(FriendsRoute, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name })
    })
      .then(res => res.json())
      .then(response => {
        console.log(response)
        friendsTemp.push(response)
        this.setState({ friends: friendsTemp })
        this.refs.name.value = ""
      })
  }

  deleteFriend = (e, friend) => {
    fetch(`${FriendsRoute}/${friend.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(res => {
      let tempFriends = this.state.friends.filter(fr => fr !== friend)
      this.setState({friends: tempFriends})
    })
  }

  render() {
    return (
      <div className="main" >
        <div className="mainDiv">
          <form onSubmit={this.handleSubmit.bind(this)}>
          <h3 style={{color: '#f7931e', textShadow: '1px 1px black', fontSize: '20px', padding: '0' }}>Find Your Friends!</h3>
            <fieldset className="form-group" style={{
            backgroundColor: 'white',
            }}>
              
              <label>Name:</label>
              <input
                type="text"
                ref="name"
                name="name"
                className="form-control"
              />
               <button 
              className="btn btn-success"
              type="submit" 
              style={{
                backgroundColor: '#3fa9f5', 
                color: '#ffffff',
                marginTop: '20px',
                }}>
            Search
            </button>
            </fieldset>

          </form>
          {this.state.friends.map(friend => <Friend friend={friend} key={friend.id} removeFriend={this.deleteFriend}/>)}
        </div>
      </div>
    );
  }
}

export default FriendList;