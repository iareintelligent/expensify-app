import React from "react";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";
import { connect } from "react-redux";

export class AddExpensePage extends React.Component {
    onSubmit = expense => {
        // props.dispatch(addExpense(expense));
        this.props.addExpense(expense);
        this.props.history.push("/");
    };
    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         expenses: state.expenses
//     };
// };

const mapDispatchToProps = dispatch => ({
    addExpense: expense => dispatch(addExpense(expense))
});

// export default connect(mapStateToProps)(AddExpensePage);
export default connect(
    undefined,
    mapDispatchToProps
)(AddExpensePage);
