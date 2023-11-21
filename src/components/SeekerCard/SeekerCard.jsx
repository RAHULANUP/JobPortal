import React, { useState, useEffect } from "react";
import "./SeekerCard.css";
import axios from "axios";
import { Link } from "react-router-dom";

// Modal Component
const Modal = ({ isOpen, closeModal, jobInfo }) => {
  if (!isOpen) return null;

  return (
    <div className="modal__overlay">
      <div className="modal__content">
        {/* Modal content here */}
        <div>
        <h1>{jobInfo.title}</h1>
        <h2>{jobInfo.company}</h2>
        {/* Display other job information */}
        <p>{jobInfo.description}</p>
        <p>Location : {jobInfo.location}</p>
        <p>Qualification : {jobInfo.requirements}</p>
        <p>Job Type : {jobInfo.type}</p>
        {/* Close button */}
        <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

function SeekerCard({ search }) {
  const [jobData, setJobData] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get('https://dbms-jgsk.onrender.com/api/seeker/all-jobs/', {
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

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <h1>Job List</h1>
      {jobData.length > 0 ? (
        <ul>
          {jobData.filter((job) => job.title.toLowerCase().includes(search.toLowerCase())).map(job => (
            <div className="card__container" key={job._id}>
              <div>
                <h2>{job.title}</h2>
                <p>{job.company} - {job.location}</p>
                <p>{job.description}</p>
                <div className="additionals">
                  <div className="skills">
                    {job.skills.map((skill, index) => (
                      <p key={index}>{skill}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className='apply'>
                <button onClick={() => openModal(job)}>View more</button>
                <Link to={`/apply-job/${job._id}`}><button>Apply</button></Link>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <p>No jobs available</p>
      )}

      {/* Render Modal */}
      <Modal isOpen={isModalOpen} closeModal={closeModal} jobInfo={selectedJob} />
    </>
  )
}

export default SeekerCard;
