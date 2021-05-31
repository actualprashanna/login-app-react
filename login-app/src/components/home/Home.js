import React, { Component } from "react";
import Header from "../Header";
import { connect } from "react-redux";
import { logOut } from "../../actions";
import Footer from "../common/Footer";

class Home extends Component {
  renderUsername() {
    if (this.props.loggedUser.username) {
      return (
        <ul>
          <li>{`${this.props.loggedUser.username} User`}</li>
        </ul>
      );
    } else {
      return <div className="spinner-border spinner-border-sm"></div>;
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="card mt-4">
            <h4 className="card-header">
              You're logged in with Angular 8 & Basic HTTP Authentication!!
            </h4>
            <div className="card-body">
              <h6>Users from secure api end point</h6>
              {this.renderUsername()}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { loggedUser: state.auth.loggedUser };
};

export default connect(mapStateToProps, { logOut })(Home);
