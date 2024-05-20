import React from 'react';
import ReactGA from 'react-ga' 
import {Route, Switch} from "react-router-dom";

import Home from "../containers/Home";
import About from "../containers/About";
import NotFound from '../containers/NotFound';

// ------------------ PROJECTS ------------------

import Vyrx_app from '../containers/projects/vyrx_app'
import StayFocus from '../containers/projects/StayFocus'
import SpringbootMicroservices from '../containers/projects/SpringbootMicroservices'
import Chatting from '../containers/projects/Chatting' 

const App = () => {
  React.useEffect(() => {
    ReactGA.initialize('UA-194691329-1');
  })
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/vyrx-app" component={Vyrx_app} />
      <Route exact path="/stay-focus" component={StayFocus} />
      <Route exact path="/springboot-microservices" component={SpringbootMicroservices} />
      <Route exact path="/chatting" component={Chatting} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
