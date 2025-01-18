import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page" style={{ backgroundColor: "#111", color: "#fff", textAlign: "center" }}>
      <h1 style={{ fontSize: "3rem", margin: "2rem" }}>🦑 Squid Games Coding Challenge</h1>
      <button
        onClick={() => navigate("/game")}
        style={{
          padding: "1rem 2rem",
          backgroundColor: "red",
          border: "none",
          borderRadius: "10px",
          color: "#fff",
          cursor: "pointer",
          fontSize: "1.5rem",
        }}
      >
        Start Game
      </button>
    </div>
  );
};

export default LandingPage;
 