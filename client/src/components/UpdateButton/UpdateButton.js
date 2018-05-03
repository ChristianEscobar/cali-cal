import React from 'react';
import './UpdateButton.css';
import { formValidation } from '../../utils/helper';

export default class UpdateButton extends React.Component {
  render() {
    return (
      <button className='update-btn btn btn-default' 
            onClick={(e) => {
              e.preventDefault(); 

              let errors = formValidation(this.props.newEvent.eventDetails, this.props.isAllDay);

              if(Object.keys(errors).length > 0) {
                this.props.setFormErrors(errors);
              } else {
                this.props.updateTask(this.props.newEvent);
              }
            }}>
        <i className="fa fa-send-o" aria-hidden="true"> Update</i>
      </button>
    );
  }
}

// export default ({ }) => {
//     return (
//     <button className='update-btn btn btn-success' onClick={() => this.props.updateTask({event:"alex4"})}>
//         Submit
//     </button>
//     )
// }