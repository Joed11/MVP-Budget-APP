import store from '../store.js';
import { connect } from 'react-redux';
import InputList from '../../components/InputList.jsx';
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
    categories: store.categories
  })

var InputListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(InputList)

export default InputListContainer;