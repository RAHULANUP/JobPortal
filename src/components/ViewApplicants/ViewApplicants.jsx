import React, { useState, useEffect } from 'react';
import "./ViewApplicants.css";
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ViewApplicants() {
    const [applicantsData, setApplicantsData] = useState([]);
    const { jobId } = useParams();

    useEffect(() => {
        // Retrieve the JWT token from localStorage
        const token = localStorage.getItem('token');

        // Make a GET request to fetch applicants
        axios.get(`https://dbms-jgsk.onrender.com/api/list-job/application/${jobId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(response => {
                setApplicantsData(response.data.data);
                console.log(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching applicants:', error);
            });
    }, [jobId]);

    return (
        <>
            <div className="view__applicants">
                <h1>JOB APPLICANTS</h1>
                <div>
                    {applicantsData.length > 0 ? (
                        <ul>
                            {applicantsData.map(applicant => (
                                <div className="card__container" key={applicant._id}>
                                    <div>
                                        <h2>{applicant.name}</h2>
                                        <p>Email: {applicant.email}</p>
                                        <p>Phone: {applicant.phone}</p>
                                        <p>Location: {applicant.location}</p>
                                        <p>Qualifications: {applicant.qualifications}</p>
                                        <p>Skills: {applicant.skills.join(', ')}</p>
                                        <p>Experience: {applicant.experience}</p>
                                        <p>Applied At: {new Date(applicant.appliedAt).toLocaleString()}</p>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    ) : (
                        <p>No applicants available</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default ViewApplicants;
