import React from "react";
import { render, getNodeText, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

import Dashboard from "../Dashboard";
import Display from "../Display";

it("renders without error", () => {
  render(<Dashboard />);
});

it("renders the buttons (strike, foul, ball, hit)", () => {
  const { getAllByTestId } = render(<Dashboard />);
  const buttons = getAllByTestId("dashboard-button");
  const requiredButtons = ["Hit", "Strike", "Ball", "Foul"];
  let buttonsFound = 0;

  buttons.forEach(button => {
    if (requiredButtons.includes(getNodeText(button))) buttonsFound++;
  });

  expect(buttonsFound).toBe(requiredButtons.length);
});
