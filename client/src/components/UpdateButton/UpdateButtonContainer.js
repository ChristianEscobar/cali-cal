import {connect} from 'react-redux';
import * as actions from '../../actions';
import UpdateButton from './UpdateButton'; 
import * as selectors from '../../selectors';

const mapStateToProps = (state) => ({
  taskId: selectors.getCurrentTask(state),
  newEvent: selectors.getSelectedEvent(state),
  formErrors: selectors.getFormErrors(state),
  isAllDay: selectors.getAllDay(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateTask: (event)=> dispatch(actions.updateTask(event)),
  setFormErrors: (errors) => dispatch(actions.setFormErrors(errors)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateButton);