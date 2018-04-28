import { connect } from 'react-redux';
import * as selectors from '../../selectors';
import * as actions from '../../actions';
import EventForm from './EventForm';

const mapStateToProps = (state) => ({
  eventData: selectors.getSelectedEvent(state),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);