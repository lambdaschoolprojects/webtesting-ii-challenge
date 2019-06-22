import React from "react";

const Display = props => {
  return (
    <div data-testid="component-display">
      <div className="stats">
        <span>Balls: </span>
        <span data-testid="balls-display">{props.balls}</span>
      </div>
      <div className="stats">
        <span>Strikes: </span>
        <span data-testid="strikes-display">{props.strikes}</span>
      </div>
    </div>
  );
};

export default Display;
