import React from 'react';
import "./Postjob.css";


import {Link} from "react-router-dom";

function Postjob() {
  return (
    <>
        <div className="job__main_container">
            <div className="post__job">
                <form>
                    <h1>NEW JOB</h1>
                    <div>
                        <input type="text" placeholder='JOB TITLE' />
                    </div>
                    <div>
                        <input type="text" placeholder='COMPANY' />
                    </div>
                    <div>
                        <input type="text" placeholder='LOCATION' />
                    </div>
                    <div>
                        <input type="text" placeholder='JOB DESCRIPTION' />
                    </div>
                    <div>
                        <input type="text" placeholder='REQUIREMENTS' />
                    </div>
                    <div>
                        <input type="text" placeholder='SALARY' />
                    </div>
                    <button>CREATE JOB</button>
                    <Link to="/recruiter">goto</Link>
                </form>
            </div>
        </div>
    </>
  )
}

export default Postjob