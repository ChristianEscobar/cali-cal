import { connect } from 'react-redux';
import * as selectors from '../../selectors';
import * as actions from '../../actions';
import EventForm from './EventForm';

const mapStateToProps = (state) => ({
  event: selectors.getSelectedEvent(state),
  selectedDay: selectors.getSelectedDay(state),
  editing: selectors.getEditValue(state),
  formErrors: selectors.getFormErrors(state),
  updStatus:state.reducer.savingStateStatus,
});

const mapDispatchToProps = (dispatch) => ({
  changeEventDetails: (newEventDetails) => dispatch(actions.changeEventDetails(newEventDetails)),
  setFormErrors: (errors) => dispatch(actions.setFormErrors(errors)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);