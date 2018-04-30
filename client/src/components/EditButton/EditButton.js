import React from 'react';
import './EditButton.css';
import { Link } from 'react-router-dom';

export default class EditButton extends React.Component{
    render(){
        return(
          <Link to="/calendar/edit">
            <button className='edit-btn' onClick={() => this.props.editEvent(this.props.taskId, this.props.event, this.props.start, this.props.end)}>
                <i className="fa fa-edit fa-fw" aria-hidden="true"></i>
            </button>
          </Link>
        );
    }
}