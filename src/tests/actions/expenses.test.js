import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

//removing expenses
test("should setup remove expense action object", () => {
    const action = removeExpense({ id: "123abc" });
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    });
});

//edit expense
test("should setup edit expense action object", () => {
    const id = "123abd";
    const updates = {
        note: "test note",
        description: "test description",
        amount: 4500
    };
    const action = editExpense(id, updates);
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id,
        updates
    });
});

test("should setup add expense action object", () => {
    const expenseData = {
        description: "rent",
        amount: 109500,
        createdAt: 1000,
        note: "this was last month's rent"
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test("should add expense w/ no parameters provided", () => {
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: "",
            note: "",
            amount: 0,
            createdAt: 0
        }
    });
});
