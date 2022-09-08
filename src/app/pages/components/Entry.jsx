import React,{useState} from "react";
import ReactDOM from "react-dom";

function Entry(props){

    function handleDelete(){
        props.onDelete(props.id);
    }
    function handleUpdate(){
        props.onUpdate(props.id);
    }
    return (
            <tr key={props.id}>
                <td>{props.id+1}</td>
                <td>{props.title}</td>
                <td>{props.description}</td>
                <td><button onClick={handleDelete}>Delete</button></td>
                <td><button onClick={handleUpdate}>Update</button></td>
            </tr>
    )
}

export default Entry;