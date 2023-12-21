import React, { useState } from "react";
import "./Login.css";
import "../../../../src/";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    error: "",
    password: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setFormData({
        email: "",
        password: "",
      });
    }
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};
    if (!formData.email) {
      valid = false;
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.password) {
      valid = false;
      newErrors.password = "Password is required";
    } else if (formData.password.length < 4) {
      valid = false;
      newErrors.password = "Password must be at least 4 characters";
    }
    setErrors(newErrors);
    return valid;
  };

  return (
    <div className="login-container">
      <form onSubmit={onSubmit}>
        <h2>Log in to your account</h2>
        <label htmlFor="email">Enter your email address</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={onInputChange}
        />
        {errors.email && <div className="error">{errors.email}</div>}
        <label>Enter your password</label>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={onInputChange}
        />
        {errors.password && <div className="error">{errors.password}</div>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
