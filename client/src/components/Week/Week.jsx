import React, { Component } from 'react';
import Day from './Day';
import { dayID } from '../../utils/helper';

export default class Week extends Component {
  
  componentWillMount(){
    this.props.saveCal();
  }
  render() {
    return (
      <div>
        {this.props.days.map( (events, dayNumber) => 
          (dayNumber === this.props.selectedDay) ?
            <Day key={dayNumber} 
                selectedDay={true} 
                dayNumber={dayNumber} 
                dayName={dayID(dayNumber)} 
                changeDay={this.props.changeDay} 
                eventCount={events.length}/>
            :
            <Day key={dayNumber} 
                selectedDay={false} 
                dayNumber={dayNumber} 
                dayName={dayID(dayNumber)} 
                changeDay={this.props.changeDay} 
                eventCount={events.length}/>
        )}
      </div>
    )
  }
}