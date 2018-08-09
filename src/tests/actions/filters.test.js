import moment from "moment";
import {
    setTextFilter,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate
} from "../../actions/filters";

test("should generate setStartDate action object", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    });
});
test("should generate setEndDate action object", () => {
    const action = setEndDate(moment(1000));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(1000)
    });
});
test("should return setTextFilter object w/ text value", () => {
    const text = "Something";
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text
    });
});
test("should return set filter object w/ empty text val", () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    });
});
test("should generate sortByDate action object", () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    });
});
test("should generate sortByAmount action object", () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    });
});
