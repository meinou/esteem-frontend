import React, { Component } from "react";
import "./Header.css";
import Button from "@material-ui/core/Button";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <span>ESSTEEM JOB REFERRAL CONTESTS</span>
        <span class="menu">
          <div />

          <button className="btn">ABOUT</button>
          <button className="btn">POST JOB</button>
          <button className="btn">LOGIN</button>
        </span>
      </div>
    );
  }
}

export default Header;
