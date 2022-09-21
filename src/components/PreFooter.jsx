import React from "react";
import { useNavigate } from "react-router-dom";

const PreFooter = () => {
  let navigate = useNavigate();
  return (
    <div className="pre-footer">
      <div className="container">
        <h3>Ready to get started?</h3>
        <button onClick={() => navigate("/request-demo")}>Request Demo</button>
      </div>
    </div>
  );
};

export default PreFooter;
