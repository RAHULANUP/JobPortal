import React, { useState, useEffect } from 'react';
import './Updatejob.css';

import { Link,useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';

import { IoIosArrowBack } from "react-icons/io";


function Updatejob() {
    const { jobId } = useParams();
    const [jobTitle, setJobTitle] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [requirements, setRequirements] = useState('');
    const [skills, setSkills] = useState('');
    const [type, setType] = useState('');
    const [salary, setSalary] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch job details using the jobId and populate the form
        const fetchJobDetails = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:5000/api/list-job/${jobId}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const jobDetails = response.data.data;

                // Set the state with the retrieved job details
                setJobTitle(jobDetails.title);
                setCompany(jobDetails.company);
                setLocation(jobDetails.location);
                setJobDescription(jobDetails.description);
                setRequirements(jobDetails.requirements);
                setSkills(jobDetails.skills.join(',')); // Convert array to comma-separated string
                setType(jobDetails.type);
                setSalary(jobDetails.salary);
            } catch (error) {
                console.error('Error fetching job details:', error);
            }
        };

        fetchJobDetails();
    }, [jobId]);

    const handleUpdateJob = async (e) => {
        e.preventDefault();

        try {
            // Retrieve the JWT token from localStorage
            const token = localStorage.getItem('token');

            // Send POST request to update the job
            const response = await axios.post(
                `http://localhost:5000/api/list-job/edit/${jobId}`,
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
            console.log('Job Updated:', response.data);
            // Redirect to the job page
            navigate("/recruiter");
        } catch (error) {
            // Handle error - show an error message or do something else
            console.error('Error updating job:', error);
        }
    };

    return (
        <>
            <div className="job__main_container">
                <div className="update__job">
                    <form onSubmit={handleUpdateJob}>
                        <div>
                            <h1>UPDATE JOB</h1>
                            <Link className="back__arrow" to="/recruiter"><IoIosArrowBack /></Link> 
                        </div>
                        <div>
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
                        </div>
                        <div>
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
                        </div>
                        <div>
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
                                    placeholder="SKILLS ( ',' -separated)"
                                    value={skills}
                                    onChange={(e) => setSkills(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="with__dropdown">
                            <div>
                                <input
                                    type="text"
                                    placeholder="SALARY"
                                    value={salary}
                                    onChange={(e) => setSalary(e.target.value)}
                                />
                            </div>
                            <div>
                                <select
                                    className="drop__down"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                >
                                    <option value="">Job Type</option>
                                    {['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'].map((jobType) => (
                                        <option key={jobType} value={jobType}>
                                            {jobType}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <button type="submit" onClick={handleUpdateJob}>UPDATE JOB</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Updatejob;
