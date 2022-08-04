import React from "react";
import { useNavigate } from "react-router-dom";
import Test from "./Test";

const Dashboard = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/checkout");
  };

  return (
    <div>
      showing how many plates ware waiting....
      <button onClick={handleClick}>click here go checkout </button>
      <div className="block space-y-4 md:flex md:space-y-0 md:space-x-4"></div>
      <Test />
    </div>
  );
};

export default Dashboard;
