import React, { useState } from "react";
import "./SignUp.css";

function SignUp() {
  const [username, setUsername] = useState("");  // ✅ NEW
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const res = await fetch("http://localhost:3002/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create Account 🚀</h2>

        {/* ✅ Username */}
        <input
          type="text"
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
}

export default SignUp;