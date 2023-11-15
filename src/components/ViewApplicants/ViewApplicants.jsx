import React from 'react'

function ViewApplicants() {
  return (
    <>
        <h1>JOB APPLICANTS</h1>
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

export default ViewApplicants