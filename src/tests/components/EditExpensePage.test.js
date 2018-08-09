import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let editExpense, removeExpense, history, wrapper;
const expense = expenses[2];

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };

    wrapper = shallow(
        <EditExpensePage
            editExpense={editExpense}
            removeExpense={removeExpense}
            history={history}
            expense={expenses[2]}
        />
    );
});

test("should render the EditExpensePage correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should handle editExpense", () => {
    wrapper.find("ExpenseForm").prop("onSubmit")(expense);
    expect(editExpense).toHaveBeenLastCalledWith(expense.id, expense);
    expect(history.push).toHaveBeenLastCalledWith("/");
});

test("should handle removeExpense", () => {
    wrapper.find('button').simulate('click');
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expense.id });
    expect(history.push).toHaveBeenLastCalledWith("/");
});
