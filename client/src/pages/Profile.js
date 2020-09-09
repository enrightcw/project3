import React from "react";
import Footer from '../components/Footer';
import Jumbotron from "../components/Jumbotron";

function Home() {
  return (
    <div>
        <Jumbotron />
        <p>
            The profile page will allow the user to see their preferences and update them at will.
        </p>
        <Footer />
    </div>
  );
}

export default Home;
