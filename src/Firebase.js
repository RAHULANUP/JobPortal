// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { useNavigate } from "react-router-dom";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "jobportal-4e1d3.firebaseapp.com",
  projectId: "jobportal-4e1d3",
  storageBucket: "jobportal-4e1d3.appspot.com",
  messagingSenderId: "739686593002",
  appId: "1:739686593002:web:ff2ea000e5038f29b8c293"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export const signInWithGoogle = () =>{
    signInWithPopup(auth,provider)
    .then((result)=>{
        const name = result.user.displayName;
        const email = result.user.email;
        const navigate = useNavigate();
        navigate("/select");
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        
    }).catch((error)=>{
        console.log(error)
    })
}