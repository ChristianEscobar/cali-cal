import React, { Component } from 'react';
// import Detail from './DetailContainer';
import Task from './components/Task/TaskContainer';
import './App.css';
import Header from './components/Header';
// import TaskList from './components/Task/TaskList';
// import SaveButton from './SaveButtonContainer';

import Week from './components/Week/WeekContainer';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className='container'>
          <div className='row'>
            <Week />
          </div>
          <div className='row'>
            <Task />
          </div>
        </div>  
      </div>
        
        
        /* <SaveButton /> */
      
       
    );
  }
}

export default App;