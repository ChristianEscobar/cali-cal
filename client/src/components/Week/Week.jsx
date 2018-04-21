import React, { Component } from 'react';
import Day from './Day';

export default class Week extends Component {
  render() {
    return (
      <div>
        {this.props.days.map( (dayObj, dayNumber) => 
          (dayNumber === this.props.selectedDay) ?
            <Day key={dayObj.name} 
                selectedDay={true} 
                dayNumber={dayNumber} 
                dayName={dayObj.name} 
                changeDay={this.props.changeDay} 
                eventCount={dayObj.events.length}/>
            :
            <Day key={dayObj.name} 
                selectedDay={false} 
                dayNumber={dayNumber} 
                dayName={dayObj.name} 
                changeDay={this.props.changeDay} 
                eventCount={dayObj.events.length}/>
        )}
      </div>
    )
  }
}