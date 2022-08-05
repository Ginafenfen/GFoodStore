import React from "react";
import { useNavigate } from "react-router-dom";
import Test from "./Test";

const Dashboard = () => {
  let navigate = useNavigate();

  return (
    <div>
      <Test />
    </div>
  );
};

export default Dashboard;
