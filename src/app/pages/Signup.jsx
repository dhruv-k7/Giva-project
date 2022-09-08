import React,{useState} from "react";
import ReactDOM from "react-dom";
import InputDetails from "./components/InputDetails.jsx";

function Signup(props){
    
    return(    
        <div>
            <header>
                <h1>Sign up</h1>
            </header>
            <InputDetails addUser={props.addUser}/>
        </div>
    ) 
}

export default Signup;