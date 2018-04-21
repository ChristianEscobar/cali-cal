import React from 'react';

export default class Task extends React.Component {
  render() {
      const styles={
          container:{
            width:300,
            margin:20,
          },
      }
    return (
      <div className='list-group' style={styles.container}>
         <button  className="list-group-item disabled">
            Tasks
        </button>
        {this.props.events.map(event => 
            <button href=" " 
                    className='list-group-item ' 
                    key={event.name}>{event.startTime} 
                    <strong>{event.name}</strong>  
            </button>
        )}
      </div>
    )
  }
}