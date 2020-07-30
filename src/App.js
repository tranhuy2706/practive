import React from "react";
import "./App.css";
import Login from "./Component/Login";
import Error from "./Component/Error";
import Footer from "./Component/Home/Footer";
import Menu from "./Component/Home/Menu";
import FormControl from "./Component/Home/FormControl";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Base from "./Component/Home/Base";
import QrCode from "./Component/QrCode";
import RouterUrl from "./Component/Router/RouterUrl";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" render={() => <Login />} />
        <Route path="/error"> <Error/> </Route>
        <RouterUrl />
      </Switch>
    </Router>
  );
}

export default App;
