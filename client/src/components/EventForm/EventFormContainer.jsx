import { connect } from 'react-redux';
import * as selectors from '../../selectors';
import * as actions from '../../actions';
import EventForm from './EventForm';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  addEvent: () => dispatch(actions.addEvent()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);