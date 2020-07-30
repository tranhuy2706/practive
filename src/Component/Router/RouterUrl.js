import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from "../Home/Menu";
import Login from "../Login";
import QrCode from "../QrCode";
import FormControl from "../Home/FormControl";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import Table from "../Home/Table";
import table2 from "../Home/table2";
import Table3 from '../Home/table3'
import Hook from "../Home/Hook";

class RouterUrl extends Component {
  render() {
    return (
      <div className="m-grid m-grid--hor m-grid--root m-page">
        <Header />
        <div className={" m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body"}>
          <button className="m-aside-left-close  m-aside-left-close--skin-dark " id="m_aside_left_close_btn">
            <i class="fas fa-window-close"></i>
          </button>
          <Menu />
          <Route path="/Form" component={FormControl} />
          <Route path="/" exact component={table2} />
          <Route path="/Table" component={Table} />
          <Route path="/Table2" component={table2} />
          <Route path="/Table3" component={Table3} />
          <Route path="/hook" component={Hook} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default RouterUrl;
