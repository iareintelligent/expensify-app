import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";
import moment from "moment";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test("should render ExpenseListFilters correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should handle ExpenseListFilters with alt data", () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot;
});

test("should handle text change", () => {
    const value = altFilters.text;
    wrapper.find("input").simulate("change", {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("should sort by date", () => {
    const value = filters.sortBy;
    // change so that filter is set to 'amount' using altFilters
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find("select").simulate("change", {
        target: { value }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test("should sort by amount", () => {
    const value = altFilters.sortBy;
    wrapper.find("select").simulate("change", {
        target: { value }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test("should handle date changes", () => {
    const startDate = moment(0).add(4, "years");
    const endDate = moment(0).add(5, "years");

    wrapper.find("DateRangePicker").prop("onDatesChange")({
        startDate,
        endDate
    });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("should handle date focu changes", () => {
    const calendarFocused = "endDate";
    wrapper.find("DateRangePicker").prop("onFocusChange")(calendarFocused);
    expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
});
