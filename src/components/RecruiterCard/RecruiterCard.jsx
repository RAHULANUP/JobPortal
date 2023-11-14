import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiTarget } from "react-icons/fi";
import { GrUpdate } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import {Link} from "react-router-dom";
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
            <div className="card__container" key={job._id}>
            <div>
              <h2>{job.title}</h2>
              <p>{job.company} - {job.location}</p>
              <p>{job.description}</p>
            </div>
            <div className='del__update'>
              <button><FiTarget /></button>
              <Link to="/updatejob"><button><GrUpdate /></button></Link>
              <button onClick={() => deleteJob(job._id)}><RiDeleteBinLine /></button>
            </div>
          </div>
          ))}
        </ul>
      ) : (
        <p>No jobs available</p>
      )}
    </div>
  );
}

export default JobList;
