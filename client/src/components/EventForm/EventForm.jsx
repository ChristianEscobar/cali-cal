import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


let EventForm = props => {
  const { addEvent, fields: { event }, handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit(addEvent) }>
      <div>
        <label htmlFor="event">Event </label>
        <Field name="event" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

/*
EventForm = reduxForm({
  // a unique name for the form
  form: 'eventForm'
})(EventForm)


let EventForm = ({ addEvent, fields: { event }, handleSubmit }) => {
  <form onSubmit={ handleSubmit(addEvent) }>
    <div>
      <label htmlFor="event">Event </label>
      <Field name="event" component="input" type="text" />
    </div>
      <button type="submit">Submit</button>
  </form>
}
*/

export default EventForm = reduxForm({
  // a unique name for the form
  form: 'eventForm',
  fields: ['event'],
})(EventForm)
