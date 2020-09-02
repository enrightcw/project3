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
      <div className="main">
        <div className="mainDiv">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <h3>Enter a Friend!</h3>
            <fieldset className="form-group">
              <label>Friend's Name:</label>
              <input
                type="text"
                ref="name"
                name="name"
                className="form-control"
              />
            </fieldset>

            
            <button className="btn btn-success" type="submit">
              Save Friend
            </button>
          </form>
          {this.state.friends.map(friend => <Friend friend={friend} key={friend.id} removeFriend={this.deleteFriend}/>)}
        </div>
      </div>
    );
  }
}

export default FriendList;