import React from 'react';

// React Router packages
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Patient from "./components/patient-list/Patient";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import NotFound from './components/common/NotFound';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact={true} component={Home} />
          <Route path="/patient" exact={true} component={Patient} />
          <Route path="*" exact={true} component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

