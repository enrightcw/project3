import React from "react";
import SignIn from "../components/SignIn";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <SignIn/>
      <p>
        The homepage needs to have two clickable icons for food and entertainment which will bring you to a search page which will have you "spin a wheel" to get your results.
      </p>
    </div>
  );
}

export default Home;
