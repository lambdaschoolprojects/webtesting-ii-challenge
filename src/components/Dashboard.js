import React from "react";

import Button from "./Button";

const Dashboard = props => {
  return (
    <div data-testid="component-dashboard">
      <Button text="Strike" addAction={props.addAction} />
      <Button text="Ball" addAction={props.addAction} />
      <Button text="Hit" addAction={props.addAction} />
      <Button text="Foul" addAction={props.addAction} />
    </div>
  );
};

export default Dashboard;
