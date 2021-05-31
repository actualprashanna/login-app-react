import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="navbar-nav">
          <Link class="nav-item nav-link" to="/">
            Home
          </Link>
          <Link class="nav-item nav-link" to="/login">
            Logout
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
