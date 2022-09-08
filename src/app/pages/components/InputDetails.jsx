import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function InputDetails(props){

    var [Details,setDetails] = useState({username:"",password:"",confirmPassword:""});
    let navigate = useNavigate();
    function handleChange(event){
        var {name, value} = event.target;
        setDetails((prev)=>{
            return {
                ...prev,
                [name]: value 
            }
        });
    }

    function handleClick(event){
        if(Details.password === Details.confirmPassword){
            var user = {username:Details.username, password:Details.password};
            props.addUser(user);
            setDetails({
                username:"",
                password:"",
                confirmPassword:""
            });
            navigate("/login");
        }
        else{
            setDetails({
                username:"",
                password:"",
                confirmPassword:""
            });
            alert("Passwords do not match!");
        }
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input onChange={handleChange} value={Details.username} name="username" placeholder="Username" />
                <input onChange={handleChange} value={Details.password} name="password" placeholder="Password" />
                <input onChange={handleChange} value={Details.confirmPassword} name="confirmPassword" placeholder="Confirm Password" />
                <button onClick={handleClick}>Signup</button>
            </form>
        </div>
    )
}

export default InputDetails;