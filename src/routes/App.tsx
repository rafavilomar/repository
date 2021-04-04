import React from 'react';
import {Route, Switch} from "react-router-dom";

import Home from "../containers/Home";
import Projects from "../containers/Projects";
import About from "../containers/About";
import NotFound from '../containers/NotFound';

// ------------------ PROJECTS ------------------

import _369labs from '../containers/projects/369labs'
import Social from '../containers/projects/Social'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/about" component={About} />
      <Route exact path="/369labs" component={_369labs} />
      <Route exact path="/social-dashboard" component={Social} />
      {/* <Route exact path="/:project_id" component={ProjectDetails} /> */}
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
