import React,{ useState , useEffect } from  "react";
import "./AdminJobCard.css";

import axios from "axios";

import { RiDeleteBinLine } from "react-icons/ri";

function AdminJobCard() {
    const [jobData, setJobData] = useState([]);
    
    const token = localStorage.getItem('token');
  
  
    useEffect(() => {
      axios.get('http://localhost:5000/api/admin/all-jobs', {
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
          `http://localhost:5000/api/admin/delete/${jobId}`,
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
    <>
      {jobData.length > 0 ? (
        <ul>
          {jobData.map(job => (
            <div className="card__container" key={job._id}>
            <div>
              <h2>{job.title}</h2>
              <p>{job.company} - {job.location}</p>
              <p>{job.description}</p>
            </div>
            <div className="delete">
                <button onClick={()=>deleteJob(job._id)}><RiDeleteBinLine /></button>
            </div>
          </div>
          ))}
        </ul>
      ) : (
        <p>No jobs available</p>
      )}        
    </>
  )
}

export default AdminJobCard;