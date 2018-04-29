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
        width:300,
        margin:20,
      },
    }

    if(this.props.events.length > 0){
      return (
        <div className="list-overflow-container" style={styles.container}>
                    
          <button  className="list-group-item disabled">
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
                className="list-group-item" 
                number={this.props.events.length}
              >
                <span className='item time-list'>
                  {event.startTime} <strong className="task-name-list">{event.event}</strong>
                </span>
              
                <DeleteButton />  
                <EditButton 
                  taskId={event.id}
                  event={event.event}
                  start={event.startTime}
                  end={event.endTime}
                />                                                         
              </li>
            )}
          </ul>
        </div>
      )
    }
    else {
      return (
        <div className='list-group' style={styles.container}>
          <button  className="list-group-item disabled">
            Tasks
            <div className='add-event-btn'>
              <Link to="/calendar/edit">
                <AddEventButton />
              </Link>
            </div>
          </button>

          <button href=" " className='list-group-item '>
            No tasks for today!
          </button>
        </div>
      )
    }  
  }
}