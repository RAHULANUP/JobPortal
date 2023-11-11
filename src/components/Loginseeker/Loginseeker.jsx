import React from "react";
import "./Loginseeker.css";

import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";


import { useNavigate } from "react-router-dom";

const supabase = createClient(
    "https://hxqflvysgxaoelzlobrm.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4cWZsdnlzZ3hhb2VsemxvYnJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2MjY3NDMsImV4cCI6MjAxNTIwMjc0M30.DYNccBQHr9LsjShK3mwb5TlzWnjTxvoXoaPPVUCnphE"
);

function Loginseeker(){
    const navigate = useNavigate();
    supabase.auth.onAuthStateChange(async (event)=>{
        if(event === "SIGNED_IN"){
            navigate("/successSeeker");
        }else{
            navigate("/loginSeeker");
        }
    })
    const customTheme = {
        default: {
          colors: {
            brand: 'rgb(65,65,236)',
            brandAccent: 'rgb(0,0,0)',
            brandButtonText: 'white',
            defaultButtonBackground: 'rgb(255,255,255)',
            defaultButtonBackgroundHover:'rgb(255,255,255)'
          },
        }
    }
    return(
        <>
            <div className='box'>
                <div>
                <Auth 
                    supabaseClient={supabase}
                    appearance={{ theme: customTheme }}
                    theme="default"
                    providers={["discord"]}
                />
                </div>
            </div>
        </>
    );
}

export default Loginseeker;