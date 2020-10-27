import store from '../store.js';
import { connect } from 'react-redux';
import BudgetWidget from '../../components/BudgetWidget.jsx';

const mapStateToProps = (store) => ({
    incomeColors: store.incomeColors,
    expenseColors: store.expenseColors,
    categoryList: store.categories
  })

var BudgetWidgetContainer = connect(
    mapStateToProps,
    null
)(BudgetWidget)

export default BudgetWidgetContainer;