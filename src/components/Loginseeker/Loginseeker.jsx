import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Loginseeker.css";

function Loginseeker() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Access the navigate function for programmatic navigation
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send POST request to the server for login
            const response = await axios.post(
                "https://dbms-jgsk.onrender.com/api/seeker/login",
                {
                    email,
                    password,
                }
            );

            // Handle success - maybe save the token to local storage or state
            const token = response.data.token;
            // Save the token to local storage
            localStorage.setItem("token", token);

            navigate("/seeker");
        } catch (error) {
            // Handle error - show an error message or do something else
            console.error("Login Error:", error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="box">
                    <div className="login_container">
                        <div className="content">
                            <div>
                                <h1>Job Seeker LOGIN</h1>
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
                            <div className="linker">
                                <Link className="linker" to="/signupSeeker">
                                    CREATE AN ACCOUNT
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Loginseeker;
