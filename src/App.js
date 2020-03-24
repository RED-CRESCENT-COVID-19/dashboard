import React from 'react';

// React Router packages
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RouterApp from './RouterApp';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <RouterApp />
    );
  }
}

export default App;

