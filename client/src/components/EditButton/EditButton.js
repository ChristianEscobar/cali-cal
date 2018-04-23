import React from 'react';
import './EditButton.css';

export default class EditButton extends React.Component{
    render(){
        return(
            <button className='edit-btn' onClick={this.props.saveCal}>
                <i className="fa fa-edit" aria-hidden="true"></i>
            </button>
        );
    }
}