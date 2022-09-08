import React,{useState} from "react"

function InputEntry(props){

    var [Entry,setEntry] = useState({title:"",description:""});
    function handleChange(event){
        var {name, value} = event.target;
        setEntry((prev)=>{
            return {
                ...prev,
                [name]: value 
            }
        })
    }

    function handleClick(event){
        props.addEntry(Entry);
        setEntry({
            title:"",
            description:""
        })
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input onChange={handleChange} value={Entry.title} name="title" placeholder="Title" />
                <textarea onChange={handleChange} value={Entry.description} name="description" placeholder="Description" rows="3" />
                <button onClick={handleClick}>Add</button>
            </form>
        </div>
    )
}

export default InputEntry;