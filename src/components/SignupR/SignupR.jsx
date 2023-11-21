import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SignupR.css";
import { Link } from "react-router-dom";

import axios from "axios";

import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("recruiter");

  // Access the navigate function
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://dbms-jgsk.onrender.com/api/company/signup",
        {
          username,
          email,
          password,
          type,
        }
      );
      const token = response.data.token;
      // Save the token to local storage
      localStorage.setItem("token", token);
      toast.success("Successful")
      // Use navigate to redirect to /recruiter
      navigate("/recruiter");

    } catch (error) {
      toast.error("Invalid Credentials");
      console.error("Error:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="box">
          <div className="signup_container">
            <div className="content">
              <div>
                <h1>Recruiter SIGNUP</h1>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <input className="button" type="submit" value="SIGN UP" />
              </div>

              <div className="linker">
                <Link className="linker" to="/loginR">
                  ALREADY HAVE AN ACCOUNT?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Signup;
