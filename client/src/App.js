import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Week from './components/Week/WeekContainer';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Week />
        </div>
    );
  }
}

export default App;
