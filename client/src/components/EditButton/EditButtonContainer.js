import {connect} from 'react-redux';
import * as actions from '../../actions';
import * as selectors from '../../selectors';
import EditButton from './EditButton';

const mapStateToProps = (state) => ({
  selectedEvent: selectors.getSelectedEvent(state),
  
});

const mapDispatchToProps = (dispatch) => ({
    editEvent: (event, start, end) => dispatch(actions.editEvent(event, start, end)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditButton);