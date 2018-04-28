import { connect } from 'react-redux';
import * as selectors from '../../selectors';
import * as actions from '../../actions';
import EventForm from './EventForm';

const mapStateToProps = (state) => ({
  eventData: selectors.getSelectedEvent(state),
  selectedDay: selectors.getSelectedDay(state),
  editing: selectors.getEditValue(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeEvent: (event) => dispatch(actions.changeEvent(event.target.value)),
  changeEventStart: (event) => dispatch(actions.changeEventStart(event.target.value)),
  changeEventEnd: (event) => dispatch(actions.changeEventEnd(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);