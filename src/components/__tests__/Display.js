import React from "react";
import ReactDOM from "react-dom";
import { render, getNodeText } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

import Display from "../Display";

const gameData = {
  balls: 3,
  strikes: 2
};

it("renders without error", () => {
  const { getByTestId } = render(<Display />);
  const display = getByTestId("component-display");
});

it("renders balls", () => {
  const { getByTestId } = render(<Display {...gameData} />);
  const ballsArea = getByTestId("balls-display");

  expect(getNodeText(ballsArea)).toBe(gameData.balls + "");
});

it("renders strikes", () => {
  const { getByTestId } = render(<Display {...gameData} />);
  const strikesArea = getByTestId("strikes-display");

  expect(getNodeText(strikesArea)).toBe(gameData.strikes + "");
});
