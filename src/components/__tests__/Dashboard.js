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

it("updates the display when a button is clicked (strike or ball)", () => {
  const { getByText } = render(<Dashboard />);
  const strikeButton = getByText(/strike/i);
  const ballButton = getByText(/ball/i);

  const { getByTestId } = render(<Display />);
  const strikes = getByTestId("strikes-display");
  const balls = getByTestId("balls-display");

  const initialStrikes = Number(getNodeText(strikes));
  const initialBalls = Number(getNodeText(balls));

  fireEvent(
    strikeButton,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true
    })
  );

  fireEvent(
    ballButton,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true
    })
  );

  const newStrikes = Number(getNodeText(strikes));
  const newBalls = Number(getNodeText(balls));

  expect(newStrikes).toBe(initialStrikes + 1);
  expect(newBalls).toBe(initialBalls + 1);
});
