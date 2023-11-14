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

  const deleteJob = async (jobId) => {
    try {
      // Make a DELETE request to your API endpoint with the job ID
      const response = await axios.delete(`https://dbms-jgsk.onrender.com/api/list-job/delete/${jobId}`); // Replace with your actual DELETE API endpoint

      // If the deletion was successful, update the job list by filtering out the deleted job
      if (response.status === 200) {
        setJobData(prevJobData => prevJobData.filter(job => job._id !== jobId));
        console.log(`Job with ID ${jobId} deleted successfully`);
      }
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

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
              <div>
                <button onClick={() => deleteJob(job._id)}>Delete</button>
                <button>Update</button>
              </div>
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
