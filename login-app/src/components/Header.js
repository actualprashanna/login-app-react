import React from "react";
import { Link } from "react-router-dom";
import { logOut } from "../actions";
import { connect } from "react-redux";
import history from "../history";

const Header = (props) => {
  const onClick = () => {
    history.push("/login");
    props.logOut();
  };

  return (
    <div>
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="navbar-nav">
          <Link class="nav-item nav-link" to="/">
            Home
          </Link>
          <div
            class="nav-item nav-link"
            onClick={onClick}
            style={{ cursor: "pointer" }}
          >
            Logout
          </div>
        </div>
      </nav>
    </div>
  );
};

export default connect(null, { logOut })(Header);
