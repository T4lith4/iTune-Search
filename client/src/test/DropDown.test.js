import React from "react";
import DropDown from "../components/drop-down";
import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<DropDown />).toJSON();
  expect(tree).toMatchSnapshot();
});