import {connect} from 'react-redux';
import * as actions from '../../actions';
import DeleteButton from './DeleteButton';
import * as selectors from '../../selectors';

const mapStateToProps = (state) => ({
    newEvent: selectors.getSelectedEvent(state),
});
const mapDispatchToProps = (dispatch) => ({
    deleteTask: (id)=> dispatch(actions.deleteTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);