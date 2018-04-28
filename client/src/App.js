import React, { Component } from 'react';
import Task from './components/Task/TaskContainer';
import './App.css';
import Header from './components/Header';
import Week from './components/Week/WeekContainer';
import OauthLogin from './components/OauthLogin';
// import OauthLogout from './components/OauthLogout';
// import { Router, Link } from 'react-router-dom';
import { Router, Link } from 'react-router-dom';
import AddEventButton from './components/AddEventButton/AddEventButtonContainer';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header>
            {/* <OauthLogin /> */}
          </Header>
          
          {/* <OauthLogout /> */}
        </div>
        <div className='container'>
          <div className='row'>
            <Week />
          </div>
          <div className='row'>
            <Task />
            <div className='add-event-btn'>
              <Link to="/calendar/edit">
                <AddEventButton />
              </Link>
            </div>
          </div>
        </div>  
      </div>
    );
  }
}

export default App;