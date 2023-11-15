import React from 'react'
import "./AppliedCard.css";
function AppliedCard(){
    return (
        <>
            <div>
            {jobData.length > 0 ? (
            <ul>
                {jobData.filter((job)=>job.title.toLowerCase().includes(search.toLowerCase())).map(job => (
                    <div className="card__container" key={job._id}>
                        <div>
                            <h2>{job.title}</h2>
                            <p>{job.company} - {job.location}</p>
                            <p>{job.description}</p>
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