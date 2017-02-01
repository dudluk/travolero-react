import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TripList} from "./Trips/TripList"

class App extends Component {
  render() {
    return (
      <div>
        <TripList></TripList>
      </div>
    );
  }
}

export default App;
