import React from "react";
import Header from "../../components/Header";
import { shallow } from "enzyme";

test("should shallow render Header correctly", () => {
    const wrapper = shallow(<Header />);
    // expect(toJson(wrapper)).toMatchSnaupshot(); // not needed bc of "enzyme-to-json/serializer" in jest.config.json
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find("h1").text()).toBe("Expensify");
});
