import axios from "axios";
import { useState } from "react";
import "./Account.css";
import { API_URL } from "../../api";
import Logo from "../../assets/images/Logo.png";

// Define the Login function
export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const submit = async (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };

    try {
      // Send POST request
      const { data } = await axios.post(`${API_URL}/accounts/token/`, user);

      // Save tokens to localStorage
      localStorage.clear();
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;
      window.location.href = '/';
    } catch (error) {
      console.error("Login failed:", error.message);
      alert("Invalid username or password");
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={submit}>
        <div className="Auth-form-logo">
          <img src={Logo} alt="Your Logo" />
        </div>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              className="form-control mt-1"
              placeholder="Enter Username"
              name="username"
              type="text"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
