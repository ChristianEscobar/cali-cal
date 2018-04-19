import React, { Component } from 'react';
// import Week from './WeekContainer';
// import Detail from './DetailContainer';
import Task from './components/Task/TaskContainer';
import './App.css';
// import TaskList from './components/Task/TaskList';
// import SaveButton from './SaveButtonContainer';


class App extends Component {
  render() {
    return (
      <div>
        <Task />
        {/* <SaveButton /> */}
      </div>
    );
  }
}

export default App;