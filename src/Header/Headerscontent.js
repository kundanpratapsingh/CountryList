import React from "react";
import { Link } from "react-router-dom";
import "./Headerscontent.css";
import { useSelector } from "react-redux";

const Headerscontent = (props) => {
  const user = useSelector((state) => state.user);
  const userName = user.userName;
  return (
    <div className="Header">
      <Link to="/logout">
        <div className="About">Log out</div>
      </Link>
      <Link to="/register">
        <div className="About">Register</div>
      </Link>
      <Link to="/home">
        <div className="Home">Home</div>
      </Link>
      <Link className={`SignIn${user}`} to="/signin">
        <div className="SignIn">
          {" "}
          {user && userName ? `Hi ${userName}` : "Sign In"}
        </div>
      </Link>
    </div>
  );
};

export default Headerscontent;
