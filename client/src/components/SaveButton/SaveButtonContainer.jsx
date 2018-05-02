import { connect } from 'react-redux';
import * as actions from '../../actions';
import SaveButton from './SaveButton'; 
import * as selectors from '../../selectors';

const mapStateToProps = (state) => ({
  newEvent: selectors.getSelectedEvent(state),
  isAllDay: selectors.getAllDay(state),
});

const mapDispatchToProps = (dispatch) => ({
  saveTask: (newEvent, isAllDay) => dispatch(actions.newTask(newEvent, isAllDay)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SaveButton);