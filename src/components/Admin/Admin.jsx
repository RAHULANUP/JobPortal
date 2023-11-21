import React from 'react';
import "./Admin.css";

import AdminJobCard from "../AdminJobCard/AdminJobCard";
import AdminUserCard from '../AdminUserCard/AdminUserCard';

function Admin(){
    return(
        <>
            <div className="admin__container">
                <div className="admin">
                    <div className='admin__left'>
                        <h1>USERS</h1>
                        <AdminUserCard/>
                    </div>
                    <div className='admin__right'>
                        <h1>JOBS</h1>
                        <AdminJobCard/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Admin;