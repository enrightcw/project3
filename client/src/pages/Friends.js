import React from "react";
import Friendslist from "../components/Friendslist";
import Footer from '../components/Footer';
import Jumbotron from "../components/Jumbotron";

function Friends() {
  return (
    <div>
      <Jumbotron />
      <Friendslist />
      <Footer />
    </div>
  );
}

export default Friends;
