import React from 'react';
import "./Admin.css";

import AdminJobCard from "../AdminJobCard/AdminJobCard";
import AdminUserCard from '../AdminUserCard/AdminUserCard';
function Admin(){
    return(
        <>
            <div className="admin__container">
                <div className='admin__top'>
                    <h1>USERS</h1>
                    <h1>JOBS</h1>
                </div>
                <div className="admin__bottom">
                    <div className='adminb__left'>
                        <AdminUserCard/>
                    </div>
                    <div className='adminb__right'>
                        <AdminJobCard/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Admin;