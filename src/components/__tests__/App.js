import React from "react";
import { render, getNodeText, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

import App from "../App";

it("updates the display when the button is clicked", () => {
  const { getByText, getByTestId } = render(<App />);
  const strikesButton = getByText("Strike");
  const ballsButton = getByText("Ball");
  const strikeArea = getByTestId("strikes-display");
  const ballArea = getByTestId("balls-display");

  const initialStrikes = Number(getNodeText(strikeArea));
  const initialBalls = Number(getNodeText(ballArea));

  fireEvent.click(strikesButton);
  fireEvent.click(ballsButton);

  expect(Number(getNodeText(strikeArea))).toBe(initialStrikes + 1);
  expect(Number(getNodeText(ballArea))).toBe(initialBalls + 1);
});
