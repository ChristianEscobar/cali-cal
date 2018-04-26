import { connect } from 'react-redux';
import Week from './Week';
import * as selectors from '../../selectors';
import * as actions from '../../actions';

const mapStateToProps = (state) => {
  
  return {
    days: selectors.getDayAndCounts(state.reducer),
    selectedDay: state.reducer.selectedDay,
  }
}

const mapStateToDispatch = (dispatch) => ({
  changeDay: (day) => dispatch(actions.changeDateAction(day)),
  saveCal: ()=> dispatch(actions.saveCal)
});

// const mapDispatchToProps = (dispatch) => ({
//   saveCal: ()=> dispatch(actions.saveCal),
// });

export default connect(mapStateToProps, mapStateToDispatch)(Week);
