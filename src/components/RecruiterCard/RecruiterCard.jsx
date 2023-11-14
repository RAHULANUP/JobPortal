import React, { useEffect, useState } from 'react';
import axios from 'axios';

function JobList() {
  const [jobData, setJobData] = useState([]);
  const token = localStorage.getItem('token');


  useEffect(() => {
    axios.get('https://dbms-jgsk.onrender.com/api/list-job/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        setJobData(response.data.data);
        console.log(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching job data:', error);
      });
  }, [token]);


  const deleteJob = async (jobId) => {
    try {
      const response = await axios.post(
        `https://dbms-jgsk.onrender.com/api/list-job/delete/${jobId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setJobData((prevJobData) => prevJobData.filter((job) => job._id !== jobId));
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
