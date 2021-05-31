import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div class="card mt-4">
            <h4 class="card-header">
              You're logged in with Angular 8 & Basic HTTP Authentication!!
            </h4>
            <div class="card-body">
              <h6>Users from secure api end point</h6>
              <div class="spinner-border spinner-border-sm"></div>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <p>
            <Link
              to="https://jasonwatmore.com/post/2019/06/26/angular-8-basic-http-authentication-tutorial-example"
              target="_top"
            >
              Angular 8 - Basic HTTP Authentication Example & Tutorial
            </Link>
          </p>
          <p>
            <Link to="https://jasonwatmore.com" target="_top">
              JasonWatmore.com
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
