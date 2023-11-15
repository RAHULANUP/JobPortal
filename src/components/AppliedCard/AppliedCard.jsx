import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./AppliedCard.css";

function AppliedCard() {
    const [jobData, setJobData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token')
        // Make a GET request to fetch applied jobs
        axios.get('http://localhost:5000/api/seeker/applied-jobs', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        } )
            .then(response => {
                setJobData(response.data.data);
                console.log("Applied Card",response.data.data);
            })
            .catch(error => {
                console.error('Error fetching applied jobs:', error);
            });
    }, []);

    return (
        <>
            <div>
                {jobData.length > 0 ? (
                    <ul>
                        {jobData.filter((job) => job.job.title.toLowerCase().includes(search.toLowerCase())).map(job => (
                            <div className="card__container" key={job._id}>
                                <div>
                                    <h2>{job.job.title}</h2>
                                    <p>{job.job.company} - {job.job.location}</p>
                                    <p>{job.job.description}</p>
                                </div>
                            </div>
                        ))}
                    </ul>
                ) : (
                    <p>No jobs available</p>
                )}
            </div>
        </>
    )
}

export default AppliedCard;
