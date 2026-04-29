import React, { useState } from "react";
import "./SignUp.css";

function SignUp() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error
  };

  // ✅ Validation function
  const validate = () => {
    let newErrors = {};

    if (!form.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async () => {
    if (!validate()) return; // ❌ stop if invalid

    setLoading(true);

    try {
      const res = await fetch("http://localhost:3002/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      alert(data.message);
    } catch {
      alert("Signup failed ❌");
    }

    setLoading(false);
  };

  return (
    <div className="su-container">

      <div className="su-right">
        <div className="su-card">

          <h2>Create Account</h2>

          {/* Username */}
          <div className="su-input">
            <input name="username" onChange={handleChange} />
            <label>Username</label>
            {errors.username && <p className="su-error">{errors.username}</p>}
          </div>

          {/* Email */}
          <div className="su-input">
            <input name="email" onChange={handleChange} />
            <label>Email</label>
            {errors.email && <p className="su-error">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="su-input su-password">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={handleChange}
            />
            <label>Password</label>

            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "🙈" : "👁"}
            </span>

            {errors.password && <p className="su-error">{errors.password}</p>}
          </div>

          <button onClick={handleSignup} disabled={loading}>
            {loading ? "Creating..." : "Create Account"}
          </button>

        </div>
      </div>
    </div>
  );
}

export default SignUp;