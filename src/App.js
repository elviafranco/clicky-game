import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import NavBar from "./components/Navbar";
import JumboTron from "./components/JumboTron";

class App extends Component {
  state = {
    friends: friends,
    friendsClicked: [],
    topScore: 0,
    alertMessage: ""
  };

  clickHandler = (event) => {
    const name = event.target.alt;
    // console.log(name);
    this.friendShuffle()
    // console.log("card clicked!")
    this.checkFriend(name);
    this.updateTopScore();
  }

  friendShuffle = () => {
    this.setState(this.shuffleArray(this.state.friends))
  }

  // Fisher-Yates Shuffling Algorithm
  shuffleArray = (arr) => {
    var i, j, temp;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  checkFriend = (name) => {
    const newState = {...this.state};
    // console.log(newState);
    if (newState.friendsClicked.includes(name)) {
      // console.log("this friend was already picked!")
      newState.friendsClicked = []
      this.setState(newState)
    } else {
      newState.friendsClicked.push(name)
      // console.log(this.state.friendsClicked)
      this.setState(newState)
      // console.log(newState)
    }
    return(newState)
  }

  updateTopScore = () => {
    const newState = {...this.state};
    console.log(newState.friendsClicked.length)
    if (newState.friendsClicked.length > newState.topScore) {
      newState.topScore++
      this.setState(newState)
      console.log(this.state.topScore)
      console.log(newState)
    }
    return(newState)
  }
  

  render() {
    return (
      <div>
      <NavBar 
      score={this.state.friendsClicked.length}
      topo = {this.state.topScore} />
      <JumboTron />
      <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            click={this.clickHandler}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
