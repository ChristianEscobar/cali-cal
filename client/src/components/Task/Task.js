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
         <a href="#" className="list-group-item disabled">
            Tasks
        </a>
        {this.props.events.map(event => 
            <a href="#" className='list-group-item ' key={event.name}>{event.startTime} <strong>{event.name}</strong>  </a>
            // <div key={event.name} className="panel panel-default">
            //     <div    className="panel panel-default" 
            //             key={event.name}>{event.name}
            //     </div>
            // </div>
        )}
      </div>
    )
  }
}