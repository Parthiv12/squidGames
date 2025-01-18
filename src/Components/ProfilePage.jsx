import React from "react";

const ProfilePage = () => {
  // Example user data (you can replace this with real data in the future)
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    gamesPlayed: 10,
    highScore: 95,
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem", backgroundColor: "#f5f5f5" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#333" }}>Player Profile</h1>
      <div style={{ margin: "2rem auto", padding: "1.5rem", backgroundColor: "#fff", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "10px", maxWidth: "400px" }}>
        <h2 style={{ color: "#555" }}>{user.name}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Games Played:</strong> {user.gamesPlayed}</p>
        <p><strong>High Score:</strong> {user.highScore}</p>
      </div>
      <button
        style={{
          padding: "0.8rem 1.5rem",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
        onClick={() => alert("Feature coming soon!")}
      >
        Edit Profile
      </button>
    </div>
  );
};

export default ProfilePage;
