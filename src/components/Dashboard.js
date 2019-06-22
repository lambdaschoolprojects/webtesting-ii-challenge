import React from "react";

import Button from "./Button";

const Dashboard = () => {
  return (
    <div data-testid="component-dashboard">
      <Button text="Strike" />
      <Button text="Ball" />
      <Button text="Hit" />
      <Button text="Foul" />
    </div>
  );
};

export default Dashboard;
