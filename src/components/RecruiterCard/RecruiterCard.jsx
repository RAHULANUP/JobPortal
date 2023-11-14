import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';
import './RecruiterCard.css';

function RecruiterCard() {
  const [jobData, setJobData] = useState(null);

  useEffect(() => {
    // Retrieve the JWT token from localStorage
    const token = localStorage.getItem('token');

    // Make a GET request to your API endpoint with the Authorization header
    axios.get('https://dbms-jgsk.onrender.com/api/list-job/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        setJobData(response.data);
        console.log('Job data:', response.data);
      })
      .catch(error => {
        console.error('Error fetching job data:', error);
      });
  }, []);

  return (
    <>
      {jobData && (
        <div className="card__container">
          <div>
            <h1>{jobData.title}</h1>
            <h2>{jobData.company}</h2>
            <h3>{jobData.location}</h3>
            <h3>{jobData.description}</h3>
            <h4>{jobData.education}</h4>
            <h2>{`${jobData.salaryMin}$ - ${jobData.salaryMax}$`}</h2>
          </div>
          <div className="del__update">
            <button><GrUpdate /></button>
            <button><AiOutlineClose /></button>
          </div>
        </div>
      )}
    </>
  );
}

export default RecruiterCard;
