import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function LoginDetails(props){

    var [Details,setDetails] = useState({username:"",password:""});
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
        if(props.findUser(Details) === 1){
            navigate("/Post");
        }
        else{
            setDetails({
                username:"",
                password:"",
            });
            alert("User Not Found!");
        }
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input onChange={handleChange} value={Details.username} name="username" placeholder="Username" />
                <input onChange={handleChange} value={Details.password} name="password" placeholder="Password" />
                <button onClick={handleClick}>Login</button>
            </form>
        </div>
    )
}

export default LoginDetails;