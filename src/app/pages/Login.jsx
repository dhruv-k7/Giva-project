import React from "react";
import ReactDOM from "react-dom";
import LoginDetails from "./components/LoginDetails.jsx";
import { useNavigate } from "react-router-dom";

function Login(props){
    let navigate = useNavigate();
    function handleClick(){
        navigate("/");
    }

    return(    
        <div>
            <header>
                <h1>Login</h1>
            </header>
            <LoginDetails findUser={props.findUser}/>
            <p>Do not have an account? <button onClick={handleClick}>Sign Up</button></p>
        </div>
    ) 
}

export default Login;
