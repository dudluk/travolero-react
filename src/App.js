import React, { Component } from 'react';
import {Router, Route, browserHistory} from 'react-router';

import {TripList} from "./Trips/TripList";
import {Trip} from "./Trip/Trip";

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={TripList} />
        <Route path="/trip/:id" component={Trip} />
      </Router>
    );
  }
}

export default App;
