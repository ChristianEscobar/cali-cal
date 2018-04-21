import React, { Component } from 'react';
// import Detail from './DetailContainer';
import Task from './components/Task/TaskContainer';
import './App.css';
// import TaskList from './components/Task/TaskList';
// import SaveButton from './SaveButtonContainer';

import Week from './components/Week/WeekContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Week />
        <Task />
        {/* <SaveButton /> */}
      </div>
       
    );
  }
}

export default App;