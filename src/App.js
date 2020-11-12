import React from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './index.css';
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "./Navbar";


const App = () => {
  return (
    <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/project" component={Projects}/>
      <Route exact path="/contact" component={Contact}/>
      <Redirect to="/"/>
    </Switch>
    
    </div>
  )
}

export default App
