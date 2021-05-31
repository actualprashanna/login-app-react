import React, { Component } from "react";
import Form from "../common/Form";

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div class="col-md-6 offset-md-3 mt-5">
          <div class="alert alert-info">
            Username: test
            <br />
            Password: test
          </div>
          <div class="card">
            <h4 class="card-header">Angular 8 Basic Auth Login Example</h4>
            <div class="card-body">
              <Form />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
