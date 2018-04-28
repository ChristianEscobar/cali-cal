import React from 'react';
import './UpdateButton.css';

export default class UpdateButton extends React.Component {
    render(){
        return(
            <button className='update-btn btn btn-success' onClick={() => this.props.updateTask({event:"alex3"})}>
                Update
            </button>
        );
    }
}