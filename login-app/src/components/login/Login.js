import React, { Component } from "react";
import Form from "../common/Form";
import { connect } from "react-redux";
import { fetchUsers, logIn, authenticate } from "../../actions";
import { BrowserRouter, Redirect } from "react-router-dom";
import history from "../../history";

class Login extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  checkCredential = (formValues) => {
    this.props.users.map((user) => {
      if (
        user.username === formValues.username &&
        user.password === formValues.password
      ) {
        return true;
      } else {
        return false;
      }
    });
  };

  onSubmit = (formValues) => {
    if (this.checkCredential) {
      history.push("/");
    }
  };

  render() {
    return (
      <div className="container">
        <div className="col-md-6 offset-md-3 mt-5">
          <div className="alert alert-info">
            Username: test
            <br />
            Password: test
          </div>
          <div className="card">
            <h4 className="card-header">Angular 8 Basic Auth Login Example</h4>
            <div className="card-body">
              <Form onSubmit={this.onSubmit} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.auth.users,
    isSignedIn: state.auth.isSignedIn,
    loggedUser: state.auth.loggedUser,
  };
};

export default connect(mapStateToProps, { fetchUsers, logIn, authenticate })(
  Login
);
