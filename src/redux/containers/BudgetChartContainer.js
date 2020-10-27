import store from '../store.js';
import { connect } from 'react-redux';
import BudgetChart from '../../components/BudgetChart.jsx';

const mapStateToProps = (store) => ({
    labels: store.xLabels,
    data: store.dataEntries
  })

var BudgetChartContainer = connect(
    mapStateToProps,
    null
)(BudgetChart)

export default BudgetChartContainer;