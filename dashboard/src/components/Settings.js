import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

function Settings() {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decoded = jwtDecode(token);
      setUser(decoded);
      setUsername(decoded.username);
      setEmail(decoded.email);
    }
  }, []);

 const handleUpdate = async () => {
  try {
    const res = await fetch("http://localhost:3002/update-profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: user.id || user._id, // ✅ handle both cases
        username,
        email,
        password,
      }),
    });

    const data = await res.json();

    console.log("UPDATE RESPONSE:", data);

    if (data.message === "Profile updated ✅") {
      alert(data.message);

      // ✅ IMPORTANT: logout to refresh token
      localStorage.removeItem("token");

      // ✅ redirect to login
      window.location.href = "http://localhost:3001/login";
    } else {
      alert("Update failed ❌");
    }

  } catch (err) {
    console.error("Update error:", err);
    alert("Something went wrong ❌");
  }
};




  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>⚙️ Settings</h2>

        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New Password (optional)"
        />

        <button onClick={handleUpdate}>Update Profile</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "300px",
  },
};

export default Settings;