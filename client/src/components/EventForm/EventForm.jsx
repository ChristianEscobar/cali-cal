import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import DropdownList from 'react-widgets/lib/DropdownList'
import 'react-widgets/dist/css/react-widgets.css'

const times = [{time: '12:00 AM'},
                {time: '12:30 AM'},
                {time: '01:00 AM'},
                {time: '01:30 AM'},
                {time: '02:00 AM'},
                {time: '02:30 AM'},
                {time: '03:00 AM'},
                {time: '03:30 AM'},
                {time: '04:00 AM'},
                {time: '04:30 AM'},
                {time: '05:00 AM'},
                {time: '05:30 AM'},
                {time: '06:00 AM'},
                {time: '06:30 AM'},
                {time: '07:00 AM'},
                {time: '07:30 AM'},
                {time: '08:00 AM'},
                {time: '08:30 AM'},
                {time: '09:00 AM'},
                {time: '09:30 AM'},
                {time: '10:00 AM'},
                {time: '10:30 AM'},
                {time: '11:00 AM'},
                {time: '11:30 AM'},
                {time: '12:00 PM'},
                {time: '12:30 PM'},
                {time: '01:00 PM'},
                {time: '01:30 PM'},
                {time: '02:00 PM'},
                {time: '02:30 PM'},
                {time: '03:00 PM'},
                {time: '03:30 PM'},
                {time: '04:00 PM'},
                {time: '04:30 PM'},
                {time: '05:00 PM'},
                {time: '05:30 PM'},
                {time: '06:00 PM'},
                {time: '06:30 PM'},
                {time: '07:00 PM'},
                {time: '07:30 PM'},
                {time: '08:00 PM'},
                {time: '08:30 PM'},
                {time: '09:00 PM'},
                {time: '09:30 PM'},
                {time: '10:00 PM'},
                {time: '10:30 PM'},
                {time: '11:00 PM'},
                {time: '11:30 PM'},
                {time: '11:59 PM'}
              ];

const renderDropdownList = ({ input, data, valueField, textField }) =>
  <DropdownList {...input}
    data={data}
    valueField={valueField}
    textField={textField}
    onChange={input.onChange} />

let EventForm = props => {
  const { addEvent, fields: { event, startTime, endTime }, handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit(addEvent) }>
      <div>
        <label htmlFor="event">Event </label>
        <Field name="event" component="input" type="text" />
      </div>
      <div>
        <label>Start Time</label>
        <Field
          name="startTime"
          component={ renderDropdownList }
          data={ times }
          valueField="time"
          textField="time"/>
      </div>
      <div>
        <label>End Time</label>
        <Field
          name="endTime"
          component={ renderDropdownList }
          data={ times }
          valueField="time"
          textField="time"/>
      </div>
      <label>All Day</label>
        <div>
          <Field name="allDay" id="allDay" component="input" type="checkbox"/>
        </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default EventForm = reduxForm({
  // a unique name for the form
  form: 'eventForm',
  fields: ['event', 'startTime', 'endTime'],
})(EventForm)
