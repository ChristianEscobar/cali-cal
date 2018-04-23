import {connect} from 'react-redux';
import * as actions from '../../actions';
import EditButton from './EditButton';

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
    saveCal: ()=> dispatch(actions.saveCal),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditButton);