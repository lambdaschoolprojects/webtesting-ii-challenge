import React from "react";
import { render, getNodeText } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

import Dashboard from "../Dashboard";
import Display from "../Display";

it("renders without error", () => {
  render(<Dashboard />);
});

it("renders the buttons (strike, foul, ball, hit)", () => {
  const { getAllByTestId } = render(<Display />);
  const buttons = getAllByTestId("dashboard-button");
  const requiredButtons = ["Hit", "Strike", "Ball", "foul"];
  let buttonsFound = false;

  buttons.forEach((button, i) => {
    if (requiredButtons.includes(getNodeText(button))) {
      requiredButtons.splice(i, 1);
    }
  });

  buttonsFound = requiredButtons.length == 0;

  expect(buttonsFound).toBeTruthy();
});

it("updates the display with a button is clicked (strike or ball)", () => {});
