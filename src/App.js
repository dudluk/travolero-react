import React, { Component } from 'react';
import { Link, Router, Route, browserHistory } from 'react-router';

import { Places } from "./Places/Places";
import { TripList } from "./Trips/TripList";
import { Trip } from "./Trip/Trip";

class App extends Component {
  render() {
    return (
      <div>

        <navigation>
          <ul>
            <li>
              <Link to={"/places"}>Places</Link>
            </li>
            <li>
              <Link to={"/trips"}>Trips</Link>
            </li>
          </ul>
        </navigation>
        <Router history={browserHistory}>
          
          <Route path="/" component={TripList} />
          <Route path="/trips" component={TripList} />
          <Route path="/trips/:id" component={Trip} />
          <Route path="/places" component={Trip} />
        </Router>
      </div>
    );
  }
}

export default App;
