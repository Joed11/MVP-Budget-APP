import store from '../store.js';
import { connect } from 'react-redux';
import Inputs from '../../components/Inputs.jsx';
import changeDataPoints from '../actions/changeDataPoints.js';

const mapDispatchToProps = (dispatch) => {
  return {
      updateDataPoints: (dataPoints) => {
        dispatch(changeDataPoints(dataPoints))
      },
  }
}

const mapStateToProps = (store) => ({
    dataPoints: store.dataPoints,
    assets: store.assets,
    categories: store.categories,
    incomeColors: store.incomeColors,
    expenseColors: store.expenseColors
  })

var InputsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Inputs)

export default InputsContainer;