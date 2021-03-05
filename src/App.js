
import React from "react";
import {withRouter} from "react-router-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import AboutPage from "./AboutPage/AboutPage";
import ProjectPage, { ProjectPageDetail } from "./ProjectPage/ProjectPage";
import { HeaderWR } from "./Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import PopUp from "../src/PopUpPage/PopUp";


class App extends React.Component {
  

  render(){
  return (
    
    <Router>
     <HeaderWR/>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route exact path="/about">
          <AboutPage/>
        </Route>
        <Route exact path="/project">
          <ProjectPage/>
        </Route>
        <Route exact path="/pop" >
          <PopUp/>
        </Route>
      </Switch>
    </Router>
  )
  }
};    



export default App;
