import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-center mt-4">
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
  );
};

export default Footer;
