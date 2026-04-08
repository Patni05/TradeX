import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

function UserInfo() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    // ❌ NO redirect here
    if (!token) {
      console.log("No token found");
      return;
    }

    try {
      const decoded = jwtDecode(token);
      setUser(decoded);
    } catch (err) {
      console.log("Decode error:", err);
      localStorage.removeItem("token");
    }
  }, []);

  if (!user) return <p>...</p>;

  return (
    <div>
      <p>👤 {user.username}</p>
      <p>📧 {user.email}</p>
    
    </div>
  );
}

export default UserInfo;