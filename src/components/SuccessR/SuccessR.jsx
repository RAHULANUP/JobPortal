import React,{useState,useEffect} from "react";
import "./SuccessR.css";

import { createClient } from "@supabase/supabase-js";

import { useNavigate } from "react-router-dom";

const supabase = createClient(
    "https://hxqflvysgxaoelzlobrm.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4cWZsdnlzZ3hhb2VsemxvYnJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2MjY3NDMsImV4cCI6MjAxNTIwMjc0M30.DYNccBQHr9LsjShK3mwb5TlzWnjTxvoXoaPPVUCnphE"
);

function SuccessR(){
    const [user,setUser] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        async function getUserData(){
            await supabase.auth.getUser().then((value)=>{
                if(value.data?.user){
                    setUser(value.data.user);
                }
            })
        }
        getUserData();
    },[])

    async function signOutUser(){
        const {error} =await supabase.auth.signOut();
        navigate("/loginR");
    }

    return(
        <>
        <div className="success__container" >
            {Object.keys(user)!==0 ?
            <div className="success__user">
                <h1>welcome user</h1>
                <h2>Will be Active soon...</h2>
                <button onClick={()=>signOutUser()}>Sign OUT</button>
            </div>
            :
            <>
                <h1>USER IS NOT LOGGED IN !!</h1>
                <button onClick={()=>{navigate("/loginR")}}>GO BACK HOME</button>
            </>
            }
        </div>
        </>
    )
}

export default SuccessR;