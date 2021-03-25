import React from 'react';
import {Route, Switch} from "react-router-dom";

import Home from "../containers/Home";
import Projects from "../containers/Projects";
import ProjectDetails from "../containers/ProjectDetails";
import About from "../containers/About";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/:project_id" component={ProjectDetails} />
      <Route exact path="/about" component={About} />
      {/* <Route component={NotFound} /> */}
    </Switch>
  );
}

export default App;
