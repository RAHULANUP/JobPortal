import React, { useState } from 'react';
import "./AdminLogin.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
    const [email,setEmail]  = useState("");
    const  [password,setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send POST request to the server
            const response = await axios.post(
                "http://localhost:5000/api/user/login/",
                {
                    email,
                    password,
                }
            );

            const token = response.data.token;
            // Save the token to local storage
            localStorage.setItem("token", token);

            navigate("/admin");

        } catch (error) {
            // Handle error - show an error message or do something else
            console.error("Error:", error);
        }
    };
  return (
    <>
    <form onSubmit={handleSubmit}>
        <div className="box">
            <div className="login_container">
                <div className="content">
                    <div>
                        <h1>ADMIN</h1>
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <button type="submit">LOGIN</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
    </>
  )
}

export default AdminLogin;