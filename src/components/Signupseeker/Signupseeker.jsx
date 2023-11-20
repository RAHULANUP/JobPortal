import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signupseeker.css";

function Signupseeker() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Access the navigate function
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send POST request to the server
            const response = await axios.post(
                "https://dbms-jgsk.onrender.com/api/user/signup",
                {
                    username,
                    email,
                    password,
                    type: "seeker", // Assuming you want to set the type to "seeker"
                }
            );

            const token = response.data.token;
            // Save the token to local storage
            localStorage.setItem("token", token);

            navigate("/seeker");

        } catch (error) {
            // Handle error - show an error message or do something else
            console.error("Error:", error);
        }
    };

    return (
        <>
            <div className="box">
                <div className="signup_container">
                    <div className="content">
                        <div>
                            <h1>Job Seeker SIGNUP</h1>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
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
                                <button type="submit">SIGN UP</button>
                            </div>

                            <div className="linker">
                                <Link className="linker" to="/loginSeeker">
                                    ALREADY HAVE AN ACCOUNT?
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signupseeker;
