import React from "react";
import "./LoginR.css";

// function LoginR(){
//     return(
//         <>
//         <form >
//             <div className='box'>
//                 <div className='login_container'>
//                     <div className='content'>
//                         <div>
//                             <h1>RECRUITER LOGIN</h1>
//                         </div>
//                         <div>
//                             <input type="text" placeholder="Username" />
//                         </div>
//                         <div>
//                             <input type="password" placeholder="Password" />
//                         </div>
//                         <div>
//                             <button>LOGIN</button>
//                         </div>
//                         <div className="linker">
//                             <Link className="linker" to='/signupR'>CREATE AN ACCOUNT</Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </form>
//         </>
//     );
// }
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";


import { useNavigate } from "react-router-dom";

const supabase = createClient(
    "https://hxqflvysgxaoelzlobrm.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4cWZsdnlzZ3hhb2VsemxvYnJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2MjY3NDMsImV4cCI6MjAxNTIwMjc0M30.DYNccBQHr9LsjShK3mwb5TlzWnjTxvoXoaPPVUCnphE"
);

function LoginR(){
    const navigate = useNavigate();
    supabase.auth.onAuthStateChange(async (event)=>{
        if(event === "SIGNED_IN"){
            navigate("/successR");
        }else{
            navigate("/loginR");
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
            <div className="box">
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


export default LoginR;