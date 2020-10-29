import store from '../store.js';
import { connect } from 'react-redux';
import BudgetChart from '../../components/BudgetChart.jsx';

const mapStateToProps = (store) => ({
    labels: store.labels,
    dataPoints: store.dataPoints,
    assets: store.assets,
    savedCharts: store.savedCharts
  })

var BudgetChartContainer = connect(
    mapStateToProps,
    null
)(BudgetChart)

export default BudgetChartContainer;