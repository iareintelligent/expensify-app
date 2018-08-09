import expenses from "../fixtures/expenses";
import expensesReducer from "../../reducers/expenses";

test("should set default state to empty array", () => {
    const state = expensesReducer(undefined, { type: "@@init" });
    expect(state).toEqual([]);
});
test("should remove expense by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});
test("should remove nothing if no matching id found", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "123abc"
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test("Should add new expense to array", () => {
    const expense = {
        note: "Beers",
        amount: 1623,
        description: ""
    };
    const action = {
        type: "ADD_EXPENSE",
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});
test("Should edit an expense in the array", () => {
    const updates = {
        amount: 2000,
        description: "Added interest"
    };
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[0].id,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        { ...expenses[0], ...updates },
        expenses[1],
        expenses[2]
    ]);
});

test("Should not edit expense if expense not found", () => {
    const updates = {
        amount: 0,
        description: "item never purchased"
    };
    const action = {
        type: "EDIT_EXPENSE",
        id: "abc123",
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
