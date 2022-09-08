import React,{useState} from "react";
import ReactDOM from "react-dom";
import InputDetails from "./components/InputDetails.jsx";
import { useNavigate } from "react-router-dom";

function Signup(props){
    let navigate = useNavigate();
    function handleClick(){
        navigate("/login");
    }

    return(    
        <div>
            <header>
                <h1>Sign up</h1>
            </header>
            <InputDetails addUser={props.addUser}/>
            <p>Already have an account? <button onClick={handleClick}>Login</button></p>
        </div>
    ) 
}

export default Signup;
