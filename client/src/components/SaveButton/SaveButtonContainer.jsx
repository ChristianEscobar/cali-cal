import { connect } from 'react-redux';
import * as actions from '../../actions';
import SaveButton from './SaveButton'; 
import * as selectors from '../../selectors';

const mapStateToProps = (state) => ({
  newEvent: selectors.getSelectedEvent(state),
});

const mapDispatchToProps = (dispatch) => ({
  saveTask: (newEvent) => dispatch(actions.newTask(newEvent)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SaveButton);