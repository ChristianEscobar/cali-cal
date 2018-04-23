import React from 'react';
import './EditButton.css';
import { Link } from 'react-router-dom';

export default class EditButton extends React.Component{
    render(){
        return(
          <Link to="/calendar/edit">
            <button className='edit-btn' onClick={this.props.saveCal}>
                <i className="fa fa-edit" aria-hidden="true"></i>
            </button>
          </Link>
        );
    }
}