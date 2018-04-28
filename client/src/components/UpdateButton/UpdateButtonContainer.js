import {connect} from 'react-redux';
import * as actions from '../../actions';
import UpdateButton from './UpdateButton'; 
import * as selectors from '../../selectors';

const mapStateToProps = (state) => ({
    taskId: selectors.getCurrentTask,
  });
const mapDispatchToProps = (dispatch) => ({
    updateTask: (body)=> dispatch(actions.updateTask(body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateButton);