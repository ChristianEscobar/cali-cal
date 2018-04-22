import { connect } from 'react-redux';
import * as selectors from '../../selectors';
import Task from './Task';

const mapStateToProps = (state) => ({
  events: selectors.getTodaysEvents(state),
});

export default connect(mapStateToProps)(Task);