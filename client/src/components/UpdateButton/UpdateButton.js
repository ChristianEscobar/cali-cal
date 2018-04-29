import React from 'react';
import './UpdateButton.css';

export default class UpdateButton extends React.Component {
  render(){
    return(
      <button className='update-btn btn btn-success' onClick={(e) => {e.preventDefault(); this.props.updateTask(this.props.newEvent)}}>
        Submit
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