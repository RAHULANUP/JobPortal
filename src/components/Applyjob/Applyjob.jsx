import React, { useState,useEffect } from 'react';
import { Link, useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';
import './Applyjob.css';

function Applyjob() {
    const {jobId} = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [qualification, setQualification] = useState('');
    const [skills, setSkills] = useState('');
    const [experience, setExperience] = useState('');
    const [salary, setSalary] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        // Fetch job details using the jobId and populate the form
        const postApply = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.post(`http://localhost:5000/api/apply-job/${jobId}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const jobDetails = response.data.data;

                // Set the state with the retrieved job details
                setName(jobDetails.name);
                setEmail(jobDetails.email);
                setPhone(jobDetails.phone);
                setLocation(jobDetails.location);
                setQualification(jobDetails.qualification);
                setSkills(jobDetails.skills.join(',')); // Convert array to comma-separated string
                setExperience(jobDetails.experience);
                setSalary(jobDetails.salary);
            } catch (error) {
                console.error('Error fetching job details:', error);
            }
        };

        postApply();
    }, [jobId]);

    const handleApplyJob = async (e) => {
        e.preventDefault();
    
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(
                'http://localhost:5000/api/apply-job', // Endpoint for applying to a job
                {
                    name,
                    email,
                    phone,
                    location,
                    qualification,
                    skills: skills.split(','), // Convert skills to an array
                    experience,
                    salary,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
    
            // Handle success - maybe redirect or show a success message
            console.log('Job Application Successful:', response.data);
            navigate("/recruiter"); // Redirect after applying
        } catch (error) {
            // Handle error - show an error message or do something else
            console.error('Error applying to job:', error);
        }
    };

    return (
        <>
            <div className="job__main_container">
                <div className="post__job">
                    <form onSubmit={handleApplyJob}>
                        <h1>APPLY JOB</h1>
                        <div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="EMAIL"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="PHONE"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
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

                        </div>
                        <div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="QUALIFICATION"
                                    value={qualification}
                                    onChange={(e) => setQualification(e.target.value)}
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
                                <input
                                    type="text"
                                    placeholder="EXPERIENCE"
                                    value={experience}
                                    onChange={(e) => setExperience(e.target.value)}
                                />
                            </div>
                        </div>
                        <button type="submit">APPLY JOB</button>
                        <Link to="/recruiter">goto</Link>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Applyjob;
