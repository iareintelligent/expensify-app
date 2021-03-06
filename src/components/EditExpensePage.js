import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { editExpense, removeExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
    onSubmit = expense => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push("/");
    };
    onRemove = e => {
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push("/");
    };
    render() {
        return (
            <div>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                    expense={this.props.expense}
                />
                <button onClick={this.onRemove}>Remove Expense</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: data => dispatch(removeExpense(data))
});

export default connect(
    undefined,
    mapDispatchToProps
)(EditExpensePage);
