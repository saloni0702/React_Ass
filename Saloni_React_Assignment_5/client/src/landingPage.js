import './landingPage.css';
import React from "react";
import {Link} from "react-router-dom";

function LandingPage() {
  return (
    <div className="landingPage">
      <div class="row">
        <div class="col">
          <img src="./images/main.jpg" alt="image" id="image"/>
        </div>
        <div class="col1">
          <h1 class="heading">Instagram Login</h1>
          <Link to="PostView"><button>Press</button></Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;