import React, { Component } from 'react';
// import Detail from './DetailContainer';
import Task from './components/Task/TaskContainer';
import './App.css';
// import TaskList from './components/Task/TaskList';
// import SaveButton from './SaveButtonContainer';

import Week from './components/Week/WeekContainer';
import { Router, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Week />
        </div>
        <div className='row'>
          <Task />
        </div>
      </div>  
        
        
        /* <SaveButton /> */
      
       
    );
  }
}

export default App;