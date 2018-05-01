import React from 'react';
import './DeleteButton.css';

export default class DeleteButton extends React.Component{
    render(){
        return(
            <button className='delete-btn' 
            onClick={(e) => {e.preventDefault(); this.props.deleteTask(this.props.taskId)}}>
                <i className="fa fa-trash fa-fw fa-lg" aria-hidden="true"></i>
            </button>
        );
    }
}