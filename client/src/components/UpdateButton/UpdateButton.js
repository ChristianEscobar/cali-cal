import React from 'react';
import './UpdateButton.css';

export default class UpdateButton extends React.Component {
  render() {
    return (
      <button className='update-btn btn btn-default' onClick={(e) => {e.preventDefault(); this.props.updateTask(this.props.newEvent)}}>
        <i className="fa fa-send-o" aria-hidden="true"> Submit</i>
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