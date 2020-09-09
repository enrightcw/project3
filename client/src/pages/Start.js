import React from "react";
import SignIn from "../components/SignIn";
import Jumbotron from "../components/Jumbotron";


function Home() {
  return (
    <div>
        <Jumbotron />
        <h2>Welcome to Grubble, allow us to take the "I don't know" out of your night out!</h2> 
      <SignIn/>
    </div>
  );
}

export default Home;
