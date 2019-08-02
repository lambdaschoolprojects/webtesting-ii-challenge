import React from "react";

const Button = props => {
  return (
    <div
      onClick={() => props.addAction(props.text.toLowerCase() + "s")}
      data-testid="dashboard-button"
    >
      {props.text}
    </div>
  );
};

export default Button;
