import React, { useEffect, useState } from 'react';
import axios from 'axios';

function JobList() {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    // Make a GET request to your API endpoint
    axios.get('https://dbms-jgsk.onrender.com/api/list-job/') // Replace with your actual API endpoint
      .then(response => {
        setJobData(response.data.data);
        console.log(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching job data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Job List</h1>
      {jobData.length > 0 ? (
        <ul>
          {jobData.map(job => (
            <li key={job._id}>
              <h2>{job.title}</h2>
              <p>{job.company} - {job.location}</p>
              <p>{job.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No jobs available</p>
      )}
    </div>
  );
}

export default JobList;
