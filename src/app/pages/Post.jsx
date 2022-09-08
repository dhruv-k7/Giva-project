import React,{useState} from "react";
import ReactDOM from "react-dom";
import InputEntry from "./components/InputEntry.jsx";
import Entry from "./components/Entry.jsx";

function Post(props){
    return(    
        <div>
            <header>
                <h1>Post</h1>
            </header>
            <InputEntry addEntry={props.addEntry}/>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {props.Table.map((item,index)=>{
                        return <Entry id={index} key={index} title={item.title} description={item.description} onDelete={props.DeleteEntry} onUpdate={props.UpdateEntry}/>
                    })}
                </tbody>
            </table>
                
        </div>
    ) 
}

export default Post;