import {connect} from 'react-redux';
import * as actions from '../../actions';
import DeleteButton from './DeleteButton';

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
    saveCal: ()=> dispatch(actions.saveCal),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);