import React from 'react';
import './DeleteButton.css';

export default class DeleteButton extends React.Component{
    render(){
        return(
            <button className='delete-btn' onClick={this.props.saveCal}>
                <i className="fa fa-trash fa-lg" aria-hidden="true"></i>
            </button>
        );
    }
}