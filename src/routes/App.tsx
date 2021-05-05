import React from 'react';
import ReactGA from 'react-ga' 
import {Route, Switch} from "react-router-dom";

import Home from "../containers/Home";
import Projects from "../containers/Projects";
import About from "../containers/About";
import NotFound from '../containers/NotFound';

// ------------------ PROJECTS ------------------

import _369labs from '../containers/projects/369labs'
import Vyrx_app from '../containers/projects/vyrx_app'
import StayFocus from '../containers/projects/StayFocus'

const App = () => {
  React.useEffect(() => {
    ReactGA.initialize('UA-194691329-1');
  })
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/about" component={About} />
      <Route exact path="/369labs" component={_369labs} />
      <Route exact path="/vyrx-app" component={Vyrx_app} />
      <Route exact path="/stay-focus" component={StayFocus} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
