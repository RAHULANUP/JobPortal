import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Postjob.css';

function Postjob() {
    const [jobTitle, setJobTitle] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [requirements, setRequirements] = useState('');
    const [skills, setSkills] = useState('');
    const [type, setType] = useState('');
    const [salary, setSalary] = useState('');
    const navigate = useNavigate();


    const handleCreateJob = async (e) => {
        e.preventDefault();


        try {
            // Retrieve the JWT token from localStorage
            const token = localStorage.getItem('token');

            // Send POST request to your API endpoint with the job details and headers
            const response = await axios.post(
                'https://dbms-jgsk.onrender.com/api/list-job/create',
                {
                    title: jobTitle,
                    company,
                    location,
                    description: jobDescription,
                    requirements,
                    skills: skills.split(','), // Convert comma-separated string to an array
                    type,
                    salary,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            // Handle success - maybe redirect or show a success message
            console.log('Job Created:', response.data);
            // Redirect to the job page
            navigate("/recruiter");


        } catch (error) {
            // Handle error - show an error message or do something else
            console.error('Error creating job:', error);
        }
    };

    return (
        <>
            <div className="job__main_container">
                <div className="post__job">
                    <form onSubmit={handleCreateJob}>
                        <h1>NEW JOB</h1>
                        <div>
                            <input
                                type="text"
                                placeholder="JOB TITLE"
                                value={jobTitle}
                                onChange={(e) => setJobTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="COMPANY"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="LOCATION"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="JOB DESCRIPTION"
                                value={jobDescription}
                                onChange={(e) => setJobDescription(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="REQUIREMENTS"
                                value={requirements}
                                onChange={(e) => setRequirements(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="SKILLS (comma-separated)"
                                value={skills}
                                onChange={(e) => setSkills(e.target.value)}
                            />
                        </div>
                        <div>
                            <select value={type} onChange={(e) => setType(e.target.value)}>
                                <option value="">Select Job Type</option>
                                {['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'].map((jobType) => (
                                    <option key={jobType} value={jobType}>
                                        {jobType}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <input
                                type="text"
                                placeholder="SALARY"
                                value={salary}
                                onChange={(e) => setSalary(e.target.value)}
                            />
                        </div>
                        <button type="submit">CREATE JOB</button>
                        <Link to="/recruiter">goto</Link>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Postjob;
