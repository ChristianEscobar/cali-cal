import {connect} from 'react-redux';
import * as actions from '../../actions';
import AddEventButton from './AddEventButton';

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  addEvent: () => dispatch(actions.addEvent()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEventButton);