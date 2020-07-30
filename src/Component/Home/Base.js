import React, { Component } from "react";
import Footer from "./Footer";
import Menu from "./Menu";
import Header from "./Header";

class Base extends Component {
  render() {
    return (
      <div>
        <Menu />,
      </div>
    );
  }
}

export default Base;
