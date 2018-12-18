import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/home">
        <div>Home</div>
      </Link>
      <Link to="/signup">
        <div>Signup</div>
      </Link>
      <Link to="/operators">
        <div>Operators</div>
      </Link>
    </div>
  );
};

export default Nav;
