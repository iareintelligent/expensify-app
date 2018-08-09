import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "../../components/NotFoundPage";

test("should render the not found page for any non-existing route", () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});
