import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";
import moment from "../__mocks__/moment";

test("should render ExpenseForm correctly", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm with expense data", () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[2]} />);
    expect(wrapper).toMatchSnapshot();
});

test("should render error for invalid form submission", () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("form").simulate("submit", {
        preventDefault: () => {}
    });
    expect(wrapper.state("errorMessage").length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test("should set description on input change", () => {
    const value = "New description";
    const wrapper = shallow(<ExpenseForm />);
    wrapper
        .find("input")
        .at(0)
        .simulate("change", {
            target: { value }
        });
    expect(wrapper.state("description")).toBe(value);
});

test("should set note on note change", () => {
    const value = "New note";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("textarea").simulate("change", {
        target: { value }
    });
    expect(wrapper.state("note")).toBe(value);
});

test("should set amount if valid input", () => {
    const value = "23.45";
    const wrapper = shallow(<ExpenseForm />);
    wrapper
        .find("input")
        .at(1)
        .simulate("change", {
            target: { value }
        });
    expect(wrapper.state("amount")).toBe(value);
});

test("should NOT set amount if invalid input", () => {
    const value = "23.456";
    const wrapper = shallow(<ExpenseForm />);
    const oldValue = wrapper.state("amount");
    wrapper
        .find("input")
        .at(1)
        .simulate("change", {
            target: { value }
        });
    expect(wrapper.state("amount")).toBe(oldValue);
});

test("should call onSubmit prop for valid form submission", () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(
        <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
    );

    wrapper.find("form").simulate("submit", {
        preventDefault: () => {}
    });
    expect(wrapper.state("errorMessage")).toBe("");
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });
});

test("should set new date on date change", () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("SingleDatePicker").prop("onDateChange")(now);
    expect(wrapper.state("createdAt")).toEqual(now);
});

test("should change calendarFocus state", () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("SingleDatePicker").prop("onFocusChange")({ focused });
    expect(wrapper.state("calendarFocused")).toBe(focused);
});