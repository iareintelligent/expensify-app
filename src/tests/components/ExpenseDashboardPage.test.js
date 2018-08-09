import React from "react";
import { shallow } from "enzyme";
import ExpenseDashboardPage from "../../components/ExpenseDashboardPage";

test("should render the dashboard page for any non-existing route", () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});
