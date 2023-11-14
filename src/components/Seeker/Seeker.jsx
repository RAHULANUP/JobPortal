import React,{useState} from 'react';
import "./Seeker.css";
import SeekerCard from "../SeekerCard/SeekerCard";
function Seeker() {
  const [search,setSearch] = useState('');
  return (
    <>
        <div className='seeker__main'>
            <input type="text" placeholder='Search job' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <SeekerCard search={search}/>
        </div>
    </>
  )
}

export default Seeker