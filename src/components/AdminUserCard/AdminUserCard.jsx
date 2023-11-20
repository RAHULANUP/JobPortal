import React, { useState, useEffect } from "react";
import "./AdminUserCard.css";
import axios from "axios";

function AdminUserCard() {
  const [userData, setUserData] = useState([]);

  const token = localStorage.getItem('token');


  useEffect(() => {
    axios.get('https://dbms-jgsk.onrender.com/api/admin/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        setUserData(response.data.data);
        console.log(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [token]);
  return (
    <>
      {userData.length > 0 ? (
        <ul>
          {userData.map(user => (
            <div className="card__container" key={user._id}>
              <div>
                <h2>{user.username}</h2>
                <p>{user.email}</p>
                <p>{user.type}</p>
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

export default AdminUserCard;