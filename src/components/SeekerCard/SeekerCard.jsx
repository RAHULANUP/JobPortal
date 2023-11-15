import React,{ useState , useEffect } from  "react";
import "./SeekerCard.css";
import axios from "axios";
import {Link} from  "react-router-dom";
function SeekerCard({search}) {
    const [jobData, setJobData] = useState([]);
    
    const token = localStorage.getItem('token');
  
  
    useEffect(() => {
      axios.get('http://localhost:5000/api/seeker/all-jobs/', {
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
  return (
    <>
      <h1>Job List</h1>
      {jobData.length > 0 ? (
        <ul>
          {jobData.filter((job)=>job.title.toLowerCase().includes(search.toLowerCase())).map(job => (
            <div className="card__container" key={job._id}>
            <div>
              <h2>{job.title}</h2>
              <p>{job.company} - {job.location}</p>
              <p>{job.description}</p>
            </div>
            <div className='apply'>
                <Link to={`/apply-job/${job._id}`}><button>Easy Apply</button></Link> 
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

export default SeekerCard;