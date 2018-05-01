import { connect } from 'react-redux';
import * as actions from '../../actions';
import CancelButton from './CancelButton'; 
import * as selectors from '../../selectors';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  turnEventEditOff: () => dispatch(actions.turnEventEditOff()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CancelButton);