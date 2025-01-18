import React from "react";

const GameDashboard = () => {
  // Static data for demonstration
  const problem = "Write a function to reverse a string.";
  const status = "Green Light";

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1>Red Light/Green Light: {status}</h1>
      <div style={{ margin: "20px auto", width: "80%", backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "10px" }}>
        <h2>Problem:</h2>
        <p>{problem}</p>
      </div>
      <div style={{ backgroundColor: "#1e1e1e", color: "#fff", padding: "20px", borderRadius: "10px", margin: "20px auto", width: "80%" }}>
        <h3>Editor (Static Placeholder)</h3>
        <p>// Your code goes here...</p>
      </div>
    </div>
  );
};

export default GameDashboard;
