import React,{useState} from 'react';
import "./Seeker.css";
import SeekerCard from "../SeekerCard/SeekerCard";
function Seeker() {
  const [search,setSearch] = useState('');
  return (
    <>
        <div className='seeker__main'>
          <div className='seeker__left'>
            <input type="text" placeholder='Search job' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <SeekerCard search={search}/>
          </div>
          <div className="seeker__right">
            <h3>JOBS YOU HAVE APPLIED TO</h3>
            
          </div>
        </div>
    </>
  )
}

export default Seeker