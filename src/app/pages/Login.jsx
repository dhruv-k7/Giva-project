import React from "react";
import ReactDOM from "react-dom";
import LoginDetails from "./components/LoginDetails.jsx";

function Login(props){

    return(    
        <div>
            <header>
                <h1>Login</h1>
            </header>
            <LoginDetails findUser={props.findUser}/>
        </div>
    ) 
}

export default Login;