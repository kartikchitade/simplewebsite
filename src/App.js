import React from "react";
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import Service from "./Service";
import Contact from "./Contact";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar";



const App = () =>{
  return(
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/About" component={About}/>
    <Route exact path="/Service" component={Service}/>
    <Route exact path="/Contact" component={Contact}/>
    
    <Redirect to="/"/>
    </Switch>
    <Footer/>
    </>
  );
};
export default App;