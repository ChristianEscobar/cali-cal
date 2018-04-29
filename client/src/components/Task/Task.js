import React from 'react';
import './Task.css';
import DeleteButton from '../DeleteButton/DeleteButtonContainer'
import EditButton from '../EditButton/EditButtonContainer'
import AddEventButton from '../AddEventButton/AddEventButtonContainer';
import { Link } from 'react-router-dom';

export default class Task extends React.Component {
  render() {
    const styles= {
      container: {
        width:400,
        margin:20,
      },
    }

    if(this.props.events.length > 0){
      return (
        <div className="list-overflow-container" style={styles.container}>
                    
          <button  className="list-group-item panel-default">
            Tasks
            <div className='add-event-btn'>
              <Link to="/calendar/edit">
                <AddEventButton />
              </Link>
            </div>
          </button>
          <ul className="list-group">
            {this.props.events.map( event => 
              <li
                key={event.event}
                className="list-group-item col-xs-12" 
                number={this.props.events.length}
              >
                <div className='item time-list'>
                  <div className="col-xs-3">
                    <strong>{event.startTime}</strong> <br />
                    {event.endTime} 
                  </div>
                  <div className="col-xs-5">
                    <div className="task-name-list">{event.event}</div>
                  </div>
                </div>

                <div className="col-xs-4">
                  <DeleteButton />  
                  <EditButton 
                    taskId={event.id}
                    event={event.event}
                    start={event.startTime}
                    end={event.endTime}
                  />                
                </div>                                         
              </li>
            )}
          </ul>
        </div>
      )
    }
    else {
      return (
        <div className='list-group' style={styles.container}>
          <button  className="list-group-item panel-default">
            Tasks
            <div className='add-event-btn'>
              <Link to="/calendar/edit">
                <AddEventButton />
              </Link>
            </div>
          </button>

          <button href=" " className='list-group-item'>
            No tasks for today!
          </button>
        </div>
      )
    }  
  }
}