import React, { Component } from 'react';
import Task from './components/Task/TaskContainer';
import './App.css';
import Header from './components/Header';
import Week from './components/Week/WeekContainer';
import SignUp from './components/SignUp';
// import { Router, Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import AddEventButton from './components/AddEventButton/AddEventButtonContainer';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
          
        </div>
        <div className='container'>
          <div className='col-md-12'>
            <Week />
          </div>
        </div>
        <br />
        <div className='container'>
          <div className='col-md-12'>
            <Task />
            {/* <div className='add-event-btn'>
              <Link to="/calendar/edit">
                <AddEventButton />
              </Link>
            </div> */}
          </div>
        </div>  
        <SignUp />
      </div>
    );
  }
}

export default App;